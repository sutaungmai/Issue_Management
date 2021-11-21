import React from 'react'
import {Table} from 'antd'
import 'antd/dist/antd.css'



function IssueManagementTable() {
    const columns = [
        {
            key: 'issue_id',
            title: 'Issue Id',
            dataIndex: 'issue_id',
            
        },
        {
            key: 'issues',
            title: 'Issues',
            dataIndex: 'issues',
            
        },
        {
            key: 'source',
            title: 'Source',
            dataIndex: 'source',
            
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
    return (
        <React.Fragment>
                
                
                <Table
                
                    columns={columns}
            />
            
        </React.Fragment>
    )
}

export default IssueManagementTable
