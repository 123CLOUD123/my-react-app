import React, { Component } from 'react';
import { Divider, Button } from 'antd';
import axios from 'axios';


export default class Test extends Component {

    constructor(props) {
        super(props);
        this.state = {
            result: "default",
        }
    }


    // componentWillReceiveProps(nextProps) {
    //     let key = nextProps.match.params.key;
    //     console.log("*********", key);
    //     this.setState({
    //         key:key
    //     })
    // }
    // componentWillReceiveProps(nextProps) {
    //     console.log("--------0000000000000", nextProps);
    //     this.setState({
    //         children: nextProps.children
    //     });
    // }

    test = () => {
        axios.get(`/rest/test`).then(response => {
            this.setState({
                result: response.data,
            })
            console.log("---->", response);
        })
        
    }

    render() {
        const { result } = this.state;
        return (
            <div>
				<div style={{paddingTop: '100px', textShadow: '0 0 .1em black', fontSize: '30px'}}>HELLO WORLD</div>
				<Divider />
                <Button type='primary' onClick={() => this.test()}>测试</Button>
				<Button onClick={() => this.props.history.push('/login')}>123</Button>
				{/* <Button onClick={() => this.context.history.push("/#/login")}>123</Button> */}
                <h1>{result}</h1>
            </div>
        );
    }
}
