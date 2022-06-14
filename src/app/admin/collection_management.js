import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import { Button, Table, Container, Card, Row } from 'react-bootstrap';
import { FaEdit } from 'react-icons/fa';
import axios from 'axios';
import { Link } from 'react-router-dom'
import DeleteCollectiontNotification from './notification/delete_collection_notification';
import ReactPaginate from 'react-paginate';
class CollectionManagement extends Component {

    constructor(props) {
        super(props);
        this.state = {
            collections: [],
            offset: 0,
            orgtableData: [],
            perPage: 10,
            currentPage: 0
        }
    }

    componentDidMount() {
        axios({
            method: 'GET',
            url: 'http://localhost:5000/api/collections',
            data: null
        }).then(res => {
            var tdata = res.data;
            var slice = tdata.slice(this.state.offset, this.state.offset + this.state.perPage)
            this.setState({
                pageCount: Math.ceil(tdata.length / this.state.perPage),
                orgtableData: tdata,
                collections: slice
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
            collections: slice
        })

    }

    showCollections(collections) {
        var result = null;
        if (collections.length > 0) {
            result = collections.map((collection, index) => {
                return (
                    <tr>
                        <td>{index + 1}</td>
                        <td>{collection._id}</td>
                        <td>{collection.name}</td>
                        <td style={{ display: 'flex' }}>
                            <Link style={{ marginRight: '1rem' }} to={"/admin/collection/" + collection._id}>
                                <Button style={{ border: '0px solid black' }}><FaEdit /></Button>
                            </Link>
                            <DeleteCollectiontNotification data={collection._id} />
                        </td>
                    </tr>
                )
            });
        }
        return result;
    }

    render() {
        var { collections } = this.state
        return (
            <>
                <div style={{ backgroundColor: '#F4F6F9', height: '56px', padding: '0.5rem', paddingLeft: '5rem' }}>
                    <p style={{ fontSize: '23px', fontFamily: 'Roboto' }}>Quản lý bộ sưu tập</p>
                </div>
                <Container>
                    <Card style={{ padding: '1rem', marginLeft: '1rem', display: 'flex', flexDirection: 'column', border: 'none' }}>
                        <Container className="table-container">
                            <Link to="/admin/add_collection" style={{ width: 'auto' }}>
                                <Button style={{ float: 'right', marginBottom: '1rem' }}>Thêm</Button>
                            </Link>
                            <Table style={{ fontSize: '13px' }} className="normal-table" bordered hover responsive="sm">
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>ID</th>
                                        <th>Tên Bộ sưu tập</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.showCollections(collections)}
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
                </Container>
            </>
        )
    }

}
export default CollectionManagement;