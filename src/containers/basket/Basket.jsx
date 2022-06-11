import React from 'react'
import Top from '../../components/basket/Top'
import { View, StyleSheet } from 'react-native'
import Details from '../../components/basket/Details'

export default function Basket({ top, details }) {
  return <>
    <Top {...top} />
    <View style={styles.basket}>
      <Details {...details} />
    </View>
  </>
}

const styles = StyleSheet.create({
  basket: {
    paddingVertical: 8,
    paddingHorizontal: 16
  }
})
