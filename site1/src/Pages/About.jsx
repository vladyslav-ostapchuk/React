import React, { Component } from 'react'
import { Container, Tab, Nav, Row, Col } from 'react-bootstrap'


export default class About extends Component {
    render() {
        return (
            <Container>
                <Tab.Container id="left-tabs-example" defaultActiveKey="first" >
                    <Row>
                        <Col sm={3} className='mt-3'>
                            <Nav variant="pills" className="flex-column">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Design</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Team</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="three">Programming</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="four">Frameworks</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="five">Libraries</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={9}>
                            <Tab.Content className='mt-3 '>
                                <Tab.Pane eventKey="first"   >
                                    <img src="https://i.pinimg.com/originals/4e/6c/bb/4e6cbb5a04cf5a06bde6ef21a89de076.png"
                                        className="img-fluid "
                                        alt="carts" />
                                    <p className='mt-3 '>Build Your Own Brand and Sell Online With Shopify. Sign Up For An Annual Plan For 10% Off. Quickly Build a Website With Our Unified Platform. Grow Your Business With Shopify®. Shop Pay at Checkout. 99.99% Average Uptime. Social Media Integration. Fully Hosted.</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <img src="https://images.squarespace-cdn.com/content/v1/5a6116879f8dce2d2934da48/1554578617476-79DRAXLD1NSGP0P1D7PU/Screen+Shot+2019-04-06+at+3.01.07+PM.png"
                                        className="img-fluid "
                                        alt="carts" />
                                    <p className='mt-3'>Substantial disagreement exists concerning how designers in many fields, whether amateur
                                        or professional, alone or in teams, produce designs.[2] Kees Dorst and Judith Dijkhuis, both
                                        designers themselves, argued that "there are many ways of describing design processes" and discussed
                                        "two basic and fundamentally different ways",[3] both of which have several names. The prevailing view has
                                        been called "the rational model",[4] "technical problem solving"[5] and "the reason-centric perspective".[6]
                                        The alternative view has been called "reflection-in-action",[5] "co-evolution",[7] and "the action-centric
                                        perspective".[6]</p>
                                    <p>The action-centric perspective is based on an empiricist philosophy and broadly consistent with the agile approach[18] and a methodical development.[19] Substantial empirical evidence supports the veracity of this perspective in describing the actions of real designers.[16] Like the rational model, the action-centric model sees design as informed by research and knowledge. However, research and knowledge are brought into the design process through the judgment and common sense of designers – by designers "thinking on their feet" – more than through the predictable and controlled process stipulated by the rational model.</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="three">
                                    <img
                                        className="img-fluid "
                                        src="https://png.pngtree.com/png-clipart/20190516/original/pngtree-creative-programming-and-developement-icon-background-png-image_3727205.jpg" alt="carts" />
                                    <p className='mt-3 '>
                                        Tasks accompanying and related to programming include testing, debugging, source code maintenance, implementation of build systems, and management of derived artifacts, such as the machine code of computer programs. These might be considered part of the programming process, but often the term software development is used for this larger process with the term programming, implementation, or coding reserved for the actual writing of code. Software engineering combines engineering techniques with software development practices. Reverse engineering is a related process used by designers, analysts, and programmers to understand and re-create/re-implement.[3]                          </p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="four">
                                    <img className="img-fluid " src="https://www.mastersoftwaresolutions.com/wp-content/uploads/2014/08/bnr-1.png" alt="carts" />
                                    <p className='mt-3 '>
                                        Web Application Framework or simply “web framework” is a software framework that is designed to support the development of web applications including web services, web resources, and web APIs. Frameworks are, in short, libraries that help you develop your application faster and smarter!
                                    </p>
                                    <p>
                                        Nowadays, the number of Web Frameworks has increased greatly. To help you pick up the most suitable one for your Web Application, we have compiled a list of 10 best frameworks available online, in your preferred language.
                                    </p>                                </Tab.Pane>
                                <Tab.Pane eventKey="five">
                                    <img className="img-fluid " src="https://nioyatech.com/wp-content/uploads/2021/12/blog-banner.jpeg" alt="carts" />
                                    <p className='mt-3 '>
                                        Timor-Leste has continued to develop joint frameworks for planning and measuring progress. · Regional cooperation frameworks seemed to be emerging fast. · Those ...
                                    </p>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </Container>
        )
    }
}
