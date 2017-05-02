const emptyDeal = {
  id: 0,
  company: '',
  SIC: '',
  stage: '',
  nextTask: '',
  expires: 0, // TO-DO: this should be represented as a Date() diff
  EBITDA: 0,
  earningsGrowth: 0.0,
  employees: 0,
  contacts: [],
  evRange: { low: 0, high: 0 },
  headquarters: {
    street1: '',
    street2: '',
    city: '',
    state: '',
    zip: '',
    country: '',
  },
  active: true,
  startDate: '', // TO-DO: convert to Date()
  description:
    '',
  meetings: [],
  dueDiligence: [],
  documents: [],
  tasks: [],
};

export default emptyDeal;
