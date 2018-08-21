import React, {Component} from 'react';
import './App.css';
import '../node_modules/react-vis/dist/style.css';
import {XYPlot, LineSeries, VerticalBarSeries, MarkSeries} from 'react-vis';

class App extends Component {
    render() {
        const series1 = [
            {x: 0, y: 6},
            {x: 1, y: 2},
            {x: 2, y: 1},
            {x: 3, y: 9},
            {x: 4, y: 3},
            {x: 5, y: 4},
            {x: 6, y: 7},
            {x: 7, y: 9},
            {x: 8, y: 9},
            {x: 9, y: 3}
        ];

        const series2 = [
            {x: 0, y: 12},
            {x: 1, y: 30},
            {x: 2, y: 12},
            {x: 3, y: 9},
            {x: 4, y: 3},
            {x: 5, y: 4},
            {x: 6, y: 9},
            {x: 7, y: 19},
            {x: 8, y: 19},
            {x: 9, y: 11}
        ];
        const series3 = [
            {x: 0, y: 3},
            {x: 1, y: 6},
            {x: 2, y: 9},
            {x: 3, y: 12},
            {x: 4, y: 15},
            {x: 5, y: 18},
            {x: 6, y: 21},
            {x: 7, y: 24},
            {x: 8, y: 27},
            {x: 9, y: 30}
        ];


        return (
            <div className="App">
                <XYPlot height={200} width={300}>
                    <VerticalBarSeries data={series1}/>
                    <VerticalBarSeries data={series2}/>
                    <VerticalBarSeries data={series3}/>
                </XYPlot>
                <XYPlot height={200} width={300}>
                    <LineSeries data={series1}/>
                    <LineSeries data={series2}/>
                    <LineSeries data={series3}/>
                </XYPlot>
                <XYPlot height={200} width={300}>
                    <MarkSeries data={series1}/>
                    <MarkSeries data={series2}/>
                    <MarkSeries data={series3}/>
                </XYPlot>
            </div>
        );
    }
}

export default App;
