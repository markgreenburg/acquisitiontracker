import React from 'react';
import PropTypes from 'prop-types';

const Nav = props => (
  <div className="row nav-row">
    <div className="col-xs-12 nav-back-button-container">
      <button
        className="btn btn-default nav-back-button"
        onClick={() => props.changeTab('pipelineTab')}
      ><i className="glyphicon glyphicon-chevron-left" /> Pipeline
      </button>
    </div>
  </div>
);

Nav.propTypes = { changeTab: PropTypes.func.isRequired };

export default Nav;
