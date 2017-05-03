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
    <div className="col-sm-12 col-md-9">
      <div className="row">
        <Description
          deal={props.deal}
          handleChange={props.handleChange}
          handleSubmit={props.handleSubmit}
        />
      </div>
      <div className="row">
        <Contacts
          contacts={props.contacts}
          handleChange={props.handleChange}
          handleSubmit={props.handleSubmit}
          addContact={props.addContact}
          deleteContact={props.deleteContact}
          dealId={props.deal.id}
        />
      </div>
    </div>
  </div>
);

CompanyBody.propTypes = {
  deal: PropTypes.objectOf(PropTypes.any).isRequired,
  contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleChange: PropTypes.func.isRequired,
  handleHqChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  addContact: PropTypes.func.isRequired,
  deleteContact: PropTypes.func.isRequired,
};

export default CompanyBody;
