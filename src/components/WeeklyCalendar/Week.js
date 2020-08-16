import React, {useState} from 'react';
import './week.scss';
import MachineDetails from "../MachineDetails/MachineDetails";
import {days} from "../../common/constants";
import Day from "../Day/Day";

const Week = ({ machine }) => {
  const shiftOptions = [
    {label: '1', value: '1'},
    {label: '2', value: '2'},
    {label: '3', value: '3'},
  ];

  const [selectedShift, setSelectedShift] = useState(shiftOptions[0].value);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleShiftChange = (e) => {
    setSelectedShift(e.target.value);
  };

  const handleSelectedDate = (date) => {
    setSelectedDate(date);
  }

  return (
    <div className="week">
      <MachineDetails
        details={machine}
        shiftOptions={shiftOptions}
        handleShiftChange={handleShiftChange}
        selectedShift={selectedShift}
        selectedDate={selectedDate}
        handleSelectedDate={handleSelectedDate}
      />
      {days.map(day =>
        <Day
          key={day}
          shiftOptions={shiftOptions}
          selectedShift={selectedShift}
          orders={machine.orders}
          weekName={day}
        />
      )}
    </div>
  );
};

export default Week;
