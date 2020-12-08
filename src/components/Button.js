import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

const ContainedButtons = (props) => {
    const { label, onClick, style: { buttonDiv, ...style } } = props;
    const classes = useStyles();
    return (
        <div style={buttonDiv}>
            <Button style={style} variant="contained" onClick={onClick}>{label}</Button>
        </div>
    );
}
export default ContainedButtons;