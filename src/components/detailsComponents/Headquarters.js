import React from 'react';
import PropTypes from 'prop-types';

const Headquarters = props => (
  <div className="col-md-4 col-xs-12 company-info-body-left">
    <div className="row headquarters-header-row">
      <div className="col-xs-12 headquarters-header-container">
        <h4>Headquarters</h4>
      </div>
    </div>
    <div className="row headquarters-form-row">
      <div className="col-xs-12 headquarters-form">
        <form
          name="headquarters"
          onSubmit={props.handleSubmit}
        >
          <div className="form-group">
            <input
              value={props.headquarters.street1}
              type="text"
              className="form-control"
              name="street1"
              placeholder="Street Line 1"
              onChange={props.handleHqChange}
            />
          </div>
          <div className="form-group">
            <input
              value={props.headquarters.street2}
              type="text"
              className="form-control"
              name="street2"
              placeholder="Street Line 2"
              onChange={props.handleHqChange}
            />
          </div>
          <div className="form-group">
            <input
              value={props.headquarters.city}
              type="text"
              className="form-control"
              name="city"
              placeholder="City"
              onChange={props.handleHqChange}
            />
          </div>
          <div className="form-group">
            <input
              value={props.headquarters.state}
              type="text"
              className="form-control"
              name="state"
              placeholder="State"
              onChange={props.handleHqChange}
            />
          </div>
          <div className="form-group">
            <input
              value={props.headquarters.zip}
              type="text"
              className="form-control"
              name="zip"
              placeholder="Zip Code"
              onChange={props.handleHqChange}
            />
          </div>
          <div className="form-group">
            <input
              value={props.headquarters.country}
              type="text"
              className="form-control"
              name="country"
              placeholder="Country"
              onChange={props.handleHqChange}
            />
          </div>
          <button
            name="headquarters"
            type="submit"
            className="btn btn-default"
          >Update</button>
        </form>
      </div>
    </div>
  </div>
);

Headquarters.propTypes = {
  headquarters: PropTypes.objectOf(PropTypes.string).isRequired,
  handleHqChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default Headquarters;
