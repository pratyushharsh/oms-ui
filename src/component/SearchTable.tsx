import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Typography, Box, FormControl, Select, MenuItem, FormHelperText, TextField, Table, TableContainer, TableBody, TableCell, TableHead, TableRow, TablePagination } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { Grid } from '@material-ui/core'
import Chip from '@material-ui/core/Chip';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
            margin: '40px 45px',
            // minWidth: theme.spacing(175),

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


interface SearchTableProps {
    tableName: string;
    tableHeader: any[];
    tableBody: any[];
    onRowClick?: string;
}

function SearchTable(props: SearchTableProps) {

    const classes = useStyles();
    const history = useHistory();

    // State Of Pagination
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    function onChangePage(event: React.MouseEvent<HTMLButtonElement> | null, page: number) {
        setPage(page);
        console.log(`Page: ${page}, Row Per Page: ${rowsPerPage}`)
    }

    function onChangeRowsPerPage(event: React.ChangeEvent<HTMLInputElement>) {
        setRowsPerPage(Number(event.target.value));
        console.log(`Page: ${page}, Row Per Page: ${rowsPerPage}`)
    }

        return (
        <div className={classes.root}>
            <Grid container>
                <Grid item xs = {12}>
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
                                            {/* {props.tableBody.map((t, idx) => <TableRowData key={idx} row={t} onClick={() => { props.onRowClick && eval(props.onRowClick) }}/>) } */}
                                            {props.tableBody.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                            .map((t, idx) => <TableRowData key={idx} row={t} onClick={() => { props.onRowClick && eval(props.onRowClick) }}/>) }
                                    </TableBody>
                                </Table>
                                <TablePagination
                                    page={ page }
                                    rowsPerPageOptions={[5, 10, 15, 20]}
                                    count={props.tableBody.length}
                                    rowsPerPage={rowsPerPage}
                                    onChangePage={onChangePage}
                                    onChangeRowsPerPage = { onChangeRowsPerPage }
                                />
                            </TableContainer>
                                
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )
}

interface TableRowDataProps {
    row: any[]
    onClick?: any;
}

function TableRowData(props: TableRowDataProps) {
    return (
        <TableRow hover={true} onClick={props.onClick} >
            { props.row.map((t, idx) => <TableCell key={`tr-${idx}`} align="left"> {t} </TableCell>)}
        </TableRow>
    )
}

export default SearchTable
