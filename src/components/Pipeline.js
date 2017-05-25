/* eslint react/no-unused-prop-types: 0 */
// @flow

import React from 'react';
import PropTypes from 'prop-types';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import '../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import More from './More';
import {
  normalizeInput,
  gridFormatter,
  sortEbitda,
  sortEmployees,
  notUndefValidator,
  onBeforeSaveCell,
} from './helpers/pipelineHelper';

/**
 * Functional React component the renders the pipeline data grid
 * @param {object} props functions, data values passed down from Tab component
 */
const Pipeline = (props) => {
  const dealSummary = props.deals.map(deal => gridFormatter(deal));

  /**
   * Custom afterInsert hook to dispatch the ADD_DEAL action
   * @param {object} row proposed row object to be inserted into the data grid
   */
  const onAfterInsertRow = row => props.addDeal(row);

  /**
   * Custom afterSave hook to dispatch EDIT_DEAL action
   * @param {object} row
   * @param {string} cellName
   * @param {string} cellValue
   */
  const onAfterSaveCell = (row, cellName, cellValue) => props.editDeal({
    id: row.id,
    updateKey: cellName,
    updateValue: normalizeInput(cellName, cellValue),
  });

  /**
   * Custom afterDelete hook to dispatch DELETE_DEAL action
   * @param {array} rowArray array of selected rows (only 1 max) from data grid
   */
  const onAfterDeleteRow = rowArray => props.deleteDeal({ id: rowArray[0] });

  /**
   * Formats the 'more' links in the 'details' column to display as button
   * Passes changeTab and changeDeal action dispatchers to the component.
   * @param {string} cell
   * @param {object} row
   */
  const detailsFormatter = (cell, row) => (
    <More
      changeTab={props.changeTab}
      changeDeal={props.changeDeal}
      rowId={row.id ? row.id : 0}
    />
  );

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
          editable={{ validator: notUndefValidator }}
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
        <TableHeaderColumn
          dataAlign="center"
          width="60"
          dataField="details"
          editable={false}
          dataFormat={detailsFormatter}
        />
      </BootstrapTable>
    </div>
  );
};

/* Add prop checks to Pipeline component */
Pipeline.propTypes = {
  deals: PropTypes.arrayOf(PropTypes.object).isRequired,
  addDeal: PropTypes.func.isRequired,
  editDeal: PropTypes.func.isRequired,
  deleteDeal: PropTypes.func.isRequired,
  changeTab: PropTypes.func.isRequired,
  changeDeal: PropTypes.func.isRequired,
};

export default Pipeline;
