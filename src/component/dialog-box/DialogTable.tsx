import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Typography, Box, FormControl, Select, MenuItem, FormHelperText, TextField, Table, TableContainer, TableBody, TableCell, TableHead, TableRow, TablePagination } from '@material-ui/core';
import { useHistory } from 'react-router-dom';



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


interface DialogTableProps {
    children?: React.ReactNode;
    tableName: string;
    tableHeader: any[];
    tableBody: any[];
    onRowClick?: string;
}

function DialogTable(props: DialogTableProps) {

    const classes = useStyles();
    const history = useHistory();

    

     return (
        <div className={classes.root}>
            <Paper elevation={3} style={{ borderBottom: '1.5px solid #c3c1c1', borderRadius: '8px' }}>
                <Box p={3} style={{ borderBottom: '2px solid #c3c1c1' }}>
                    <Typography align="left" variant="h5" style={{ textTransform: 'uppercase' }}> { props.tableName }</Typography>
                </Box>

                <Box p={3} component={Paper}>
                    <TableContainer >
                        <Table aria-label="simple table">
                            <TableHead >
                                <TableRow>
                                    {props.tableHeader.map((t, idx) => <TableCell key={idx} align="left" style={{ color: 'gray', fontWeight: 600 }}> { t } </TableCell>) }
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {props.tableBody.map((t, idx) => <TableRowData key={idx} row={t} onClick={() => { props.onRowClick && eval(props.onRowClick)  }} />) }
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
                { props.children }
            </Paper>
        </div>
    )
}

interface TableRowDataProps {
    row: any[]
    onClick?: any;
    
}

function TableRowData(props: TableRowDataProps) {

    

    return (
        
            <TableRow hover={true} onClick={props.onClick}>
                { props.row.map((t, idx) => <TableCell key={ `tr-${idx}` } align="left"> {t} </TableCell> ) }
            </TableRow>
        
    )
}

export default DialogTable
