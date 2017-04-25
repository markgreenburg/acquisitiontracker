/**
 * This model defines the initial state of the acquisition tracker.
 * This is mostly dummy data, and in a real application would be
 * replaced by whatever data is actually available on the application's
 * backend, e.g. through a fetch() to the server.
 */

// The 'shape' of the store is defined as an array of Deal objects
const deals = [
  {
    id: 1,
    company: 'ABC Supply',
    SIC: '1321 - Natural Gas Liquids',
    stage: 'II: Initial Due Diligence',
    nextTask: 'Send IOI',
    Expires: 45, // TO-DO: this should be represented as a Date() diff
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
    company: 'Ferrari NA',
    SIC: '1321 - Natural Gas Liquids',
    stage: 'II: Initial Due Diligence',
    nextTask: 'Send IOI',
    Expires: 45, // TO-DO: this should be represented as a Date() diff
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
    company: 'CSX',
    SIC: '1321 - Natural Gas Liquids',
    stage: 'II: Initial Due Diligence',
    nextTask: 'Send IOI',
    Expires: 45, // TO-DO: this should be represented as a Date() diff
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
    company: 'LafargeHolcim',
    SIC: '1321 - Natural Gas Liquids',
    stage: 'II: Initial Due Diligence',
    nextTask: 'Send IOI',
    Expires: 45, // TO-DO: this should be represented as a Date() diff
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
    company: 'Undisclosed',
    SIC: '1321 - Natural Gas Liquids',
    stage: 'II: Initial Due Diligence',
    nextTask: 'Send IOI',
    Expires: 45, // TO-DO: this should be represented as a Date() diff
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
    id: 6,
    company: 'Sensient Technologies',
    SIC: '1321 - Natural Gas Liquids',
    stage: 'II: Initial Due Diligence',
    nextTask: 'Send IOI',
    Expires: 45, // TO-DO: this should be represented as a Date() diff
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

module.exports = deals;
