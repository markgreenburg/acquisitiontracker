import React from 'react';
import PropTypes from 'prop-types';
import { normalizeInput } from '../helpers/pipelineHelper';
import CompanyName from './CompanyName';
import CompanyBody from './CompanyBody';

const CompanyInfo = props => (
  <div className="row company-info-row">
    <CompanyName
      deal={props.deal}
      handleChange={props.handleChange}
      handleSubmit={props.handleSubmit}
    />
    <CompanyBody
      deal={props.deal}
      handleChange={props.handleChange}
      handleSubmit={props.handleSubmit}
    />
  </div>
);

CompanyInfo.propTypes = {
  deal: PropTypes.objectOf(PropTypes.any).isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default CompanyInfo;
