import React from 'react';

import Dropdown from "../Dropdown/Dropdown";
import DatePicker from "../DatePicker/DatePicker";
import Button from "@material-ui/core/Button";

import './machineDetails.scss';

const MachineDetails = ({
  details,
  shiftOptions,
  handleShiftChange,
  selectedShift,
  selectedDate,
  handleSelectedDate,
}) =>(
  <div className="machine-details">
    <h5 className="machine-details--name">
      {details.name}
      <span className={`machine-details--status machine-details--status__${details.status}`} />
    </h5>
    <Dropdown
      options={shiftOptions}
      onChange={handleShiftChange}
      selectedValue={selectedShift}
      label="Shifts"
      id={`${details.name.split(' ').join('-')}-dropdown`}
    />
    <div className="machine-details--date">
      <span className="machine-details--date__label">Next Maintenance</span>
      <DatePicker selectedDate={selectedDate} onChange={handleSelectedDate}/>
    </div>
    <Button color="primary">Details</Button>
  </div>
);

export default MachineDetails;
