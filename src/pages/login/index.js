/* eslint-disable jsx-a11y/anchor-is-valid */

import React, { Component } from 'react'
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import styles from './index.module.css';
import axios from 'axios';

class NormalLoginForm extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            showEgg: false,
        };
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields(async (err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            } else {
                return;
            }
            console.log(values);
            await axios.post('/rest/user/login', {
                "captcha": "",
                "password": values.password,
                "rememberMe": values.remember,
                "userName": values.username
            })

            const { history } = this.props;
            history.push({
                pathname: '/index'
            })
        });
    };

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div className={styles['outer']}>
                <div className={styles['inner']}>
                    <div className={styles['primaryTitle']}>嘉岩供应商管理系统</div>
                    <div className={styles['topLeft']}></div>
                    <div className={styles['topRight']}></div>
                    <div className={styles['bottomRight']}></div>
                    <div className={styles['bottomLeft']}></div>

                    <h1 style={{color: 'rgb(118, 180, 230)', textAlign: 'center', marginBottom: '20px'}}>用 户 登 录</h1>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Item>
                            {
                                getFieldDecorator('username', {
                                    rules: [{ required: true, message: '请输入您的用户名' }],
                                })(
                                    <Input 
                                        prefix={<Icon type='user' style={{ color: 'rgba(4,101,231,63)' }} />}
                                        placeholder="用户名"
                                    />
                                )
                            }
                        </Form.Item>
                        <Form.Item>
                            {
                                getFieldDecorator('password', {
                                    rules: [{ required: true, message: '请输入您的密码' }],
                                })(
                                    <Input 
                                        prefix={<Icon type="lock" style={{ color: 'rgba(54, 101, 231, 63)' }} />}
                                        type='password'
                                        placeholder='密码'
                                    />
                                )
                            }
                        </Form.Item>
                        <Form.Item style={{marginTop: -20}}>
                            {getFieldDecorator('remember', {
                                valuePropName: 'checked',
                                initialValue: true,
                            })(<Checkbox style={{color: '#5397d2', float: 'left'}}>
                                    记住密码
                                </Checkbox>)}
                        </Form.Item>
                        <Form.Item style={{marginTop: -10}}>
                            <Button type="primary" htmlType="submit" className={styles["login-form-button"]}>
                                {'登 录'}
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        );
    }
}

export default Form.create({ name: 'normal_login' })(NormalLoginForm);