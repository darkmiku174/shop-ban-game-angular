import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import BChart from './chart/chart_BarChart';
import PChart from './chart/chart_PieChart';
import PChart2 from './chart/chart_PieChart2';
import { Table, Container, Row, Tab, Tabs } from 'react-bootstrap';
import axios from 'axios';

class ReportManagement extends Component {
    constructor(props) {
        super(props);
        this.state = {
            report: [],
            games: []
        }
    }

    componentDidMount() {
        axios({
            method: 'GET',
            url: 'http://localhost:5000/api/games',
            data: null
        }).then(res => {
            this.setState({
                games: res.data
            })
        }).catch(err => {
            console.log(err);
        })
        axios({
            method: 'GET',
            url: 'http://localhost:5000/api/orders/report',
            data: null
        }).then(res => {
            this.setState({
                report: res.data
            })
        }).catch(err => {
            console.log(err);
        })

    }

    onShowTop10(games, report) {
        var result = null;
        var temp = []
        if (games.length > 0 && report.length > 0) {
            games.map((g) => {
                temp.push({
                    product: g.name,
                    count: 0
                })
            })
            report.map((r) => {
                temp.map((g) => {
                    if (r.product === g.product) {
                        g.count += r.count
                    }
                })
            })
        }
        temp.sort((a, b) => b.count - a.count)
        result = temp.map((t, index) => {
            if (index < 10) {
                return (
                    <tr>
                        <td>{t.product}</td>
                        <td>{t.count}</td>
                    </tr>
                )
            }
        })
        return result
    }

    render() {
        var { games, report } = this.state
        return (
            <>
                <div style={{ backgroundColor: '#F4F6F9', height: '56px', padding: '0.5rem', paddingLeft: '5rem' }}>
                    <p style={{ fontSize: '23px', fontFamily: 'Roboto' }}>Báo cáo doanh số</p>
                </div>
                <Container style={{ marginTop: '1rem' }}>
                    <Row style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                        <div style={{ border: '2px solid #E6E6E6', padding: '1rem', borderRadius: '6px', width: '39rem' }}  >
                            <Tabs defaultActiveKey="year" className="mb-3">
                                <Tab eventKey="year" title="Doanh số năm">
                                    <BChart />
                                </Tab>
                            </Tabs>
                        </div>
                        <div style={{ border: '2px solid #E6E6E6', padding: '1rem', borderRadius: '6px', width: '25rem' }} >
                            <Tabs defaultActiveKey="year" >
                                <Tab style={{}} eventKey="year" title="Độ tuổi truy cập">
                                    <PChart />
                                </Tab>
                                <Tab style={{}} eventKey="month" title="Giới tính">
                                    <PChart2 />
                                </Tab>
                            </Tabs>
                        </div>
                    </Row>
                    <Row style={{ marginTop: '1rem', padding: '1.5rem' }}>
                        <h5>Top 10 game bán chạy</h5>
                        <Table bordered hover responsive="sm">
                            <thead>
                                <tr>
                                    <th>Tên game</th>
                                    <th>Số lượng đã bán</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.onShowTop10(games, report)}
                            </tbody>
                        </Table>
                    </Row>
                </Container>
            </>
        )
    }
}
export default ReportManagement;