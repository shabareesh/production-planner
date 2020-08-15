import React, { useState } from 'react';
import Dropdown from "../Dropdown/Dropdown";
import DatePicker from "../DatePicker/DatePicker";
import WeekPicker from "../WeekPicker/WeekPicker";

const CalendarActions = () => {
    const workStationOptions = [
        { label: 'Drehen', value: 'Drehen' },
        { label: 'Work Station 1', value: 'Work Station 1' },
        { label: 'Work Station 2', value: 'Work Station 2' },
        { label: 'Work Station 3', value: 'Work Station 3' },
    ];

    const calendarViewOptions = [
        { label: 'Weekly', value: 'Weekly' },
        { label: 'Daily', value: 'Daily' },
    ]

    const [workStation, setWorkStation] = useState(workStationOptions[0].value);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [selectedCalendarView, setSelectedCalendarView] = useState(calendarViewOptions[0].value);

    const handleWorkStationChange = (e) => {
        setWorkStation(e.target.value);
    };

    const handleCalendarViewChange = (e) => {
        setSelectedCalendarView(e.target.value);
    };

    return (
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
                    <DatePicker selectedDate={selectedDate} onChange={setSelectedDate} /> :
                    <WeekPicker selectedDate={selectedDate} onChange={setSelectedDate} />
                }
                <Dropdown
                    options={calendarViewOptions}
                    onChange={handleCalendarViewChange}
                    selectedValue={selectedCalendarView}
                />
            </div>
        </div>
    );
};

export default CalendarActions;
