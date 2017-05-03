import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      role: this.props.role,
      email: this.props.email,
      phone: this.props.phone,
    };
    this.handleSave = this.handleSave.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  /**
   * Dispatches 'DELETE_CONTACT' action on matching contact
   */
  handleDelete() {
    const { name, email, role, phone } = this.props;
    const contactObject = {
      id: this.props.dealId,
      contact: { name, email, role, phone },
    };
    this.props.deleteContact(contactObject);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
    // Update state with new edited input values
  }

  /**
   * Toggles boolean editor view state
   */
  handleSave() {
    console.log('changes saved!');
  }

  render() {
    const contactFields = Object.keys(this.state);
    const contactRow = contactFields.map(key => (
      <td key={key + this.state[key]}><input
        type={key !== 'email' ? 'text' : 'email'}
        name={key}
        value={this.state[key]}
        onChange={this.handleChange}
        required
      /></td>
    ));
    return (
      <tr>
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
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
  dealId: PropTypes.number.isRequired,
};

export default Contact;
