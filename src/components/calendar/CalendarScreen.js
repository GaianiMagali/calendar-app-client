import React, { useState } from 'react';

import moment from 'moment';
import 'moment/locale/es';

import { Calendar, momentLocalizer } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css';

import { Navbar } from '../ui/Navbar';
import { messages } from '../../helpers/calendar-messages-es';
import { CalendarEvent } from './CalendarEvent';
import { CalendarModal } from './CalendarModal';

moment.locale('es');

const localizer = momentLocalizer(moment);

const events = [{
    title: 'Cumpleaños de Joni',
    start: moment().toDate(),
    end: moment().add(2, 'hours').toDate(),
    bgColor: '#fafafa',
    notes: 'Comprar la torta',
    user: {
        _id: '123',
        name: 'Elsa'
    }
}]

export const CalendarScreen = () => {

    const [lastView, setLastView] = useState(localStorage.getItem('lastView' || 'month'));

    const onDoubleClick = (e) => {
        console.log(e)
    }

    const onSelectEvent = (e) => {
        console.log(e)
    }

    const onViewChange = (e) => {
        setLastView(e);
        localStorage.setItem('lastView', e);
    }


    const eventStyleGetter = (event, start, end, isSelected) => {

        const style = {
            backgroundColor: '#367CF7',
            borderRadius: '0px',
            opacity: 0.8,
            display: 'block',
            color: 'white'
        }

        return {
            style
        }
    }

    return (
        <div className="calendar-screen">
            <Navbar />

            <Calendar
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                messages={messages}
                eventPropGetter={eventStyleGetter}
                onDoubleClickEvent={onDoubleClick}
                onSelectEvent={onSelectEvent}
                onView={onViewChange}
                view={lastView}
                components={{
                    event: CalendarEvent
                }}
            />

            <CalendarModal />
        </div>
    )
}
