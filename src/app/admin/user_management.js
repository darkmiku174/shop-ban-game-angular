import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import axios from "axios";
import DeleteUserNotification from './notification/delete_user_notification';
import { Table, Container, Card, Row } from 'react-bootstrap';
import ReactPaginate from 'react-paginate';
class UserManagement extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            show: false,
            offset: 0,
            orgtableData: [],
            perPage: 10,
            currentPage: 0
        }
    }

    componentDidMount() {
        axios({
            method: 'GET',
            url: 'http://localhost:5000/api/users',
            data: null
        }).then(res => {
            var tdata = res.data;
            var slice = tdata.slice(this.state.offset, this.state.offset + this.state.perPage)
            this.setState({
                pageCount: Math.ceil(tdata.length / this.state.perPage),
                orgtableData: tdata,
                users: slice
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
            users: slice
        })

    }
    showUsers(users) {
        var result = null;
        if (users.length > 0) {
            result = users.map((user, index) => {
                return (
                    <tr>
                        <td>{user._id}</td>
                        <td>{user.first_name + " " + user.last_name}</td>
                        <td>{new Date(user.birthday).toLocaleString()}</td>
                        <td>{user.active ? "Còn hoạt động" : "Đã huỷ"}</td>
                        <td>{user.email}</td>
                        <td>{user.phone_number}</td>
                        <td>{user.facebook_id}</td>
                        <td>{user.google_id}</td>
                        <td>{user.email_verification}</td>
                        <td style={{ display: 'flex' }}>
                            <DeleteUserNotification data={user._id} />
                        </td>
                    </tr>
                )
            });
        }
        return result;
    }
    render() {
        var { users } = this.state
        return (
            <>
                <div style={{ backgroundColor: '#F4F6F9', height: '56px', padding: '0.5rem', paddingLeft: '5rem' }}>
                    <p style={{ fontSize: '23px', fontFamily: 'Roboto' }}>Quản lý người dùng</p>
                </div>
                <Card style={{ padding: '1rem', marginLeft: '1rem', display: 'flex', flexDirection: 'column', border: 'none' }}>
                    <Container style={{ marginTop: '2rem' }} className="table-container">
                        {/* <Button  style={{ float: 'right', marginBottom: '1rem', marginTop: '1rem' }}>Thêm +</Button> */}
                        <Table style={{ fontSize: '13px' }} className="normal-table" bordered hover responsive="sm">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Tên </th>
                                    <th>Sinh nhật</th>
                                    <th>Active</th>
                                    <th>Email</th>
                                    <th>SDT</th>
                                    <th>Facebook ID</th>
                                    <th>Google ID</th>
                                    <th>Email verification</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.showUsers(users)}
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
export default UserManagement;