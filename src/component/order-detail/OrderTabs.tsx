import { Tabs } from '@material-ui/core'
import React from 'react'
import { deleteTab, OrderDetailsTabs, OrderDetailTabState, selectTab } from '../../store/order-detail';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { MouseEventHandler } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { RootState } from '../../store';
import ReactJson from 'react-json-view';
import OrderDetailInfo from './OrderDetailInfo'
import { OrderDetail } from '../../model/order';
import SearchTable from '../SearchTable';


interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
    data: OrderDetailTabState;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    const dispatch = useDispatch();
    const handleClose = (uuid: string) => {
        console.log(`Value is ${uuid}`)
        dispatch(deleteTab(uuid));
    }

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`scrollable-force-tabpanel-${index}`}
            aria-labelledby={`scrollable-force-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    {children}
                </Box>
            )}
            { props.data.error && <OrderNotPresentDialogue handleClose={() => { handleClose(props.data.uuid) }} data={props.data} />}
        </div>
    );
}

function OrderTabs(props: any) {
    const dispatch = useDispatch();

    const state: OrderDetailsTabs = useSelector(
        (state: RootState) => state.orderDetail
    )

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        console.log(`Value is ${newValue}`)
        // setValue(newValue);
    };

    const handleClose = (uuid: string) => {
        console.log(`Value is ${uuid}`)
        dispatch(deleteTab(uuid));
    }

    const handleSelect = (idx: number) => {
        dispatch(selectTab(idx));
    }

    return (
        <div>
            <Tabs
                value={state.currentTab}
                onChange={handleChange}
                indicatorColor="primary"
                textColor="primary"
            >
                {state.tabs.map((t, idx) => <MyOrderTab key={idx} onClick={() => handleSelect(idx)} onClose={() => handleClose(t.uuid)} data={t} />)}
            </Tabs>
            { state.tabs.map((t, idx) => <TabPanel key={idx} value={state.currentTab} index={idx} data={t}> {t.orderDetail && <OrderDetailInfo src={t.orderDetail} /> } </TabPanel>)}
            
        </div>
    )
}

interface OrderDetailTabPanelDataProps {
    order: OrderDetail;

}

function OrderDetailTabPanelData(props: OrderDetailTabPanelDataProps) {
    
    const headers = ['SKU ID', 'DESCRIPTION', 'UNIT PRICE', "QUANTITY", 'ORDERDED PRICE', "DISCOUNT PRICE"];
    const body = props.order.product_items.map((itm, idx) => {

        var id = itm.item_id;
        var description = itm.product_name;
        var price = itm.base_price;
        var quantity = itm.quantity;
        var orderPrice = itm.price;
        var discount_price = itm.price_after_item_discount;
        return [id, description, price, quantity, orderPrice, discount_price];
    })

    return (
        <div>
            <SearchTable tableName={"ITEM"} tableHeader={headers} tableBody={ body }/>
            <ReactJson src={props.order} />
        </div>);
}

interface OrderNotPresentDialogueProps {
    handleClose: MouseEventHandler;
    data: OrderDetailTabState;
}

function OrderNotPresentDialogue(props: OrderNotPresentDialogueProps) {
    return (
        <div>
            <Dialog
                open={true}
                onClose={props.handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"Order Not Present"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        { props.data.errorMessage }
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={props.handleClose} color="primary">
                        Ok
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

interface MyOrderTabProps {
    children?: React.ReactNode;
    onClick: MouseEventHandler;
    onClose: MouseEventHandler;
    data: OrderDetailTabState;
}

function MyOrderTab(props: MyOrderTabProps) {
    return (
        <div>
            <Button onClick={props.onClick}>
                {props.data.isLoading ? <p>Loading.....</p> : props.data.error ? <p>Error</p> : <p>{props.data.orderDetail?.order_no}</p>}
            </Button>
            <button onClick={props.onClose}>
                x
            </button>
        </div>
    )
}

export default OrderTabs
