import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import FusionCharts from "react-native-fusioncharts";

const dataSource = {
    chart: {
        caption: "Room Revenue by Market Segment",
        bgColor: "#202a3b",
        baseFontColor: "#ffffff",
        valueFontColor: "#ffffff",
        captionFontSize: "20",
        baseFontSize: "16",
        legendItemFontSize: "16",
        showLabels: "0",
        showValues: "1",
        showPercentValues: "1",
        showpercentintooltip: "0",
        numberprefix: "$",
        enablemultislicing: "1",
        theme: "fusion"
      },
      data: [
        {
          label: "Group",
          value: "300000"
        },
        {
          label: "Retail",
          value: "230000"
        },
        {
          label: "Whosale",
          value: "180000"
        },
        {
          label: "Discount",
          value: "270000"
        },
        {
          label: "Others",
          value: "90000"
        }
      ]
};

export default class PieChart3D extends Component<Props> {

    constructor(props) {
        super(props);
        this.state = {
            height: 500,
            dataFormat: "json",
            chartType: "pie3d",
            dataLoadStartMessage: "Please wait, chart is loading the data....",
            dataSource: dataSource
        }

        this.libraryPath = Platform.select({
            // Specify fusioncharts.html file location
            android: {
              uri: "file:///android_asset/fusioncharts.html"
            },
            ios: require("../assets/fusioncharts.html")
          });
    }

    render() {
        return (
          <View style={{flex: 1}}>
            <FusionCharts style={{backgroundColor: '#202a3b'}}
                type={this.state.chartType}
                height={this.state.height}
                dataFormat={this.state.dataFormat}
                dataSource={this.state.dataSource}
                libraryPath={this.libraryPath} // set the libraryPath property
            />
          </View>
        );
      }

}