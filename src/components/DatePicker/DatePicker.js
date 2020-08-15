import React from 'react';
import { DatePicker as MuiDatePicker } from "@material-ui/pickers";

const DatePicker = ({ selectedDate, onChange }) => (
    <div className="date-picker">
        <MuiDatePicker
            autoOk
            variant="inline"
            inputVariant="outlined"
            format="dd-MM-yyyy"
            value={selectedDate}
            onChange={onChange}
        />
    </div>
);

export default DatePicker;
