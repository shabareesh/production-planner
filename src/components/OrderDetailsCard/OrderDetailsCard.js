import React from 'react';
import ProductionTimeBar from "../ProductionTimeBar/ProductionTimeBar";

import './orderDetailsCard.scss';

const OrderDetailsCard = ({ orderNumber, name, quantity, hasMaterial, totalTime, runningTime, preparedTime }) => (
    <div className="order-details-card">
        <span className="order-details-card--orderNumber">Order No. {orderNumber}</span>
        <span className="order-details-card--name">{name}</span>
        <ProductionTimeBar preparedTime={preparedTime} runningTime={runningTime} totalTime={totalTime} />
        <span className="order-details-card--material">Material {hasMaterial}</span>
        <span className="order-details-card--quantity">Quantity {quantity}</span>
    </div>
);

export default OrderDetailsCard;
