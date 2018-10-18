export interface IWorker {
  id: string;
  name: string;
  email: string;
  registered: string;
  phone: string;
  cell: string;
  title: string;
}
interface IClient {
  name: string;
  netId: string;
  phoneNumber: string;
  email: string;
}

interface IEvent {
  time: string;
  description: string;
}
export interface IWorkOrder {
  status: string;
  id: string;
  serviceLocation: string;
  assignedTo: string[];
  shop: string;
  workCode: string;
  clientSchedule: string;
  workDescription: string;
  clientDescription: string;
  notes: string;
  client: IClient;
  history: IEvent[];
}

export type AllWorkOrders = Array<IWorkOrder>;
export type AllWorkers = Array<IWorker>;

export const workers: AllWorkers = [
  {
    id: '94848302',
    name: 'Jennie Johnson',
    email: 'jj@nyu.edu',
    registered: '2010-08-09 13:37:38',
    phone: '(589)-070-0928',
    cell: '(110)-065-6280',
    title: 'supervisor'
  },
  {
    id: '94848303',
    name: 'Jennie Baker',
    email: 'jj@nyu.edu',
    registered: '2010-08-09 13:37:38',
    phone: '(589)-070-0928',
    cell: '(110)-065-6280',
    title: 'supervisor'
  },
  {
    id: '94848304',
    name: 'Jennie Thomas',
    email: 'jj@nyu.edu',
    registered: '2010-08-09 13:37:38',
    phone: '(589)-070-0928',
    cell: '(110)-065-6280',
    title: 'employee'
  },
  {
    id: '94848305',
    name: 'Jennie Smith',
    email: 'jj@nyu.edu',
    registered: '2010-08-09 13:37:38',
    phone: '(589)-070-0928',
    cell: '(110)-065-6280',
    title: 'supervisor'
  }
];

