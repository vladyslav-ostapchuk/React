import React, { Component } from 'react'
import { Container, Form, Button } from 'react-bootstrap'

export default class Constacts extends Component {
    render() {
        return (
            <Container style={{ width: '500px' }}>
                <h1 className="text-center">Constacts</h1>

                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" />
                        <Form.Text>
                            We'll never share your email with anyone else
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mt-3" controlId="formBasicPassword">
                        <Form.Label>Example textarea</Form.Label>
                        <Form.Control as="textarea" rows='3' />
                    </Form.Group>

                    <Form.Group className="mt-3" controlId="formBasicCheckbox">
                        <Form.Check type='checkbox' label='Check me out' />
                    </Form.Group>
                    <Button className="mt-3" type='submit' variant='primary'>Submit</Button>

                </Form>
            </Container>
        )
    }
}
