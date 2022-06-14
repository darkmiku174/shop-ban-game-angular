import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import { Card, Container, Row, Table } from 'react-bootstrap';
class DetailCart extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cart: {
                products: [],
                user: {},
                status: true
            },

        }
    }

    componentDidMount() {
        axios({
            method: 'GET',
            url: 'http://localhost:5000/api/carts/' + this.props.match.params.id,
            data: null
        }).then(res => {
            this.setState({
                cart: res.data,
            });
        }).catch(err => {
            console.log(err);
        });

    }


    showProducts(product) {
        var result = null;
        if (product.length > 0) {
            result = product.map((p, index) => {
                return (
                    <tr className="tr-edit">
                        <td style={{ padding: '5px' }}>{index + 1}</td>
                        <td style={{ padding: '0px' }}>{p.product.name}</td>
                        <td style={{ padding: '0px' }}>{p.quantity}</td>
                    </tr>
                )
            });
        }
        return result
    }


    render() {
        var { cart } = this.state
        return (
            <div>
                <div style={{ backgroundColor: '#F4F6F9', height: '56px', padding: '0.5rem', paddingLeft: '5rem' }}>
                    <p style={{ fontSize: '23px', fontFamily: 'Roboto' }}>Chi tiết Cart</p>
                </div>
                <Container>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <Card style={{ marginLeft: '8%', marginTop: '1rem' }}>
                            <Card.Header as="h6">Thông tin Cart</Card.Header>
                            {/*Parent Row 1*/}
                            <Row style={{ margin: '0.2rem', marginBottom: '1rem', padding: '1rem' }}>
                                <h6>Cart ID: {cart._id}</h6>
                                <Container style={{ marginTop: '1rem' }}>
                                    <div className="parent-row-1-container"  >
                                        <div className="product-details-table">
                                            <h6>Thông tin user</h6>
                                            <Table striped bordered>
                                                <tbody>
                                                    <tr className="tr-edit">
                                                        <td style={{ padding: '5px' }}>User ID</td>
                                                        <td style={{ padding: '5px' }}>{cart.user != null ? cart.user._id : null}</td>
                                                    </tr>
                                                    <tr className="tr-edit">
                                                        <td style={{ padding: '5px' }}>Họ tên</td>
                                                        <td style={{ padding: '5px' }}>{cart.user != null ? cart.user.name : "Khách"}</td>
                                                    </tr>
                                                    <tr className="tr-edit">
                                                        <td style={{ padding: '5px' }}>SDT</td>
                                                        <td style={{ padding: '5px' }}>{cart.user != null ? cart.user.phone_number : null}</td>
                                                    </tr>
                                                    <tr className="tr-edit">
                                                        <td style={{ padding: '5px' }}>Email</td>
                                                        <td style={{ padding: '5px' }}>{cart.user != null ? cart.user.email : null}</td>
                                                    </tr>
                                                    <tr className="tr-edit">
                                                        <td style={{ padding: '5px' }}>Sinh nhật</td>
                                                        <td style={{ padding: '5px' }}>{cart.user != null ? new Date(cart.user.birthday).toLocaleString() : null}</td>
                                                    </tr>
                                                    <tr className="tr-edit">
                                                        <td style={{ padding: '5px' }}>Tên tài khoản</td>
                                                        <td style={{ padding: '5px' }}>{cart.user != null ? cart.user.user_name : null}</td>
                                                    </tr>
                                                    <tr className="tr-edit">
                                                        <td style={{ padding: '5px' }}>Mật khẩu</td>
                                                        <td style={{ padding: '5px' }}>{cart.user != null ? cart.user.password : null}</td>
                                                    </tr>
                                                    <tr className="tr-edit">
                                                        <td style={{ padding: '5px' }}>Tình trạng cart</td>
                                                        <td style={{ padding: '5px' }}>{!cart.status ? "Đã thanh toán" : "Còn trong giỏ hàng"}</td>
                                                    </tr>
                                                </tbody>
                                            </Table>

                                            <h6>Danh sách game</h6>
                                            <Table bordered hover responsive="sm" className="listgame-details">
                                                <thead>
                                                    <tr>
                                                        <th>STT</th>
                                                        <th>Tên game</th>
                                                        <th>Số lượng</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {this.showProducts(cart.products)}
                                                </tbody>
                                            </Table>

                                        </div>
                                    </div>
                                </Container>
                            </Row>
                        </Card>
                    </div>
                </Container>
            </div>
        )
    }
}
export default DetailCart;



