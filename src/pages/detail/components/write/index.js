import React, { useState } from 'react';
import { Routes, Route, Link, Outlet } from 'react-router-dom';
import { images } from '@/constant'
import { Modal, Input, Form, Button, Rate } from 'antd'
import './index.less'

const Component = props => {
    const [form] = Form.useForm()
    const { openModal, setOpenModal } = props;
    const onFinish = (value) => {
        console.log(value, ' value')

    }
    const onCancel = () => {
        form.resetFields()
        setOpenModal(false)
    }
    return (
        <Modal width={394} maskStyle={
            { borderRadius: 10 }
        } className='write-comment' closable={false} onCancel={() => {
            setOpenModal(false)
        }} open={openModal} footer={null}>
            <div className='title' >Write comment</div>
            <Form form={form} onFinish={onFinish}>
            <Form.Item name={'evaluate'} label='Evaluate' rules={[{ required: true, message: 'Please input' }]}>
                    <Rate allowHalf  />
                </Form.Item>
                <Form.Item name={'title'} rules={[{ required: true, message: 'Please input' }]}>
                    <Input placeholder='Write title' />
                </Form.Item>
                <Form.Item name={'comment'} rules={[{ required: true, message: 'Please write comment' }]}>
                    <Input.TextArea className='textarea' showCount maxLength={350} placeholder='Write comment....' />
                </Form.Item>
                <div className='btn'>
                    <Button onClick={onCancel} className='cancel'>
                        Cancel
                    </Button>
                    <Button type="primary" htmlType="submit">
                        Save
                    </Button>
                </div>

            </Form>
        </Modal>
    )
}
export default Component;
