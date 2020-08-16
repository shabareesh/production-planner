import React, { useState, useEffect } from 'react';
import CalendarActions from "../CalendarActions/CalendarActions";
import WeeklyCalendar from "../WeeklyCalendar/WeeklyCalendar";
import {isDateEqual, isDateInRange} from "../../common/utils";
import {data} from "../../common/data";

import './calendar.scss';
import DailyCalendar from "../DailyCalendar/DailyCalendar";
import {useSnackbar} from "notistack";

const Calendar = () => {
    const { enqueueSnackbar } = useSnackbar();

    const workStationOptions = data.map(e => ({label: e.workStation, value: e.workStation}));
    const calendarViewOptions = [
        { label: 'Weekly', value: 'Weekly' },
        { label: 'Daily', value: 'Daily' },
    ];

    const [workStation, setWorkStation] = useState(workStationOptions[0].value);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [selectedCalendarView, setSelectedCalendarView] = useState(calendarViewOptions[0].value);

    const getMachines = (callback) =>
      data
        .find(e => e.workStation === workStation).machines
        .map(machine => ({...machine, orders: machine.orders.filter(({date}) => callback(date, selectedDate))}));

    const machines = getMachines(selectedCalendarView === 'Daily' ? isDateEqual : isDateInRange);

    const showSnackBar = (message) => {
        enqueueSnackbar(
          message,
          {variant: 'error', anchorOrigin: {vertical: 'top', horizontal: 'center'}});
    };

    useEffect(() => {
        machines.forEach((machine) => {
            if (machine.status === 'stopped') {
                showSnackBar(`Machine ${machine.name} stopped working due to a defect`);
            }
        });
    });

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
            {selectedCalendarView === 'Daily' ?
              <DailyCalendar machines={machines} /> :
              <WeeklyCalendar machines={machines} />
            }
        </div>
    );
};

export default Calendar;
