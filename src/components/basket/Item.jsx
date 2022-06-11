import React from 'react'
import Text from '../Text'
import { View, Image, StyleSheet } from 'react-native'

export default function Item({ item: { name, image } }) {
  return <View style={styles.item}>
    <Image style={styles.image} source={image} />
    <Text style={styles.name}>{name}</Text>
  </View>
}

const styles = StyleSheet.create({
  image: {
    width: 46,
    height: 46,
    borderRadius: 6
  },
  name: {
    fontSize: 16,
    lineHeight: 26,
    marginLeft: 12,
    color: '#464646'
  },
  item: {
    padding: 16,
    alignItems: 'center',
    flexDirection: 'row',
    paddingVertical: 16,
    marginHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ECECEC'
  },
})
