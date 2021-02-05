import React from 'react'
import { OrderDetail } from '../../model/order'
import { Grid} from '@material-ui/core' 
import CustomTextField from '../basic/CustomTextField';
import { Button } from '@material-ui/core';

interface ShippingAddressModalProps{
    orderDetail: OrderDetail
}

function ShippingAddressModal(props: ShippingAddressModalProps) {
    return (
        <div>
            <h2 style={{ textTransform: 'capitalize', margin: '10px 0px 5px 10px', borderBottom: '2px solid #c3c1c1', paddingBottom: '10px' }}>Edit Shipping Address</h2>
            <Grid container spacing = {2} style = {{ margin: '15px 5px'}}>
                
                <Grid item xs = {6}>
                    <CustomTextField label='Address Alias' value={''} text={ 'Address Alias' } />
                </Grid>
                <Grid item xs = {6}>
                    <CustomTextField label='Address Line 1' value={props.orderDetail.shipments[0].shipping_address.address1} text={ 'Address Line 1' } />
                </Grid>
                <Grid item xs = {6}>
                    <CustomTextField label='Address Line 2' value={props.orderDetail.shipments[0].shipping_address.address2} text={ 'Address Line 2' } />
                </Grid>
                <Grid item xs = {6}>
                    <CustomTextField label='Address Line 3' value={''} text={ 'Address Line 3' } />
                </Grid>
                <Grid item xs = {6}>
                    <CustomTextField label='Region' value={props.orderDetail.shipments[0].shipping_address.c_area} text={ 'Region' } />
                </Grid>
                <Grid item xs = {6}>
                    <CustomTextField label='Country' value={props.orderDetail.shipments[0].shipping_address.country_code} text={ 'Country' } />
                </Grid>
                <Grid item xs = {6}>
                    <CustomTextField label='Postal Code' value={''} text={ 'Postal Code' } />
                </Grid>

            </Grid>
            <Button type='submit'  style = {{ margin: '15px 0px', fontSize: '14px', backgroundColor: 'rgb(29, 90, 90)', color: 'white', float: 'right'}}>Submit</Button>
        </div>
    )
}

export default ShippingAddressModal
