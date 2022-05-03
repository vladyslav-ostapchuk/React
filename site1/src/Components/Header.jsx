import React, { Component } from 'react'
import { Nav, Navbar, FormControl, Container, NavDropdown, Button, Form } from 'react-bootstrap'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Blog from '../Pages/Blog'
import Constacts from '../Pages/Constacts'
import About from '../Pages/About'
import logo from './logo2.svg'
import Home from '../Pages/Home'


export default class Header extends Component {
    render() {
        return (
            <>
                <Navbar sticky="top" expand="lg" bg="dark" variant='dark' >
                    <Container >
                        <Navbar.Brand href="#">
                            <img
                                src={logo}
                                width="40"
                                height="40"
                                className="d-inline-block align-top"
                                alt="React Bootstrap logo"
                            />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="me-auto my-2 my-lg-0"
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            >
                                <Nav.Link active href="/">Home</Nav.Link>
                                <Nav.Link href="/about">About Us</Nav.Link>
                                <Nav.Link href="/constacts">Constacts</Nav.Link>
                                <Nav.Link href="/blog">Blog</Nav.Link>


                            </Nav>
                            <Form className="d-flex">
                                <FormControl
                                    type="search"
                                    placeholder="Search"
                                    className="me-2"
                                    aria-label="Search"
                                />
                                <Button variant="outline-success">Search</Button>
                            </Form>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>




                <Router>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/about' element={<About />} />
                        <Route path='/constacts' element={<Constacts />} />
                        <Route path='/blog' element={<Blog />} />
                    </Routes>
                </Router>
            </>
        )
    }
}
