import React, { useState } from 'react';
import { Button, Modal, Form, Input, Space } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';

const CreateModal = ({ modalVisible, setModalVisible }) => {
    const [form] = Form.useForm();

    return (
        <Modal
            visible={modalVisible}
            title="Create a new attendee list"
            okText="Create"
            cancelText="Cancel"
            onCancel={() => setModalVisible(false)}
            onOk={() => {
                form
                .validateFields()
                .then(values => {
                    form.resetFields();
                    console.log(values);
                })
                .catch(info => {
                    console.log('Validate Failed:', info);
                });
            }}
        >
            <Form 
                form={form} 
                autoComplete="off"
                layout="vertical"
                >
                <Form.Item name="description" label="Name">
                    <Input type="textarea" />
                </Form.Item>
                <p>Requested Info</p>
                <Form.List name="users">
                    {(fields, { add, remove }) => (
                        <>
                            {fields.map(field => (
                                <div  key={field.key} style={{ display: 'flex', marginBottom: 8 }} align="baseline">
                                    <Form.Item
                                        style={{width:"100%", marginRight:"10px"}}
                                        {...field}
                                        name={[field.name, 'first']}
                                        fieldKey={[field.fieldKey, 'first']}
                                        rules={[{ required: true, message: 'Missing first name' }]}
                                    >
                                        <Input placeholder="First Name" />
                                    </Form.Item>
                                    <MinusCircleOutlined style={{ marginTop:"8px"}} onClick={() => remove(field.name)} />
                                </div >
                            ))}
                            <Form.Item>
                                <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                                    Add field
                                </Button>
                            </Form.Item>
                        </>
                    )}
                </Form.List>
                </Form>
        </Modal>
    );
}

export default CreateModal
