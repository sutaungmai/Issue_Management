import React,{useState} from 'react'
import {Space,Drawer,Form,Divider,Row,Col,Input,DatePicker,Button} from 'antd'
import { useDetailItem, useGetItem, useMutateItem } from '../../hooks/useitem';
import ItemsForm from '../../Drawer-btn/ItemsForm';


function IssueForm() {

    const [newForm, showNewForm ] = useState(false)
    const [editform, showEditForm ] =useState(false)
    const [detailform, showDetailForm ] = useState(false)
    const [visible, setVisible ] = useState(false)

    //hooks
    const [items, {loading, load} ] = useGetItem()
    const [item, {loading: detailLoading, getItem}] = useDetailItem()
    const [,{loading: mutateLoading,success: mutateSuccess, createItem,editItem, deleteItem}] = useMutateItem()

    // useEffect(() => {
    //     if(!mutateLoading&&mutateSuccess) {

    //     }
    // })

    //function
  

    const onDetail = data => {
        showDetailForm(true)
        getItem(data.id)
    }

    const handleCreate = data => {
        createItem(data)
    }

    const onshowEdit = data => {
        showEditForm(true)
        getItem(data.id)
    }

    const handleEdit = data => {
        editItem(item.id,data)
    }

    const handleDelete = data => {
        deleteItem(data.id)
    }

    //for newForm
    const ShowNewForm =() => {
            setVisible(true)
        }

    const onClose = () => {
        setVisible(false)
    }






    return (
        <React.Fragment>
            <Space>

                <Button type="primary" onClick={ShowNewForm}>
                    Open
                </Button>

                <Button  onClick={onshowEdit}>
                    Edit
                </Button>

                <Button type="danger" onClick={handleDelete}>
                    Delete
                </Button>

            </Space>

            <Drawer width={700} placement="right" onClose={onClose} visible={visible}>
                <ItemsForm onSumit={handleCreate}></ItemsForm>
            </Drawer>

            <Drawer width={700} placement="right" onClose={onClose} visible={visible}>
                <ItemsForm onSumit={handleEdit}></ItemsForm>
            </Drawer>

             
        </React.Fragment>
  );
}
        
    


export default IssueForm




