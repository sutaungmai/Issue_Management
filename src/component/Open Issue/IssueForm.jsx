import React,{useState} from 'react'
import {Form,Button,Space,Drawer,Input,DatePicker, Row, Col, Divider} from 'antd'

function IssueForm() {
    const [visible, setVisible] = useState(false);
    const showDrawer = () => {
        setVisible(true);
        };
    const onClose = () => {
    setVisible(false);
    };
    

    return (
        <React.Fragment>
            <Space>
                <Button type="primary" onClick={showDrawer}>
                    New
                </Button>

                <Button className="btn">
                    Edit
                </Button>

                <Button danger>
                    Delete
                </Button>
            </Space>
                <Drawer width={800} title="Issue Form" placement="right" onClose={onClose} visible={visible}>
                    <Form
                        name="basic"
                        layout="vertical"
                    >

                        <Divider orientation='left'>Issue Form </Divider>
                         <Row justify="space-between">  
                             <Col span={11}>     
                                <Form.Item
                                    label="Issue ID"
                                    name="issue_id"
                                    
                                >
                                    <Input />
                                </Form.Item>
                             </Col>

                             <Col span={11}>
                                <Form.Item
                                    label="Issues"
                                    name="issues"
                                    rules={[
                                    {
                                        required: true,
                                        message: 'Please input your Issues!',
                                    },
                                    ]}
                                >
                                    <Input />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row justify="space-between">
                            <Col span={11}>
                                <Form.Item
                                label="Source"
                                name="source"
                                rules={[
                                {
                                    required: true,
                                    message: 'Please input your Source!',
                                },
                                ]}
                                >
                                    <Input />
                                </Form.Item>
                            </Col>

                            <Col span={11}>
                                <Form.Item
                                    label="Department"
                                    name="department"
                                    rules={[
                                    {
                                        required: true,
                                        message: 'Please input your Department!',
                                    },
                                    ]}
                                >
                                    <Input />
                                </Form.Item>
                            </Col>
                        </Row>

                        <Row justify="space-between">
                            <Col span={11}>
                                <Form.Item
                                    label="Dependencies"
                                    name="dependencies"
                                    rules={[
                                    {
                                        required: true,
                                        message: 'Please input your Dependencies!',
                                    },
                                    ]}
                                >
                                    <Input />
                                </Form.Item>

                        
                            </Col>
                            <Col span={11}>
                                <Form.Item
                                    label="Root Cause"
                                    name="root_cause"
                                    rules={[
                                    {
                                        required: true,
                                        message: 'Please input your Root Cause!',
                                    },
                                    ]}
                                >
                                    <Input />
                                </Form.Item>
                            </Col>
                        </Row>

                        <Row justify="space-between">
                            <Col span={11}>
                                <Form.Item
                                        label="Issue Types"
                                        name="issue_types"
                                        rules={[
                                        {
                                            required: true,
                                            message: 'Please input your Issue Types!',
                                        },
                                        ]}
                                    >
                                    <Input />
                                </Form.Item>

                            </Col>

                            <Col span={11}>
                                <Form.Item label="Requirements">
                                    <Input />
                                </Form.Item>
                            </Col>
                        </Row>    

                        <Row justify="space-between">
                            <Col span={11}>
                                <Form.Item
                                    label="Short Term Solution"
                                    name="short_term_solution"
                                >
                                    <Input />
                                </Form.Item>
                            </Col>
                        
                            <Col span={11}>
                                <Form.Item
                                    label="Long Term Solution"
                                    name="long_term_solution"
                                    
                                >
                                    <Input />
                                </Form.Item>
                            </Col>   
                        </Row>
                        <Row justify="space-around">
                            <Col span={11}>
                                <Form.Item name="start_date" label="Start Date" >

                                    <DatePicker style={{width:"100%"}} />

                                </Form.Item>

                            </Col>
                            <Col span={11}>
                                <Form.Item
                                    label="Close Date"
                                    name="close_date"

                                    >
                                    <DatePicker style={{width:"100%"}} />
                                </Form.Item>
                            </Col>
                        </Row>

                        <Row justify="space-between">
                            <Col span={11}>
                                <Form.Item
                                    label="No. of Days"
                                    name="no._of_days"
                                    >
                                    <Input />

                                </Form.Item>

                            </Col>
                            <Col span={11}> 
                                <Form.Item 
                                    label="Aging"
                                    name="aging">
                                        <Input />
                                </Form.Item>
                            </Col>
                        </Row>

                        <Row justify="space-between">
                            <Col span={11}>
                                <Form.Item
                                    label="Priority"
                                    name="priority"
                                    
                                >
                                    <Input />
                                </Form.Item>
                            </Col>
                            <Col span={11}>
                                <Form.Item
                                    label="Status"
                                    name="status"
                                >
                                    <Input />
                                </Form.Item>
                            </Col>
                        </Row>
                        </Form>
                </Drawer>
             
        </React.Fragment>
  );
}
        
    


export default IssueForm




