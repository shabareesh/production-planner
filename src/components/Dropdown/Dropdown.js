import React from 'react';
import PropTypes from 'prop-types';
import {makeStyles} from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

import './dropdown.scss';

const useStyles = makeStyles(() => ({
    formControl: {
        flex: 1,
    },
    label: {
        marginRight: '10px',
    }
}));

const Dropdown = ({ options, selectedValue, onChange, label, id }) => {
    const classes = useStyles();

    return (
        <div className="dropdown" id={id}>
            {label && <FormControl className={classes.label}>{label}</FormControl>}
            <FormControl className={classes.formControl}>
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
