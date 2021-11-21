import React,{useState} from 'react'
import {Form,Button,Modal,Input,DatePicker, Divider} from 'antd'

function IssueForm() {
    const [isModalVisible, SetIsModalVisible] = useState(false);

    const showModal = () => {
        SetIsModalVisible(true);
    }

    const handleOk = () => {
        SetIsModalVisible(false);
    }

    const handleCancel = () => {
        SetIsModalVisible(false);
    }

    return (
        <React.Fragment>
            <Button type="primary" onClick={showModal}>
                New
            </Button>

             <Modal title="Issue" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
             
                <Form
                    name="basic"
                    labelCol={{
                        span: 8,
                    }}
                    wrapperCol={{
                        span: 16,
                    }}
                    layout="vertical"
                >

                    <Divider orientation='left'>Issue Form </Divider>
                    <Form.Item
                        label="Issue ID"
                        name="issue_id"
                        
                    >
                        <Input />
                    </Form.Item>

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

                    <Form.Item
                        label="Short Term Solution"
                        name="short_term_solution"
                        
                        
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Long Term Solution"
                        name="long_term_solution"
                        
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item name="start_date" label="Start Date" >
                        <DatePicker />
                    </Form.Item>

                    <Form.Item
                        label="Close Date"
                        name="close_date"

                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="No. of Days"
                        name="no._of_days"
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item 
                        label="Deadline"
                        name="deadline"  >
                        <DatePicker />
                    </Form.Item>

                    <Form.Item
                        label="Priority"
                        name="priority"
                        
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Status"
                        name="status"
                    >
                        <Input />
                    </Form.Item>

                    
                    </Form>
        
             </Modal>
        </React.Fragment>
  );
}
        
    


export default IssueForm
