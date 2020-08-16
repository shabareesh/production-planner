import React, {useState} from 'react';
import Day from "../Day/Day";
import MachineDetails from "../MachineDetails/MachineDetails";

import './dailyCalendar.scss';

const DailyCalendar = ({ machines }) => {
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
		<div className="daily-calendar">
			{machines.map(machine => (
				<div className="daily-calendar--view" key={machine.name}>
					<MachineDetails
						details={machine}
						shiftOptions={shiftOptions}
						handleShiftChange={handleShiftChange}
						selectedShift={selectedShift}
						selectedDate={selectedDate}
						handleSelectedDate={handleSelectedDate}
					/>
					{machine.orders.map(order => (
						<Day
							key={order.orderNumber}
							order={order}
							shiftOptions={shiftOptions}
							selectedShift={selectedShift}
						/>
					))}
				</div>
			))}
		</div>
	);
};

export default DailyCalendar;
