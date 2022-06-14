import React, { Component } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
    {
        name: 'Page A',
        code: 4000,
        key: 2400,
        amt: 2400,
    },
    {
        name: 'Page B',
        code: 3000,
        key: 1398,
        amt: 2210,
    },
    {
        name: 'Page C',
        code: 2000,
        key: 9800,
        amt: 2290,
    },
    {
        name: 'Page D',
        code: 2780,
        key: 3908,
        amt: 2000,
    },
    {
        name: 'Page E',
        code: 1890,
        key: 4800,
        amt: 2181,
    },
    {
        name: 'Page F',
        code: 2390,
        key: 3800,
        amt: 2500,
    },
    {
        name: 'Page G',
        code: 3490,
        key: 4300,
        amt: 2100,
    },
];

class BChart extends Component {
    render() {
        return (
            
                <BarChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="code" fill="#8884d8" />
                    <Bar dataKey="key" fill="#82ca9d" />
                </BarChart>
        );
    }
}
export default BChart;


