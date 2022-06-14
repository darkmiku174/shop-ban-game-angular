import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import { FaEdit } from 'react-icons/fa';
import { Button, Table, Container, Card, Row } from 'react-bootstrap';
import axios from 'axios';
import { Link } from 'react-router-dom'
import ReactPaginate from 'react-paginate';
class VoucherManagement extends Component {


    constructor(props) {
        super(props);
        this.state = {
            vochers: [],
            offset: 0,
            orgtableData: [],
            perPage: 10,
            currentPage: 0
        }
    }

    componentDidMount() {
        axios({
            method: 'GET',
            url: 'http://localhost:5000/api/vochers',
            data: null
        }).then(res => {
            var tdata = res.data;
            var slice = tdata.slice(this.state.offset, this.state.offset + this.state.perPage)
            this.setState({
                pageCount: Math.ceil(tdata.length / this.state.perPage),
                orgtableData: tdata,
                vochers: slice
            })
        }).catch(err => {
            console.log(err);
        })
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
            vochers: slice
        })

    }
    showVochers(vochers) {
        var result = null;
        if (vochers.length > 0) {
            result = vochers.map((vocher, index) => {
                return (
                    <tr className="tr-edit">
                        <td>{index + 1}</td>
                        <td>{vocher._id}</td>
                        <td>{vocher.code}</td>
                        <td>{vocher.discount + "%"}</td>
                        <td>{new Date(vocher.create_date).toLocaleString()}</td>
                        <td>{new Date(vocher.time_expired).toLocaleString()}</td>
                        <td>{vocher.status ? "Còn hạn" : "Hết hạn"}</td>
                        <td style={{ display: 'flex' }}>
                            <Link to={"/admin/vocher/" + vocher._id}>
                                <Button style={{ border: '0px solid black' }}><FaEdit /></Button>
                            </Link>
                        </td>
                    </tr>
                )
            })
        }
        return result
    }

    render() {
        var { vochers } = this.state
        return (
            <>
                <div style={{ backgroundColor: '#F4F6F9', height: '56px', padding: '0.5rem', paddingLeft: '5rem' }}>
                    <p style={{ fontSize: '23px', fontFamily: 'Roboto' }}>Quản lý vocher</p>
                </div>
                <Card style={{ padding: '1rem', marginLeft: '1rem', display: 'flex', flexDirection: 'column', border: 'none' }}>
                    <Container className="table-container">
                        <Link to="/admin/add_vocher">
                            <Button style={{ float: 'right', marginBottom: '1rem', marginTop: '1rem' }}>Thêm </Button>
                        </Link>
                        <Table className="normal-table" bordered hover responsive="sm" style={{ fontSize: '13px' }}>
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Id</th>
                                    <th>Mã vocher</th>
                                    <th>Discount</th>
                                    <th>Ngày tạo</th>
                                    <th>Ngày hết hạn</th>
                                    <th>Status</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.showVochers(vochers)}
                            </tbody>
                        </Table>
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
                    </Container>
                </Card>
            </>
        )
    }
}
export default VoucherManagement;