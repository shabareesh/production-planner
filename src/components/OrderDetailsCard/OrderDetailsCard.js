import React from 'react';
import CheckIcon from '@material-ui/icons/Check';
import BlockIcon from '@material-ui/icons/Block';
import ProductionTimeBar from "../ProductionTimeBar/ProductionTimeBar";

import './orderDetailsCard.scss';

const OrderDetailsCard = ({
  orderNumber,
  name,
  quantity,
  hasMaterial,
  totalTime,
  runningTime,
  preparedTime,
  shift,
}) => (
  <div className="order-details-card" style={{width: `${200 * shift}px`}}>
    <span className="order-details-card--orderNumber">Order No. {orderNumber}</span>
    <span className="order-details-card--name">{name}</span>
    <ProductionTimeBar preparedTime={preparedTime} runningTime={runningTime} totalTime={totalTime} />
    <span className="order-details-card--material">
      Material
      {hasMaterial ? <CheckIcon style={{ color: '#4BB04F' }} /> : <BlockIcon color="secondary" />}
    </span>
    <span className="order-details-card--quantity">Quantity {quantity}</span>
  </div>
);

export default OrderDetailsCard;
