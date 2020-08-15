import React from 'react';
import PropTypes from 'prop-types';
import {makeStyles} from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

import './dropdown.scss';

const useStyles = makeStyles(() => ({
    formControl: {
        width: '100%',
    },
    label: {
        marginRight: '10px',
    }
}));

const Dropdown = ({ options, selectedValue, onChange, label }) => {
    const classes = useStyles();

    return (
        <div className="dropdown">
            {label && <FormControl className={classes.label}>{label}</FormControl>}
            <FormControl variant="outlined" className={classes.formControl}>
                <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={selectedValue}
                    onChange={onChange}
                >
                    {options.map((option) =>
                        <MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>
                    )}
                </Select>
            </FormControl>
        </div>
    );
};

Dropdown.propTypes = {
    onChange: PropTypes.func.isRequired,
    options: PropTypes.array.isRequired,
    selectedValue: PropTypes.string,
    label: PropTypes.string,
};

Dropdown.defaultProps = {
    selectedValue: '',
    label: '',
}

export default Dropdown;
