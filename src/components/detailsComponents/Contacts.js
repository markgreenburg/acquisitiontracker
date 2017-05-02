import React from 'react';
import PropTypes from 'prop-types';
import Contact from './Contact';
import AddContact from './AddContact';

const Contacts = (props) => {
  const contactsList = props.contacts.map(contact => (
    <Contact
      key={contact.name + contact.role}
      name={contact.name}
      role={contact.role}
      phone={contact.phone}
      email={contact.email}
    />
  ));
  return (
    <div className="col-md-4 col-xs-12 company-info-body-right">
      <div className="row contacts-header-row">
        <div className="col-xs-12 contacts-header-container">
          <h4>Key Contacts</h4>
        </div>
      </div>
      <div className="row contact-group-body-row">
        <div className="col-xs-12 contact-group-body">
          <table className="table table-hover table-condensed">
            <thead>
              <tr>
                <th className="text-center">Name</th>
                <th className="text-center">Role</th>
                <th className="text-center">Phone</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {contactsList}
            </tbody>
          </table>
          <AddContact addContact={props.addContact} dealId={props.dealId} />
        </div>
      </div>
    </div>
  );
};

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
  dealId: PropTypes.number.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  addContact: PropTypes.func.isRequired,
};

export default Contacts;