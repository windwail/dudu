import React, {Component} from 'react';
import {connect} from 'react-redux';



class FormComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {};

        props.meta.forEach( v => this.state[v.name] = v.default);
    }

    render() {
        return (
            <div>
                {this.props.meta.map((v, i, a) => {
                    switch(v.type) {
                        case "string":
                            return (<div>
                                <label for={v.name}>{v.label}</label>
                                &nbsp;
                                <input id={v.name} type="text" value={ this.state[v.name]} onChange={ e => this.setState({...this.state, [v.name]: e.target.value})}/>
                            </div>);
                        case "checkbox":
                            return (<div>
                                <label for={v.name}>{v.label}</label>
                                &nbsp;
                                <input id={v.name} type="checkbox" checked={this.state[v.name]} onChange={ e => this.setState({...this.state, [v.name]: e.target.checked})}/>
                            </div>);
                    }
                })
                }
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {};
}

export default connect(
    mapStateToProps,
)(FormComponent);
