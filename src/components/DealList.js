import React from 'react';
import PropTypes from 'prop-types';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import '../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';

// Render data grid
const DealList = (props) => {
  // Only push needed data into grid
  const dealSummary = props.deals.map((deal) => {
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
    const summarizedDeal = {
      id: deal.id,
      company: deal.company,
      SIC: deal.SIC,
      stage: deal.stage,
      nextTask: deal.nextTask,
      expires: formattedExpiration,
      EBITDA: formattedEbitda,
      earningsGrowth: formattedGrowth,
      employees: formattedEmployees,
    };
    return summarizedDeal;
  });

  // Custom sort function for formatted data in table
  // Replaces commas and $ with empty strings and parses as Num
  const sortEbitda = (a, b, order) => {
    const numA = parseInt(a.EBITDA.replace(/,|\$/g, ''), 10);
    const numB = parseInt(b.EBITDA.replace(/,|\$/g, ''), 10);
    return (order === 'desc' ? numB - numA : numA - numB);
  };

  const sortEmployees = (a, b, order) => {
    const numA = parseInt(a.employees.replace(/,|\$/g, ''), 10);
    const numB = parseInt(b.employees.replace(/,|\$/g, ''), 10);
    return (order === 'desc' ? numB - numA : numA - numB);
  };

  // Custom data drop-down for stage edits
  const stageList = [
    '0: Idea',
    'I: Initial Interest',
    'II: Initial Due Diligence',
    'III: Bidding',
    'IV: Finalization',
  ];

  /**
   * Custom validators for editable data fields
   */
  const notUndefValidator = (value) => {
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

  // Custom afterInsert hook to dispatch the ADD_DEAL action
  const onAfterInsertRow = row => props.addDeal(row);

  // Custom afterSave hook to dispatch EDIT_DEAL action
  const onAfterSaveCell = (row, cellName, cellValue) => {
    const payload = {
      id: row.id,
      updateKey: cellName,
      updateValue: cellValue,
    };
    props.editDeal(payload);
  };

  // Custom afterDelete hook to dispatch DELETE_DEAL action
  const onAfterDeleteRow = (rowArray) => {
    const payload = { id: rowArray[0] };
    props.deleteDeal(payload);
  };

  // TO-DO: Add expandable, editable contacts list
  return (
    <div className="container">
      <BootstrapTable
        data={dealSummary}
        insertRow
        deleteRow
        selectRow={{ mode: 'radio' }}
        cellEdit={{
          mode: 'click',
          blurToSave: true,
          afterSaveCell: onAfterSaveCell,
        }}
        search
        height="75%"
        scrollTop={'Top'}
        striped
        hover
        options={{
          noDataText: 'No Deals Found',
          defaultSortName: 'company',
          defaultSortOrder: 'asc',
          insertText: 'Add Deal',
          // TO-DO: customize delete alert, pref with bootstrap instead of alert
          deleteText: 'Delete Deal',
          afterInsertRow: onAfterInsertRow,
          afterDeleteRow: onAfterDeleteRow,
        }}
      >
        <TableHeaderColumn
          isKey hidden
          dataField="id"
          dataSort
        >Deal ID</TableHeaderColumn>
        <TableHeaderColumn
          dataField="company"
          dataSort
          editable={{
            validator: notUndefValidator,
          }}
        >Company</TableHeaderColumn>
        <TableHeaderColumn
          dataField="SIC"
          dataSort
          editable={{
            validator: notUndefValidator,
          }}
        >SIC Code</TableHeaderColumn>
        <TableHeaderColumn
          dataField="stage"
          dataSort
          editable={{
            type: 'select',
            options: {
              values: stageList,
            },
          }}
        >Stage</TableHeaderColumn>
        <TableHeaderColumn
          dataField="nextTask"
          dataSort
        >Next Task</TableHeaderColumn>
        <TableHeaderColumn
          dataField="expires"
          dataSort
        >Expires In</TableHeaderColumn>
        <TableHeaderColumn
          dataField="EBITDA"
          dataSort
          sortFunc={sortEbitda}
        >EBITDA</TableHeaderColumn>
        <TableHeaderColumn
          dataField="earningsGrowth"
          dataSort
        >Earnings Growth</TableHeaderColumn>
        <TableHeaderColumn
          dataField="employees"
          dataSort
          sortFunc={sortEmployees}
        >Employees</TableHeaderColumn>
      </BootstrapTable>
    </div>
  );
};

// Check for required props
DealList.propTypes = {
  deals: PropTypes.arrayOf(PropTypes.object).isRequired,
  addDeal: PropTypes.func.isRequired,
  editDeal: PropTypes.func.isRequired,
  deleteDeal: PropTypes.func.isRequired,
};

module.exports = DealList;
