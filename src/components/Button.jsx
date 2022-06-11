import React from 'react'
import Text from './Text'
import { TouchableOpacity, StyleSheet } from 'react-native'

export default function Button({ title }) {
  return <>
    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  </>
}

const styles = StyleSheet.create({
  button: {
    marginTop: 16,
    borderRadius: 6,
    paddingVertical: 16,
    backgroundColor: '#2A9F85'
  },
  buttonText: {
    fontSize: 16,
    lineHeight: 26,
    color: '#FFFFFF',
    fontWeight: 'bold',
    textAlign: 'center',
  }
})
