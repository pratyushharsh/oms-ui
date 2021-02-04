import React from 'react'
import { Dialog, DialogTitle, DialogContent } from '@material-ui/core'
import DialogActions from '@material-ui/core/DialogActions';
import TableReturn from './TableReturn'
import TableCancel from './TableCancel'
import { OrderDetail } from '../../model/order';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Button from '@material-ui/core/Button';

interface DialogModalProps{

    openDialogBox : boolean,
    setOpenDialogBox : any, 
    optionValue: string,
    orderDetail: OrderDetail

}

function DialogModal(props : DialogModalProps) {

    const { openDialogBox, setOpenDialogBox, optionValue, orderDetail} = props;

    return (
        <Dialog open = {openDialogBox} maxWidth = 'lg' style = {{ padding: '0'}}>
            <DialogTitle style = {{  textTransform: 'capitalize' }}>
                { optionValue === 'return' && 'Select items to return' }
                { optionValue === 'cancel' && 'Select items to cancel'  }
                { optionValue === 'exchange' && 'Select items to exchange' }
                { optionValue === 'priceAdjustment' && 'Select items for price adjustment'  }
            </DialogTitle>

            <IconButton onClick = { () => setOpenDialogBox(false)} style = {{ position : 'absolute', right: '4px', top: '4px' }}>
                <CloseIcon  />
            </IconButton>

            <DialogContent>
                { optionValue === 'return' && <TableReturn title={`Select Items To Return`} orderDetail = {orderDetail} /> }
                { optionValue === 'cancel' && <TableCancel  title={`Select Items To Cancel`} orderDetail = {orderDetail} /> }
                { optionValue === 'exchange' && <TableReturn title={`Select Items To Exchange`} orderDetail = {orderDetail} /> }
                { optionValue === 'priceAdjustment' && <TableReturn title={`Select Items For Price Adjustment`} orderDetail = {orderDetail} /> }

            </DialogContent>

            {/* <DialogActions style = {{ margin: '20px' }}>
                <Button variant="outlined" size="medium" >Submit</Button>
            </DialogActions> */}
            
            
        </Dialog>
    )
}

export default DialogModal
