import React from 'react';
import PropTypes from 'prop-types';
import { normalizeInput } from '../helpers/pipelineHelper';
import Nav from './Nav';
import CompanyName from './CompanyName';
import CompanyBody from './CompanyBody';

const CompanyInfo = props => (
  <div className="row company-info-row">
    <div className="col-xs-12 company-info-content">
      <div className="row company-header-row">
        <Nav changeTab={props.changeTab} />
        <CompanyName
          deal={props.deal}
          handleChange={props.handleChange}
          handleSubmit={props.handleSubmit}
        />
      </div>
      <CompanyBody
        deal={props.deal}
        handleChange={props.handleChange}
        handleHqChange={props.handleHqChange}
        handleSubmit={props.handleSubmit}
      />
    </div>
  </div>
);

CompanyInfo.propTypes = {
  deal: PropTypes.objectOf(PropTypes.any).isRequired,
  changeTab: PropTypes.func.isRequired,
  handleHqChange: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default CompanyInfo;
