import React from 'react'
import Text from '../../components/Text'
import Top from '../../components/basket/Top'
import Item from '../../components/basket/Item'
import Details from '../../components/basket/Details'
import { View, StyleSheet, ScrollView, FlatList } from 'react-native'

export default function Basket({ top, details, items }) {
  return <>
    <FlatList
      data={items.list}
      renderItem={Item}
      keyExtractor={(item, index) => index.toString()}
      ListHeaderComponent={() => {
        return <>
          <Top {...top} />
          <View style={styles.basket}>
            <Details {...details} />
            <Text style={styles.title}>{items.title}</Text>
          </View>
        </>
      }}
    />
  </>
}

const styles = StyleSheet.create({
  basket: {
    paddingVertical: 8,
    paddingHorizontal: 16
  },
  title: {
    fontSize: 20,
    marginTop: 32,
    lineHeight: 32,
    marginBottom: 8,
    color: '#464646',
    fontWeight: 'bold',
  }
})
