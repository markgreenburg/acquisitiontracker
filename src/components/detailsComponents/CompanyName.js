import React from 'react';
import PropTypes from 'prop-types';

const CompanyName = props => (
  <div className="col-sm-10 col-xs-12 company-info-name-container">
    <form
      name="company"
      className="text-center"
      onSubmit={props.handleSubmit}
    >
      <div className="form-group">
        <input
          name="company"
          type="text"
          className="text-center"
          value={props.deal.company}
          onChange={props.handleChange}
          required
        />
      </div>
    </form>
  </div>
);

CompanyName.propTypes = {
  deal: PropTypes.objectOf(PropTypes.any).isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default CompanyName;
