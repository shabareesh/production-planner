import React from 'react';

import './day.scss';
import OrderDetailsCard from "../OrderDetailsCard/OrderDetailsCard";
import { timeToFloat } from "../../common/utils";

const Day = ({ shiftOptions, selectedShift, orders,draggable, ...restProps }) => {
  return (
    <div className="day" style={{minHeight: `${(orders && orders.length) ? `${orders.length * 115}px` : '115px'}`}}>
      {shiftOptions.map((shift, index) => (
        <div
          key={shift.value}
          className={Number(selectedShift) <= index ? 'day--shift' : 'day--shift day--shift__active'}
           {...restProps}
        />
      ))}

      {(orders && orders.length) ? (
        <div className="orders-container">
          {orders.map(order => (
            <OrderDetailsCard
              key={order.orderNumber}
              orderNumber={order.orderNumber}
              name={order.name}
              quantity={order.quantity}
              hasMaterial={order.hasMaterial}
              totalTime={timeToFloat(order.totalTime)}
              runningTime={timeToFloat(order.runningTime)}
              preparedTime={timeToFloat(order.preparedTime)}
              startedTime={timeToFloat(order.startedTime)}
              shift={selectedShift}
              draggable={draggable}
            />
          ))}
        </div>
      ) : null
      }
    </div>
  );
};

export default Day;
