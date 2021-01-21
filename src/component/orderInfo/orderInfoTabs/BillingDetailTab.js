import React from 'react'
import { Grid} from '@material-ui/core' 
import { makeStyles } from '@material-ui/core/styles'; 
import './OrderInfoTabs.css'


const useStyles = makeStyles({
    inputContainer: {
        border: '1px solid rgb(167, 167, 167)'
    }
})

function BillingDetailTab(props) {

    const classes = useStyles();

    return (
        <div>
            <Grid container spacing = {2} className = {classes.inputContainer}>
                <Grid item xs = {6}>
                    <input type="text" className="input-box"  placeholder="First Name" value = {} disabled/>
                </Grid>
                <Grid item xs = {6}>
                    <input type="text" className="input-box"  placeholder="Last Name"/>
                </Grid>
                <Grid item xs = {6}>
                    <input type="text" className="input-box" placeholder="Phone"/>
                </Grid>
                <Grid item xs = {6}>
                    <input type="text" className="input-box" placeholder="Email"/>  
                </Grid>
                <Grid item xs = {6}>
                    <input type="text" className="input-box" placeholder="Area"/>
                </Grid>
                <Grid item xs = {6}>
                    <input type="text" className="input-box" placeholder="Address 1"/>
                </Grid>
                <Grid item xs = {6}>
                    <input type="text" className="input-box" placeholder="Address 2"/>
                </Grid>
                <Grid item xs = {6}>
                    <input type="text" className="input-box" placeholder="City"/>
                </Grid>
                <Grid item xs = {6}>
                    <input type="text" className="input-box" placeholder="State"/>
                </Grid>
                <Grid item xs = {6}>
                    <input type="text" className="input-box" placeholder="Address"/>
                </Grid>

            </Grid>
        </div>
    )
}

export default BillingDetailTab
