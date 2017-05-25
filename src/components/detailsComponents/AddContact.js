// @flow
import React from 'react';
import PropTypes from 'prop-types';

class AddContact extends React.Component {
  constructor() {
    super();
    this.state = {
      expand: false,
      name: '',
      role: '',
      phone: '',
      email: '',
    };
    this.toggleForm = this.toggleForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.saveContact = this.saveContact.bind(this);
  }

  toggleForm() {
    this.setState({ expand: !this.state.expand });
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  saveContact(event) {
    const { name, role, phone, email } = this.state;
    event.preventDefault();
    this.props.addContact({
      id: this.props.dealId,
      contact: { name, role, phone, email },
    });
    this.toggleForm();
  }

  render() {
    const inputNames = ['name', 'email', 'role', 'phone'];
    const formInputs = inputNames.map(input => (
      <div className="form-group" key={input}>
        <input
          name={input}
          type={input !== 'email' ? 'text' : 'email'}
          placeholder={input}
          value={this.state[input]}
          onChange={this.handleChange}
          required
        />
      </div>
    ));
    return this.state.expand
      ? (
        <div>
          <form name="contact" className="form-inline">
            {formInputs}
            <button
              type="cancel"
              className="btn btn-warning"
              onClick={this.toggleForm}
            ><i className="glyphicon glyphicon-remove" /> Cancel
            </button>
            <button
              type="submit"
              name="contact"
              className="btn btn-success"
              onClick={this.saveContact}
            ><i className="glyphicon glyphicon-floppy-disk" /> Save
            </button>
          </form>
        </div>
      ) : (
        <div>
          <button
            className="btn btn-success"
            onClick={this.toggleForm}
          ><i className="glyphicon glyphicon-plus" /> Add Contact
          </button>
        </div>
      );
  }
}

AddContact.propTypes = {
  addContact: PropTypes.func.isRequired,
  dealId: PropTypes.number.isRequired,
};

export default AddContact;
