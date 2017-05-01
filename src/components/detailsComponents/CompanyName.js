import React from 'react';
import PropTypes from 'prop-types';

const CompanyName = props => (
  <div className="row company-info-header-row">
    <div className="col-xs-12 company-info-header-container">
      <h2 className="company-info-header">
        <form
          name="company"
          onSubmit={props.handleSubmit}
        >
          <input
            name="company"
            type="text"
            value={props.deal.company}
            onChange={props.handleChange}
          />
        </form>
      </h2>
    </div>
  </div>
);

CompanyName.propTypes = {
  deal: PropTypes.objectOf(PropTypes.any).isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default CompanyName;
