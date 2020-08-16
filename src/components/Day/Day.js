import React from 'react';

import './day.scss';
import OrderDetailsCard from "../OrderDetailsCard/OrderDetailsCard";
import {getWeekName, timeToFloat} from "../../common/utils";

const Day = ({ shiftOptions, selectedShift, orders, weekName }) => {
  const order = orders.find(({ date }) => getWeekName(date) === weekName);

  return (
    <div className="day">
      {shiftOptions.map((shift, index) => (
        <div
          key={shift.value}
          className={Number(selectedShift) <= index ? 'day--shift' : 'day--shift day--shift__active'}
        />
      ))}
      {order ? (
        <OrderDetailsCard
          orderNumber={order.orderNumber}
          name={order.name}
          quantity={order.quantity}
          hasMaterial={order.hasMaterial}
          totalTime={timeToFloat(order.totalTime)}
          runningTime={timeToFloat(order.runningTime)}
          preparedTime={timeToFloat(order.preparedTime)}
          shift={selectedShift}
        />
      ) : ''}
    </div>
  );
};

export default Day;
