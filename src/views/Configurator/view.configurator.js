import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import * as belloteroActions from "../../store/actions";

const Configurator = props => {
  return (
    <React.Fragment>
      <main className="container">Configurator</main>
    </React.Fragment>
  );
};

const mapStateToProps = state => {
  return {
    page: state.page_two,
    error: state.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getData: () => dispatch(belloteroActions.loadPageTwo())
  };
};
Configurator.propTypes = {};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Configurator);
