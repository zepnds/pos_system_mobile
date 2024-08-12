import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React, { useEffect } from 'react'
import { RootStackParamList } from '../../stacks'
import AuthLogin from '../../components/forms/auth/login'
import {
  openDatabase,
  SQLiteDatabase,
  Transaction,
} from 'react-native-sqlite-storage'
import { Product } from '../../types/products'
import CryptoJS from 'crypto-js'
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks'
import { Dispatch } from '@reduxjs/toolkit'
import { updateAuth } from '../../store/auth'

export type LoginProps = NativeStackScreenProps<RootStackParamList, 'Login'>

const hashPassword = (password: string) => {
  return CryptoJS.SHA256(password).toString()
}

interface DatabaseConfig {
  name: string
  location: 'default' | 'Library' | 'Documents'
}

const dbConfig: DatabaseConfig = { name: 'mydb.db', location: 'default' }
const db = openDatabase(dbConfig)

// const openDatabase = (config: DatabaseConfig): SQLiteDatabase => {
//   return SQLite.openDatabase({ name: config.name, location: config.location });
// };

const createTables = async () => {
  await (
    await db
  ).transaction((txn) => {
    txn.executeSql(
      `CREATE TABLE IF NOT EXISTS products (
        productID TEXT PRIMARY KEY,
        name TEXT,
        category TEXT,
        price REAL,
        quantity INTEGER,
        location TEXT,
        description TEXT,
        supplierID TEXT,
        supplierName TEXT,
        supplierContact TEXT,
        tags TEXT,
        color TEXT,
        size TEXT,
        weight TEXT
      );`,
      [],
      (sqlTxn, res) => {
        console.log('sqlTxn', sqlTxn)
        console.log('res', res)
        console.log('table created successfully')
      },
      (error) => {
        console.log('error on creating table ' + error)
      }
    )
  })
}

const createTblUsers = async () => {
  await (
    await db
  ).transaction((txn) => {
    txn.executeSql(
      `CREATE TABLE IF NOT EXISTS users (
        userId TEXT PRIMARY KEY,
        name TEXT,
        email TEXT,
        password TEXT,
        role TEXT,
        isVerified INTEGER
      );`,
      [],
      (sqlTxn, res) => {
        console.log('sqlTxn', sqlTxn)
        console.log('res', res)
        console.log('table user created successfully')
      },
      (error) => {
        console.log('error on creating table ' + error)
      }
    )
  })
}

interface User {
  name: string
  role: number
  isVerified: number
  password: string
  email: string
}

type Role = Record<number, string>

const role: Role = {
  0: 'cashier',
  1: 'admin',
}

const insertUsers = async (user: User) => {
  await (
    await db
  ).transaction(async (tx) => {
    tx.executeSql(
      `INSERT INTO users (name, email, password, role, isVerified) VALUES (?, ?, ?, ?, ?);`,
      [
        user.name,
        user.email,
        await hashPassword(user.password),
        role[user.role],
        user.isVerified,
      ],
      () => {
        console.log('user inserted successfully')
      },
      (error) => {
        console.error('Error inserting data:', error)
      }
    )
  })
}

const insertProducts = async (products: Array<Product>) => {
  await (
    await db
  ).transaction((tx: Transaction) => {
    products.forEach((product) => {
      tx.executeSql(
        `INSERT OR REPLACE INTO products (
          productID, name, category, price, quantity, location, description,
          supplierID, supplierName, supplierContact, tags, color, size, weight
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);`,
        [
          product.productID,
          product.name,
          product.category,
          product.price,
          product.stock.quantity,
          product.stock.location,
          product.description,
          product.supplier.supplierID,
          product.supplier.name,
          product.supplier.contact,
          product.tags.join(','), // Convert array to comma-separated string
          product.attributes.color,
          product.attributes.size,
          product.attributes.weight,
        ],
        () => {
          console.log(`Product ${product.productID} inserted successfully.`)
        },
        (tx: Transaction, error: { message: string }) => {
          console.error(
            `Error inserting product ${product.productID}: ${error.message}`
          )
        }
      )
    })
  })
}

