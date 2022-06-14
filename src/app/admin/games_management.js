import React, { Component } from 'react';
import { Row, Button, Table, Container, Card } from 'react-bootstrap';
import { FaEdit} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import axios from "axios";
import DeleteProductNotification from './notification/delete_product_notification';
import ReactPaginate from 'react-paginate';
class GamesManagement extends Component {

    constructor(props) {
        super(props);
        this.state = {
            products: [],
            offset: 0,
            orgtableData: [],
            perPage: 10,
            currentPage: 0
        }
    }

    componentDidMount() {
        axios({
            method: 'GET',
            url: 'http://localhost:5000/api/games',
            data: null
        }).then(res => {
            var tdata = res.data;
            var slice = tdata.slice(this.state.offset, this.state.offset + this.state.perPage)
            this.setState({
                pageCount: Math.ceil(tdata.length / this.state.perPage),
                orgtableData: tdata,
                products: slice
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
            products: slice
        })

    }
    countActiveKeys(keys) {
        var result = 0;
        if (keys.length > 0) {
            keys.map((key, index) => {
                if (key.status === "false") {
                    result += 1
                }
            })
        }
        return result;
    }

    showProducts(products) {
        var result = null;
        if (products.length > 0) {
            result = products.map((product, index) => {
                return (
                    <tr>
                        <td>{product.name}</td>
                        <td>{product.type}</td>
                        <td>{product.developer}</td>
                        <td>{product.publisher}</td>
                        <td>{new Date(product.release_date).toLocaleString()}</td>
                        <td>{product.platform}</td>
                        <td>{product.purchase_price}</td>
                        <td>{product.sale_price}</td>
                        <td>{product.discount_price + "%"}</td>
                        <td>{this.countActiveKeys(product.keys)}</td>
                        <td style={{ display: 'flex' }}>
                            <Link to={"/admin/game/" + product._id}>
                                <Button style={{ marginRight: '1rem' }}><FaEdit /></Button>
                            </Link>
                            <DeleteProductNotification data={product._id} />
                        </td>
                    </tr>
                )
            });
        }
        return result;
    }
    render() {
        var { products } = this.state
        return (
            <>
                <div style={{ backgroundColor: '#F4F6F9', height: '56px', padding: '0.5rem', paddingLeft: '5rem' }}>
                    <p style={{ fontSize: '23px', fontFamily: 'Roboto' }}>Quản lý sản phẩm</p>
                </div>
                <Container>
                    <Card style={{ padding: '1rem', marginLeft: '1rem', display: 'flex', flexDirection: 'column', border: 'none' }}>
                        <div style={{ backgroundColor: 'white' }}>
                            <Link to="/admin/add_game">
                                <Button style={{ float: 'right', width: '5rem', marginTop: '1rem', marginBottom: '1rem' }}> Thêm</Button>
                            </Link>
                            <Table bordered hover style={{ backgroundColor: 'white', fontSize: '13px' }}>
                                <thead>
                                    <tr>
                                        <th style={{ fontSize: '13px' }}>Tên sản phẩm</th>
                                        <th style={{ fontSize: '13px' }}>Loại</th>
                                        <th style={{ fontSize: '13px' }}>Nhà phát triển</th>
                                        <th style={{ fontSize: '13px' }}>Nhà phát hành</th>
                                        <th style={{ fontSize: '13px' }}>Ngày xuất bản</th>
                                        <th style={{ fontSize: '13px' }}>Hệ điều hành</th>
                                        <th style={{ fontSize: '13px' }}>Giá mua</th>
                                        <th style={{ fontSize: '13px' }}>Giá bán</th>
                                        <th style={{ fontSize: '13px' }}>Giảm giá</th>
                                        <th style={{ fontSize: '13px' }}>Kho</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.showProducts(products)}
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
                        </div>
                    </Card>
                </Container>
            </>
        )
    }
}

export default GamesManagement;