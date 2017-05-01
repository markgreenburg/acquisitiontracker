import React from 'react';
import PropTypes from 'prop-types';

const Description = props => (
  <div className="col-md-4 col-xs-12 company-info-body-middle">
    <div className="row description-header-row">
      <div className="col-xs-12 description-header-container">
        <h4>Description</h4>
      </div>
    </div>
    <div className="row description-content-row">
      <form
        className="col-xs-12 description-content-form"
        name="description"
        onSubmit={props.handleSubmit}
      >
        <div className="row description-content-row">
          <div className="col-xs-12 description-content">
            <textarea
              rows="10"
              cols="45"
              name="description"
              value={props.deal.description}
              onChange={props.handleChange}
            />
          </div>
        </div>
        <div className="row description-submit-row">
          <div className="col-xs-12 description-submit">
            <button
              className="btn btn-default"
              type="submit"
            >Update</button>
          </div>
        </div>
      </form>
    </div>
  </div>
);

Description.propTypes = {
  deal: PropTypes.objectOf(PropTypes.any).isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default Description;
