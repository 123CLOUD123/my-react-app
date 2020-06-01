import React, { Component } from 'react';
import { Divider, Button } from 'antd';


export default class Test extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }


    render() {
        return (
            <div>
				<div style={{paddingTop: '100px', textShadow: '0 0 .1em black', fontSize: '30px'}}>HELLO WORLD</div>
				<Divider />
				<Button onClick={() => this.props.history.push('/login')}>123</Button>
            </div>
        );
    }
}
