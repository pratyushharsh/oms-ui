import React from 'react'
import { OrderDetail } from '../../model/order'
import { Grid} from '@material-ui/core' 
import CustomTextField from '../basic/CustomTextField';
import { Button } from '@material-ui/core';
import { useFormik } from 'formik'

interface ShippingAddressModalProps{
    orderDetail: OrderDetail
}



function ShippingAddressModal(props: ShippingAddressModalProps) {

    const formik = useFormik({
        initialValues: {
            
            addressAlias: '',
            addressLine1: props.orderDetail.shipments[0].shipping_address.address1,
            addressLine2: props.orderDetail.shipments[0].shipping_address.address2,
            addressLine3: '',
            region: props.orderDetail.shipments[0].shipping_address.c_area,
            country: props.orderDetail.shipments[0].shipping_address.country_code,
            postalCode: ''
        },
        onSubmit: (values) => {
            // alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <div>
            <h2 style={{ textTransform: 'capitalize', margin: '10px 0px 5px 10px', borderBottom: '2px solid #c3c1c1', paddingBottom: '10px' }}>Edit Shipping Address</h2>
            <Grid container spacing = {2} style = {{ margin: '15px 5px'}}>
                
                <Grid item xs = {6}>
                    <CustomTextField label='Address Alias' value={formik.values.addressAlias} text={ 'Address Alias' } onChange={formik.handleChange} name = {'addressAlias'}/>
                </Grid>
                <Grid item xs = {6}>
                    <CustomTextField label='Address Line 1' value={formik.values.addressLine1} text={ 'Address Line 1' } onChange={formik.handleChange} name = {'addressLine1'}/>
                </Grid>
                <Grid item xs = {6}>
                    <CustomTextField label='Address Line 2' value={formik.values.addressLine2} text={ 'Address Line 2' } onChange={formik.handleChange} name = {'addressLine2'}/>
                </Grid>
                <Grid item xs = {6}>
                    <CustomTextField label='Address Line 3' value={formik.values.addressLine3} text={ 'Address Line 3' } onChange={formik.handleChange} name = {'addressLine3'}/>
                </Grid>
                <Grid item xs = {6}>
                    <CustomTextField label='Region' value={formik.values.region} text={ 'Region' } onChange={formik.handleChange} name = {'region'}/>
                </Grid>
                <Grid item xs = {6}>
                    <CustomTextField label='Country' value={formik.values.country} text={ 'Country' } onChange={formik.handleChange} name = {'country'}/>
                </Grid>
                <Grid item xs = {6}>
                    <CustomTextField label='Postal Code' value={formik.values.postalCode} text={ 'Postal Code' } onChange={formik.handleChange} name = {'postalCode'}/>
                </Grid>

            </Grid>
            <Button type='submit'  style = {{ margin: '15px 0px', fontSize: '14px', backgroundColor: 'rgb(29, 90, 90)', color: 'white', float: 'right'}}>Submit</Button>
        </div>
    )
}

export default ShippingAddressModal
