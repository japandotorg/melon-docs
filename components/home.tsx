import React from 'react';
import Image from 'next/image';
import { Container, Row, Col } from "react-bootstrap";

import { Type } from "./type";
import { Index } from './index';
import logo from '../static/images/logo.svg'

export function Home() {
    return (
        <section>
            <Container fluid className='home-section' id='home'>
                <Container className='home-content'>
                    <Row>
                        <Col md={7} className='home-header'>
                            <div
                                style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                }}
                            >
                                <Image src={logo} alt='logo' width='150' height='150' />
                            </div>
                            <br />
                            <div
                                style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                }}
                            >
                                <h1 className="heading-name">
                                    <strong className="main-name">MELON DISCORD BOT</strong>
                                </h1>
                            </div>
                            <div style={{ 
                                padding: 50, 
                                fontSize: 9, 
                                textAlign: "left",
                                fontFamily: 'Comic Sans MS',
                                display: 'flex',
                                justifyContent: "center"
                            }}>
                                <Type />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Container>
            <Index />
        </section>
    );
};

