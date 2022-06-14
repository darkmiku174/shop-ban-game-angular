import React, { Component } from 'react';
import { Container, Tab, Tabs, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Order from './order/order';
import axios from "axios";
import { Card } from 'react-bootstrap';
import ReactPaginate from 'react-paginate';

class OrderManagement extends Component {
    constructor(props) {
        super(props);
        this.state = {
            order: {},
            check: "tatca",
            orders: [],
            offset: 0,
            orgtableData: [],
            perPage: 10,
            currentPage: 0
        }
    }
    handlePageClick = (e) => {
        const selectedPage = e.selected;
        const offset = selectedPage * this.state.perPage;

        this.setState({
            currentPage: selectedPage,
            offset: offset
        }, () => {
            this.loadMoreData()
        });

    };

    loadMoreData() {
        const data = this.state.orgtableData;

        const slice = data.slice(this.state.offset, this.state.offset + this.state.perPage)
        this.setState({
            pageCount: Math.ceil(data.length / this.state.perPage),
            orders: slice
        })

    }


    onChange = (e) => {
        if (e === "tatca") {
            axios({
                method: 'GET',
                url: 'http://localhost:5000/api/orders',
                data: null
            }).then(res => {
                var tdata = res.data;
                var slice = tdata.slice(this.state.offset, this.state.offset + this.state.perPage)
                this.setState({
                    pageCount: Math.ceil(tdata.length / this.state.perPage),
                    orgtableData: tdata,
                    orders: slice,
                    check: "tatca"
                })
            }).catch(err => {
                console.log(err);
            })
        }
        if (e === "dahuy") {
            axios({
                method: 'GET',
                url: 'http://localhost:5000/api/orders/type/cancelled',
                data: null
            }).then(res => {
                var tdata = res.data;
                var slice = tdata.slice(this.state.offset, this.state.offset + this.state.perPage)
                this.setState({
                    pageCount: Math.ceil(tdata.length / this.state.perPage),
                    orgtableData: tdata,
                    orders: slice,
                    check: "dahuy"
                })

            }).catch(err => {
                console.log(err);
            })
        }
        if (e === "dathanhtoan") {
            axios({
                method: 'GET',
                url: 'http://localhost:5000/api/orders/type/succeeded',
                data: null
            }).then(res => {
                var tdata = res.data;
                var slice = tdata.slice(this.state.offset, this.state.offset + this.state.perPage)
                this.setState({
                    pageCount: Math.ceil(tdata.length / this.state.perPage),
                    orgtableData: tdata,
                    orders: slice,
                    check: "dathanhtoan"
                })
            }).catch(err => {
                console.log(err);
            })
        }

    }

    render() {
        var { check, orders } = this.state
        return (
            <div>
                <div style={{ backgroundColor: '#F4F6F9', height: '56px', padding: '0.5rem', paddingLeft: '5rem' }}>
                    <p style={{ fontSize: '23px', fontFamily: 'Roboto' }}>Quản lý Hoá đơn</p>
                </div>
                <Card style={{ padding: '1rem', marginLeft: '1rem', display: 'flex', flexDirection: 'column', border: 'none' }}>
                    <Container>
                        <Tabs defaultActiveKey={check} id="uncontrolled-tab-example" className="mb-3" onSelect={this.onChange}>
                            <Tab eventKey="tatca" title="Tất cả">
                                {check === "tatca" && orders.length > 0 ? <Order key={0} check={check} orders={orders} /> : null}
                            </Tab>
                            <Tab eventKey="dahuy" title="Đã hủy" >
                                {check === "dahuy" && orders.length > 0 ? <Order key={2} check={check} orders={orders} /> : null}
                            </Tab>
                            <Tab eventKey="dathanhtoan" title="Đã thanh toán" >
                                {check === "dathanhtoan" && orders.length > 0 ? <Order key={3} check={check} orders={orders} /> : null}
                            </Tab>
                        </Tabs>
                    </Container>
                </Card>
                <Row style={{ marginTop: '1rem', float: 'right' }}>
                    <Row style={{ marginTop: '1rem', float: 'right' }}>
                        <ReactPaginate
                            className='phantrang'
                            previousLabel={"prev"}
                            nextLabel={"next"}
                            breakLabel={"..."}
                            breakClassName={"break-me"}
                            pageCount={this.state.pageCount}
                            marginPagesDisplayed={2}
                            pageRangeDisplayed={5}
                            onPageChange={this.handlePageClick}
                            containerClassName={"pagination"}
                            subContainerClassName={"pages pagination"}
                            activeClassName={"active"}
                            disable={true} />
                    </Row>
                </Row>
            </div>
        )
    }
}
export default OrderManagement;



