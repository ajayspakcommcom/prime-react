import React, { useState } from "react";
import { Calendar } from 'primereact/calendar';

const CalendarBasic = (props) => {

    let today = new Date();
    let month = today.getMonth();
    let year = today.getFullYear();
    let prevMonth = month === 0 ? 11 : month - 1;
    let prevYear = prevMonth === 11 ? year - 1 : year;
    let nextMonth = month === 11 ? 0 : month + 1;
    let nextYear = nextMonth === 0 ? year + 1 : year;


    const [date, setDate] = useState(null);
    const [date1, setDate1] = useState(null);
    const [dates, setDates] = useState(null);


    let minDate = new Date();

    minDate.setMonth(prevMonth);
    minDate.setFullYear(prevYear);

    let maxDate = new Date();

    maxDate.setMonth(nextMonth);
    maxDate.setFullYear(nextYear);


    const onDateChangeHandler = (event) => {
        setDate(event.value);
    };

    const getMultipleDate = (event) => {
        setDates(event.value);
        console.log(event.value);
    };

    const dateTemplate = (date) => {
        if (date.day > 10 && date.day < 15) {
            return (<strong style={{ textDecoration: 'line-through' }}>{date.day}</strong>);
        }
        return date.day;
    }

    return (
        <>
            <div className="card flex justify-content-start flex-wrap">
                <Calendar placeholder="Basic Date Format" value={date} onChange={onDateChangeHandler} dateFormat="dd/mm/yy" />
                <Calendar placeholder="Icon" value={date} onChange={onDateChangeHandler} showIcon />
                <Calendar placeholder="Min Max" value={date} onChange={onDateChangeHandler} minDate={minDate} maxDate={maxDate} readOnlyInput />
                <Calendar placeholder="Multiple" value={dates} onChange={getMultipleDate} selectionMode="multiple" readOnlyInput />
                <Calendar placeholder="Range" value={dates} onChange={(e) => { setDates(e.value); console.log(e.value); }} selectionMode="range" readOnlyInput />
                <Calendar placeholder="Button Bar" value={date} onChange={(e) => { setDate(e.value); console.log(e.value); }} showButtonBar />
                <Calendar placeholder="Month Picker" value={date} onChange={(e) => { setDate(e.value); console.log(e.value); }} view="month" dateFormat="mm/yy" />
                <Calendar placeholder="Year Picker" value={date} onChange={(e) => { setDate(e.value); console.log(e.value); }} view="year" dateFormat="yy" />
                <Calendar placeholder="Multiple Month" value={date} onChange={(e) => { setDate(e.value); console.log(e.value); }} numberOfMonths={2} />
                <Calendar placeholder="Date Template" value={date1} onChange={(e) => { setDate1(e.value); console.log(e.value); }} dateTemplate={dateTemplate} />
                <span className="p-float-label">
                    <Calendar inputId="birth_date" value={date} onChange={(e) => setDate(e.date)} />
                    <label htmlFor="birth_date">Birth Date</label>
                </span>
            </div>
        </>
    )
};

export default CalendarBasic;