import React, { MouseEventHandler } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import DirectionsIcon from '@material-ui/icons/Directions';
import { useFormik } from 'formik'
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { useDispatch } from 'react-redux';
import { ERROR_SEARCHING_ORDER, LOADING_SEARCH_RESULT, OrderSearchResult, SUCCESS_SEARCH_ORDER } from '../../store/search/types';
import { searchOrdersApi } from '../../api/orderDetailSearch';
import Button from '@material-ui/core/Button/Button';
import { Typography } from '@material-ui/core';



const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        paper: {
            padding: '2px 4px',
            display: 'flex',
            alignItems: 'center',
            // width: 400,
        },
        root: {
            display: 'flex',
            flexWrap: 'wrap',
            '& > *': {
                margin: '20px 45px 0 45px',
                // minWidth: theme.spacing(175),

            },
        },
        input: {
            marginLeft: theme.spacing(1),
            flex: 1,
        },
        iconButton: {
            padding: 10,
        },
        divider: {
            height: 28,
            margin: 4,
        },
    }),
);

interface OrderSearchProps {
    onChange?: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>;
    onClick?: MouseEventHandler;
    // value?: OrderSearchCriteria;
    placeholder?: string;
    name?: string;
    type?: string;
}

export default function OrderSearch(props: OrderSearchProps) {
    const classes = useStyles();

    const dispatch = useDispatch();

    const handleSubmit = async () => {
        dispatch({
            type: LOADING_SEARCH_RESULT
        });
        await new Promise(r => setTimeout(r, 1000));
        try {
            var r: OrderSearchResult[] = await searchOrdersApi('ftyud');
            dispatch({
                type: SUCCESS_SEARCH_ORDER,
                orders: r
            });
        } catch (error) {
            dispatch({
                type: ERROR_SEARCHING_ORDER
            });
        }
    }


    const formik = useFormik({
        initialValues: {
            phoneNumber: '',
            emailId: '',
            orderId: '',
            firstName: '',
            lastName: '',
            customerId: '',
            orderStatus: ''
        },
        onSubmit: (values) => {
            handleSubmit()
            console.log(formik.values);
        },
    });


    return (
        <div className={classes.root}>
        <Paper className={classes.paper} >
            
            
            <form onSubmit={formik.handleSubmit}>
                <Grid container spacing={4} style={{ padding: '16px' }}>
                    <Grid item xs={12}>
                        <Typography variant='h5'>
                            Search For Orders
                        </Typography>
                        <Divider />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <TextField
                            name="phoneNumber"
                            variant="outlined"
                            size='small'
                            fullWidth
                            label="Phone No"
                            autoFocus
                            onChange={formik.handleChange}
                            value={formik.values.phoneNumber}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <TextField
                            name="emailId"
                            variant="outlined"
                            size='small'
                            fullWidth
                            id="emailId"
                            label="Email Id"
                            autoFocus
                            onChange={formik.handleChange}
                            value={formik.values.emailId}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                    <TextField
                        name="orderId"
                            variant="outlined"
                            size='small'
                        fullWidth
                        label="Order Id"
                        autoFocus
                        onChange={formik.handleChange}
                        value={formik.values.orderId}
                    />
                </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                    <TextField
                        name="customerId"
                            variant="outlined"
                            size='small'
                        fullWidth
                        label="Customer Id"
                        autoFocus
                        onChange={formik.handleChange}
                        value={formik.values.customerId}
                    />
                </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <TextField
                            name="firstName"
                            variant="outlined"
                            size='small'
                            fullWidth
                            label="First Name"
                            autoFocus
                            onChange={formik.handleChange}
                            value={formik.values.firstName}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <TextField
                            name="lastName"
                            variant="outlined"
                            size='small'
                            fullWidth
                            label="Last Name"
                            autoFocus
                            onChange={formik.handleChange}
                            value={formik.values.lastName}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <TextField
                            name="orderStatus"
                            variant="outlined"
                            size='small'
                            fullWidth
                            label="Order Status"
                            autoFocus
                            onChange={formik.handleChange}
                            value={formik.values.orderStatus}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                        >
                            Search
                        </Button>
                    </Grid>
                </Grid>
            </form>
            </Paper>
        </div>
    );
}