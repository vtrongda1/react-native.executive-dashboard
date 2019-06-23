import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import FusionCharts from "react-native-fusioncharts";

const dataSource = {
    chart: {
      caption: "Overall Performance",
      bgColor: "#202a3b",
      baseFontColor: "#ffffff",
      valueFontColor: "#ffffff",
      width: "95%",
      height: "95%",
      captionFontSize: "20",
      baseFontSize: "16",
      legendItemFontSize: "16",
      numberprefix: "$",
      numbersuffix: "M",
      showvalues: "0",
      showsum: "1",
      legendbgalpha: "0",
      plottooltext:
        "Type: $label{br}<b>Location: $seriesName</b>{br}Sales: $dataValue</div>",
      stack100percent: "1",
      theme: "fusion"
    },
    categories: [
      {
        category: [
          {
            label: "RNs"
          },
          {
            label: "RM Revs"
          },
          {
            label: "OCC"
          },
          {
            label: "ARR"
          },
          {
            label: "RevPAR"
          }
        ]
      }
    ],
    dataset: [
      {
        seriesname: "Actual",
        data: [
          {
            value: "4.5"
          },
          {
            value: "6"
          },
          {
            value: "5"
          },
          {
            value: "7"
          },
          {
            value: "8"
          },
        ]
      },
      {
        seriesname: "Target",
        data: [
          {
            value: "2"
          },
          {
            value: "0"
          },
          {
            value: "3"
          },
          {
            value: "3"
          },
          {
            value: "2"
          },
        ]
      }
    ]
  };

export default class StackChart3D extends Component<Props> {

    constructor(props) {
        super(props);
        this.state = {
            height: 500,
            dataFormat: "json",
            chartType: "stackedcolumn3d",
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
          <View>
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