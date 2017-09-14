import React, { Component } from 'react';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import { View, StyleSheet } from "react-native";
import _ from 'underscore'
import moment from 'moment'

export default TableTrade = (content) => {
  let tradeData = []
  _.each(content.data, (a,b) => {
    let tmp = [
      moment(a.trade_date).fromNow(), 
      parseInt(a.rate).toFixed(3), 
      a.amount
    ]
    tradeData.push(tmp)
  })

  return (
    <View>
      <Table>
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