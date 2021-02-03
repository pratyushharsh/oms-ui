import React, { MouseEventHandler } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import DirectionsIcon from '@material-ui/icons/Directions';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            padding: '2px 4px',
            display: 'flex',
            alignItems: 'center',
            width: 400,
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

interface OrderDetailSearchProps {
    onChange?: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>;
    onClick?: MouseEventHandler;
    value?: string;
    
}

export default function OrderDetailSearch(props: OrderDetailSearchProps) {
    const classes = useStyles();

    return (
        <Paper component="form" className={classes.root}>
            <IconButton className={classes.iconButton} aria-label="menu">
                <MenuIcon />
            </IconButton>
            <InputBase
                className={classes.input}
                placeholder="Search Using Order Id"
                inputProps={{ 'aria-label': 'search using order id' }}
                onChange={props.onChange}
                value={props.value}
                
            />
            <IconButton type="button" className={classes.iconButton} aria-label="search" onClick={props.onClick}>
                <SearchIcon />
            </IconButton>
        </Paper>
    );
}