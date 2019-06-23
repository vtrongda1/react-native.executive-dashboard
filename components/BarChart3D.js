import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import FusionCharts from "react-native-fusioncharts";

const dataSource = {
    chart: {
        caption: "Revenue by Guest Source",
        bgColor: "#202a3b",
        baseFontColor: "#ffffff",
        valueFontColor: "#ffffff",
        captionFontSize: "20",
        baseFontSize: "16",
        legendItemFontSize: "16",
        yaxisname: "Revenue",
        showvalues: "1",
        numberprefix: "$",
        theme: "fusion"
      },
      data: [
        {
          label: "Vietnam",
          value: "101000"
        },
        {
          label: "China",
          value: "92000"
        },
        {
          label: "Japan",
          value: "82600"
        },
        {
            label: "Korea",
            value: "50000"
        },
        {
            label: "Rusia",
            value: "67000"
        },
        {
          label: "US",
          value: "70400"
        },
        {
            label: "AU/NZ",
            value: "30000"
        },
        {
          label: "Others",
          value: "68152"
        }
      ]
};

export default class BarChart3D extends Component<Props> {

    constructor(props) {
        super(props);
        this.state = {
            height: 500,
            dataFormat: "json",
            chartType: "bar3d",
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