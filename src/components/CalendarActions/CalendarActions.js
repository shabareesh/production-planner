import React from 'react';
import Dropdown from "../Dropdown/Dropdown";
import DatePicker from "../DatePicker/DatePicker";
import WeekPicker from "../WeekPicker/WeekPicker";

import './calendarActions.scss';

const CalendarActions = ({
     workStationOptions,
     calendarViewOptions,
     handleDateChange,
     handleWorkStationChange,
     handleCalendarViewChange,
     workStation,
     selectedDate,
     selectedCalendarView,
}) => (
    <div className="calendar-actions">
        <div className="calendar-actions--workstation">
            <Dropdown
                options={workStationOptions}
                onChange={handleWorkStationChange}
                selectedValue={workStation}
                label="Work Station"
            />
        </div>
        <div className="calendar-actions--date">
            {selectedCalendarView === 'Daily' ?
                <DatePicker selectedDate={selectedDate} onChange={handleDateChange}/> :
                <WeekPicker selectedDate={selectedDate} onChange={handleDateChange}/>
            }
            <Dropdown
                options={calendarViewOptions}
                onChange={handleCalendarViewChange}
                selectedValue={selectedCalendarView}
            />
        </div>
    </div>
);

export default CalendarActions;
