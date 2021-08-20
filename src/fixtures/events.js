let eventGuid = 0

export const TEST_EVENTS = [{
    id: createEventId(),
    title: 'Otro evento Y',
    date: '2021-02-01',
    start: '2021-02-01T10:30:00',
    end: '2021-02-01T11:30:00',
    backgroundColor: '#ffdc00',
    borderColor: '#ffdc00',
    textColor: '#4b4100',
    extendedProps: {
      name: 'Carlos Gómez',
      phrase: 'Hello react 1!',
      cta: 'Call to action 1'
    },
    resourceId: 'a'
  },
  {
    id: createEventId(),
    title: 'San Valentin',
    date: '2021-02-14',
    start: '2021-02-14T10:30:00',
    end: '2021-02-14T11:30:00',
    backgroundColor: '#4A148C',
    borderColor: '#4A148C',
    textColor: '#F3E5F5',
    extendedProps: {
      name: 'Carlos Gómez',
      phrase: 'Hello react!',
      cta: 'Call to action 2'
    },
    resourceId: 'a'
  },
  {
    id: createEventId(),
    title: 'Miercoles de ceniza',
    date: '2021-02-17',
    start: '2021-02-17T10:30:00',
    end: '2021-02-17T11:30:00',
    backgroundColor: '#BF360C',
    borderColor: '#BF360C',
    textColor: '#FBE9E7',
    extendedProps: {
      name: 'Carlos Gómez',
      phrase: 'Hello react!',
      cta: 'Call to action 3'
    },
    resourceId: 'b'
  },
  {
    id: createEventId(),
    title: 'Evento para Dr. House',
    date: '2021-02-19',
    start: '2021-02-19T10:30:00',
    end: '2021-02-19T11:30:00',
    backgroundColor: '#4CAF50',
    borderColor: '#4CAF50',
    textColor: '#E8F5E9',
    extendedProps: {
      name: 'Carlos Gómez',
      phrase: 'Hello react!',
      cta: 'Call to action 3'
    },
    resourceId: 'a'
  },
  {
    id: createEventId(),
    title: 'Evento para Dr. Dre',
    date: '2021-02-19',
    start: '2021-02-19T12:30:00',
    end: '2021-02-19T13:30:00',
    backgroundColor: '#1976D2',
    borderColor: '#1976D2',
    textColor: '#E3F2FD',
    extendedProps: {
      name: 'Carlos Gómez',
      phrase: 'Hello react!',
      cta: 'Call to action 3'
    },
    resourceId: 'c'
  },
  {
    id: createEventId(),
    title: 'Luna llena',
    date: '2021-02-27',
    start: '2021-02-27T12:30:00',
    end: '2021-02-27T13:30:00',
    backgroundColor: '#e53935',
    borderColor: '#e53935',
    textColor: '#ffebee',
    extendedProps: {
      name: 'Carlos Gómez',
      phrase: 'Hello react!',
      cta: 'Call to action 4'
    },
    resourceId: 'c'
  },
  {
    id: createEventId(),
    title: 'Cuarto menguante',
    date: '2021-03-08',
    start: '2021-03-08T12:30:00',
    end: '2021-03-08T13:30:00',
    backgroundColor: '#E91E63',
    borderColor: '#E91E63',
    textColor: '#F8BBD0',
    extendedProps: {
      name: 'Carlos Gómez',
      phrase: 'Hello react!',
      cta: 'Call to action 5'
    },
    resourceId: 'c'
  },
  {
    id: createEventId(),
    title: 'Otro evento X',
    date: '2021-03-08',
    start: '2021-03-08T14:30:00',
    end: '2021-03-08T15:30:00',
    backgroundColor: '#4E342E',
    borderColor: '#4E342E',
    textColor: '#EFEBE9',
    extendedProps: {
      name: 'Carlos Gómez',
      phrase: 'Hello react!',
      cta: 'Call to action 6'
    },
    resourceId: 'd'
  },
  {
    id: createEventId(),
    title: 'Cometa halley',
    date: '2021-03-10',
    start: '2021-03-10T14:30:00',
    end: '2021-03-10T15:30:00',
    backgroundColor: '#76FF03',
    borderColor: '#76FF03',
    textColor: '#33691E',
    extendedProps: {
      name: 'Carlos Gómez',
      phrase: 'Hello react abc!',
      cta: 'Call to action 7'
    },
    resourceId: 'd'
  },
]

// event object: https://fullcalendar.io/docs/event-object
export function createEventId() {
  return String(eventGuid++)
}

// resource object: https://fullcalendar.io/docs/resource-object
export const TEST_RESOURCES = [{
    id: 'a',
    title: 'Dr. House'
  },
  {
    id: 'b',
    title: 'Dr. Nefario'
  },
  {
    id: 'c',
    title: 'Dr. Dre'
  },
  {
    id: 'd',
    title: 'Dr. Strange'
  },
  {
    id: 'e',
    title: 'Dr. Hannibal Lecter'
  },
  {
    id: 'f',
    title: 'Dr. Emmet Brown'
  }
]