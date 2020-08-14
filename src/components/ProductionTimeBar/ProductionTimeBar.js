import React from 'react';
import PropTypes from 'prop-types';

import './productionTimeBar.scss';
import {calculatePercent} from "../../common/utils";

const ProductionTimeBar = ({ totalTime, preparedTime, runningTime }) => (
    <div className="production-time-bar">
        <span
            className="production-time-bar--prepared"
            style={{width: `${calculatePercent(totalTime, runningTime)}%`}}
        >
            {preparedTime}
        </span>
        <span
            className="production-time-bar--running"
            style={{width: `${calculatePercent(totalTime, runningTime)}%`}}
        >
            {runningTime}
        </span>
        <span
            className="production-time-bar--pending"
            style={{width: `${calculatePercent(totalTime, totalTime - preparedTime - runningTime)}%`}}
        >
            {totalTime - preparedTime - runningTime}
        </span>
    </div>
);

ProductionTimeBar.propTypes = {
    totalTime: PropTypes.number.isRequired,
    preparedTime: PropTypes.number.isRequired,
    runningTime: PropTypes.number.isRequired,
};

export default ProductionTimeBar;
