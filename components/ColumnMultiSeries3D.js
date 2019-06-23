import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import FusionCharts from "react-native-fusioncharts";

const dataSource = {
    chart: {
        caption: "Room Nights vs. Target and LY",
        bgColor: "#202a3b",
        baseFontColor: "#ffffff",
        valueFontColor: "#ffffff",
        captionFontSize: "20",
        baseFontSize: "16",
        legendItemFontSize: "16",
        xaxisname: "Months",
        yaxisname: "Room Nights",
        formatnumberscale: "1",
        plottooltext:
          "<b>$dataValue</b> apps were available on <b>$seriesName</b> in $label",
        theme: "fusion"
      },
      categories: [
        {
          category: [
            {
              label: "Apr"
            },
            {
              label: "May"
            },
            {
              label: "Jun"
            },
            {
              label: "Jul"
            },
            {
              label: "Aug"
            },
            {
              label: "Sep"
            }
          ]
        }
      ],
      dataset: [
        {
          seriesname: "Actual",
          data: [
            {
              value: "900000"
            },
            {
              value: "700000"
            },
            {
              value: "680000"
            },
            {
              value: "600000"
            },
            {
              value: "0"
            },
            {
              value: "0"
            }
          ]
        },
        {
          seriesname: "Target",
          data: [
            {
              value: "1000000"
            },
            {
              value: "800000"
            },
            {
              value: "750000"
            },
            {
              value: "900000"
            },
            {
              value: "1400000"
            },
            {
              value: "700000"
            },
            {
              value: "800000"
            }
          ]
        },
        {
          seriesname: "LY",
          data: [
            {
              value: "500000"
            },
            {
              value: "900000"
            },
            {
              value: "1000000"
            },
            {
              value: "1200000"
            },
            {
              value: "900000"
            },
            {
              value: "600000"
            },
            {
              value: "500000"
            }
          ]
        }
      ]
};

export default class ColumnMultiSeries3D extends Component<Props> {

    constructor(props) {
        super(props);
        this.state = {
            height: 600,
            dataFormat: "json",
            chartType: "mscolumn3d",
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