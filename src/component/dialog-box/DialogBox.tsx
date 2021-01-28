import React from 'react'
import { Dialog, DialogTitle, DialogContent } from '@material-ui/core'
import DialogActions from '@material-ui/core/DialogActions';
import TableReturn from './TableReturn'
import TableCancel from './TableCancel'
import { OrderDetail } from '../../model/order';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Button from '@material-ui/core/Button';

interface DialogBoxProps{

    openDialogBox : boolean,
    setOpenDialogBox : any, 
    optionValue: string,
    orderDetail: OrderDetail

}

function DialogBox(props : DialogBoxProps) {

    const { openDialogBox, setOpenDialogBox, optionValue, orderDetail} = props;

    return (
        <Dialog open = {openDialogBox} maxWidth = 'lg' >
            <DialogTitle style = {{  textTransform: 'capitalize' }}>
                { optionValue }
            </DialogTitle>

            <IconButton onClick = { () => setOpenDialogBox(false)} style = {{ position : 'absolute', right: '4px', top: '4px' }}>
                <CloseIcon  />
            </IconButton>

            <DialogContent>
                { optionValue === 'return' && <TableReturn orderDetail = {orderDetail} /> }
                { optionValue === 'cancel' && <TableCancel orderDetail = {orderDetail} /> }
            </DialogContent>

            {/* <DialogActions style = {{ margin: '20px' }}>
                <Button variant="outlined" size="medium" >Submit</Button>
            </DialogActions> */}
            
            
        </Dialog>
    )
}

export default DialogBox
