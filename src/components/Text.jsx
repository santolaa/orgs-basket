import React from 'react'
import { Text as RNText, StyleSheet } from 'react-native'

export default function Text({ children, style }) {
  let weight = styles.regularText

  if (style?.fontWeight === 'bold') {
    weight = styles.boldText
  }

  return <RNText style={[style, weight]}>{children}</RNText>
}

const styles = StyleSheet.create({
  boldText: {
    fontWeight: 'normal',
    fontFamily: 'MontserratBold'
  },
  regularText: {
    fontWeight: 'normal',
    fontFamily: 'MontserratRegular'
  }
})
