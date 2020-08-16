import React from 'react';

import './day.scss';
import OrderDetailsCard from "../OrderDetailsCard/OrderDetailsCard";
import { timeToFloat } from "../../common/utils";

const Day = ({ shiftOptions, selectedShift, order }) => {
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
          startedTime={timeToFloat(order.startedTime)}
          shift={selectedShift}
        />
      ) : ''}
    </div>
  );
};

export default Day;
