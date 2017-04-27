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

  // Custom afterInsert hook to dispatch the ADD_DEAL action
  const onAfterInsertRow = row => props.addDeal(row);

  return (
    <div className="container">
      <BootstrapTable
        data={dealSummary}
        insertRow
        search
        height="75%"
        scrollTop={'Top'}
        striped
        hover
        options={{
          noDataText: 'No Deals Found',
          defaultSortName: 'company',
          defaultSortOrder: 'asc',
          afterInsertRow: onAfterInsertRow,
        }}
      >
        <TableHeaderColumn isKey dataField="id" dataSort>Deal ID</TableHeaderColumn>
        <TableHeaderColumn
          dataField="company"
          dataSort
        >Company</TableHeaderColumn>
        <TableHeaderColumn
          dataField="SIC"
          dataSort
        >SIC Code</TableHeaderColumn>
        <TableHeaderColumn dataField="stage" dataSort>Stage</TableHeaderColumn>
        <TableHeaderColumn dataField="nextTask" dataSort>Next Task</TableHeaderColumn>
        <TableHeaderColumn dataField="expires" dataSort>Expires In</TableHeaderColumn>
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
};

module.exports = DealList;
