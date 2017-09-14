import React, { Component } from 'react';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import { View, StyleSheet } from "react-native";
import _ from 'underscore'
import moment from 'moment'

export default TableOrder = (content) => {
  let tradeData = []
  let header = []
  
  _.each(content.data, (a,b) => {
    const volume1 = a.display_vol1.split(" ")
    const volume2 = a.display_vol2.split(" ")
    if(b <= 0){
      header = [
        "Volume ("+volume1[1]+")",
        "Rate",
        "Volume ("+volume2[1]+")",
      ]
    }
    let tmp = [
      volume1[0], 
      parseInt(a.rate).toFixed(3), 
      volume2[0]
    ]
    tradeData.push(tmp)
  })

  return (
    <View>
      <Table>
        <Row data={header} style={styles.head} textStyle={styles.text}/>
        <Rows data={tradeData} style={styles.row} textStyle={styles.text}/>
      </Table>
    </View>
  )
}

const styles = StyleSheet.create({
  head: { height: 40, backgroundColor: '#f1f8ff' },
  text: { marginLeft: 5 },
  row: { height: 30 }
})