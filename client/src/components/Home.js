import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Button} from "react-bootstrap";
import {alert, loadQuizList} from "../actions";
import QuizMenuRow from "./QuizMenuRow";
import {ColoredLine} from "./ColoredLine";
import Form from "react-jsonschema-form";
import FormComponent from "./FormComponent";

const formMeta = [
    {name: "var1", label: "Переменная 1", type: "string", default: ""},
    {name: "bool1", label: "Переменная 2", type: "checkbox", default: ""},
];

class Home extends Component {



    componentDidMount() {
        this.props.loadQuizList();

    }

    render() {
        return (
            <div>
                <br/>
                <h2> Доступные тесты: </h2>

                <div className="container">
                    <FormComponent meta={formMeta}/>
                    <div className="row">
                        <div className="col-sm">
                            <div className="form-check col-xs-4">
                                <input className="form-check-input big-checkbox" type="checkbox" value="" id="defaultCheck1" style={{"text-align": "center"}}/>
                                <label className="form-check-label" htmlFor="defaultCheck1" >
                                    Default checkbox
                                </label>
                            </div>
                            <div className="form-check col-xs-4">
                                <input className="form-check-input big-checkbox" type="checkbox" value="" id="defaultCheck1" style={{"text-align": "center"}}/>
                                <label className="form-check-label" htmlFor="defaultCheck1" >
                                    Default checkbox
                                </label>
                            </div>
                            <div className="form-check col-xs-4">
                                <input className="form-check-input big-checkbox" type="checkbox" value="" id="defaultCheck1" style={{"text-align": "center"}}/>
                                <label className="form-check-label" htmlFor="defaultCheck1" >
                                    Default checkbox
                                </label>
                            </div>
                        </div>
                        <div className="col-sm">

                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="inputGroup-sizing-default">Default</span>
                                </div>
                                <input type="text" className="form-control" aria-label="Default"
                                       aria-describedby="inputGroup-sizing-default"/>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm">
                            <div className="form-group row">
                                <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Email</label>
                                <div className="col-sm-10">
                                    <input type="password" className="form-control input-normal" id="inputPassword" placeholder="Password"/>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm">
                            <div className="form-check col-xs-4">
                                <input className="form-check-input big-checkbox" type="checkbox" value="" id="defaultCheck1" style={{"text-align": "center"}}/>
                                <label className="form-check-label" htmlFor="defaultCheck1" >
                                    Default checkbox
                                </label>
                            </div>
                            <div className="form-check col-xs-4">
                                <input className="form-check-input big-checkbox" type="checkbox" value="" id="defaultCheck1" style={{"text-align": "center"}}/>
                                <label className="form-check-label" htmlFor="defaultCheck1" >
                                    Default checkbox
                                </label>
                            </div>
                            <div className="form-check col-xs-4">
                                <input className="form-check-input big-checkbox" type="checkbox" value="" id="defaultCheck1" style={{"text-align": "center"}}/>
                                <label className="form-check-label" htmlFor="defaultCheck1" >
                                    Default checkbox
                                </label>
                            </div>
                        </div>
                        <div className="col-sm">
                        </div>
                    </div>
                </div>





                {
                    this.props.quizList &&
                    this.props.quizList.map( (q, index, array) =>
                        <>
                        { index===0 && <ColoredLine/> }
                        <QuizMenuRow quiz={q} key={index} history={this.props.history}/>
                        <ColoredLine/>
                        </>
                        )
                }
            </div>

        );
    }
}

function mapStateToProps(state) {
    return {
        quizList: state.quizList
    };
}

export default connect(
    mapStateToProps,
    { alert, loadQuizList }
)(Home);
