import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Nav from './detailsComponents/Nav';
import CompanyInfo from './detailsComponents/CompanyInfo';

class DealDetails extends Component {
  constructor(props) {
    super(props);
    this.state = props.deal;
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { target } = event;
    this.setState({ [target.name]: target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { target } = event;
    console.log(target.name);
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
        <Nav changeTab={this.props.changeTab} />
        <CompanyInfo
          deal={this.state}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <div className="row deal-info-row">
        </div>
        <div className="row news-info-row">
        </div>
      </div>
    );
  }
}

DealDetails.propTypes = {
  currentDealId: PropTypes.number.isRequired,
  deal: PropTypes.objectOf(PropTypes.any).isRequired,
  addDeal: PropTypes.func.isRequired,
  editDeal: PropTypes.func.isRequired,
  deleteDeal: PropTypes.func.isRequired,
  changeTab: PropTypes.func.isRequired,
  changeDeal: PropTypes.func.isRequired,
};

export default DealDetails;
