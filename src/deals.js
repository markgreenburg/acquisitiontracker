/**
 * This module defines the initial state of the acquisition tracker.
 * This is mostly dummy data, and in a real application would be
 * replaced by whatever data is actually available on the application's
 * backend, e.g. through a fetch() to the server.
 */

// The 'shape' of the store is defined as an array of Deal objects
const deals = [
  {
    id: 0,
    company: 'ABC Supply',
    SIC: '1321 - Natural Gas Liquids',
    stage: 'II: Initial Due Diligence',
    nextTask: 'Send IOI',
    expires: 45, // TO-DO: this should be represented as a Date() diff
    EBITDA: 6500000,
    earningsGrowth: 0.21,
    employees: 54,
    contacts: [
      {
        name: 'Rudolph Offermans',
        role: 'CEO',
        phone: '123-456-7890',
        email: 'rudolph@abcsupply.com',
      },
      {
        name: 'Praveen Biskup',
        role: 'COO',
        phone: '234-567-8900',
        email: 'praveen@abcsupply.com',
      },
    ],
    evRange: {
      low: 11000000,
      high: 14500000,
    },
    headquarters: {
      street1: '123 Main St.',
      street2: '',
      city: 'Houston',
      state: 'TX',
      zip: '77005',
      country: 'USA',
    },
    active: true,
    startDate: '2017-01-13', // TO-DO: convert to Date()
    description:
      'Retail energy services company founded in 1999 that provides residential and commercial customers in competitive markets across the United States. Founded in 1999.',
    meetings: [
      {
        date: '2017-01-13', // TO-DO: convert to Date()
        attendees: 'Praveen, Rudolph', // TO-DO: link to names, refactor store shape
        notes: `Had intro call, pitched strategic synergies of coming under our
         umbrella. They seem receptive. Need to sign CA by next Friday.`,
      },
      {
        date: '2017-02-01', // TO-DO: convert to Date()
        attendees: 'Praveen', // TO-DO: link to names, refactor store shape
        notes: `Discussed top-line financials with Praveen and discussed what 
          he thinks they're worth.`,
      },
    ],
    dueDiligence: [
      {
        name: 'Audit financials',
        description: 'Something looks off on P&L. Need to dig deeper.',
      },
    ],
    documents: [
      {
        name: 'CIM',
        path: '',
      },
      {
        name: 'Signed IOI Copy',
        path: '',
      },
    ],
    tasks: [
      {
        name: 'task 1',
        stage: 'I: Initial Interest',
        done: true,
      },
      {
        name: 'task 2',
        stage: 'I: Initial Interest',
        done: true,
      },
      {
        name: 'task 3',
        stage: 'II: Initial Due Diligence',
        done: true,
      },
    ],
  },
  {
    id: 1,
    company: 'Ferrari NA',
    SIC: '5012- Automobiles & Vehicles',
    stage: 'I: Initial Interest',
    nextTask: 'First Contact',
    expires: 90, // TO-DO: this should be represented as a Date() diff
    EBITDA: 85000000,
    earningsGrowth: 0.16,
    employees: 150,
    contacts: [
      {
        name: 'Rudolph Offermans',
        role: 'CEO',
        phone: '123-456-7890',
        email: 'rudolph@abcsupply.com',
      },
      {
        name: 'Praveen Biskup',
        role: 'COO',
        phone: '234-567-8900',
        email: 'praveen@abcsupply.com',
      },
    ],
    evRange: {
      low: 11000000,
      high: 14500000,
    },
    headquarters: {
      street1: '123 Main St.',
      street2: '',
      city: 'Houston',
      state: 'TX',
      zip: '77005',
      country: 'USA',
    },
    active: true,
    startDate: '2017-01-13', // TO-DO: convert to Date()
    description:
      `Retail energy services company founded in 1999 that provides residential
       and commercial customers in competitive markets across the United States
       . Founded in 1999.`,
    meetings: [
      {
        date: '2017-01-13', // TO-DO: convert to Date()
        attendees: 'Praveen, Rudolph', // TO-DO: link to names, refactor store shape
        notes: `Had intro call, pitched strategic synergies of coming under our
         umbrella. They seem receptive. Need to sign CA by next Friday.`,
      },
      {
        date: '2017-02-01', // TO-DO: convert to Date()
        attendees: 'Praveen', // TO-DO: link to names, refactor store shape
        notes: `Discussed top-line financials with Praveen and discussed what 
          he thinks they're worth.`,
      },
    ],
    dueDiligence: [
      {
        name: 'Audit financials',
        description: 'Something looks off on P&L. Need to dig deeper.',
      },
    ],
    documents: [
      {
        name: 'CIM',
        path: '',
      },
      {
        name: 'Signed IOI Copy',
        path: '',
      },
    ],
    tasks: [
      {
        name: 'task 1',
        stage: 'I: Initial Interest',
        done: true,
      },
      {
        name: 'task 2',
        stage: 'I: Initial Interest',
        done: true,
      },
      {
        name: 'task 3',
        stage: 'II: Initial Due Diligence',
        done: true,
      },
    ],
  },
  {
    id: 2,
    company: 'CSX',
    SIC: '4011 - Railroads',
    stage: 'I: Initial Interest',
    nextTask: 'Review CIM',
    expires: 18, // TO-DO: this should be represented as a Date() diff
    EBITDA: 4690000000,
    earningsGrowth: -0.01,
    employees: 36000,
    contacts: [
      {
        name: 'Rudolph Offermans',
        role: 'CEO',
        phone: '123-456-7890',
        email: 'rudolph@abcsupply.com',
      },
      {
        name: 'Praveen Biskup',
        role: 'COO',
        phone: '234-567-8900',
        email: 'praveen@abcsupply.com',
      },
    ],
    evRange: {
      low: 11000000,
      high: 14500000,
    },
    headquarters: {
      street1: '123 Main St.',
      street2: '',
      city: 'Houston',
      state: 'TX',
      zip: '77005',
      country: 'USA',
    },
    active: true,
    startDate: '2017-01-13', // TO-DO: convert to Date()
    description:
      `Retail energy services company founded in 1999 that provides residential
       and commercial customers in competitive markets across the United States
       . Founded in 1999.`,
    meetings: [
      {
        date: '2017-01-13', // TO-DO: convert to Date()
        attendees: 'Praveen, Rudolph', // TO-DO: link to names, refactor store shape
        notes: `Had intro call, pitched strategic synergies of coming under our
         umbrella. They seem receptive. Need to sign CA by next Friday.`,
      },
      {
        date: '2017-02-01', // TO-DO: convert to Date()
        attendees: 'Praveen', // TO-DO: link to names, refactor store shape
        notes: `Discussed top-line financials with Praveen and discussed what 
          he thinks they're worth.`,
      },
    ],
    dueDiligence: [
      {
        name: 'Audit financials',
        description: 'Something looks off on P&L. Need to dig deeper.',
      },
    ],
    documents: [
      {
        name: 'CIM',
        path: '',
      },
      {
        name: 'Signed IOI Copy',
        path: '',
      },
    ],
    tasks: [
      {
        name: 'task 1',
        stage: 'I: Initial Interest',
        done: true,
      },
      {
        name: 'task 2',
        stage: 'I: Initial Interest',
        done: true,
      },
      {
        name: 'task 3',
        stage: 'II: Initial Due Diligence',
        done: true,
      },
    ],
  },
  {
    id: 3,
    company: 'LafargeHolcim',
    SIC: '3272 - Concrete Products',
    stage: 'III: Bidding',
    nextTask: 'LOI Pending',
    expires: 74, // TO-DO: this should be represented as a Date() diff
    EBITDA: 5264000000,
    earningsGrowth: 0.03,
    employees: 90000,
    contacts: [
      {
        name: 'Rudolph Offermans',
        role: 'CEO',
        phone: '123-456-7890',
        email: 'rudolph@abcsupply.com',
      },
      {
        name: 'Praveen Biskup',
        role: 'COO',
        phone: '234-567-8900',
        email: 'praveen@abcsupply.com',
      },
    ],
    evRange: {
      low: 11000000,
      high: 14500000,
    },
    headquarters: {
      street1: '123 Main St.',
      street2: '',
      city: 'Houston',
      state: 'TX',
      zip: '77005',
      country: 'USA',
    },
    active: true,
    startDate: '2017-01-13', // TO-DO: convert to Date()
    description:
      `Retail energy services company founded in 1999 that provides residential
       and commercial customers in competitive markets across the United States
       . Founded in 1999.`,
    meetings: [
      {
        date: '2017-01-13', // TO-DO: convert to Date()
        attendees: 'Praveen, Rudolph', // TO-DO: link to names, refactor store shape
        notes: `Had intro call, pitched strategic synergies of coming under our
         umbrella. They seem receptive. Need to sign CA by next Friday.`,
      },
      {
        date: '2017-02-01', // TO-DO: convert to Date()
        attendees: 'Praveen', // TO-DO: link to names, refactor store shape
        notes: `Discussed top-line financials with Praveen and discussed what 
          he thinks they're worth.`,
      },
    ],
    dueDiligence: [
      {
        name: 'Audit financials',
        description: 'Something looks off on P&L. Need to dig deeper.',
      },
    ],
    documents: [
      {
        name: 'CIM',
        path: '',
      },
      {
        name: 'Signed IOI Copy',
        path: '',
      },
    ],
    tasks: [
      {
        name: 'task 1',
        stage: 'I: Initial Interest',
        done: true,
      },
      {
        name: 'task 2',
        stage: 'I: Initial Interest',
        done: true,
      },
      {
        name: 'task 3',
        stage: 'II: Initial Due Diligence',
        done: true,
      },
    ],
  },
  {
    id: 4,
    company: 'Undisclosed',
    SIC: '1321 - Natural Gas Liquids',
    stage: '0: Idea',
    nextTask: 'Sign CA',
    expires: 12, // TO-DO: this should be represented as a Date() diff
    EBITDA: 9300000,
    earningsGrowth: 0.31,
    employees: 112,
    contacts: [
      {
        name: 'Rudolph Offermans',
        role: 'CEO',
        phone: '123-456-7890',
        email: 'rudolph@abcsupply.com',
      },
      {
        name: 'Praveen Biskup',
        role: 'COO',
        phone: '234-567-8900',
        email: 'praveen@abcsupply.com',
      },
    ],
    evRange: {
      low: 11000000,
      high: 14500000,
    },
    headquarters: {
      street1: '123 Main St.',
      street2: '',
      city: 'Houston',
      state: 'TX',
      zip: '77005',
      country: 'USA',
    },
    active: true,
    startDate: '2017-01-13', // TO-DO: convert to Date()
    description:
      `Retail energy services company founded in 1999 that provides residential
       and commercial customers in competitive markets across the United States
       . Founded in 1999.`,
    meetings: [
      {
        date: '2017-01-13', // TO-DO: convert to Date()
        attendees: 'Praveen, Rudolph', // TO-DO: link to names, refactor store shape
        notes: `Had intro call, pitched strategic synergies of coming under our
         umbrella. They seem receptive. Need to sign CA by next Friday.`,
      },
      {
        date: '2017-02-01', // TO-DO: convert to Date()
        attendees: 'Praveen', // TO-DO: link to names, refactor store shape
        notes: `Discussed top-line financials with Praveen and discussed what 
          he thinks they're worth.`,
      },
    ],
    dueDiligence: [
      {
        name: 'Audit financials',
        description: 'Something looks off on P&L. Need to dig deeper.',
      },
    ],
    documents: [
      {
        name: 'CIM',
        path: '',
      },
      {
        name: 'Signed IOI Copy',
        path: '',
      },
    ],
    tasks: [
      {
        name: 'task 1',
        stage: 'I: Initial Interest',
        done: true,
      },
      {
        name: 'task 2',
        stage: 'I: Initial Interest',
        done: true,
      },
      {
        name: 'task 3',
        stage: 'II: Initial Due Diligence',
        done: true,
      },
    ],
  },
  {
    id: 5,
    company: 'Sensient Technologies',
    SIC: '2087 - Flavoring Extracts',
    stage: 'IV: Finalization',
    nextTask: 'Lost',
    expires: 0, // TO-DO: this should be represented as a Date() diff
    EBITDA: 233000000,
    earningsGrowth: 0.12,
    employees: 1200,
    contacts: [
      {
        name: 'Rudolph Offermans',
        role: 'CEO',
        phone: '123-456-7890',
        email: 'rudolph@abcsupply.com',
      },
      {
        name: 'Praveen Biskup',
        role: 'COO',
        phone: '234-567-8900',
        email: 'praveen@abcsupply.com',
      },
    ],
    evRange: {
      low: 11000000,
      high: 14500000,
    },
    headquarters: {
      street1: '123 Main St.',
      street2: '',
      city: 'Houston',
      state: 'TX',
      zip: '77005',
      country: 'USA',
    },
    active: true,
    startDate: '2017-01-13', // TO-DO: convert to Date()
    description:
      `Retail energy services company founded in 1999 that provides residential
       and commercial customers in competitive markets across the United States
       . Founded in 1999.`,
    meetings: [
      {
        date: '2017-01-13', // TO-DO: convert to Date()
        attendees: 'Praveen, Rudolph', // TO-DO: link to names, refactor store shape
        notes: `Had intro call, pitched strategic synergies of coming under our
         umbrella. They seem receptive. Need to sign CA by next Friday.`,
      },
      {
        date: '2017-02-01', // TO-DO: convert to Date()
        attendees: 'Praveen', // TO-DO: link to names, refactor store shape
        notes: `Discussed top-line financials with Praveen and discussed what 
          he thinks they're worth.`,
      },
    ],
    dueDiligence: [
      {
        name: 'Audit financials',
        description: 'Something looks off on P&L. Need to dig deeper.',
      },
    ],
    documents: [
      {
        name: 'CIM',
        path: '',
      },
      {
        name: 'Signed IOI Copy',
        path: '',
      },
    ],
    tasks: [
      {
        name: 'task 1',
        stage: 'I: Initial Interest',
        done: true,
      },
      {
        name: 'task 2',
        stage: 'I: Initial Interest',
        done: true,
      },
      {
        name: 'task 3',
        stage: 'II: Initial Due Diligence',
        done: true,
      },
    ],
  },
];

export default deals;
