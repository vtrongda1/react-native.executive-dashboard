/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView} from 'react-native';
import MapChart from "./components/MapChart";
import ColumnAndLineDoubleYAxis3D from "./components/ColumAndLineDoubleYAxis3D";
import ColumnMultiSeries3D from "./components/ColumnMultiSeries3D";
import BarChart3D from "./components/BarChart3D";
import PieChart3D from "./components/PieChart3D";
import StackChart3D from "./components/StackChart3D";

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};

export default class App extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  render() {
    return (
      <View style={styles.container}>
          <Text style={styles.heading}>
            Executive Dashboard
          </Text>
        <ScrollView style={styles.chartContainer}>
          <View style={{flexDirection: "row"}}>
            <View style={{flex: 1, flexDirection: "column", padding: 5}}>
              <View style={{flex: 1, paddingBottom: 5}}>
                <StackChart3D></StackChart3D>
              </View>
              <View style={{flex: 1, }}>
                <PieChart3D></PieChart3D>
              </View>
            </View>
            <View style={{flex: 1, padding: 5, paddingLeft: 0}}>
              <MapChart></MapChart>
            </View>
          </View>
          <View style={{flexDirection: "row", padding: 5, paddingTop: 0}}>
            <View style={{flex: 1, paddingRight: 5 }}>
              <BarChart3D></BarChart3D>
            </View>
            <View style={{flex: 1}}>
              <ColumnAndLineDoubleYAxis3D></ColumnAndLineDoubleYAxis3D>
            </View>
          </View>
          <View style={{padding: 5, paddingTop: 0}}>
            <ColumnMultiSeries3D></ColumnMultiSeries3D>
          </View>
        </ScrollView>
      </View>
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    //padding: 10,
    flexDirection: "column",
    backgroundColor: "#131924"
  },
  heading: {
    fontSize: 24,
    textAlign: "left",
    color: "#fff",
    padding: 10,
    backgroundColor: "#131924"
  },
  chartContainer: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#131924"
  },
  chartItem: {
    backgroundColor: "#202a3b"
  }
});
