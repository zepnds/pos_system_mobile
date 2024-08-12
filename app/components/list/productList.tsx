import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

interface Stock {
  quantity: number
  location: string
}

interface Supplier {
  supplierID: string
  name: string
  contact: string
}

interface Attributes {
  color: string
  size: string
  weight: string
}

interface Product {
  productID: string
  name: string
  category: string
  price: number
  stock: Stock
  description: string
  supplier: Supplier
  tags: Array<string>
  attributes: Attributes
}

export default function ProductList({ product }: { product: Array<Product> }) {
  return (
    <View style={styles.container}>
      {product.map((prod) => (
        <TouchableOpacity style={styles.subcontainer} key={prod.productID}>
          <Text style={styles.title}>{prod.name}</Text>
          <Text style={styles.title}>${prod.price}</Text>
          <Text style={styles.title}>Stock {prod.stock.quantity}</Text>
        </TouchableOpacity>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  subcontainer: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 10,
    marginLeft: 10,
    marginTop: 10,

    backgroundColor: 'grey',
    height: 80,
    width: 80,
  },
  title: {
    textAlign: 'center',
    color: 'whitesmoke',
    paddingTop: 3,
  },
})
