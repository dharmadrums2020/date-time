import { useState } from 'react'
import { DateRange } from 'react-date-range'
import format from 'date-fns/format'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import { addDays } from 'date-fns/esm'
import { add } from 'date-fns'
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


    return (
        <div className="calendarWrap">
         <div >           
            <DateRange
            onChange={item => setRange([item.selection])}
            editableDateInputs={false}
            moveRangeOnFirstSelection={false}
            ranges={range}
            months={2}
            // minDate={addDays(new Date(), 1)}
            maxDate={addDays(new Date(), 92)}
            direction="horizontal"
            // scroll={{ enabled: true }}
            className="calendarElement"           
            />
            
            </div>
            <div class="resultsWrapper">
                    <div class="duration">Duration Of Stay</div>
                    <div>
                        <input
                        // value= {` ${format(range[0].startDate, "MM/dd/yyyy")} `}
                        // value= {` ${formatDistanceStrict(new Date(2014, 6, 2), new Date(2015, 0, 2))} `}
                        //BELOW WORKS
                        // value= {` ${formatDistanceStrict(range[0].startDate, range[0].endDate)} `}
                        value= {` ${differenceInDays(range[0].endDate, range[0].startDate) + 1 + " days"} `}          
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
                        value= {` ${(Math.abs(differenceInDays(range[0].endDate, range[0].startDate) -89))} `}          
                        size="1"
                        readOnly
                        className="inputBoxRemaining"      
                        />   
                     </div>     

                    <div class="remainingDate">Last Day to Stay</div>
                    
                        <input                     
                        value= {format(add((range[0].startDate), {
                            years: 0,
                            months: 0,
                            weeks: 0,
                            days: 89,
                            hours: 0,
                            minutes: 0,
                            seconds: 0,
                          }), "dd MMMM yyyy"   )}

                        // value= {` ${"Hello"} `}         
                        size="20"
                        readOnly
                        className="inputBoxRemainingDate"      
                        />   
                       
                    </div>             
            </div>
    )
}

export default DateRangeComp