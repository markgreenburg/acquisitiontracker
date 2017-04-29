import React from 'react';
import PropTypes from 'prop-types';

const DealDetails = (props) => {
  return (
    <div className="container">
      <div className="row company-info-row">
        <div className="row company-info-header-row">
          <div className="col-xs-12 company-info-header-container">
            <h2 className="company-info-header">
              Company Information - {props.deal.company}
            </h2>
          </div>
        </div>
        <div className="row company-info-body-row">
          <div className="col-md-4 col-xs-12 company-info-body-left">
            Left Div
          </div>
          <div className="col-md-4 col-xs-12 company-info-body-middle">
            Middle Div
          </div>
          <div className="col-md-4 col-xs-12 company-info-body-right">
            Right Div
          </div>
        </div>
      </div>
      <div className="row deal-info-row">
      </div>
      <div className="row news-info-row">
      </div>
    </div>
  );
};

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
