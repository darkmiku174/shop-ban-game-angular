import React, { Component } from 'react';
import { Container, Row, Col, Button, Table, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddKey from '../key/key_add';
// import DeleteKeyNotification from '../notification/delete_key_notification';

import axios from 'axios';
class DetailGame extends Component {

    constructor(props) {
        super(props);
        this.state = {
            product: {
                name: "",
                short_name: "",
                type: "",
                description: "",
                developer: "",
                publisher: "",
                release_date: "",
                platform: "",
                purchase_price: 0,
                sale_price: 0,
                tag: [],
                keys: [],
                images: [],
                videos: [],
                includes: [],
                included_in: [],
            }
        }
    }

    componentDidMount() {
        axios({
            method: 'GET',
            url: 'http://localhost:5000/api/games/' + this.props.match.params.id,
            data: null
        }).then(res => {
            this.setState({
                product: res.data,
            });
        }).catch(err => {
            console.log(err);
        });

    }

    showTags(tags) {
        var result = null;
        if (tags.length > 0) {
            result = tags.map((tag, index) => {
                return (
                    <tr className="tr-edit">
                        <td style={{ padding: '5px' }}>{index + 1}</td>
                        <td style={{ padding: '0px' }}>{tag}</td>
                    </tr>
                )
            })
        }
        return result
    }

    showIncludedIns(includedIns) {
        var result = null;
        if (includedIns.length > 0) {
            result = includedIns.map((includedIn, index) => {
                return (
                    <tr className="tr-edit">
                        <td style={{ padding: '5px' }}>{index + 1}</td>
                        <td style={{ padding: '0px' }}>{includedIn.name}</td>
                    </tr>
                )
            })
        }
        return result
    }

    showIncludes(includes) {
        var result = null;
        if (includes.length > 0) {
            result = includes.map((include, index) => {
                return (
                    <tr className="tr-edit">
                        <td style={{ padding: '5px' }}>{index + 1}</td>
                        <td style={{ padding: '0px' }}>{include.name}</td>
                    </tr>
                )
            })
        }
        return result
    }

    showKeys(keys) {
        var result = null;
        if (keys.length > 0) {
            result = keys.map((key, index) => {
                return (
                    <tr className="tr-edit">
                        <td style={{ padding: '5px' }}>{index + 1}</td>
                        <td style={{ padding: '0px' }}>{key.code}</td>
                        <td style={{ padding: '0px' }}>{!key.status === "true" ? "Active" : "Inactive"}</td>
                        {/* <td><DeleteKeyNotification /></td> */}
                    </tr>
                )
            })
        }
        return result
    }

    showVideos(videos) {
        var result = null;
        if (videos.length > 0) {
            result = videos.map((video, index) => {
                return (
                    <Col className="video">
                        <div className="video-container" style={{ display: 'flex', width: '25rem' }}>
                            <form style={{ marginLeft: '1rem' }}>
                                <iframe width="400" height="400" src={video.url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                <input name={index} type="text" placeholder="url" style={{ width: '25rem' }} />
                                <input name={index} type="text" placeholder="type" style={{ width: '25rem' }} />
                            </form>
                        </div>
                    </Col>
                )
            });
        }
        return result;
    }

    showImages(images) {
        var result = null;
        if (images.length > 0) {
            result = images.map((image, index) => {
                return (
                    <Col className="image" >
                        <div className="image-container">
                            <Card style={{ marginTop: '1rem' }}>
                                <Card.Header>Loại ảnh: {image.type}</Card.Header>
                                <Card.Body style={{ padding: "0px" }}>
                                    <form>
                                        <img src={image.url} style={{ width: '32rem', height: '20rem' }} />
                                    </form>
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>
                )
            });
        }
        return result;
    }

    render() {
        var { product } = this.state
        console.log(product)
        return (
            <div>
                <div style={{ backgroundColor: '#F4F6F9', height: '56px', padding: '0.5rem', paddingLeft: '5rem' }}>
                    <p style={{ fontSize: '23px', fontFamily: 'Roboto' }}>Chi tiết sản phẩm</p>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <Container>
                        {/*Parent Row 1*/}
                        <Row style={{ margin: '0.2rem', marginTop: '1rem', marginBottom: '1rem', padding: '1rem' }}>
                            <Container style={{ marginTop: '3rem' }}>
                                <div className="parent-row-1-container" style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <div className="grid-detail" style={{ display: 'flex', flexDirection: 'column' }}>
                                        <div style={{ margin: 'auto' }}>
                                            {/* Row 1 */}
                                            <Row style={{ width: '52rem' }}>
                                                <Col lg="6" style={{ paddingRight: '2rem' }} >
                                                    <Row>
                                                        <Card style={{ padding: "0rem" }}>
                                                            <Card.Header>Thông tin chung</Card.Header>
                                                            <Card.Body style={{ height: '22.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}>
                                                                <div>
                                                                    Tên sản phẩm: {product.name}
                                                                </div>
                                                                <div>
                                                                    Tên rút gọn: {product.short_name}
                                                                </div>
                                                                <div>
                                                                    Thể loại: {product.type}
                                                                </div>
                                                                <div>
                                                                    Nhà phát triển: {product.developer}
                                                                </div>
                                                                <div>
                                                                    Nhà phát triển: {product.publisher}
                                                                </div>
                                                                <div>
                                                                    Ngày ra mắt: {new Date(product.release_date).toLocaleString()}
                                                                </div>
                                                                <div>
                                                                    Nền tảng: {product.platform}
                                                                </div>
                                                                <div>
                                                                    Giá mua: {product.purchase_price}
                                                                </div>
                                                                <div>
                                                                    Giá bán: {product.sale_price}
                                                                </div>
                                                            </Card.Body>
                                                        </Card>
                                                    </Row>
                                                    <Row style={{ marginTop: '1rem' }}>
                                                        <Card style={{ padding: "0rem" }}>
                                                            <Card.Header>Phiên bản cao cấp khác</Card.Header>
                                                            <Card.Body>
                                                                <Table style={{ fontSize: '13px' }} bordered hover responsive="sm" className="listgame-details">
                                                                    <thead>
                                                                        <tr>
                                                                            <th>STT</th>
                                                                            <th>Tên</th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                        {this.showIncludedIns(product.included_in)}
                                                                    </tbody>
                                                                </Table>
                                                            </Card.Body>
                                                        </Card>
                                                    </Row>
                                                    <Row style={{ marginTop: '1rem' }}>
                                                        <Card style={{ padding: "0rem" }}>
                                                            <Card.Header>Tags</Card.Header>
                                                            <Card.Body>
                                                                <Table style={{ fontSize: '13px' }} bordered hover responsive="sm" className="listgame-details">
                                                                    <thead>
                                                                        <tr>
                                                                            <th>STT</th>
                                                                            <th>Tên tag</th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                        {this.showTags(product.tag)}
                                                                    </tbody>
                                                                </Table>
                                                            </Card.Body>
                                                        </Card>
                                                    </Row>
                                                    <Row style={{ marginTop: '1rem' }}>
                                                        <Card style={{ padding: "0rem" }}>
                                                            <Card.Header>DLC</Card.Header>
                                                            <Card.Body>
                                                                <Table style={{ fontSize: '13px' }} bordered hover responsive="sm" className="listgame-details">
                                                                    <thead>
                                                                        <tr>
                                                                            <th>STT</th>
                                                                            <th>Tên</th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                        {this.showIncludes(product.includes)}
                                                                    </tbody>
                                                                </Table>
                                                            </Card.Body>
                                                        </Card>
                                                    </Row>
                                                </Col>
                                                <Col lg="6">
                                                    <Row>
                                                        <Card style={{ padding: "0rem" }}>
                                                            <Card.Header>Title</Card.Header>
                                                            <Card.Body>
                                                                {product.title}
                                                            </Card.Body>
                                                        </Card>
                                                    </Row>
                                                    <Row style={{ marginTop: '1rem' }}>
                                                        <Card style={{ padding: "0rem" }}>
                                                            <Card.Header>Mô tả</Card.Header>
                                                            <Card.Body>
                                                                {product.description}
                                                            </Card.Body>
                                                        </Card>
                                                    </Row>
                                                    <Row style={{ marginTop: '1rem' }}>
                                                        <Card style={{ padding: "0rem" }}>
                                                            <Card.Header>Key</Card.Header>
                                                            <Card.Body>
                                                                <AddKey />
                                                                <Table style={{ fontSize: '13px' }} bordered hover responsive="sm" className="listgame-details">
                                                                    <thead>
                                                                        <tr>
                                                                            <th></th>
                                                                            <th>Code</th>
                                                                            <th>Trạng thái</th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                        {this.showKeys(product.keys)}
                                                                    </tbody>
                                                                </Table>
                                                            </Card.Body>
                                                        </Card>
                                                    </Row>
                                                </Col>
                                            </Row>
                                            {/* Row 2 */}

                                        </div>

                                    </div>
                                </div>
                            </Container>
                        </Row>
                        {/*Parent Row 2 */}
                        <Row style={{ display: "flex", border: '2px solid #E6E6E6', marginTop: '1rem', padding: '1rem' }}>
                            <p style={{ fontSize: '12px' }}>Videos</p>
                            <Row>
                                {this.showVideos(product.videos)}
                            </Row>
                        </Row>
                        {/*Parent Row 3 */}
                        <Row style={{ display: "flex", border: '2px solid #E6E6E6', padding: '1rem' }}>
                            <p style={{ fontSize: '16px' }}>Hình ảnh</p>
                            <Row>
                                {this.showImages(product.images)}
                            </Row>
                        </Row>
                    </Container>
                </div>

            </div>
        )
    }
}
export default DetailGame;



