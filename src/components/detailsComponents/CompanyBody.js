import React from 'react';
import PropTypes from 'prop-types';
import Headquarters from './Headquarters';
import Description from './Description';
import Contacts from './Contacts';

const CompanyBody = props => (
  <div className="row company-info-body-row">
    <Headquarters
      headquarters={props.deal.headquarters}
      handleHqChange={props.handleHqChange}
      handleSubmit={props.handleSubmit}
    />
    <Description
      deal={props.deal}
      handleChange={props.handleChange}
      handleSubmit={props.handleSubmit}
    />
    <Contacts
      contacts={props.deal.contacts}
      handleChange={props.handleChange}
      handleSubmit={props.handleSubmit}
    />
  </div>
);

CompanyBody.propTypes = {
  deal: PropTypes.objectOf(PropTypes.any).isRequired,
  handleChange: PropTypes.func.isRequired,
  handleHqChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default CompanyBody;
