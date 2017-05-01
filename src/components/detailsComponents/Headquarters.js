import React from 'react';
import PropTypes from 'prop-types';

const Headquarters = props => (
  <div className="col-md-4 col-xs-12 company-info-body-left">
    <div className="row headquarters-header-row">
      <div className="col-xs-12 headquarters-header-container">
        <h4>Headquarters</h4>
      </div>
    </div>
    <form name="headquarters">
      <div className="row headquarters-street-one-row">
        <div className="col-xs-12 headquarters-street-one">
          Street 1: {props.headquarters.street1}
        </div>
      </div>
      <div className="row headquarters-street-two-row">
        <div className="col-xs-12 headquarters-street-two">
          Street 2: {props.headquarters.street2}
        </div>
      </div>
      <div className="row headquarters-street-city-row">
        <div className="col-xs-12 headquarters-city">
          City: {props.headquarters.city}
        </div>
      </div>
      <div className="row headquarters-street-state-row">
        <div className="col-xs-12 headquarters-state">
          State: {props.headquarters.state}
        </div>
      </div>
      <div className="row headquarters-zip-row">
        <div className="col-xs-12 headquarters-zip">
          Zip: {props.headquarters.zip}
        </div>
      </div>
    </form>
  </div>
);

Headquarters.propTypes = {
  headquarters: PropTypes.objectOf(PropTypes.string).isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default Headquarters;
