import React from 'react';
import PropTypes from 'prop-types';

const Contact = (props) => {
  const { name, email, role, phone } = props;
  const contactObject = {
    id: props.dealId,
    contact: { name, email, role, phone },
  };
  const handleDelete = payload => props.deleteContact(payload);
  return (
    <tr key={props.name}>
      <td><a href={`mailTo: ${props.email}`}>{props.name}</a></td>
      <td>{props.role}</td>
      <td>{props.phone}</td>
      <td>
        <div className="btn-group" role="group" aria-label="edit contact">
          <button
            type="button"
            className="btn btn-info btn-xs"
            onClick={() => console.log('Edit the contact!')}
          ><i className="glyphicon glyphicon-edit" /></button>
          <button
            type="button"
            className="btn btn-warning btn-xs"
            onClick={() => handleDelete(contactObject)}
          ><i className="glyphicon glyphicon-remove" /></button>
        </div>
      </td>
    </tr>
  );
};

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
  dealId: PropTypes.number.isRequired,
};

export default Contact;