export const workOrders: AllWorkOrders = [
  {
    status: 'unassigned',
    id: '180000987',
    serviceLocation: '10 Astor Place, Room 722 New York, NY',
    assignedTo: 'Jennie Johnson',
    shop: 'HVAC',
    workCode: `HVAC - Too Hot`,
    clientSchedule: '10/15/2018',
    workDescription: "goes here, doesn't exceed two lines",
    clientDescription: "goes here, doesn't exceed two lines",
    notes: 'notes go here',
    client: {
      name: 'Alex Warren',
      netId: 'ja123',
      phoneNumber: '6187891234',
      email: 'ja123@nyu.edu'
    },
    history: [
      {
        time: '10/15/2018 10am',
        description: 'received work order'
      }
    ]
  },
  {
    status: 'unassigned',
    id: '180000988',
    serviceLocation: '10 Astor Place, Room 722 New York, NY',
    assignedTo: 'Jennie Johnson',
    shop: 'HVAC',
    workCode: `HVAC - Too Hot`,
    clientSchedule: '10/15/2018',
    workDescription: "goes here, doesn't exceed two lines",
    clientDescription: "goes here, doesn't exceed two lines",
    notes: 'notes go here',
    client: {
      name: 'Alex Warren',
      netId: 'ja123',
      phoneNumber: '6187891234',
      email: 'ja123@nyu.edu'
    },
    history: [
      {
        time: '10/15/2018 10am',
        description: 'received work order'
      }
    ]
  },
  {
    status: 'unassigned',
    id: '180000989',
    serviceLocation: '10 Astor Place, Room 722 New York, NY',
    assignedTo: 'Jennie Johnson',
    shop: 'HVAC',
    workCode: `HVAC - Too Hot`,
    clientSchedule: '10/15/2018',
    workDescription: "goes here, doesn't exceed two lines",
    clientDescription: "goes here, doesn't exceed two lines",
    notes: 'notes go here',
    client: {
      name: 'Alex Warren',
      netId: 'ja123',
      phoneNumber: '6187891234',
      email: 'ja123@nyu.edu'
    },
    history: [
      {
        time: '10/15/2018 10am',
        description: 'received work order'
      }
    ]
  },
  {
    status: 'unassigned',
    id: '180000990',
    serviceLocation: '10 Astor Place, Room 722 New York, NY',
    assignedTo: 'Jennie Johnson',
    shop: 'HVAC',
    workCode: `HVAC - Too Hot`,
    clientSchedule: '10/15/2018',
    workDescription: "goes here, doesn't exceed two lines",
    clientDescription: "goes here, doesn't exceed two lines",
    notes: 'notes go here',
    client: {
      name: 'Alex Warren',
      netId: 'ja123',
      phoneNumber: '6187891234',
      email: 'ja123@nyu.edu'
    },
    history: [
      {
        time: '10/15/2018 10am',
        description: 'received work order'
      }
    ]
  },
  {
    status: 'unassigned',
    id: '180000991',
    serviceLocation: '10 Astor Place, Room 722 New York, NY',
    assignedTo: 'Jennie Johnson',
    shop: 'HVAC',
    workCode: `HVAC - Too Hot`,
    clientSchedule: '10/15/2018',
    workDescription: "goes here, doesn't exceed two lines",
    clientDescription: "goes here, doesn't exceed two lines",
    notes: 'notes go here',
    client: {
      name: 'Alex Warren',
      netId: 'ja123',
      phoneNumber: '6187891234',
      email: 'ja123@nyu.edu'
    },
    history: [
      {
        time: '10/15/2018 10am',
        description: 'received work order'
      }
    ]
  },
  {
    status: 'unassigned',
    id: '180000992',
    serviceLocation: '10 Astor Place, Room 722 New York, NY',
    assignedTo: 'Jennie Johnson',
    shop: 'HVAC',
    workCode: `HVAC - Too Hot`,
    clientSchedule: '10/15/2018',
    workDescription: "goes here, doesn't exceed two lines",
    clientDescription: "goes here, doesn't exceed two lines",
    notes: 'notes go here',
    client: {
      name: 'Alex Warren',
      netId: 'ja123',
      phoneNumber: '6187891234',
      email: 'ja123@nyu.edu'
    },
    history: [
      {
        time: '10/15/2018 10am',
        description: 'received work order'
      }
    ]
  },
  {
    status: 'assigned',
    id: '180000993',
    serviceLocation: '10 Astor Place, Room 722 New York, NY',
    assignedTo: 'Jennie Johnson',
    shop: 'HVAC',
    workCode: `HVAC - Too Hot`,
    clientSchedule: '10/15/2018',
    workDescription: "goes here, doesn't exceed two lines",
    clientDescription: "goes here, doesn't exceed two lines",
    notes: 'notes go here',
    client: {
      name: 'Alex Warren',
      netId: 'ja123',
      phoneNumber: '6187891234',
      email: 'ja123@nyu.edu'
    },
    history: [
      {
        time: '10/15/2018 10am',
        description: 'received work order'
      }
    ]
  },
  {
    status: 'assigned',
    id: '180000994',
    serviceLocation: '10 Astor Place, Room 722 New York, NY',
    assignedTo: 'Jennie Johnson',
    shop: 'HVAC',
    workCode: `HVAC - Too Hot`,
    clientSchedule: '10/15/2018',
    workDescription: "goes here, doesn't exceed two lines",
    clientDescription: "goes here, doesn't exceed two lines",
    notes: 'notes go here',
    client: {
      name: 'Alex Warren',
      netId: 'ja123',
      phoneNumber: '6187891234',
      email: 'ja123@nyu.edu'
    },
    history: [
      {
        time: '10/15/2018 10am',
        description: 'received work order'
      }
    ]
  },
  {
    status: 'unassigned',
    id: '180000995',
    serviceLocation: '10 Astor Place, Room 722 New York, NY',
    assignedTo: '',
    shop: 'HVAC',
    workCode: `HVAC - Too Hot`,
    clientSchedule: '10/15/2018',
    workDescription: "goes here, doesn't exceed two lines",
    clientDescription: "goes here, doesn't exceed two lines",
    notes: 'notes go here',
    client: {
      name: 'Alex Warren',
      netId: 'ja123',
      phoneNumber: '6187891234',
      email: 'ja123@nyu.edu'
    },
    history: [
      {
        time: '10/15/2018 10am',
        description: 'received work order'
      }
    ]
  }
];
