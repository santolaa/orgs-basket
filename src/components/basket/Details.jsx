import React from 'react'
import Text from '../Text'
import Button from '../Button'
import { View, Image, StyleSheet } from 'react-native'

export default function Details({ basketName, farmLogo, farmName, description, price, button }) {
  return <>
    <Text style={styles.basketName}>{basketName}</Text>
    <View style={styles.farm}>
      <Image style={styles.farmLogo} source={farmLogo} />
      <Text style={styles.farmName}>{farmName}</Text>
    </View>
    <Text style={styles.description}>{description}</Text>
    <Text style={styles.price}>{price}</Text>
    <Button title={button} />
  </>
}

const styles = StyleSheet.create({
  farm: {
    paddingVertical: 12,
    flexDirection: 'row'
  },
  farmLogo: {
    width: 32,
    height: 32
  },
  farmName: {
    fontSize: 16,
    marginLeft: 12,
    lineHeight: 26
  },
  description: {
    fontSize: 16,
    lineHeight: 26,
    color: '#A3A3A3'
  },
  basketName: {
    fontSize: 26,
    lineHeight: 42,
    color: '#464646',
    fontWeight: 'bold'
  },
  price: {
    marginTop: 8,
    fontSize: 26,
    lineHeight: 42,
    color: '#2A9F85',
    fontWeight: 'bold'
  }
})
