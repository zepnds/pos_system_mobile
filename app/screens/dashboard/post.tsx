import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import useStyles from '../../hooks/useStyles'
import TableComponent from '../../components/table/table'
import { SearchBar } from '@rneui/base'
import ProductList from '../../components/list/productList'

interface Data {
  id: number
  item_name: string
  quantity: number
  price: number
}

interface Column {
  title: string
  key: string
  flex: number
}

export default function PosDashboard() {
  const sx = useStyles()

  const data: Array<Data> = [
    { id: 1, item_name: 'John Doe', quantity: 29, price: 34 },
    { id: 2, item_name: 'Jane Smith', quantity: 34, price: 60 },
    { id: 3, item_name: 'Sam Johnson', quantity: 25, price: 90.0 },
  ]

  const columns: Array<Column> = [
    { title: 'Item Name', key: 'item_name', flex: 5 },
    { title: 'Quantity', key: 'quantity', flex: 1 },
    { title: 'Price', key: 'price', flex: 1 },
  ]

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
    {
      productID: '003',
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
  ]

  return (
    <>
      <View
        style={[
          sx.columnRow,
          {
            flexDirection: 'row',
          },
        ]}
      >
        <View style={{ flex: 1, backgroundColor: '##bfbebb' }}>
          <SearchBar
            placeholder="Type Here..."

            // onChangeText={updateSearch}
            // value={search}
          />
          <ProductList product={products} />
        </View>

        <View
          style={{
            flex: 1,
            backgroundColor: '#e3e3e3',
            flexDirection: 'column',
          }}
        >
          <Text style={[styles.title, { flex: 0 }]}>Checkout</Text>
          <TableComponent data={data} columns={columns} />
          <View
            style={{
              flex: 0,
              paddingBottom: 20,
              paddingLeft: 20,
              paddingRight: 20,
              paddingTop: 10,
            }}
          >
            <TouchableOpacity style={styles.button}>
              <Text style={styles.button_title}>Confirm payment</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: '900',
    textAlign: 'center',
    marginTop: 10,
  },
  button: {
    width: '100%',
    backgroundColor: '#616263',
    padding: 10,
    borderRadius: 80,
  },
  button_title: {
    color: '#ffffff',
    textTransform: 'uppercase',
    textAlign: 'center',
  },
})
