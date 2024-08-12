// components/ResponsiveTable.js
import React from 'react'
import { View, Text, FlatList, StyleSheet, Dimensions } from 'react-native'

const { width } = Dimensions.get('window')

const TableComponent = ({ columns, data }: { columns: any; data: any }) => {
  const renderHeader = () => (
    <View style={styles.headerRow}>
      {columns.map((col: any, index: number) => (
        <View key={index} style={[styles.cell, { flex: col.flex }]}>
          <Text style={styles.headerText}>{col.title}</Text>
        </View>
      ))}
    </View>
  )

  const renderRow = ({ item }: { item: any }) => (
    <View style={styles.row}>
      {columns.map((col: any, index: number) => (
        <View key={index} style={[styles.cell, { flex: col.flex }]}>
          <Text style={styles.cellText}>{item[col.key]}</Text>
        </View>
      ))}
    </View>
  )

  return (
    <View style={styles.container}>
      {renderHeader()}
      <FlatList
        data={data}
        renderItem={renderRow}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 8,
    overflow: 'hidden',
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    flex: 1,
  },
  headerRow: {
    flexDirection: 'row',
    backgroundColor: '#f4f4f4',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  row: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  cell: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  cellText: {
    fontSize: 14,
  },
})

export default TableComponent