const dropTable = async (tableName: string) => {
  await (
    await db
  ).transaction((tx: Transaction) => {
    tx.executeSql(
      `DROP TABLE IF EXISTS ${tableName};`,
      [],
      (tx: Transaction, results: any) => {
        console.log(`Table ${tableName} dropped successfully.`)
      },
      (tx: Transaction, error: { message: string }) => {
        console.error(`Error dropping table ${tableName}: ${error.message}`)
      }
    )
  })
}

const getProducts = async () => {
  await (
    await db
  ).transaction((txn) => {
    txn.executeSql(
      `SELECT * FROM products ORDER BY productID DESC`,
      [],
      (sqlTxn, res) => {
        console.log('products retrieved successfully')
        let len = res.rows.length

        if (len > 0) {
          let results = []
          for (let i = 0; i < len; i++) {
            let item = res.rows.item(i)
            results.push({
              id: item.productID,
              name: item.name,
              price: item.price,
              stock: item.stock,
              description: item.description,
              // supplier: {
              //   supplierID: item.supplier.supplierID,
              //   name: item.supplier.name,
              //   contact: item.supplier.contact,
              // },
              attributes: item.attributes,
            })
          }

          console.log('results', results)
        }
      },
      (error) => {
        console.log('error on getting products ' + error)
      }
    )
  })
}

const getUsers = async (dispatch: Dispatch) => {
  await (
    await db
  ).transaction((txn) => {
    txn.executeSql(
      `SELECT * FROM users`,
      [],
      (sqlTxn, res) => {
        console.log('users retrieved successfully')
        let len = res.rows.length

        console.log('res', res)

        if (len > 0) {
          let results = []
          for (let i = 0; i < len; i++) {
            let item = res.rows.item(i)
            results.push({
              password: item.password,
              name: item.name,
              email: item.email,
              role: item.role,
              // isVerified: item.isVerified,
            })
          }

          dispatch(updateAuth(results))
        }
      },
      (error) => {
        console.log('error on getting products ' + error)
      }
    )
  })
}

const products = [
  {
    productID: '001',
    name: 'Widget A',
    category: 'Widgets',
    price: 19.99,
    stock: {
      quantity: 100,
      location: 'Warehouse 1',
    },
    description: 'A high-quality widget for all your needs.',
    supplier: {
      supplierID: 'SUP123',
      name: 'Widgets Inc.',
      contact: 'contact@widgetsinc.com',
    },
    tags: ['new', 'featured'],
    attributes: {
      color: 'blue',
      size: 'medium',
      weight: '1.2 kg',
    },
  },
  {
    productID: '002',
    name: 'Gadget B',
    category: 'Gadgets',
    price: 29.99,
    stock: {
      quantity: 50,
      location: 'Warehouse 2',
    },
    description: 'An innovative gadget with cutting-edge features.',
    supplier: {
      supplierID: 'SUP456',
      name: 'Gadgets Co.',
      contact: 'support@gadgetsco.com',
    },
    tags: ['bestseller'],
    attributes: {
      color: 'black',
      size: 'large',
      weight: '0.8 kg',
    },
  },
  // Add more products as needed
]

const LoginScreen: React.FC<LoginProps> = () => {
  const auth = useAppSelector((state) => state.auth)
  console.log('user', auth.user)
  const dispatch = useAppDispatch()
  useEffect(() => {
    // createTables()
    // createTblUsers()
    // inserData('system')
    // getProducts()
    // insertUsers({
    //   name: 'Joseph Aguilar',
    //   email: 'sojda018@gmail.com',
    //   role: 0,
    //   password: 'SamplePassword',
    //   isVerified: 0,
    // })
    // insertProducts(products)
    // dropTable('users')
    getUsers(dispatch)
  }, [])

  return <AuthLogin />
}

export default LoginScreen
