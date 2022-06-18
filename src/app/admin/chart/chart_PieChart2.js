import React, { Component } from 'react';
import { PieChart, Pie, Tooltip } from 'recharts';
const data02 = [
    { name: 'Nam', value: 78 },
    { name: 'Nữ', value: 12 },
];


class PChart2 extends Component {

    render() {

        return (
            <PieChart style={{ marginTop: '4rem' }} width={370} height={230}>
                <Pie
                    dataKey="value"
                    isAnimationActive={true}
                    data={data02}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    fill="#0088FE"

                />
                <Tooltip />
            </PieChart>

        );
    }
}
export default PChart2;


