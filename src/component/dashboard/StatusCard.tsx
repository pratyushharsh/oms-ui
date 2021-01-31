import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import {Card, Grid, Paper, Typography} from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            width: '100',
            padding: '10px',
        },
        box: {
            padding: 0,
            margin: 0,
            listStyle: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '50px'
        }
    }),
);

export interface StatusCardProps {
    icon: React.ReactNode,
    title: string,
    count: string
}

function StatusCard(props: StatusCardProps) {

    const classes = useStyles()

    return(
        <Paper className={classes.root}>
            <Grid container>
                <Grid item xs={6}>
                    <div className={classes.box}>
                        { props.icon }
                    </div>
                </Grid>
                <Grid item xs={6}>
                    <Typography variant={'h6'}>
                        { props.title }
                    </Typography>
                </Grid>
            </Grid>
        </Paper>
    )
}

export default StatusCard;