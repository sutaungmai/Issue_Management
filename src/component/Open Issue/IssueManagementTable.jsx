import React from 'react'
import {Table,Row, Col} from 'antd'
import IssueForm from './IssueForm'
import 'antd/dist/antd.css'
import {useGetItem } from '../../hooks/useitem'




function IssueManagementTable() {
    const columns = [
        {
            key: 'id',
            title: 'Issue Id',
            dataIndex: 'id',
            
        },
        {
            key: 'issues',
            title: 'Issues',
            dataIndex: 'issues',
            
        },
        {
            key: 'sources',
            title: 'Sources',
            dataIndex: 'sources',
            
        },
        {
            key: 'department',
            title: 'Department',
            dataIndex: 'department',
        },
        {
            key: 'dependencies',
            title: 'Dependencies',
            dataIndex: 'dependencies',
            
        },
        {
            key: 'root_cause',
            title: 'Root Cause',
            dataIndex: 'root_cause',
            
        },
        {
            key: 'issue_types',
            title: 'Issue Types',
            dataIndex: 'issue_types',
        },
        {
            key: 'requirements',
            title: 'Requirements',
            dataIndex: 'requirements',
        },
        {
            key: 'short_term_solution',
            title: 'Short Term Solution',
            dataIndex: 'short_term_solution',
            
        },
        {
            key: 'long_term_solution',
            title: 'Long Term Solution',
            dataIndex: 'long_term_solution',
            
        },
        {
            key: 'start_date',
            title: 'Start Date',
            dataIndex: 'start_date',
        },
        {
            key: 'close_date',
            title: 'Close Date',
            dataIndex: 'close_date',
        },
        {
            key: 'no_of_days',
            title: 'No. of Days',
            dataIndex: 'no_of_days',
        },
        {
            key: 'aging',
            title: 'Aging',
            dataIndex: 'aging'
        },
        {
            key: 'deadline',
            title: 'Deadline',
            dataIndex: 'deadline',
        },
        {
            key: 'priority',
            title: 'Priority',
            dataIndex: 'priority',
        },
        {
            key: 'status',
            title: 'Status',
            dataIndex: 'status',
        },
        {
            key: 'remark',
            title: 'Remark',
            dataIndex: 'remark',
        },
        {
            key: 'status',
            title: 'Status',
            dataIndex: 'status',
        },
    ]

    const [data] = useGetItem()
    console.log(data)
    return (
        <React.Fragment>
                <Col>
                    <Row span={1} style={{padding: "10px"}}>
                        <IssueForm />
                    </Row>

                    <Row span={24} style={{padding: "10px"}}>
                        <Table
                
                            columns={columns}
                            dataSource={data}

                        />
                    </Row>
                </Col>
                
                
            
        </React.Fragment>
    )
}

export default IssueManagementTable
