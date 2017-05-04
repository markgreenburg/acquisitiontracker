import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.contactInfo.name,
      role: this.props.contactInfo.role,
      email: this.props.contactInfo.email,
      phone: this.props.contactInfo.phone,
    };
    this.handleSave = this.handleSave.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  /**
   * Dispatches 'DELETE_CONTACT' action on matching contact
   */
  handleDelete() {
    const { name, email, role, phone } = this.props.contactInfo;
    const contactObject = {
      id: this.props.dealId,
      contact: { name, email, role, phone },
    };
    this.props.deleteContact(contactObject);
  }

  /**
   * Saves user input in any contact field to local state
   * @param {object} event input field event
   */
  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  /**
   * Dispatches the 'EDIT_CONTACT' action using the value in state
   */
  handleSave() {
    this.props.editContact({
      id: this.props.dealId,
      contactKey: this.props.keyProp,
      contact: this.state,
    });
  }

  render() {
    const contactFields = Object.keys(this.state);
    const contactRow = contactFields.map(stateKey => (
      <td key={stateKey}><input
        type={stateKey !== 'email' ? 'text' : 'email'}
        name={stateKey}
        value={this.state[stateKey]}
        onChange={this.handleChange}
        required
      /></td>
    ));
    return (
      <tr key={`tr_${this.props.keyProp}`}>
        {contactRow}
        <td>
          <button
            title="Save"
            className="btn btn-info btn-xs glyphicon glyphicon-ok"
            onClick={this.handleSave}
          />
          <button
            title="Delete"
            className="btn btn-warning btn-xs glyphicon glyphicon-remove"
            onClick={this.handleDelete}
          />
        </td>
      </tr>
    );
  }
}

Contact.propTypes = {
  contactInfo: PropTypes.objectOf(PropTypes.string).isRequired,
  keyProp: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
  editContact: PropTypes.func.isRequired,
  dealId: PropTypes.number.isRequired,
};

export default Contact;
