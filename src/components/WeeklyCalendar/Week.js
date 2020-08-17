import React, {useState} from 'react';
import './week.scss';
import MachineDetails from "../MachineDetails/MachineDetails";
import {days} from "../../common/constants";
import Day from "../Day/Day";
import {getWeekName, updateAndFormatDate} from "../../common/utils";

const Week = ({ machine,calenderSelectedDate, ...restProps }) => {
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
  };


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
      {days.map((day, index) =>
        <Day
          key={day}
          data-date={updateAndFormatDate(calenderSelectedDate, index+1)}
          draggable={true}
          shiftOptions={shiftOptions}
          selectedShift={selectedShift}
          orders={machine.orders.filter(({ date }) => getWeekName(date) === day)}
          {...restProps}
        />
      )}
    </div>
  );
};

export default Week;
