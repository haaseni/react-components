import React, { useEffect, useState, useRef } from 'react'
import Calendar from 'react-calendar'
import utils from '../utils'
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const CalendarInput = ({value, onChange, defaultValue = undefined, inputClassName = ''}) => {
    const node = useRef(null)
    const [open, setOpen] = useState(false)

    const handleClick = e => {
        if (node.current.contains(e.target)) {
            return
        }
        
        setOpen(false)
    }

    const handleDateChange = e => {
        onChange(e.target.value)
    }

    const handleIconClick = () => {
        setOpen(!open)
    }

    const handleCalendarChange = date => {
        onChange(utils.getDateString(date))
    }

    useEffect(() => {
        document.addEventListener('mousedown', handleClick, false);

        return () => {
            document.removeEventListener("mousedown", handleClick);
        }
    }, [])

    return (
        <div ref={node} className="calendarInput">
            <input type="text" 
                value={value}
                onClick={handleClick}
                className={inputClassName}
                onChange={e => handleDateChange(e)} />
            <FontAwesomeIcon 
                className="calendar-icon" 
                icon={faCalendarAlt}
                onClick={handleIconClick} />
            <Calendar 
                className={open ? 'show' : 'hide'} 
                defaultValue={defaultValue}
                onChange={handleCalendarChange} />
        </div>
    )
}

export default CalendarInput