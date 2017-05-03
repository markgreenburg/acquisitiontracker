import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CompanyInfo from './detailsComponents/CompanyInfo';

class DealDetails extends Component {
  constructor(props) {
    super(props);
    this.state = props.deal;
    this.handleChange = this.handleChange.bind(this);
    this.handleHqChange = this.handleHqChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  /**
   * Updates local state based on user input in child containers
   * @param {object} event change event
   */
  handleChange(event) {
    const { target } = event;
    this.setState({ [target.name]: target.value });
  }

  /**
   * Updates local state for Headquarters address based on user input
   * TO-DO: form validation
   * @param {object} event change event
   */
  handleHqChange(event) {
    const changeFragment = { [event.target.name]: event.target.value };
    this.setState({
      headquarters: { ...this.state.headquarters, changeFragment },
    });
  }

  /**
   * Dispatches 'EDIT_DEAL' action on save events in child components
   * @param {object} event save event
   */
  handleSubmit(event) {
    event.preventDefault();
    const { target } = event;
    if (!this.state[target.name]) { return; }
    this.props.editDeal({
      id: this.props.deal.id,
      updateKey: target.name,
      updateValue: this.state[target.name],
    });
  }

  render() {
    return (
      <div className="container">
        <CompanyInfo
          deal={this.state}
          contacts={this.props.contacts}
          changeTab={this.props.changeTab}
          handleChange={this.handleChange}
          handleHqChange={this.handleHqChange}
          handleSubmit={this.handleSubmit}
          addContact={this.props.addContact}
          deleteContact={this.props.deleteContact}
        />
      </div>
    );
  }
}

DealDetails.propTypes = {
  deal: PropTypes.objectOf(PropTypes.any).isRequired,
  contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
  editDeal: PropTypes.func.isRequired,
  changeTab: PropTypes.func.isRequired,
  addContact: PropTypes.func.isRequired,
  deleteContact: PropTypes.func.isRequired,
};

export default DealDetails;
