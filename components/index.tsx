import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export function Index() {
    return (
        <Container fluid className="home-about-section" id="about">
            <Container>
                <Row>
                    <Col md={8} className="home-about-description">
                        <p className="home-about-body">
                            Melon is a bot desgned to keep your server safe and engaed your members.
                            <br />
                            <br />It's
                            <i>
                                <b className="purple"> moderation & logging suite </b>
                            </i>
                            keep track of your members and keep your moderators accountable.
                            <br />
                            <br />
                            It also has auto-mod capabilities that filter outs certain types of behavior when your staff team is not available.
                            <br />
                            Melon has it's own
                            <i>
                                <b className="purple"> leveling system, custom commands system, engaging-fun commands, informative-commands, utility commands and more! </b>
                                
                            </i>
                        </p>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}