import React, { Component } from 'react';
import { View, StyleSheet } from "react-native";
import Chart from 'react-native-chart';

export default ViewChart = (content) => {
  const data = [[[0, 1],[1, 3],[3, 7],[4, 9]]];
  return (
    <View style={styles.container}>
      <Chart
        style={styles.chart}
        data={data}
        verticalGridStep={5}
        type="line"
        showDataPoint={true}
      />
    </View>
  )

}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'white',
	},
	chart: {
		width: 200,
		height: 200,
	},
});