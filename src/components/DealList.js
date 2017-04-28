/* eslint react/no-unused-prop-types: 0 */

import React from 'react';
import PropTypes from 'prop-types';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import '../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import {
  normalizeInput,
  gridFormatter,
  sortEbitda,
  sortEmployees,
  notUndefValidator,
  onBeforeSaveCell,
} from './helpers/dealListHelper';

// Render data grid
const DealList = (props) => {
  const dealSummary = props.deals.map(deal => gridFormatter(deal));

  /**
   * Custom afterInsert hook to dispatch the ADD_DEAL action
   */
  const onAfterInsertRow = row => props.addDeal(row);

  /**
   * Custom afterSave hook to dispatch EDIT_DEAL action
   */
  const onAfterSaveCell = (row, cellName, cellValue) => props.editDeal({
    id: row.id,
    updateKey: cellName,
    updateValue: normalizeInput(cellName, cellValue),
  });

  /**
   * Custom afterDelete hook to dispatch DELETE_DEAL action
   */
  const onAfterDeleteRow = rowArray => props.deleteDeal({ id: rowArray[0] });

  /**
   * Start Data Grid Options
   */

  /* Main table options */
  const tableOptions = {
    noDataText: 'No Deals Found',
    defaultSortName: 'company',
    defaultSortOrder: 'asc',
    clearSearch: true,
    insertText: 'Add Deal',
    // TO-DO: customize delete alert, pref with bootstrap instead of alert
    deleteText: 'Delete Deal',
    afterInsertRow: onAfterInsertRow,
    afterDeleteRow: onAfterDeleteRow,
  };

  /* Editable cell options (main table prop) */
  const cellEditOptions = {
    mode: 'click',
    blurToSave: true,
    beforeSaveCell: onBeforeSaveCell,
    afterSaveCell: onAfterSaveCell,
  };

  /* Stage Column Editing Options */
  const stageColumnEditOptions = {
    type: 'select',
    options: {
      values: [
        '0: Idea',
        'I: Initial Interest',
        'II: Initial Due Diligence',
        'III: Bidding',
        'IV: Finalization',
      ],
    },
  };

  /**
   * End Data Grid Options
   */

  // TO-DO: Add expandable, editable contacts list
  return (
    <div className="container">
      <BootstrapTable
        data={dealSummary}
        insertRow
        deleteRow
        selectRow={{ mode: 'radio' }}
        cellEdit={cellEditOptions}
        search
        height="75%"
        scrollTop={'Top'}
        striped
        hover
        options={tableOptions}
      >
        <TableHeaderColumn
          isKey hidden
          dataField="id"
          dataSort
        >Deal ID</TableHeaderColumn>
        <TableHeaderColumn
          dataField="company"
          dataSort
          editable={{ validator: notUndefValidator }}
        >Company</TableHeaderColumn>
        <TableHeaderColumn
          dataField="SIC"
          dataSort
          editable={{ validator: notUndefValidator }}
        >SIC Code</TableHeaderColumn>
        <TableHeaderColumn
          dataField="stage"
          dataSort
          editable={stageColumnEditOptions}
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
