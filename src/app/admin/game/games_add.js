import React, { Component } from 'react';
import { Container, Row, Col, Button, Form, Table, Card } from 'react-bootstrap';
import Key from './games_add_key';
import Tag from './games_add_tag';
import Include from './games_add_include';
import IncludeIn from './games_add_includein';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
class AddGame extends Component {

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
				included_in: []
			},
			games: []
		}
	}

	componentDidMount() {
		axios({
			method: 'GET',
			url: 'http://localhost:5000/api/games',
			data: null
		}).then(res => {
			console.log(res);
			this.setState({
				games: res.data
			});
		}).catch(err => {
			console.log(err);
		})
	}

	onChange = (e) => {
		var target = e.target;
		var name = target.name;
		var value = target.value;
		if (name === "purchase_price" || name === "sale_price") {
			value = parseInt(value)
			if (value < 0) {
				value = 0
			}
		}
		if (name === "release_date") {
			value = new Date(value)
		}
		this.setState(pre => ({
			product: {
				...pre.product,
				[name]: value
			}
		}))
	}

	onChangeImange = (e) => {
		var target = e.target;
		var name = target.placeholder;
		var index = target.name
		var value = target.value;
		var { product } = this.state
		var images = product.images
		images[index] = {
			...images[index],
			[name]: value
		}
		this.setState(pre => ({
			product: {
				...pre.product,
				images
			}
		}))
	}

	onChangeVideo = (e) => {
		var target = e.target;
		var name = target.placeholder;
		var index = target.name
		var value = target.value;
		var { product } = this.state
		var videos = product.videos
		videos[index] = {
			...videos[index],
			[name]: value
		}
		this.setState(pre => ({
			product: {
				...pre.product,
				videos
			}
		}))
	}

	onAddVideo = (videos) => {
		var video = {
			url: "",
			type: ""
		}
		videos.push(video)
		this.setState({
			videos
		})
	}

	onAddImage = (images) => {
		var image = {
			url: "",
			type: ""
		}
		images.push(image)
		this.setState({
			images
		})
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
								<input name={index} type="text" placeholder="url" style={{ width: '25rem' }} onChange={this.onChangeVideo} />
								<input name={index} type="text" placeholder="type" style={{ width: '25rem' }} onChange={this.onChangeVideo} />
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
					<Col className="image">
						<div className="image-container" style={{ display: 'flex', width: '25rem' }}>
							<form style={{ marginLeft: '1rem' }}>
								<img src={image.url} style={{ width: '25rem', height: '25rem' }} />
								<input name={index} type="text" placeholder="url" style={{ width: '25rem' }} onChange={this.onChangeImange} />
								<input name={index} type="text" placeholder="type" style={{ width: '25rem' }} onChange={this.onChangeImange} />
							</form>
						</div>
					</Col>
				)
			});
		}
		return result;
	}
	onAdd = (game) => {
		axios({
			method: 'POST',
			url: 'http://localhost:5000/api/games/add',
			data: game
		}).then(res => {
			const { history } = this.props;
			if (history) history.push('/');
		}).catch(err => {
			console.log(err);
		})
	}

	render() {
		var { product, games } = this.state
		const { history } = this.props;
		return (
			(history) ? <div>
				<div style={{ backgroundColor: '#F4F6F9', height: '56px', padding: '0.5rem', paddingLeft: '5rem' }}>
					<p style={{ fontSize: '23px', fontFamily: 'Roboto' }}>Thêm sản phẩm</p>
				</div>
				<Container style={{ padding: '2rem' }}>
					<div style={{ display: 'flex', flexDirection: 'column' }}>
						<Card style={{ backgroundColor: 'white', width: '60rem', marginLeft: '8%', padding: '1rem' }}>
							{/*Parent Row 1*/}
							<Row style={{ margin: '0.2rem', marginTop: '1rem', marginBottom: '1rem', padding: '1rem' }}>
								<h5>Thông tin chung</h5>
								<Container style={{ marginTop: '3rem' }}>
									<Col>
										<div className="parent-row-1-container" style={{ display: 'flex', justifyContent: 'space-between' }}>
											<div className="product-details-table">
												<Table striped bordered style={{ width: '30rem' }}>
													<thead>
													</thead>
													<tbody>
														<tr className="tr-edit">
															<td style={{ padding: '5px' }}>1</td>
															<td style={{ padding: '5px' }}>Tên</td>
															<td style={{ padding: '0px' }}><Form.Control style={{ width: '100%', height: '3rem' }} onChange={this.onChange} name="name" size="sm" type="text" placeholder="Nhập vào" /></td>
														</tr>
														<tr className="tr-edit">
															<td style={{ padding: '5px' }}>2</td>
															<td style={{ padding: '5px' }}>Tên ngắn</td>
															<td style={{ padding: '0px' }}><Form.Control style={{ width: '100%', height: '3rem' }} onChange={this.onChange} name="short_name" size="sm" type="text" placeholder="Nhập vào" /></td>
														</tr>
														<tr className="tr-edit">
															<td style={{ padding: '5px' }}>3</td>
															<td style={{ padding: '5px' }}>Thể loại</td>
															<td style={{ padding: '0px' }}><Form.Control style={{ width: '100%', height: '3rem' }} onChange={this.onChange} name="type" size="sm" type="text" placeholder="Nhập vào" /></td>
														</tr>
														<tr className="tr-edit">
															<td style={{ padding: '5px' }}>4</td>
															<td style={{ padding: '5px' }}>Tiêu đề</td>
															<td style={{ padding: '0px' }}><Form.Control style={{ width: '100%', height: '3rem' }} onChange={this.onChange} name="title" size="sm" type="text" placeholder="Nhập vào" /></td>
														</tr>
														<tr className="tr-edit">
															<td style={{ padding: '5px' }}>5</td>
															<td style={{ padding: '5px' }}>Mô tả</td>
															<td style={{ padding: '0px' }}><Form.Control style={{ width: '100%', height: '3rem' }} onChange={this.onChange} name="description" size="sm" type="text" placeholder="Nhập vào" /></td>
														</tr>
														<tr className="tr-edit">
															<td style={{ padding: '5px' }}>6</td>
															<td style={{ padding: '5px' }}>Nhà phát triển</td>
															<td style={{ padding: '0px' }}><Form.Control style={{ width: '100%', height: '3rem' }} onChange={this.onChange} name="developer" size="sm" type="text" placeholder="Nhập vào" /></td>
														</tr>
														<tr className="tr-edit">
															<td style={{ padding: '5px' }}>7</td>
															<td style={{ padding: '5px' }}>Nhà phát hành</td>
															<td style={{ padding: '0px' }}><Form.Control style={{ width: '100%', height: '3rem' }} onChange={this.onChange} name="publisher" size="sm" type="text" placeholder="Nhập vào" /></td>
														</tr>
														<tr className="tr-edit">
															<td style={{ padding: '5px' }}>8</td>
															<td style={{ padding: '5px' }}>Ngày ra mắt</td>
															<td style={{ padding: '0px' }}><Form.Control style={{ width: '100%', height: '3rem' }} onChange={this.onChange} name="release_date" size="sm" type="text" placeholder="Nhập vào" /></td>
														</tr>
														<tr className="tr-edit">
															<td style={{ padding: '5px' }}>9</td>
															<td style={{ padding: '5px' }}>Nền tảng</td>
															<td style={{ padding: '0px' }}><Form.Control style={{ width: '100%', height: '3rem' }} onChange={this.onChange} name="platform" size="sm" type="text" placeholder="Nhập vào" /></td>
														</tr>
														<tr className="tr-edit">
															<td style={{ padding: '5px' }}>10</td>
															<td style={{ padding: '5px' }}>Giá mua</td>
															<td style={{ padding: '0px' }}><Form.Control style={{ width: '100%', height: '3rem' }} onChange={this.onChange} name="purchase_price" size="sm" type="number" placeholder="Nhập vào" /></td>
														</tr>
														<tr className="tr-edit">
															<td style={{ padding: '5px' }}>11</td>
															<td style={{ padding: '5px' }}>Giá bán </td>
															<td style={{ padding: '0px' }}><Form.Control style={{ width: '100%', height: '3rem' }} onChange={this.onChange} name="sale_price" size="sm" type="number" placeholder="Nhập vào" /></td>
														</tr>
														<tr className="tr-edit">
															<td style={{ padding: '5px' }}>12</td>
															<td style={{ padding: '5px' }}>Tags</td>
															<td><Tag tags={product.tag} /></td>
														</tr>
														<tr className="tr-edit">
															<td style={{ padding: '5px' }}>13</td>
															<td style={{ padding: '5px' }}>Keys</td>
															<td><Key keys={product.keys} /></td>
														</tr>
														<tr className="tr-edit">
															<td style={{ padding: '5px' }}>14</td>
															<td style={{ padding: '5px' }}>Includes</td>
															<td><Include include={product.includes} games={games} /></td>
														</tr>
														<tr className="tr-edit">
															<td style={{ padding: '5px' }}>15</td>
															<td style={{ padding: '5px' }}>Includes in</td>
															<td><IncludeIn include={product.included_in} games={games} /></td>
														</tr>
													</tbody>
												</Table>
											</div>
										</div>
									</Col>
								</Container>
							</Row>
							{/*Parent Row 2 */}
							<Row style={{ display: "flex", margin: '0.2rem', marginBottom: '1rem', padding: '1rem' }}>
								<p style={{ fontSize: '12px' }}>Videos</p>
								<Button variant="secondary" style={{ width: '3rem', margin: '0.6rem' }} onClick={() => this.onAddVideo(product.videos)}>+</Button>
								<Row>
									{this.showVideos(product.videos)}
								</Row>
							</Row>
							{/*Parent Row 3 */}
							<Row style={{ display: "flex", margin: '0.2rem', marginBottom: '1rem', padding: '1rem' }}>
								<p style={{ fontSize: '12px' }}>Hình ảnh</p>
								<Button variant="secondary" style={{ width: '3rem', margin: '0.6rem' }} onClick={() => this.onAddImage(product.images)}>+</Button>
								<Row>
									{this.showImages(product.images)}
								</Row>
							</Row>
							<Button variant="secondary" style={{ marginLeft: '50rem', width: '5rem' }} onClick={() => this.onAdd(product)}>Thêm</Button>
						</Card>
					</div>
				</Container>
			</div> : null
		)
	}
}
export default withRouter(AddGame);



