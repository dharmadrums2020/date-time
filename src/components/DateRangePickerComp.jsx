import { useEffect, useRef, useState } from 'react'
import { Calendar, DateRangePicker } from 'react-date-range'
import format from 'date-fns/format'

import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import { addDays } from 'date-fns/esm'


const DateRangePickerComp = () => {

    // Date State
const [range, setRange] = useState([
    {
        startDate: new Date(),
        endDate: addDays(new Date(), 7),
        key: 'selection'
    }
])

    // open close
const [open, setOpen] = useState(false)

    // get the target element to toggle

const refOne = useRef(null)

useEffect(() => {
    // set current date on component load
    // setCalendar(format(new Date(), 'MM/dd/yyyy'))
    document.addEventListener("keydown", hideOnEscape, true)
    document.addEventListener("click", hideOnClickOutside, true)
}, [])

const hideOnEscape = (e) => {
    if(e.key === "Escape") {
        setOpen(false)
    }
}

const hideOnClickOutside = (e) => {
    // console.log(refOne.current)
    // console.log(e.target)
    if( refOne.current && !refOne.current.contains(e.target)) {
        setOpen(false)
    }
}

        // on date change, stre date in state
        // const handleSelect = (date) => {
        // console.log(date)
        // console.log(format(date, 'MM/dd/yyyy'))
        //setCalendar(format(date, 'MM/dd/yyyy'))
        // }
    return (
        <div className="calendarWrap">

            <input
            value= {` ${format(range[0].startDate, "MM/dd/yyyy")} to ${format(range[0].endDate, "MM/dd/yyyy")} `}
            readOnly
            className="inputBox"
            onClick={ () => setOpen(open => !open)}
            />
           

            <div ref={refOne}>
            {open &&
            <DateRangePicker
            onChange={item => setRange([item.selection])}
            editableDateInputs={true}
            moveRangeOnFirstSelection={false}
            ranges={range}
            months={2}
            // minDate={addDays(new Date(), 0)}
            // maxDate={addDays(new Date(), 90)}
            direction="horizontal"
            // scroll={{ enabled: true }}
            className="calendarElement"
            />
            }
            </div>

           
            
        </div>
    )
}

export default DateRangePickerComp