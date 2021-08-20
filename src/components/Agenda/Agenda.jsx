import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import listWeek from '@fullcalendar/list';
import timeGridWeek from '@fullcalendar/timegrid';
import timeGrid from '@fullcalendar/timegrid';
import timeGridDay from '@fullcalendar/timegrid';
import resourceTimeGridPlugin from '@fullcalendar/resource-timegrid'; // premium
import { TEST_EVENTS, TEST_RESOURCES } from '../../fixtures/events';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import styled from '@emotion/styled'

// Styles
const StyleWrapper = styled.div`
  .fc-list-table  {
    width: 100%;
  }

  .fc-list-event-title > a {
    padding-left: 20px;
  }

  .fc-list-event-graphic, .fc-list-event-time {
    text-align: center;
  }

  .fc-list-event-graphic > span {
    display: inline-block;
    box-sizing: content-box;
    width: 0;
    height: 0;
    border: 5px solid #3788d8;
    border: calc(10px / 2) solid #3788d8;
    border-radius: 5px;
    border-radius: calc(10px / 2);
  }

  .fc-list-day-cushion > a {
    margin: 0 10px;
  }

  .fc-list-day-text {
    text-transform: capitalize;
  }

  .fc-day {
    line-height: 1.9rem;
  }

  .fc-event {
    line-height: 1.3rem;
    cursor: pointer;
  }

  .fc-list-event {
    line-height: 2rem;
    cursor: pointer;
  }
`

// FN
const formatEvent = (event) => {
  console.log("EVENT:");
  console.log(event);
  return ({
    id: event._def.publicId,
    title: event._def.title,
    name: event._def.extendedProps.name,
    phrase: event._def.extendedProps.phrase,
    cta: event._def.extendedProps.cta
  });
}

const getEvents = () => {
  // Connectar axios aqui para recibir el JSON de eventos
  return (
    TEST_EVENTS
  )
}

console.table(TEST_EVENTS)

const getResources = () => {
  return (
    TEST_RESOURCES
  )
}

console.table(TEST_RESOURCES)

// Component
const Agenda = () => {
  const [modal, setModal] = useState(false);
  const [event, setEvent] = useState([]);
  const [element, setElement] = useState([]);

  console.log("E:")
  console.log(event)
  console.log("ELEMENT:")
  console.log(element)

  const toggle = () => setModal(!modal);

  const handleEventClick = ({ event, el }) => {
    toggle();
    setEvent(formatEvent(event));
    setElement(el);
  };

  return (
    <>
      <StyleWrapper>
        <FullCalendar
          schedulerLicenseKey="CC-Attribution-NonCommercial-NoDerivatives"
          plugins={[ 
            dayGridPlugin,
            listWeek,
            timeGridWeek,
            timeGridDay,
            timeGrid,
            resourceTimeGridPlugin
          ]}
          initialView="dayGridMonth"
          events={getEvents()}
          headerToolbar={{
            left: 'prev,next today', 
            center: 'title', 
            right: 'oneDay,twoDays,week,month,listWeek,byMedic'
          }}
          views={{
            oneDay: {
              type: "timeGrid", 
              duration: {days: 1}, 
              buttonText: "Día"
            },
            twoDays: {
              type: "timeGrid", 
              duration: {days: 2}, 
              buttonText: "2 días"
            },
            week: {
              type: "timeGridWeek",
              buttonText: "Semana"
            },
            month: {
              type: "dayGridMonth",
              buttonText: "Mes"
            },
            listWeek: {
              type: "listWeek",
              buttonText: "Lista"
            },
            byMedic: {
              type: "resourceTimeGridDay",
              duration: {days: 1},
              buttonText: "Doctor"
            }
          }}
          buttonText={{
            today: "Hoy",
            month: "Mes",
            week: "Semana"
          }}
          businessHours={{
            daysOfWeek: [1, 2, 3, 4, 5], 
            startTime: '09:00', 
            endTime: '18:00'
          }}
          editable={true}
          selectable={true}
          locale="es"
          eventClick={handleEventClick}
          resources={getResources()}
          slotDuration={"00:30:00"}
          allDaySlot={false}
          slotLabelFormat={{
            hour: "numeric",
            minute: "2-digit",
            omitZeroMinute: false
          }}
        />
      </StyleWrapper>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>
          {event.title}
        </ModalHeader>
        <ModalBody>
          <div>
            <p>{event.name}</p>
            <p>{event.phrase}</p>
            <p>ID: {event.id}</p>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color="danger" onClick={toggle}>
            Cancel
          </Button>
          <Button color="primary">{event.cta}</Button>{' '}
        </ModalFooter>
      </Modal>
    </>
  )
}

export default Agenda;