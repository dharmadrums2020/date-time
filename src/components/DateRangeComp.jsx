import { useEffect, useRef, useState } from 'react'
import { Calendar, DateRange } from 'react-date-range'
import format from 'date-fns/format'
import { formatDistanceStrict }  from 'date-fns'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import { addDays } from 'date-fns/esm'
import { differenceInDays } from 'date-fns'



const DateRangeComp = () => {


    // Date State
const [range, setRange] = useState([
    {
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection'
    }
])

    // open close
const [open, setOpen] = useState(true)

    // get the target element to toggle

// const refOne = useRef(null)

// useEffect(() => {
//     // set current date on component load
//     // setCalendar(format(new Date(), 'MM/dd/yyyy'))
//     document.addEventListener("keydown", hideOnEscape, true)
//     document.addEventListener("click", hideOnClickOutside, true)
// }, [])

// const hideOnEscape = (e) => {
//     if(e.key === "Escape") {
//         setOpen(false)
//     }
// }

// const hideOnClickOutside = (e) => {
//     // console.log(refOne.current)
//     // console.log(e.target)
//     if( refOne.current && !refOne.current.contains(e.target)) {
//         setOpen(false)
//     }
// }


        // on date change, stre date in state
        // const handleSelect = (date) => {
        // console.log(date)
        // console.log(format(date, 'MM/dd/yyyy'))
        //setCalendar(format(date, 'MM/dd/yyyy'))
        // }
    return (
        <div className="calendarWrap">
         <div >           
            <DateRange
            onChange={item => setRange([item.selection])}
            editableDateInputs={false}
            moveRangeOnFirstSelection={false}
            ranges={range}
            months={2}
            minDate={addDays(new Date(), -90)}
             maxDate={addDays(new Date(), 93)}
            direction="horizontal"
            // scroll={{ enabled: true }}
            className="calendarElement"
            
            />
            
            </div>
            <div class="resultsWrapper">
                    <div class="duration">Duration Of Stay </div>
                    <div>
                        <input
                        // value= {` ${format(range[0].startDate, "MM/dd/yyyy")} `}
                        // value= {` ${formatDistanceStrict(new Date(2014, 6, 2), new Date(2015, 0, 2))} `}
                        //BELOW WORKS
                        // value= {` ${formatDistanceStrict(range[0].startDate, range[0].endDate)} `}
                        value= {` ${differenceInDays(range[0].endDate, range[0].startDate) + " days"} `}          
                        size="4"
                        readOnly
                        className="inputBox"      
                        />   
                       
                    </div>        
            
                    <div class="remaining">Days Remaining</div>
                     <div>
                        <input
                        // value= {` ${format(range[0].startDate, "MM/dd/yyyy")} `}
                        // value= {` ${formatDistanceStrict(new Date(2014, 6, 2), new Date(2015, 0, 2))} `}
                        //BELOW WORKS
                        // value= {` ${formatDistanceStrict(range[0].startDate, range[0].endDate)} `}
                        value= {` ${(Math.abs(differenceInDays(range[0].endDate, range[0].startDate) -90))} `}          
                        size="1"
                        readOnly
                        className="inputBoxRemaining"      
                        />   
                     </div>     
                    </div>
                </div>

    )
}

export default DateRangeComp