import React from 'react'
import {OrderDetail} from '../../model/order'
import DialogTable from './DialogTable'
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Checkbox from '@material-ui/core/Checkbox';

function TableCheckBox() {
    return (
        <Checkbox
            color="primary"
            inputProps={{'aria-label': 'secondary checkbox'}}
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

    const {orderDetail} = props;

    // @TODO Filter the item which can be returned and quantity is greater than 0

    const item_can_be_returned = orderDetail.product_items.filter(item => item.c_returnable_ind);

    const tableBody = item_can_be_returned.map(data => ([
        <TableCheckBox/>, data.item_id, data.item_text,
        <TextField id="outlined-basic" label="Enter no of items" variant="outlined" size="small"
                   type="number"/>, data.quantity,
        <TableSelectBox reason={reason} handleReasonChange={handleReasonChange}/>]))

    return (
        <div>
            <DialogTable tableName={'Return'}
                         tableHeader={['Selected Items', 'SKU ID', 'Description', 'Return', 'Quantity', 'Reason']}
                         tableBody={tableBody}/>
        </div>
    )
}

export default TableReturn
