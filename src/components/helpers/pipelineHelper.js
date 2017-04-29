/**
 * Normalize EBITDA cell input into integers
 * @param {string} value the value of the cell contents to be saved
 */
const handleEBITDA = value => value.replace(/,|%|\$/g, '');

/**
 * Normalize percent growth cells into floats
 * @param {string} value the value of the cell contents to be saved
 */
const handleGrowth = (value) => {
  const leadingDot = (value.charAt(0) === '.');
  const trailingPercent = (value.charAt(value.length - 1) === '%');
  // .21% -> .0021, 21 -> .21 (strip, divide by 100 in both cases)
  if ((leadingDot && trailingPercent) || (!leadingDot && !trailingPercent)) {
    const strippedValue = value.replace(/,|%|\$/g, '');
    return parseFloat(strippedValue, 10) / 100;
  // .21 -> .21 (if entered as float, interpret as percent)
  } else if (leadingDot && !trailingPercent) {
    return value;
  }
  // 21% -> .21, 21 -> .21 (all inputs without leading '.' divided by 100)
  const strippedValue = value.replace(/,|%|\$/g, '');
  return parseFloat(strippedValue, 10) / 100;
};

/**
 * Normalizes the expiration date input value
 * @param {string} value the value of the cell contents to be saved
 */
const handleExpires = value => value.replace(/\D+/g, '');

/**
 * Is called on each input field in the data grid. Looks for cells that need
 * to be manipulated and then calls the corresponding handlers
 * @param {string} cellName the header name of the cell that's being saved
 * @param {string} cellValue the value of the cell that's being saved
 */
export const normalizeInput = (cellName, cellValue) => {
  const cellsToFilter = ['EBITDA', 'earningsGrowth', 'expires'];
  switch (cellName) {
    case cellsToFilter[0]:
      return handleEBITDA(cellValue);
    case cellsToFilter[1]:
      return handleGrowth(cellValue);
    case cellsToFilter[2]:
      return handleExpires(cellValue);
    default:
      return cellValue;
  }
};

/**
 * Trims a full deal object into only the needed components
 * that should display in the data grid. Formats some fields as necessary.
 * @param {object} deal current deal object from the Redux store's deals array
 */
export const gridFormatter = (deal) => {
  // Data that needs manipulation and formatting
  const formattedEbitda = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  })
    .format(deal.EBITDA);
  const formattedExpiration = (deal.expires === ''
    ? '0 Days'
    : `${deal.expires} Days`
  );
  const formattedGrowth = new Intl.NumberFormat('en-US', {
    style: 'percent',
  })
    .format(deal.earningsGrowth);
  const formattedEmployees = new Intl.NumberFormat('en-us', {
    maximumFractionDigits: 0,
    useGrouping: true,
  })
    .format(deal.employees);
  // all together now...
  return ({
    id: deal.id,
    company: deal.company,
    SIC: deal.SIC,
    stage: deal.stage,
    nextTask: deal.nextTask,
    expires: formattedExpiration,
    EBITDA: formattedEbitda,
    earningsGrowth: formattedGrowth,
    employees: formattedEmployees,
    details: 'More',
  });
};

/**
 * Sort function that treats formatted EBITDA as Number
 * @param {object} a first row object from the data grid
 * @param {object} b second row object from the data grid
 * @param {string} order current sort order in the data grid
 */
export const sortEbitda = (a, b, order) => {
  const numA = parseInt(a.EBITDA.replace(/,|\$/g, ''), 10);
  const numB = parseInt(b.EBITDA.replace(/,|\$/g, ''), 10);
  return (order === 'desc' ? numB - numA : numA - numB);
};

/**
 * Sort function that treats formatted employees as Number
 * @param {object} a first row object from the data grid
 * @param {object} b second row object from the data grid
 * @param {string} order current sort order in the data grid
 */
export const sortEmployees = (a, b, order) => {
  const numA = parseInt(a.employees.replace(/,|\$/g, ''), 10);
  const numB = parseInt(b.employees.replace(/,|\$/g, ''), 10);
  return (order === 'desc' ? numB - numA : numA - numB);
};

/**
 * Validates that new cell contents are not empty.
 * Returns a response object that includes response
 * type, a title, and a message for the datagrid to use.
 * @param {string} value current value of the cell being edited
 */
export const notUndefValidator = (value) => {
  const response = {
    isValid: true,
    notification: { type: 'success', msg: '', title: '' },
  };
  if (!value) {
    response.isValid = false;
    response.notification.type = 'error';
    response.notification.msg = 'Cell can\'t be empty!';
    response.notification.title = 'No Value';
  }
  return response;
};

/**
 * Custom beforeSave hook to check number cells before saving
 * @param {object} row row of the data grid that's being edited
 * @param {string} cellName name of column header of the cell being edited
 * @param {string} cellValue proposed new value of the cell being edited
 */
export const onBeforeSaveCell = (row, cellName, cellValue) => {
  const cellsToFilter = ['EBITDA', 'earningsGrowth'];
  if (cellsToFilter.indexOf(cellName) < 0) { return true; }
  const strippedNum = parseFloat(cellValue.replace(/,|%|\$/g, ''), 10);
  return !isNaN(strippedNum);
};
