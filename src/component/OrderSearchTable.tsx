import React , { useState} from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Typography, Box, FormControl, Select, MenuItem, FormHelperText, TextField, Table , TableContainer, TableBody, TableCell, TableHead, TableRow, TablePagination  } from '@material-ui/core';
import OrderStatus from './OrderStatus'
import {  OrderSearchResult } from '../store/search/types';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(5),
        width: theme.spacing(175),
        
      },
    },
  
    selectButton: {
        width: theme.spacing(20),
        height: theme.spacing(5),
        textAlign: 'left',
        marginRight: '30px'
    },
  
    textInput: {
      height: theme.spacing(5)
    },
  }));
  

function OrderSearchTable(props: any) {
    
    const rows : OrderSearchResult[] = props.data
    const classes = useStyles();

  const [statusValue, setStatusValue] = useState('All');
  const [conditionValue, setConditionValue] = useState('All');
  const [rowsPerPage, setRowsPerPage] = useState(3);
  const [page, setPage] = useState(0);
  
  const [search, setSearch] = useState('');

  const handleStatusChange = (event : any ) => {
      setStatusValue(event.target.value);
  }

  const handleConditionChange = (event : any) => {
    setConditionValue(event.target.value);
}

const handleInputChange = (event : any) => {
  setSearch(event.target.value);
}

  const onChangePage = (event : any, nextPage: number) => {
    setPage(nextPage);
  }

  const onChangeRowsPerPage = (event: any) => {
    setRowsPerPage(event.target.value);
  }



  return (
    <div className={classes.root}>
      
      <Paper elevation={3} style = {{ borderBottom: '1.5px solid #c3c1c1', borderRadius: '8px'}}>
        <Box p = {3} style = {{ borderBottom: '2px solid #c3c1c1'}}>
            <Typography align = "left" variant = "h5" style = {{ textTransform: 'uppercase'}}> Order Detail </Typography>
        </Box>
        
        <Box p = {3} style = {{ textAlign: 'left'}}>
            
            <FormControl variant="outlined"  >
            
                <Select
                labelId = 'select-status'
                id='select-option-status'
                value = {statusValue}
                onChange = {handleStatusChange}
                className = {classes.selectButton}
                >
                    <MenuItem value = {'All'}>All</MenuItem>
                    <MenuItem value = {'0'}>Shipped</MenuItem>
                    <MenuItem value = {'Pickup In Progress'}>Pickup In Progress</MenuItem>
                    <MenuItem value = {'Created'}>Created</MenuItem>
                    <MenuItem value = {'Cancelled'}>Cancelled</MenuItem>
                </Select>
                <FormHelperText >Filter By Status</FormHelperText>
            </FormControl>

            <FormControl variant="outlined"  >
                    <Select
                    labelId = 'select-condition'
                    id='select-option-condition'
                    value = {conditionValue}
                    onChange = {handleConditionChange}
                    className = {classes.selectButton}>
                        <MenuItem value = {'All'}>All</MenuItem>
                        
                    </Select>
                <FormHelperText>Filter By Condition</FormHelperText>
            </FormControl>

            <FormControl  >
                <TextField id="outlined-search" label="Search" type="search" variant="outlined" className = {classes.textInput} size = "small" onChange = {handleInputChange}/>
                <FormHelperText >Search in all fields</FormHelperText>
            </FormControl>
        </Box>

        <Box p = {3} component={Paper}>
            <TableContainer >
                <Table aria-label="simple table">
                    <TableHead >
                        <TableRow style = {{ textTransform: 'uppercase'}}>
                            <TableCell align="left" style ={{ color: 'gray', fontWeight: 600}}>Order ID</TableCell>
                            <TableCell align="left" style ={{ color: 'gray', fontWeight: 600}}>Order Date</TableCell>
                            <TableCell align="left" style ={{ color: 'gray', fontWeight: 600}}>Customer ID</TableCell>
                            <TableCell align="left" style ={{ color: 'gray', fontWeight: 600}}>Order Type</TableCell>
                            <TableCell align="left" style ={{ color: 'gray', fontWeight: 600}}>Order Status</TableCell>
                            <TableCell align="left" style ={{ color: 'gray', fontWeight: 600}}>Amount Due</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {
                      statusValue === 'All' ? (

                        rows.filter( row => row.orderId.includes(search)  || JSON.stringify(row.orderDate).includes(search) || JSON.stringify(row.customerId).includes(search) ||  JSON.stringify(row.orderType).includes(search) ||   JSON.stringify(row.orderStatus).includes(search)|| JSON.stringify(row.amountDue).includes(search)  ).slice( page * rowsPerPage , page * rowsPerPage + rowsPerPage ).map((row) => (
                          <TableRow key={row.orderId}>
                              <TableCell component="th" scope="row">
                                  {row.orderId}
                              </TableCell>
                              
                              <TableCell align="left">{ JSON.stringify(row.orderDate)}</TableCell>
                              <TableCell align="left">{ JSON.stringify(row.customerId)}</TableCell>
                              <TableCell align="left">{ JSON.stringify(row.orderType)}</TableCell>
                              <TableCell align="left"> <OrderStatus orderValue = { row.orderStatus }/> </TableCell>
                              <TableCell align="left">{ JSON.stringify(row.amountDue)}</TableCell>
                          </TableRow>
                      )))

                      :(
                    rows.filter( row => row.orderId.includes(search)  || JSON.stringify(row.orderDate).includes(search) || JSON.stringify(row.customerId).includes(search) ||  JSON.stringify(row.orderType).includes(search) ||   JSON.stringify(row.orderStatus).includes(search)|| JSON.stringify(row.amountDue).includes(search) ).filter( row => JSON.stringify(row.orderStatus) === statusValue).slice( page * rowsPerPage , page * rowsPerPage + rowsPerPage ).map((row) => (
                        <TableRow key={row.orderId}>
                            <TableCell component="th" scope="row">
                                {row.orderId}
                            </TableCell>
                            
                            <TableCell align="left">{JSON.stringify(row.orderDate)}</TableCell>
                            <TableCell align="left">{JSON.stringify(row.customerId)}</TableCell>
                            <TableCell align="left">{ JSON.stringify(row.orderType)}</TableCell>
                            <TableCell align="left"> <OrderStatus orderValue = { JSON.stringify(row.orderStatus) }/> </TableCell>
                            <TableCell align="left">{ JSON.stringify(row.amountDue)}</TableCell>
                        </TableRow>
                    )))
                    
                    }
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination 
            page = {page}
            rowsPerPageOptions ={[3, 5, 10]}
            count = { statusValue === 'All' ?   rows.filter( row => row.orderId.includes(search)  || JSON.stringify(row.orderDate).includes(search) || JSON.stringify(row.customerId).includes(search) ||  JSON.stringify(row.orderType).includes(search) ||   JSON.stringify(row.orderStatus).includes(search)|| JSON.stringify(row.amountDue).includes(search)).length :  rows.filter( row => row.orderId.includes(search)  || JSON.stringify(row.orderDate).includes(search) || JSON.stringify(row.customerId).includes(search) ||  JSON.stringify(row.orderType).includes(search) ||   JSON.stringify(row.orderStatus).includes(search)|| JSON.stringify(row.amountDue).includes(search) ).filter( row => JSON.stringify(row.orderStatus) === statusValue).length  }
            rowsPerPage = {rowsPerPage}
            onChangePage = { onChangePage}
            onChangeRowsPerPage = { onChangeRowsPerPage }
            />
        </Box>

      </Paper >
    </div>
  );

}

export default OrderSearchTable


