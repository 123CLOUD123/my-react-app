import React, { Component } from 'react';
import { Divider, Button } from 'antd';


export default class Test extends Component {


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

    render() {
        return (
            <div>
				<div style={{paddingTop: '100px', textShadow: '0 0 .1em black', fontSize: '30px'}}>HELLO WORLD</div>
				<Divider />
				<Button onClick={() => this.props.history.push('/login')}>123</Button>
				{/* <Button onClick={() => this.context.history.push("/#/login")}>123</Button> */}
            </div>
        );
    }
}
