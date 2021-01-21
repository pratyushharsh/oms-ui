import React from 'react'
import { Grid} from '@material-ui/core' 
import { makeStyles } from '@material-ui/core/styles'; 
import './OrderInfoTabs.css'


const useStyles = makeStyles({
    inputContainer: {
        border: '1px solid rgb(167, 167, 167)'
    }
})

function SalesDetailTab() {

    const classes = useStyles();

    return (
        <div>
            <Grid container spacing = {2} className = {classes.inputContainer}>
                <Grid item xs = {6}>
                    <input type="text" className="input-box"  placeholder="Sales"/>
                </Grid>
                <Grid item xs = {6}>
                    <input type="text" className="input-box"  placeholder="Salutation"/>
                </Grid>
                <Grid item xs = {6}>
                    <input type="text" className="input-box" placeholder="Address Alias"/>
                </Grid>
                <Grid item xs = {6}>
                    <input type="text" className="input-box" placeholder="First Name"/>  
                </Grid>
                <Grid item xs = {6}>
                    <input type="text" className="input-box" placeholder="Address Line 1"/>
                </Grid>
                <Grid item xs = {6}>
                    <input type="text" className="input-box" placeholder="Last Name"/>
                </Grid>
                <Grid item xs = {6}>
                    <input type="text" className="input-box" placeholder="Address Line 2"/>
                </Grid>
                <Grid item xs = {6}>
                    <input type="text" className="input-box" placeholder="Middle Name"/>
                </Grid>
                <Grid item xs = {6}>
                    <input type="text" className="input-box" placeholder="Address Line 3"/>
                </Grid>
                <Grid item xs = {6}>
                    <input type="text" className="input-box" placeholder="Company Name"/>
                </Grid>
                <Grid item xs = {6}>
                    <input type="text" className="input-box" placeholder="Region"/>
                </Grid>
                <Grid item xs = {6}>
                    <input type="text" className="input-box" placeholder="Email"/>
                </Grid>
                <Grid item xs = {6}>
                    <input type="text" className="input-box" placeholder="Country"/>
                </Grid>
                <Grid item xs = {6}>
                    <input type="text" className="input-box" placeholder="Telephone"/>
                </Grid>
                <Grid item xs = {6}>
                    <input type="text" className="input-box" placeholder="Postal Code"/>
                </Grid>
                <Grid item xs = {6}>
                    <input type="text" className="input-box" placeholder="Note"/>
                </Grid>

            </Grid>
        </div>
    )
}

export default SalesDetailTab
