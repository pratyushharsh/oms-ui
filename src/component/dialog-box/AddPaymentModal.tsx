import React, {useState} from 'react'
import {OrderDetail} from '../../model/order'
import { Typography} from '@material-ui/core';
import Cards from 'react-credit-cards'
import { Grid } from '@material-ui/core'
import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import 'react-credit-cards/es/styles-compiled.css'

interface AddPaymentModalProps{
    orderDetail: OrderDetail;
}

function AddPaymentModal(props : AddPaymentModalProps) {
    
    const [number, setNumber] = useState('');
    const [name, setName] = useState('');
    const [expiry, setExpiry] = useState('');
    const [cvc, setCvc] = useState('');
    const [focus, setFocus] = useState("number");
    
    return (
        <div>
             <Typography align="left" variant="h5" style={{ textTransform: 'capitalize', margin: '10px 0px 25px 10px', borderBottom: '2px solid #c3c1c1', paddingBottom: '10px' }}> Add Payment Info </Typography>

            <Grid container style = {{ marginBottom: '25px'}}>
                <Grid item xs = {6}>
                    <Cards
                    number = {number}
                    name = {name}
                    expiry = {expiry}
                    cvc = {cvc}
                    // @ts-ignore
                    focused = {focus}
                    />
                </Grid>

                <Grid container item xs = {6}>
                <form>
                    {/* <input type="tel" name ='number' placeholder ='Card Number' value = {number} onChange = { e => setNumber(e.target.value)} onFocus = { e => setFocus(e.target.name) } style = {{ width: '70%', marginBottom: '20px', padding: '10px', outline: 'none', marginTop: '10px'}}/>
                    <input type="text" name ='name' placeholder ='Enter Name' value = {name} onChange = { e => setName(e.target.value)} onFocus = { e => setFocus(e.target.name) } style = {{ width: '70%', marginBottom: '20px', padding: '10px', outline: 'none'}}/>
                    <input type="text" name ='expiry' placeholder ='MM/YY Expiry' value = {expiry} onChange = { e => setExpiry(e.target.value)} onFocus = { e => setFocus(e.target.name) } style = {{ width: '30%', marginBottom: '20px', padding: '10px', outline: 'none', marginRight: '10%'}}/>
                    <input type="tel" name ='cvc' placeholder ='CVC' value = {cvc} onChange = { e => setCvc(e.target.value)} onFocus = { e => setFocus(e.target.name) } style = {{ width: '30%', padding: '10px', outline: 'none'}}/> */}
                    <TextField variant="outlined" label = 'Card Number'  type="tel" name ='number'  value = {number} onChange = { e => setNumber(e.target.value)} onFocus = { e => setFocus(e.target.name) } style = {{ width: '70%', marginBottom: '20px', outline: 'none', marginTop: '10px'}} />
                    <TextField variant="outlined" label = 'Enter Name'  type="text" name ='name'  value = {name} onChange = { e => setName(e.target.value)} onFocus = { e => setFocus(e.target.name) } style = {{ width: '70%', marginBottom: '20px',  outline: 'none'}} />
                    <TextField variant="outlined" label = 'MM/YY Expiry'  type="text" name ='expiry'  value = {expiry} onChange = { e => setExpiry(e.target.value)} onFocus = { e => setFocus(e.target.name) } style = {{ width: '30%', marginBottom: '20px',  outline: 'none', marginRight: '10%'}} />
                    <TextField variant="outlined" label = 'CVC'  type="tel" name ='cvc'  value = {cvc} onChange = { e => setCvc(e.target.value)} onFocus = { e => setFocus(e.target.name) } style = {{ width: '30%',  outline: 'none'}} />
                </form>
                </Grid>
            </Grid>

            <Button type='submit'  style = {{ margin: '15px 0px', fontSize: '14px', backgroundColor: 'rgb(29, 90, 90)', color: 'white', float: 'right'}}  >Pay</Button>

        </div>
    )
}

export default AddPaymentModal
