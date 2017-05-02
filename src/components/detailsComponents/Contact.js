import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleEdit: false,
      name: this.props.name,
      role: this.props.role,
      phone: this.props.phone,
      email: this.props.email,
    };
    this.toggleEdit = this.toggleEdit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleDelete() {
    const { name, email, role, phone } = this.props;
    const contactObject = {
      id: this.props.dealId,
      contact: { name, email, role, phone },
    };
    this.props.deleteContact(contactObject);
  }

  handleChange() {
    // Update state with new edited input values
  }

  toggleEdit() {
    this.setState({ toggleEdit: !this.state.toggleEdit }, () => {
      console.log(this.state);
    });
  }

  render() {
    const dataRow = this.state.toggleEdit
      ? (
        <tr key={this.props.name}>
          <td><a href={`mailTo: ${this.props.email}`}>{this.props.name}</a></td>
          <td>{this.props.role}</td>
          <td>{this.props.phone}</td>
          <td>
            <div className="btn-group" role="group" aria-label="edit contact">
              <button
                type="button"
                className="btn btn-info btn-xs"
                onClick={this.toggleEdit}
              ><i className="glyphicon glyphicon-edit" /></button>
              <button
                type="button"
                className="btn btn-warning btn-xs"
                onClick={this.handleDelete}
              ><i className="glyphicon glyphicon-remove" /></button>
            </div>
          </td>
        </tr>
      ) : (
        <tr key={this.props.name}>
          <td><a href={`mailTo: ${this.props.email}`}>{this.props.name}</a></td>
          <td>{this.props.role}</td>
          <td>{this.props.phone}</td>
          <td>
            <div className="btn-group" role="group" aria-label="edit contact">
              <button
                type="button"
                className="btn btn-info btn-xs"
                onClick={this.toggleEdit}
              ><i className="glyphicon glyphicon-edit" /></button>
              <button
                type="button"
                className="btn btn-warning btn-xs"
                onClick={this.handleDelete}
              ><i className="glyphicon glyphicon-remove" /></button>
            </div>
          </td>
        </tr>
      );

    return dataRow;
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
