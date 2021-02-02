import React, { useState } from 'react'
import { Grid, Tabs, Tab} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'; 
import OrderDetailTab from './orderInfoTabs/OrderDetailTab'
import ShipmentDetailTab from './orderInfoTabs/ShipmentDetailTab'
import BillingDetailTab from './orderInfoTabs/BillingDetailTab'
import SalesDetailTab from './orderInfoTabs/SalesDetailTab'
import DialogBox from '../dialog-box/DialogBox'
import './OrderInfo.css'
import SearchTable from '../SearchTable'
import { OrderDetail } from '../../model/order';


const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
            margin: '40px 45px',
            // minWidth: theme.spacing(175),

        },
    },
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
        fontSize: '16px',
        textTransform: 'uppercase',
        fontWeight: 400,
        display: 'flex',
        marginBottom: '40px'
    },
    grid: {
        padding: '8px'
    }
})

interface OrderInfoProps{
    orderDetail: OrderDetail
}

function OrderInfo(props : OrderInfoProps) {

    const [selectedTab, setSelectedTab] = useState(0);
    const [optionValue, setOptionValue] = useState('return')
    const [openDialogBox, setOpenDialogBox] = useState(false);

    const handleTabChange = (event : any, newValue : number) => {
        setSelectedTab(newValue);
    }

    const handleOptionChange = (event : any) => {
        setOptionValue(event.target.value);
    }

    const paymentDetailHeader = [
        'Mode',
        'Card Type',
        'Number',
        'Expiration Date',
        'Holder Name',
        'Amount',
        'Date',        
    ]

    const paymentDetailBody = props.orderDetail.payment_instruments.map((data, idx) => ([
        data?.payment_method_id,
        data?.payment_card?.card_type,
        data?.payment_card?.masked_number,
        `${data?.payment_card?.expiration_month}/${data?.payment_card?.expiration_year}`,
        data?.payment_card?.holder,
        data.amount,
        '2/12',
    ]))

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={1} >
                <Grid item xs={12} md={12} lg={12}>
                    <button className="request" >Request</button>
                    <div className="request-detail">

                        <Grid container className={classes.optionButton}>
                            <Grid item xs={2}>
                                <input type="radio" name="option" id="return" value="return" defaultChecked className='option-button-input' onClick={handleOptionChange} />
                                <label htmlFor="return" className='option-button-label'>Return</label>
                            </Grid>
                            <Grid item xs={2}>
                                <input type="radio" name="option" id="exchange" value="exchange" className='option-button-input' onClick={handleOptionChange} />
                                <label htmlFor="exchange" className='option-button-label'>Exchange</label>
                            </Grid>
                            <Grid item xs={2}>
                                <input type="radio" name="option" id="cancel" value="cancel" className='option-button-input' onClick={handleOptionChange} />
                                <label htmlFor="cancel" className='option-button-label' >Cancel</label>
                            </Grid>
                            <Grid item xs={2}>
                                <input type="radio" name="option" id="ship" className='option-button-input' onClick={handleOptionChange} />
                                <label htmlFor="ship" className='option-button-label' >Shipping Address</label>
                            </Grid>

                            <Grid item xs={2}>
                                <input type="radio" name="option" id="delivery" className='option-button-input' onClick={handleOptionChange} />
                                <label htmlFor="delivery" className='option-button-label' >Change Del Date</label>
                            </Grid>

                            <Grid item xs={2}>
                                <input type="radio" name="option" id="priceAdjustment" value="priceAdjustment"  className='option-button-input' onClick={handleOptionChange} />
                                <label htmlFor="delivery" className='option-button-label' >Price Adjustment</label>
                            </Grid>
                        </Grid>

                        <DialogBox openDialogBox={openDialogBox} setOpenDialogBox={setOpenDialogBox} optionValue={optionValue} orderDetail={props.orderDetail} />

                        <div className="button-container">
                            <button className="button-cancel">Cancel</button>
                            <button className="button-proceed" onClick={() => { setOpenDialogBox(true) }}>Proceed</button>
                        </div>

                    </div>
                </Grid>


                {/* <Grid  item xs = {12} lg = {6}>   
                    <Grid container direction = 'column' spacing = {0} >
                    
                        <Grid item xs = {12}>
                            <Tabs value = {selectedTab} onChange = {handleTabChange}>
                                <Tab label = 'Order Detail' className = {classes.orderInfoButton} />
                                <Tab label = 'Sales Detail' className = {classes.orderInfoButton}/>
                                <Tab label = 'Shipping Address' className = {classes.orderInfoButton}/>
                                <Tab label = 'Billing Address' className = {classes.orderInfoButton}/>                       
                            </Tabs> 
                        </Grid>

                        <Grid item xs = {12} className = {classes.grid}>
                            {selectedTab === 0 && <OrderDetailTab orderDetail = {props.orderDetail}/>}
                            { selectedTab === 1 && <SalesDetailTab orderDetail = {props.orderDetail}/>}
                            {selectedTab === 0 &&  <ShipmentDetailTab orderDetail = {props.orderDetail}/>}
                            {selectedTab === 1 &&  <BillingDetailTab orderDetail = {props.orderDetail}/> }
                        </Grid>

                    </Grid>

                </Grid> */}

                {/* <Grid item xs={12}>
                    <SearchTable tableName={'Payment Detail'} tableHeader={paymentDetailHeader} tableBody={paymentDetailBody}  />
                </Grid> */}
            </Grid>
            
        </div>
    )
}

export default OrderInfo
