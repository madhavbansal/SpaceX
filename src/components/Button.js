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
    const { label, onClick, id, isSelected } = props;
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Button variant="contained" onClick={onClick} color={isSelected ? "primary" : "default"}>{label}</Button>
        </div>
    );
}
export default ContainedButtons;