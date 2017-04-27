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

  // Possible deal stages
  const stageList = [
    '0: Idea',
    'I: Initial Interest',
    'II: Initial Due Diligence',
    'III: Bidding',
    'IV: Finalization',
  ];

  /**
   * Custom afterInsert hook to dispatch the ADD_DEAL action
   */
  const onAfterInsertRow = row => props.addDeal(row);

  /**
   * Custom afterSave hook to dispatch EDIT_DEAL action
   */
  const onAfterSaveCell = (row, cellName, cellValue) => {
    const payload = { id: row.id, updateKey: cellName };
    payload.updateValue = normalizeInput(cellName, cellValue);
    props.editDeal(payload);
  };

  /**
   * Custom afterDelete hook to dispatch DELETE_DEAL action
   */
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
          beforeSaveCell: onBeforeSaveCell,
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
