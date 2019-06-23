import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import FusionCharts from "react-native-fusioncharts";

const dataSource = {
    "chart": {
        "caption": "Room Revenue vs. Booking",
        bgColor: "#202a3b",
        baseFontColor: "#ffffff",
        valueFontColor: "#ffffff",
        captionFontSize: "20",
        baseFontSize: "16",
        legendItemFontSize: "16",
        "pYAxisName": "Revenue",
        "sYAxisName": "Booking",
        "numberPrefix": "$",
        //"sNumberSuffix": "%",
        //"sYAxisMaxValue": "25",
        "theme": "fusion"
    },
    "categories": [
        {
            "category": [
                {
                    "label": "Apr"
                },
                {
                    "label": "May"
                },
                {
                    "label": "Jun"
                },
                {
                    "label": "Jul"
                },
                {
                    "label": "Aug"
                },
                {
                    "label": "Sep"
                }
            ]
        }
    ],
    "dataset": [
        {
            "seriesname": "Room Revenue",
            "data": [
                {
                    "value": "11000"
                },
                {
                    "value": "14000"
                },
                {
                    "value": "10500"
                },
                {
                    "value": "15000"
                },
                {
                    "value": "18000"
                },
                {
                    "value": "0"
                },
            ]
        },
        {
            "seriesname": "Bookings",
            "renderAs": "line",
            "parentYAxis": "S",
            "showValues": "0",
            "data": [
                {
                    "value": "10000"
                },
                {
                    "value": "15000"
                },
                {
                    "value": "12000"
                },
                {
                    "value": "7000"
                },
                {
                    "value": "8000"
                },
                {
                    "value": "9000"
                }
            ]
        }
    ]
};

export default class ColumnAndLineDoubleYAxis3D extends Component<Props> {

    constructor(props) {
        super(props);
        this.state = {
            height: 500,
            dataFormat: "json",
            chartType: "mscolumn3dlinedy",
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