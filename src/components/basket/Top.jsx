import React from 'react'
import Text from '../Text'
import top from '../../../assets/top.png'
import { Image, Dimensions, StyleSheet } from 'react-native'

export default function Top({ title }) {
  return <>
    <Image style={styles.top} source={top} />
    <Text style={styles.title}>{title}</Text>
  </>
}

const styles = StyleSheet.create({
  top: {
    width: '100%',
    height: 578 / 768 * Dimensions.get('screen').width
  },
  title: {
    padding: 16,
    fontSize: 16,
    color: '#FFF',
    width: '100%',
    lineHeight: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    position: 'absolute'
  }
})
