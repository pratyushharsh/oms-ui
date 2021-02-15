import React , { useState } from 'react'
import {OrderDetail} from '../../model/order'
import DialogTable from './DialogTable'
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Checkbox from '@material-ui/core/Checkbox';
import { useFormik } from 'formik'
import { Button } from '@material-ui/core';
import { selectTab } from '../../store/order-detail';
import { returnReasonCodes } from '../../utils/config';
import { FaLessThanEqual } from 'react-icons/fa';



interface TableCheckBoxProps {
    name: string,
    onChange: any,
    value: any
}

function TableCheckBox(props: TableCheckBoxProps) {

    const { name, onChange, value } = props;
    return (
        <Checkbox
            name = {name}
            color="primary"
            inputProps={{'aria-label': 'secondary checkbox'}}
            onChange={onChange}
            value = { value }
        />
    )
}

interface TableSelectBoxProps {
    reason: string,
    handleReasonChange: any,
    name: string,

}

function TableSelectBox(props: TableSelectBoxProps) {

    const {reason, handleReasonChange, name} = props;

    return (
        <Select
            value={reason}
            onChange={handleReasonChange}
            name = {name}
        >
            {returnReasonCodes.map(reasonCode => <MenuItem value={`${reasonCode.key}`}>{reasonCode.desc}</MenuItem>)}
            
        </Select>
    )
}

interface TableReturnProps {
    orderDetail: OrderDetail;
    title: string;
}

function TableReturn(props: TableReturnProps) {

    // const [reason, setReason] = React.useState('Defected');
    // const handleReasonChange = (event: any) => {
    //     setReason(event.target.value);
    // }

    const {orderDetail} = props;

    // @TODO Filter the item which can be returned and quantity is greater than 0

    const findQuantity = (id : string) => {

        const found_item = orderDetail.cancellation_items[0].product_items.filter(item => item.product_id === id)
        return found_item[0].quantity;
    }

    const cancelled_items_id = orderDetail.hasOwnProperty('cancellation_items') === true ? orderDetail.cancellation_items[0].product_items.map( item => item.product_id) : [];
    const item_can_be_returned = orderDetail.product_items.filter(item => item.c_returnable_ind).filter(item => !cancelled_items_id.includes(item.product_id) || (cancelled_items_id.includes(item.product_id) && item.quantity > findQuantity(item.product_id)));

    const formik = useFormik({
        initialValues: {
            items: item_can_be_returned.map((itm, idx) => {
                return {
                    selected: false,
                    quantity: 0,
                    reason: returnReasonCodes[0].key
                }
            })
        },
        onSubmit: (values) => {
            // alert(JSON.stringify(values, null, 2));
        },
    });

    let refund_amt = 0;
    let refund_tax_amt = 0;
    let refund_discount_amt = 0;

    const returned_products = item_can_be_returned.map( (item, idx) => {
        
        const findVariation = (key : string) => {
            const findKey = item.variation_attributes.filter(variation => variation.display_name === key)
            return findKey[0].display_value
        }

        if(formik.values.items[idx].selected === true){

            refund_amt += item.base_price;
            refund_tax_amt += item.tax
            refund_discount_amt += (item.base_price - item.price_after_item_discount)

            return {

                
                brand: item.brand,
                title: item.product_name,
                shipment_id: item.shipment_id,
                product_id: item.product_id,
                product_name:item.product_name,
                quantity: formik.values.items[idx].quantity,
                reason_code: formik.values.items[idx].reason,
                color: findVariation('Color'),
                size: findVariation('Size'),
                price: item.price
                
            }
        }
    })
    
    const returned_items = {
        order_no : orderDetail.order_no,
        c_currency_code: orderDetail.currency,
        email_id: orderDetail.customer_info.email,
        create_date: orderDetail.creation_date,
        c_return_initiate_loc_id: orderDetail.c_initiate_loc_id,
        c_rma_id: orderDetail.c_sscid,
        order_status: orderDetail.status,
        c_warehouse_return_flag: false,
        c_store_return_flag: false,
        refund_amount: refund_amt,
        refund_discount_amount: refund_discount_amt,
        refund_tax_amount: refund_tax_amt,
        product_items: returned_products,
        pickup_address: {
            id: orderDetail.billing_address.id,
            city: orderDetail.billing_address.city,
            phone: orderDetail.billing_address.phone,
            c_area: orderDetail.billing_address.c_area,
            c_email: orderDetail.billing_address.c_email,
            address1: orderDetail.billing_address.address1,
            address2: orderDetail.billing_address.address2,
            full_name: orderDetail.billing_address.full_name,
            first_name: orderDetail.billing_address.first_name,
            state_code: orderDetail.billing_address.state_code,
            country_code: orderDetail.billing_address.country_code,
            c_addressType:orderDetail.billing_address.c_addressType
        }
    }

    
    const handleSubmit = () => {
        console.table(returned_items)
    }
    
    

    let tableBody = item_can_be_returned.map((data, idx) => {
        
        const selName = `items[${idx}].selected`;
        const selQty = `items[${idx}].quantity`;
        const selReason = `items[${idx}].reason`
        
    
        return ([
            <TableCheckBox
                name={selName}
                onChange={formik.handleChange}
                value={formik.values.items[idx].selected}
            />,
            data.product_id,
            data.item_text,
            <TableSelectBox reason={formik.values.items[idx].reason} handleReasonChange={formik.handleChange} name={selReason}  />,
            <TextField
                id="outlined-basic"
                label="Enter no of items"
                variant="outlined"
                size="small"
                type="number"
                name={selQty}
                onChange={formik.handleChange}
                value={formik.values.items[idx].quantity}
                error = { (formik.values.items[idx].quantity > data.quantity) || (formik.values.items[idx].quantity < 0) ? true : false}
            />,
            data.quantity,
            data.price,
            formik.values.items[idx].quantity * data.price
           
        ]);
    })

    

    console.log(formik.values)

    return (
        <div>
            <form onSubmit = {formik.handleSubmit}>
            <DialogTable tableName={props.title}
                         tableHeader={['Selected Items', 'SKU ID', 'Description', 'Reason','Return Quantity', 'Original Quantity', 'Sold Price', 'Refundable amount' ]}
                    tableBody={tableBody} >
            </DialogTable>
            
            <Button type='submit' onClick = {handleSubmit} style = {{ margin: '15px 0px', fontSize: '14px', backgroundColor: 'rgb(29, 90, 90)', color: 'white', float: 'right'}}  >Submit</Button>
            
            </form>
        </div>
    )
}

export default TableReturn
