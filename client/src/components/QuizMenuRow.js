import React, {Component} from 'react';
import {connect} from 'react-redux';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {Button} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCog, faArrowAltCircleRight} from "@fortawesome/free-solid-svg-icons";
import {ColoredLine} from "./ColoredLine";
import Form from "react-jsonschema-form";
//https://github.com/FortAwesome/react-fontawesome

const schema = {
    type: "object",
    properties: {
        n1: {type: "boolean", title: "1..10", default: true},
        n2: {type: "boolean", title: "10..20", default: true}
    }
};

class QuizMenuRow extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col sm={12}><h3>{this.props.quiz.name}</h3></Col>
                    <Col sm={12}>{this.props.quiz.description}</Col>
                </Row>
                <Row>
                </Row>
                <Row>
                    <Col sm={12} style={{ padding : "10px"}}>
                        <Button
                            onClick={ () => this.props.history.push(`/settings/${this.props.quiz.id}`) }
                        ><FontAwesomeIcon icon={faCog} size="lg"/></Button>&nbsp;
                        <Button>Начать&nbsp;<FontAwesomeIcon icon={faArrowAltCircleRight} size="lg"/></Button>
                    </Col>
                </Row>
            </Container>
        );
    }
}

function mapStateToProps(state) {
    return {};
}

export default connect(
    mapStateToProps,
)(QuizMenuRow);
