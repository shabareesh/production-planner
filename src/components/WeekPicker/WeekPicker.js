import React from 'react';
import clsx from "clsx";
import { DatePicker } from "@material-ui/pickers";
import { createStyles, withStyles } from "@material-ui/core";
import startOfWeek from "date-fns/startOfWeek";
import endOfWeek from "date-fns/endOfWeek";
import format from "date-fns/format";
import isWithinInterval from "date-fns/isWithinInterval";
import isSameDay from "date-fns/isSameDay";
import IconButton from "@material-ui/core/IconButton";

const styles = createStyles(theme => ({
    dayWrapper: {
        position: "relative",
    },
    day: {
        width: 36,
        height: 36,
        fontSize: theme.typography.caption.fontSize,
        margin: "0 2px",
        color: "inherit",
    },
    customDayHighlight: {
        position: "absolute",
        top: 0,
        bottom: 0,
        left: "2px",
        right: "2px",
        border: `1px solid ${theme.palette.secondary.main}`,
        borderRadius: "50%",
    },
    nonCurrentMonthDay: {
        color: theme.palette.text.disabled,
    },
    highlightNonCurrentMonthDay: {
        color: "#676767",
    },
    highlight: {
        background: theme.palette.primary.main,
        color: theme.palette.common.white,
    },
    firstHighlight: {
        extend: "highlight",
        borderTopLeftRadius: "50%",
        borderBottomLeftRadius: "50%",
    },
    endHighlight: {
        extend: "highlight",
        borderTopRightRadius: "50%",
        borderBottomRightRadius: "50%",
    },
}));

const WeekPicker = ({ selectedDate, onChange, classes }) => {
    const renderWrappedWeekDay = (date, selectedDate, dayInCurrentMonth) => {
        const start = startOfWeek(selectedDate);
        const end = endOfWeek(selectedDate);
        const dayIsBetween = isWithinInterval(date, { start, end });
        const isFirstDay = isSameDay(date, start);
        const isLastDay = isSameDay(date, end);

        const wrapperClassName = clsx({
            [classes.highlight]: dayIsBetween,
            [classes.firstHighlight]: isFirstDay,
            [classes.endHighlight]: isLastDay,
        });

        const dayClassName = clsx(classes.day, {
            [classes.nonCurrentMonthDay]: !dayInCurrentMonth,
            [classes.highlightNonCurrentMonthDay]: !dayInCurrentMonth && dayIsBetween,
        });

        return (
            <div className={wrapperClassName}>
                <IconButton className={dayClassName}>
                    <span>{format(date, "d")}</span>
                </IconButton>
            </div>
        );
    };
    const formatWeekSelectLabel = date =>
        `${format(startOfWeek(date), "dd-MM-yyyy")} - ${format(endOfWeek(date), "dd-MM-yyyy")}`;

    const handleChange = (e) =>{
        onChange(startOfWeek(e));
    }

    return (
        <DatePicker
            autoOk
            variant="inline"
            format="dd-MM-yyyy"
            value={startOfWeek(selectedDate)}
            onChange={handleChange}
            renderDay={renderWrappedWeekDay}
            labelFunc={formatWeekSelectLabel}
        />
    );
};

export default withStyles(styles)(WeekPicker);
