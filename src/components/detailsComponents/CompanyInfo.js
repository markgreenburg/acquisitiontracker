import React from 'react';
import PropTypes from 'prop-types';
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
        contacts={props.contacts}
        handleChange={props.handleChange}
        handleHqChange={props.handleHqChange}
        handleSubmit={props.handleSubmit}
        addContact={props.addContact}
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
  addContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CompanyInfo;
