import React from 'react'
import {OrderDetail} from '../../model/order'
import DialogTable from './DialogTable'
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Checkbox from '@material-ui/core/Checkbox';
import { useFormik } from 'formik'

function TableCheckBox(props : any) {

    const { onChange, value } = props;
    return (
        <Checkbox
            name = 'checkBox'
            color="primary"
            inputProps={{'aria-label': 'secondary checkbox'}}
            onChange = {onChange}
            value = { value }
        />
    )
}

interface TableSelectBoxProps {
    reason: string,
    handleReasonChange: any
}

function TableSelectBox(props: TableSelectBoxProps) {

    const {reason, handleReasonChange} = props;

    return (
        <Select
            value={reason}
            onChange={handleReasonChange}
        >

            <MenuItem value={'Defected'}>Defected</MenuItem>
            <MenuItem value={'Defected'}>Defected</MenuItem>
            <MenuItem value={'Defected'}>Defected</MenuItem>
        </Select>
    )
}

interface TableReturnProps {
    orderDetail: OrderDetail
}

function TableReturn(props: TableReturnProps) {

    const [reason, setReason] = React.useState('Defected');
    const handleReasonChange = (event: any) => {
        setReason(event.target.value);
    }

    const formik = useFormik({
        initialValues: {
            
            
            items: [{
                checkBox: false,
                quantity: 0
            },
            {
                checkBox: false,
                quantity: 0
            }
            ]
    
        },
        onSubmit: values => {
            console.log('Form data')
        }

    })

    const {orderDetail} = props;

    // @TODO Filter the item which can be returned and quantity is greater than 0

    const findQuantity = (id : string) => {

        const found_item = orderDetail.cancellation_items[0].product_items.filter(item => item.product_id === id)
        return found_item[0].quantity;
    }

    const cancelled_items_id = orderDetail.cancellation_items[0].product_items.map( item => item.product_id)
    const item_can_be_returned = orderDetail.product_items.filter(item => item.c_returnable_ind).filter(item => !cancelled_items_id.includes(item.product_id) || (cancelled_items_id.includes(item.product_id) && item.quantity > findQuantity(item.product_id)));

    let tableBody = item_can_be_returned.map((data,idx) => ([
        <TableCheckBox onChange = {formik.handleChange}
        value = { formik.values.items[idx].checkBox }/>, data.item_id, data.item_text,
        <TextField id="outlined-basic" label="Enter no of items" variant="outlined" size="small"
                   type="number" name = 'quantity' onChange = {formik.handleChange}
                   value = { formik.values.items[idx].quantity }/>, data.quantity,
        <TableSelectBox reason={reason} handleReasonChange={handleReasonChange}/>]))

    console.log(formik.values)

    return (
        <div>
            <form onSubmit = {formik.handleSubmit}>
            <DialogTable tableName={'Return'}
                         tableHeader={['Selected Items', 'SKU ID', 'Description', 'Return', 'Quantity', 'Reason']}
                         tableBody={tableBody} />
            </form>
        </div>
    )
}

export default TableReturn
