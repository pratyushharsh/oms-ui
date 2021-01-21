import React, { useState } from 'react'
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { makeStyles } from '@material-ui/core/styles';

import TabsMaterialContent from './TabsMaterialContent'

const useStyles = makeStyles({
    buttonTab:  {
        backgroundColor: 'rgb(29, 90, 90)',
        color: 'white',
        padding: '1px 3px',
        outline: 'none',
        borderTopLeftRadius: '10px',
        borderTopRightRadius: '10px',
        border: '1px solid gray',
        display: 'flex',
        height: '40px',
        fontSize: '22px',
        fontWeight: '500'
    }
})


function TabsMaterial() {

    const classes = useStyles();
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    }

    const dummyData = [

        { id: '101'},
        { id: '102'},
        { id: '103'},
        { id: '104'},
        { id: '105'},
        { id: '106'},
        { id: '107'},
        { id: '108'},
        { id: '109'},
        { id: '110'}
    ]

    return (
        <div>
             <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="secondary"
                textColor="secondary"
                variant="scrollable"
                scrollButtons="auto"
                >
                    {/* <Tab label= {<TabsMaterialContent/>} className = { classes.buttonTab} />
                    <Tab label= {<TabsMaterialContent/>} className = { classes.buttonTab} />
                    <Tab label= {<TabsMaterialContent/>} className = { classes.buttonTab} />
                    <Tab label="43242443" className = { classes.buttonTab} />
                    <Tab label="43242443" className = { classes.buttonTab} />
                    <Tab label="43242443" className = { classes.buttonTab} />
                    <Tab label="43242443" className = { classes.buttonTab} />
                    <Tab label="43242443" className = { classes.buttonTab} />
                    <Tab label="43242443" className = { classes.buttonTab} />
                    <Tab label="43242443" className = { classes.buttonTab}  /> */}

                    {
                        dummyData.map( () => (

                            <Tab label= {<TabsMaterialContent/>} className = { classes.buttonTab} />
                        ))
                    }
            </Tabs>
        </div>
    )
}

export default TabsMaterial
