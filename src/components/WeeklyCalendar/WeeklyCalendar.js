import React from 'react';
import {days} from "../../common/constants";
import Week from "./Week";

import './weeklyCalendar.scss';

const WeeklyCalendar = ({ machines, ...restProps }) => (
    <div className="weekly-calendar">
      <div className="weekly-calendar--header">
        <div className="weekly-calendar--header__emptyBox" />
        {days.map(day => <div key={day} className="weekly-calendar--header__day">{day}</div>)}
      </div>
      {machines.map(machine => (
        <Week machine={machine} key={machine.name} {...restProps}/>
      ))}
    </div>
);

export default WeeklyCalendar;
