import React, { useState } from 'react'
import { Grid, Tabs, Tab} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'; 
import OrderDetailTab from './orderInfoTabs/OrderDetailTab'
import ShipmentDetailTab from './orderInfoTabs/ShipmentDetailTab.tsx'
import BillingDetailTab from './orderInfoTabs/BillingDetailTab.tsx'
import SalesDetailTab from './orderInfoTabs/SalesDetailTab'
import './OrderInfo.css'

const useStyles = makeStyles({
    orderInfoButton : {
        backgroundColor: 'rgb(29, 90, 90)',
        color: 'white',
        padding: '10px 7px',
        border: '1px solid rgb(167, 167, 167)',
        outline: 'none',
        width: '25%',
        minWidth: '25%',
        fontSize: '16px',
        textTransform: 'capitalize',
        height: '20px'
        
    },
    optionButton :  {
        padding: '25px 10px 10px 15px',
        fontSize: '20px',
        textTransform: 'uppercase',
        fontWeight: '500',
        display: 'flex',
        marginBottom: '40px'
    },
    grid: {
        padding: '8px'
    }
})

function OrderInfo(props) {

    const [selectedTab, setSelectedTab] = useState(0);

    const handleTabChange = (event, newValue) => {
        setSelectedTab(newValue);
    }

    const classes = useStyles();

    const req_data = [
        {
            itemId: '463728',
            description: 'Blue T-Shirt',
            returnQty : '1',
            quantity: '1',
            reason: 'Damaged'
        },{
            itemId: '463728',
            description: 'Blue T-Shirt',
            returnQty : '1',
            quantity: '1',
            reason: 'Damaged'
        },{
            itemId: '463728',
            description: 'Blue T-Shirt',
            returnQty : '1',
            quantity: '1',
            reason: 'Damaged'
        }
    ]


    return (
        <div className=" order-info-container">
            <Grid container spacing = {2} >
                <Grid  item xs = {12} lg = {6}>   

                    <Grid container direction = 'column' spacing = {0} >
                    
                        <Grid item xs = {12}>
                            <Tabs value = {selectedTab} onChange = {handleTabChange}>
                                {/* <Tab label = 'Order Detail' className = {classes.orderInfoButton} />
                                <Tab label = 'Sales Detail' className = {classes.orderInfoButton}/> */}
                                <Tab label = 'Shipping Address' className = {classes.orderInfoButton}/>
                                <Tab label = 'Billing Address' className = {classes.orderInfoButton}/>                       
                            </Tabs> 
                        </Grid>

                    <Grid item xs = {12} className = {classes.grid}>
                        {/* {selectedTab === 0 && <OrderDetailTab orderDetail = {props.orderDetail}/>}
                        { selectedTab === 1 && <SalesDetailTab orderDetail = {props.orderDetail}/>} */}
                        {selectedTab === 0 &&  <ShipmentDetailTab orderDetail = {props.orderDetail}/>}
                        {selectedTab === 1 &&  <BillingDetailTab orderDetail = {props.orderDetail}/> }
                    </Grid>

                    </Grid>

                </Grid>
                <Grid item xs = {12} md = {12} lg = {6}>
                    <button className="request" >Request</button>
                    <div className = "request-detail">
                        
                        <Grid container className = {classes.optionButton}>
                            <Grid item xs = {4}>
                                <input type="radio" name="option" id = "return" defaultChecked className = 'option-button-input'/>
                                <label htmlFor="return" className = 'option-button-label'>Return</label>
                            </Grid>
                            <Grid item xs = {4}>
                                <input type="radio" name="option" id = "exchange" className = 'option-button-input'/>
                                <label htmlFor="exchange" className = 'option-button-label'>Exchange</label>
                            </Grid>
                            <Grid item xs = {4}>
                                <input type="radio" name="option" id = "cancel" className = 'option-button-input'/>
                                <label htmlFor="cancel" className = 'option-button-label' >Cancel</label>
                            </Grid>
                            <Grid item xs={6}>
                                <input type="radio" name="option" id="ship" className='option-button-input' />
                                <label htmlFor="ship" className='option-button-label' >Shipping Address</label>
                            </Grid>
                            <Grid item xs={6}>
                                <input type="radio" name="option" id="bill" className='option-button-input' />
                                <label htmlFor="bill" className='option-button-label' >Billing Address</label>
                            </Grid>
                            <Grid item xs={6}>
                                <input type="radio" name="option" id="delivery" className='option-button-input' />
                                <label htmlFor="delivery" className='option-button-label' >Change Delivery Date</label>
                            </Grid>
                        </Grid>
                        
                        <Grid container >
                            <Grid item xs = {12}>
                                <div className="request-table">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th><input type="checkbox"/></th>
                                                <th>SKU ID</th>
                                                <th>Description</th>
                                                <th>Return Qty</th>
                                                <th>Quantity</th>
                                                <th>Reason</th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            {
                                                req_data.map( (data, index) => (
                                                    <tr key={index}>
                                                        <td><input type="checkbox"/></td>
                                                        <td>{ data.itemId }</td>
                                                        <td>{ data.description }</td>
                                                        <td>{ data.returnQty }</td>
                                                        <td>{ data.quantity }</td>
                                                        <td>{ data.reason }</td>
                                                    </tr>
                                                ))
                                            }
                                        </tbody>

                                    </table>
                                </div>
                            </Grid>
                        </Grid>
                        
                        <div className="button-container">
                            <button className ="button-cancel">Cancel</button>
                            <button className ="button-proceed">Proceed</button>
                        </div>

                    </div>
                </Grid>
            </Grid>
            
        </div>
    )
}

export default OrderInfo
