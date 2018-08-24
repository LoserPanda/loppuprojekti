import React from 'react';
import {XYPlot, XAxis, YAxis, VerticalGridLines, HorizontalGridLines, LineSeries} from 'react-vis';

const Chart = (props) => {
    const dataArr = props.data.map((d) => {
        return {
            x: d.year + '/' + d.quarter,
            y: parseFloat(d.count / 1000)
        }
    });
    return (
        <XYPlot
            xType="ordinal"
            width={1000}
            height={500}>
            <VerticalGridLines/>
            <HorizontalGridLines/>
            <XAxis title="Aikaväli"/>
            <YAxis title="Lukumäärä"/>
            <LineSeries
                data={dataArr}
                style={{stroke: 'purple', strokeWidth: 2}}/>
        </XYPlot>
    );
}

export default Chart;
