import React, { Component } from 'react'
import { Row, Card, Container, Col, ListGroup } from 'react-bootstrap'

export default class Blog extends Component {
    render() {
        return (


            <Container className='mt-3'>

                <Row>
                    <Col sm={2}>
                        <img
                            width={200}
                            height={200}

                            src='https://laravelnews.imgix.net/images/php-leader.png?ixlib=php-3.3.1'
                        />
                    </Col>
                    <Col sm={6}>
                        <h5>Blog Post</h5>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus laudantium nam eos quam
                            sit neque dicta labore vero perferendis corporis dolores, consequuntur officia, deserunt
                            fugit?
                        </p>
                    </Col>

                    <Col md='3'>
                        <h5 className='text-center '>Categories</h5>
                        <Card>
                            <ListGroup >
                                <ListGroup.Item>Cras justo odio</ListGroup.Item>
                                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                                <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                                <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                                <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                            </ListGroup>
                        </Card>
                        <Card className='mt-3' bg='light'>
                            <Card.Body>
                                <Card.Title>Light Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk
                                    of the card's content.  Some quick example text to build on the card title and make up the bulk
                                    of the card's content. Some quick example text to build on the card title and make up the bulk
                                    of the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container >
        )
    }
}



