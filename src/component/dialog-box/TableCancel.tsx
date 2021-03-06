import React from 'react'
import { OrderDetail } from '../../model/order'
import DialogTable from './DialogTable'
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Checkbox from '@material-ui/core/Checkbox';
import { useFormik } from 'formik'
import { Button, FormHelperText } from '@material-ui/core';
import { cancelReasonCodes } from '../../utils/config';
import getSymbolFromCurrency from 'currency-symbol-map'


interface TableCheckBoxProps {
    name: string,
    onChange: any,
    value: any
}

function TableCheckBox(props: TableCheckBoxProps){

    const { name, onChange, value } = props;
    return(
        <Checkbox
        name = {name}
        color="primary"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
        onChange={onChange}
        value = { value }
      />
    )
}

interface TableSelectBoxProps{
    reason : string,
    handleReasonChange: any,
    name: string
}

function TableSelectBox(props : TableSelectBoxProps){

    const { reason, handleReasonChange, name} = props;

    return(
        <Select
    
        value={reason}
        onChange={ handleReasonChange}
        name = {name}
        
      >
        
        {cancelReasonCodes.map(reasonCode => <MenuItem value={`${reasonCode.key}`}>{reasonCode.desc}</MenuItem>)}

      </Select> 
    )
}

interface TableCancelProps {
    orderDetail: OrderDetail
    title: string;
    
}


function TableCancel(props: TableCancelProps) {

    // const [reason, setReason] = React.useState('Defected');
    // const handleReasonChange = (event : any) => {
    //     setReason(event.target.value );
    // } 

   const { orderDetail } = props;

   const findQuantity = (id : string) => {

    const found_item = orderDetail.cancellation_items[0].product_items.filter(item => item.product_id === id)
    return found_item[0].quantity;
    }
   
 const cancelled_items_id = orderDetail.hasOwnProperty('cancellation_items') === true ? orderDetail.cancellation_items[0].product_items.map( item => item.product_id) : [];
    
   const item_can_be_cancelled = orderDetail.product_items.filter(item => item.c_cancellable_ind === true).filter(item => !cancelled_items_id.includes(item.product_id) || (cancelled_items_id.includes(item.product_id) && item.quantity > findQuantity(item.product_id)));

   const formik = useFormik({
        initialValues: {
            items: item_can_be_cancelled.map((itm, idx) => {
                return {
                    selected: false,
                    quantity: 0,
                    reason: cancelReasonCodes[0].key
                }
            })
        },
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
    });


    let cancelled_amt = 0;
    let cancelled_tax_amt = 0;
    let cancelled_discount_amt = 0;

    const cancelled_products = item_can_be_cancelled.map( (item, idx) => {
        
        const findVariation = (key : string) => {
            const findKey = item.variation_attributes.filter(variation => variation.display_name === key)
            return findKey[0].display_value
        }

        if(formik.values.items[idx].selected === true){

            cancelled_amt += item.base_price;
            cancelled_tax_amt += item.tax
            cancelled_discount_amt += (item.base_price - item.price_after_item_discount)

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
    
    const cancelled_items = {
        order_no : orderDetail.order_no,
        c_currency_code: orderDetail.currency,
        email_id: orderDetail.customer_info.email,
        create_date: orderDetail.creation_date,
        order_initiate_loc_id: orderDetail.c_initiate_loc_id,
        c_cancellation_id: orderDetail.c_sscid,
        c_cancelled_amount: cancelled_amt,
        c_cancelled_discount_amount: cancelled_discount_amt,
        c_cancelled_tax_amount: cancelled_tax_amt,
        c_partial_cancellation_flag: false,
        product_items: cancelled_products,
        
    }

    
    const handleSubmit = () => {
        console.table(cancelled_items)
    }

    const currency_symbol = getSymbolFromCurrency(cancelled_items.c_currency_code)

    const tableBody = item_can_be_cancelled.map( (data, idx) => {
        
        const selName = `items[${idx}].selected`
        const selQty = `items[${idx}].quantity`
        const selReason = `items[${idx}].reason`

        const errorInRow = (formik.values.items[idx].quantity > data.quantity) || (formik.values.items[idx].quantity < 0) ? true : false

        return ([
            <TableCheckBox
                name={selName}
                onChange={formik.handleChange}
                value={formik.values.items[idx].selected}
            />,
            data.product_id,
            data.item_text,
            <TableSelectBox reason={formik.values.items[idx].reason}  handleReasonChange={formik.handleChange} name={selReason} />,
            <TextField
                id="outlined-basic"
                label="Enter no of items"
                variant="outlined"
                size="small"
                type="number"
                name={selQty}
                onChange={formik.handleChange}
                value={formik.values.items[idx].quantity}
                error = { errorInRow }
            />,
            data.quantity,
            `${currency_symbol} ${data.price}`,
            errorInRow ? 'N.A.' : `${ currency_symbol} ${formik.values.items[idx].quantity * data.price}`
            
        ]);
    })

    const handleButtonDisable = () => {

        const boolean_array = item_can_be_cancelled.map( (data, idx) => {

            if((formik.values.items[idx].quantity > data.quantity) || (formik.values.items[idx].quantity < 0)){
                return true
            }
            else{
                return false
            }
        })

        return boolean_array.includes(true) ? true : false
    }

    console.log(formik.values)
    const isButtonDisabled = handleButtonDisable();

    return (
        <div>
            <form onSubmit = {formik.handleSubmit}>
            
            <DialogTable tableName = {props.title} tableHeader = {['Selected Items','SKU ID', 'Description', 'Reason','Cancel Quantity', 'Original Quantity', 'Sold Price', 'Refundable amount'  ]} tableBody = {tableBody} />
            <Button type='submit' onClick = {handleSubmit} style = { isButtonDisabled ? { margin: '15px 0px', fontSize: '14px', backgroundColor: 'rgb(29, 90, 90, 0.3)', color: 'white', float: 'right'} : { margin: '15px 0px', fontSize: '14px', backgroundColor: 'rgb(29, 90, 90)', color: 'white', float: 'right'}}  disabled = {isButtonDisabled} >Submit</Button>
            { isButtonDisabled === true ? <FormHelperText error>*Please select valid values</FormHelperText> : '' }
            </form>
        </div>
    )
}

export default TableCancel
