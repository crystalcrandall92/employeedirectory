import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import "../css/styles.css";


// pulled from @material-ui/core/TextField 
// https://material-ui.com/api/text-field/
// for other changes to styling allowed

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: '25ch',
    },
}));

export default function LayoutTextFields(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className="searchStyle">
                <TextField
                    id="standard-full-width"
                    label="Search by First Name"
                    style={{ margin: 8 }}
                    placeholder=""
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    onChange={props.search}
                />
                <div className="center"> 
                    <p>Be sure to use capital letters for employee's names.</p>
                    <p>You may also click the top of the columns to sort users alphabetically in each category</p>
            </div>
            </div>
        </div>
    )
}