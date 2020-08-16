import React, { useState } from 'react';
import CalendarActions from "../CalendarActions/CalendarActions";
import WeeklyCalendar from "../WeeklyCalendar/WeeklyCalendar";
import {isDateInRange} from "../../common/utils";
import {data} from "../../common/data";

import './calendar.scss';

const Calendar = () => {
    const workStationOptions = data.map(e => ({label: e.workStation, value: e.workStation}));
    const calendarViewOptions = [
        { label: 'Weekly', value: 'Weekly' },
        { label: 'Daily', value: 'Daily' },
    ];

    const [workStation, setWorkStation] = useState(workStationOptions[0].value);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [selectedCalendarView, setSelectedCalendarView] = useState(calendarViewOptions[0].value);

    const machines = data
      .find(e => e.workStation === workStation).machines
      .map(machine => ({...machine, orders: machine.orders.filter(({ date }) => isDateInRange(date, selectedDate))}));

    const handleWorkStationChange = (e) => {
        setWorkStation(e.target.value);
    };

    const handleCalendarViewChange = (e) => {
        setSelectedCalendarView(e.target.value);
    };

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    return (
        <div className="calendar">
            <CalendarActions
                workStationOptions={workStationOptions}
                calendarViewOptions={calendarViewOptions}
                workStation={workStation}
                selectedDate={selectedDate}
                selectedCalendarView={selectedCalendarView}
                handleWorkStationChange={handleWorkStationChange}
                handleCalendarViewChange={handleCalendarViewChange}
                handleDateChange={handleDateChange}
            />
            <WeeklyCalendar machines={machines} />
        </div>
    );
};

export default Calendar;
