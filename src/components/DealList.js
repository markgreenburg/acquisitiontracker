import React from 'react';
import PropTypes from 'prop-types';
import Griddle, { RowDefinition, ColumnDefinition, plugins } from 'griddle-react';
import NoData from '../griddles/NoData';

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
    // all together now...
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

  // Customize the Griddle
  const styleConfig = {
    classNames: {
      Table: 'table table-striped table-bordered table-hover',
      SettingsToggle: 'btn btn-default settings-toggle',
      Filter: 'form-control input-filter',
    },
  };

  // Customize layout order of components. Leave out settings panel, pagination
  // Note: to re-enable settings, pass in SettingsWrapper prop and render
  // Pagination requires Pagination component as prop
  const newLayout = ({ Table, Filter }) => (
    <div>
      <Filter />
      <Table />
    </div>
  );

  // Define default sort for data grid
  const companyAsc = [
    { id: 'company', sortAscending: true },
  ];

  // Render the data grid
  // TO-DO: create customized Griddle component with presets, drop in here
  // WARNING: records displayed on page is hard-coded to 100. If records in
  // collection exceed this amount, they won't show as the Pagination component
  // has intentionally been left off the Layout component (see: newLayout)
  return (
    <div className="container">
      <Griddle
        components={{
          Layout: newLayout,
        }}
        pageProperties={{
          currentPage: 1,
          pageSize: 100,
        }}
        styleConfig={styleConfig}
        data={dealSummary}
        plugins={[plugins.LocalPlugin]}
        sortProperties={companyAsc}
        customNoDataComponent={NoData}
      >
        <RowDefinition>
          <ColumnDefinition title="Company" id="company" width="10%" />
          <ColumnDefinition title="SIC Code" id="sic_code" width="10%" />
          <ColumnDefinition title="Stage" id="stage" width="10%" />
          <ColumnDefinition title="Next Task" id="next_task" width="10%" />
          <ColumnDefinition title="Expires In" id="expires" width="10%" />
          <ColumnDefinition title="EBITDA" id="ebitda" width="10%" />
          <ColumnDefinition title="Avg. Growth" id="growth" width="10%" />
          <ColumnDefinition title="Employees" id="employees" width="10%" />
        </RowDefinition>
      </Griddle>
    </div>
  );
};

// Check for required props
DealList.propTypes = {
  deals: PropTypes.arrayOf(PropTypes.object).isRequired,
};

module.exports = DealList;
