import { Layout } from 'antd'
import React from 'react'

function Sidebar() {
    return (
        <div>
            <React.Fragment>
                <Layout.Sider
                style={{
                    overflow:'auto',
                    height: '100vh',
                }}
                >

                </Layout.Sider>
            </React.Fragment>    
        </div>
    )
}

export default Sidebar
