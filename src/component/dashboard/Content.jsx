import React from 'react'
import IssueForm from '../reception/IssueForm'
import IssueManagementTable from '../reception/IssueManagementTable'
// import 'antd/dist/antd.css'

function Content() {
    return (
        <React.Fragment>
                <IssueForm className="NewForm"></IssueForm>
                <IssueManagementTable></IssueManagementTable>           
        </React.Fragment>
    )
}

export default Content
