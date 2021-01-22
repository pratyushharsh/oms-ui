import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { Link, useLocation  } from 'react-router-dom';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            flexGrow: 1,
        },
        link: {
            textDecoration: 'none',
            padding: '5px',
            textColo: 'white'
        }
    }),
);

function routeName(path: string): string {
    switch (path) {
        case "/":
            return "Dashboard";
        case "/search":
            return "Order Search";
        case "/order":
            return "Order Detail";
    }
    return "";
}

function MyAppBar() {

    const classes = useStyles();
    const location = useLocation();
    return (
        <div>
            <AppBar position="static">
                <Toolbar variant="dense">
                    <Typography variant="h6" className={classes.title}>
                        {routeName(location.pathname)}
                    </Typography>
                    <Button component={Link} to="/" color="inherit">Dashboard</Button>
                    <Button component={Link} to="/search" color="inherit">OrderSearch</Button>
                    <Button component={Link} to="/order" color="inherit">OrderDetail</Button> 
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default MyAppBar
