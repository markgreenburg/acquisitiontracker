import React from 'react';
import PropTypes from 'prop-types';
import Griddle, { RowDefinition, ColumnDefinition, plugins } from 'griddle-react';

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
    const formattedExpiration = `${deal.Expires} Days`;
    const formattedGrowth = new Intl.NumberFormat('en-US', {
      style: 'percent',
    })
      .format(deal.earningsGrowth);
    const formattedEmployees = new Intl.NumberFormat('en-us', {
      maximumFractionDigits: 0,
      useGrouping: true,
    })
      .format(deal.employees);
    const summarizedDeal = {
      company: deal.company,
      sic_code: deal.SIC,
      stage: deal.stage,
      next_task: deal.nextTask,
      expires: formattedExpiration,
      ebitda: formattedEbitda,
      growth: formattedGrowth,
      employees: formattedEmployees,
    };
    return summarizedDeal;
  });
  const defaultSort = [
    { id: 'company', sortAscending: true }
  ];
  return (
    <div className="container">
      <Griddle
        data={dealSummary}
        plugins={[plugins.LocalPlugin]}
        sortProperties={defaultSort}
      >
        <RowDefinition>
          <ColumnDefinition title="Company" id="company" width="10%" />
          <ColumnDefinition title="SIC Code" id="sic_code" width="10%" />
          <ColumnDefinition title="Stage" id="stage" width="10%" />
          <ColumnDefinition title="Next Task" id="next_task" width="10%" />
          <ColumnDefinition title="Expires In" id="expires" width="10%" />
          <ColumnDefinition title="EBITDA" id="ebitda" width="10%" />
          <ColumnDefinition title="Avg. Growth" id="next_task" width="10%" />
          <ColumnDefinition title="Employees" id="employees" width="10%" />
        </RowDefinition>
      </Griddle>
    </div>
  );
};

DealList.propTypes = {
  deals: PropTypes.arrayOf(PropTypes.object).isRequired,
};

module.exports = DealList;
