import React, { Component } from 'react';
import { Divider, Button } from 'antd';

export default class Test extends Component {

    render() {
        return (
            <div>
				<div style={{paddingTop: '100px', textShadow: '0 0 .1em black', fontSize: '30px'}}>HELLO WORLD</div>
				<Divider />
				<Button>123</Button>
            </div>
        );
    }
}
