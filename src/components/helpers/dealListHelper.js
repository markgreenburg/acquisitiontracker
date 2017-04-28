/**
 * Standardizes EBITDA and percent inputs. Returns standardized value:
 * Percents: .21% -> .0021, .21 -> .21, 21% -> .21, 21 -> .21
 * EBITDA: $234,567.00 -> 234567
 * All other fields: input -> input
 */
export const normalizeInput = (cellName, cellValue) => {
  const cellsToFilter = ['EBITDA', 'earningsGrowth'];
  // Convert ebitda cells
  if (cellsToFilter[0] === cellName) {
    return cellValue.replace(/,|%|\$/g, '');
  // Normalize percent growth input
  } else if (cellsToFilter[1] === cellName) {
    const leadingDot = (cellValue.charAt(0) === '.');
    const trailingPercent = (cellValue.charAt(cellValue.length - 1) === '%');
    // .21% -> .0021, 21 -> .21 (strip, divide by 100 in both cases)
    if ((leadingDot && trailingPercent) || (!leadingDot && !trailingPercent)) {
      const strippedValue = cellValue.replace(/,|%|\$/g, '');
      return parseFloat(strippedValue, 10) / 100;
    // .21 -> .21 (if entered as float, interpret as percent)
    } else if (leadingDot && !trailingPercent) {
      return cellValue;
    }
    // 21% -> .21, 21 -> .21 (all inputs without leading '.' divided by 100)
    const strippedValue = cellValue.replace(/,|%|\$/g, '');
    return parseFloat(strippedValue, 10) / 100;
  }
  // If the cell isn't ebitda or growth, just return its value
  return cellValue;
};

/**
 * Trims a full deal object into only the needed components
 * that should display in the data grid. Formats some fields as necessary.
 */
export const gridFormatter = (deal) => {
  // Data that needs manipulation and formatting
  const formattedEbitda = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  })
    .format(deal.EBITDA);
  const formattedExpiration = `${deal.expires} Days`;
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
  });
};

/**
 * Sort function that treats formatted EBITDA as Number
 */
export const sortEbitda = (a, b, order) => {
  const numA = parseInt(a.EBITDA.replace(/,|\$/g, ''), 10);
  const numB = parseInt(b.EBITDA.replace(/,|\$/g, ''), 10);
  return (order === 'desc' ? numB - numA : numA - numB);
};

/**
 * Sort function that treats formatted employees as Number
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
 */
export const onBeforeSaveCell = (row, cellName, cellValue) => {
  const cellsToFilter = ['EBITDA', 'earningsGrowth'];
  if (cellsToFilter.indexOf(cellName) < 0) {
    return true;
  }
  const strippedNum = parseFloat(cellValue.replace(/,|%|\$/g, ''), 10);
  return !isNaN(strippedNum);
};
