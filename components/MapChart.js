import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView} from 'react-native';
import FusionCharts from "react-native-fusioncharts";

// const dataSource = {
//     chart: {
//       caption: "Vinpearl Overall Perforamnce",
//       showentitytooltip: "0",
//       showentityhovereffect: "0",
//       showmarkerlabels: "0",
//       markertooltext: "$label",
//       theme: "fusion",
//       legendcaption: "Number of cigarettes smoked per adult per day",
//       legendposition: "Bottom",
//       showLegend: "0"
//     },
//     markers: {
//       items: [
//         {
//           id: "awsg",
//           shapeid: "we-anchor",
//           x: "150.14",
//           y: "150.9",
//           label: "AWS GOVCLOUD",
//           value: "2",
//           tooltext: "$label {br} Number of Availibility Zones: $value",
//           labelpos: "left"
//         },
//       ],
//       shapes: [
//         {
//           id: "we-anchor",
//           type: "image",
//           url:
//             "https://cdn2.iconfinder.com/data/icons/gpsmapicons/orange/gpsmapicons02.png",
//           xscale: "25",
//           yscale: "20",
//           labelpadding: "5"
//         }
//       ]
//     }
//   };

const dataSource = {
    chart: {
      caption: "Vinpearl Overall",
      captionFontSize: "20",
      theme: "fusion",
      bgColor: "#202a3b",
      baseFontColor: "#ffffff",
      valueFontColor: "#ffffff",
      legendPosition: "bottom",
      legendItemFontSize: "16",
      tooltipbgcolor: "#FFFFFF",
      tooltipbordercolor: "#CCCCCC",
      showentitytooltip: "0",
      showentityhovereffect: "0",
      showlabels: "0",
      entitytooltext:
        "<div style='font-size:14px; text-align:center; padding: 2px 4px 2px 4px; color:black;'>$lName</div><div style='font-size:12px; color:black;'>Poverty Rate: <b>$value%</b></div>",
      entityfillhovercolor: "#FFF9C4",
      nullentitycolor: "#ECE9D3"
    },
    colorrange: {
      gradient: "0",
      minvalue: "0",
      color: [
        {
          maxvalue: "1",
          displayvalue: "Phú Quốc",
          code: "#a442f4"
        },
        {
          maxvalue: "2",
          displayvalue: "LUX + MN",
          code: "#ffff4c"
        },
        {
          maxvalue: "3",
          displayvalue: "Nha Trang",
          code: "#2291ff"
        },
        {
          maxvalue: "4",
          displayvalue: "ĐN-HA-HU",
          code: "#5cff21"
        },
        {
          maxvalue: "5",
          displayvalue: "Miền Bắc",
          code: "#ff9320"
        }
      ]
    },
    data: [
      {
        id: "VN.KG",
        value: "0",
        showtooltip: "1",
        alpha: "100",
        fontbold: "1"
      },
      {
        id: "VN.CN",
        value: "1",
        showtooltip: "1",
        alpha: "100",
        fontbold: "1"
      },
      {
        id: "VN.HC",
        value: "1",
        showtooltip: "1",
        alpha: "100",
        fontbold: "1"
      },
      {
        id: "VN.TN",
        value: "1",
        showtooltip: "1",
        alpha: "100",
        fontbold: "1"
      },
      {
        id: "VN.KH",
        value: "2",
        showtooltip: "1",
        alpha: "100",
        fontbold: "1"
      },
      {
        id: "VN.DA",
        value: "3",
        showtooltip: "1",
        alpha: "100",
        fontbold: "1"
      },
      {
        id: "VN.QM",
        value: "3",
        showtooltip: "1",
        alpha: "100",
        fontbold: "1"
      },
      {
        id: "VN.TT",
        value: "3",
        showtooltip: "1",
        alpha: "100",
        fontbold: "1"
      },
      {
        id: "VN.QB",
        value: "3",
        showtooltip: "1",
        alpha: "100",
        fontbold: "1"
      },
      {
        id: "VN.HT",
        value: "4",
        showtooltip: "1",
        alpha: "100",
        fontbold: "1"
      },
      {
        id: "VN.HP",
        value: "4",
        showtooltip: "1",
        alpha: "100",
        fontbold: "1"
      },
      {
        id: "VN.TH",
        value: "4",
        showtooltip: "1",
        alpha: "100",
        fontbold: "1"
      },
      {
        id: "VN.NA",
        value: "4",
        showtooltip: "1",
        alpha: "100",
        fontbold: "1"
      },
      {
        id: "VN.LS",
        value: "4",
        showtooltip: "1",
        alpha: "100",
        fontbold: "1"
      },
      {
        id: "VN.QN",
        value: "4",
        showtooltip: "1",
        alpha: "100",
        fontbold: "1"
      },
      {
        id: "VN.HM",
        value: "4",
        showtooltip: "1",
        alpha: "100",
        fontbold: "1"
      },
    ],
    markers: {
      items: [
        {
          id: "awsg",
          shapeid: "we-anchor",
          x: "150.14",
          y: "100.9",
          label: "AWS GOVCLOUD",
          value: "2",
          tooltext: "$label {br} Number of Availibility Zones: $value",
          labelpos: "left"
        },
      ],
      shapes: [
        {
          id: "we-anchor",
          type: "image",
          url:
        "https://cdn2.iconfinder.com/data/icons/gpsmapicons/orange/gpsmapicons02.png",
          xscale: "25",
          yscale: "20",
          labelpadding: "5"
        }
      ]
    },
    "annotations": {
          "origw": "400",
          "origh": "300",
          "autoscale": "1",
          "groups": [{
              "items": [{
                  "id": "dyn-labelBG",
                  "type": "rectangle",
                  "radius": "3",
                  "x": "$canvasStartX + 40",
                  "y": "$canvasStartY + 250",
                  "tox": "$canvasStartX + 160",
                  "toy": "$canvasStartY + 320",
                  "color": "#0075c2",
                  "alpha": "70"
              }, {
                  "id": "dyn-label",
                  "type": "text",
                  "text": "RNs: 119,507",
                  "fillcolor": "#ffffff",
                  "fontsize": "16",
                  "x": "$canvasStartX + 78",
                  "y": "$canvasStartY + 260"
              },
              {
                  "id": "dyn-label",
                  "type": "text",
                  "text": "RM Rev: 30,200,000",
                  "fillcolor": "#ffffff",
                  "fontsize": "16",
                  "x": "$canvasStartX + 90",
                  "y": "$canvasStartY + 275"
              },
              {
                  "id": "dyn-label",
                  "type": "text",
                  "text": "OCC: 75%",
                  "fillcolor": "#ffffff",
                  "fontsize": "16",
                 "x": "$canvasStartX + 71",
                  "y": "$canvasStartY + 290"
              },
              {
                  "id": "dyn-label",
                  "type": "text",
                  "text": "ARR: 5,600",
                  "fillcolor": "#ffffff",
                  "fontsize": "16",
                  "x": "$canvasStartX + 72",
                  "y": "$canvasStartY + 305"
              }]
          }]
      }
  };

export default class MapChart extends Component<Props> {

    constructor(props) {
        super(props);
        this.state = {
            height: 1000,
            dataFormat: "json",
            chartType: "maps/vietnam",
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
          <View style={{flexDirection: 1}}>
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