import React from 'react';
import PropTypes from 'prop-types';

const Contacts = (props) => {
  const contactsList = props.contacts.map(contact => (
    <li key={contact.name}>{contact.name} ({contact.role}): {contact.phone}</li>
  ));
  return (
    <div className="col-md-4 col-xs-12 company-info-body-right">
      <div className="row contacts-header-row">
        <div className="col-xs-12 contacts-header-container">
          <h4>Key Contacts</h4>
        </div>
      </div>
      <div className="row contacts-list-row">
        <div className="col-xs-12 contacts-list-container">
          <ul className="contacts-list">
            {contactsList}
          </ul>
        </div>
      </div>
    </div>
  );
};

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default Contacts;
