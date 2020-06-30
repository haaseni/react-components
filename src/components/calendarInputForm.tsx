import React, { useState } from 'react'
import CalendarInput from './calendarInput'
import utils from '../utils'

const CalendarInputForm = () => {
    const [date, setDate] = useState(utils.getDateString(new Date()));

    return (
        <div>
            <section>
            <h4>Calendar Component:</h4>
            <CalendarInput 
                value={date}
                defaultValue={new Date()}
                inputClassName="calendar-input"
                onChange={d => setDate(d)} />
            </section>
        </div>
    )
}

export default CalendarInputForm