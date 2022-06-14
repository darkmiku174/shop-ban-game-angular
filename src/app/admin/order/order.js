import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom'
import React, { Component } from 'react';
import { FaTrash, FaEdit } from 'react-icons/fa';
import { Button, Table, Container } from 'react-bootstrap';
class Order extends Component {


    showOrders(orders) {
        var result = null;
        if (orders.length > 0) {
            result = orders.map((order, index) => {
                return (
                    <tr>
                        <td>{order._id}</td>
                        <td>{new Date(order.paid_at).toLocaleString()}</td>
                        <td>{order.user.first_name + " " + order.user.last_name}</td>
                        <td>{order.payment_method.method}</td>
                        <td>{order.status.toString()}</td>
                        <td>{new Date(order.cancelled_at).toLocaleString()}</td>
                        <td style={{ display: 'flex' }}>
                            <Link to={"/admin/order/" + order._id}>
                                <Button style={{ border: '0px solid black' }}><FaEdit /></Button>
                            </Link>
                            <Button style={{ marginLeft: '1rem' }}><FaTrash /></Button>
                        </td>
                    </tr>
                )
            });
        }
        return result;
    }

    render() {
        var { orders } = this.props;
        console.log(orders)
        return (
            <Container>
                <Container className="table-container">
                    {/* <Button variant="secondary" style={{ float: 'right', marginBottom: '1rem' }}>Thêm</Button> */}
                    <Table className="normal-table" bordered hover responsive="lg" style={{ fontSize: '13px' }}>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Ngày thanh toán</th>
                                <th>User</th>
                                <th>Phương thức thanh toán</th>
                                <th>Tình trạng</th>
                                <th>Ngày hủy</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.showOrders(orders)}
                        </tbody>
                    </Table>
                </Container>
            </Container>
        )
    }
}
export default Order;