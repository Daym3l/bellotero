import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import * as belloteroActions from "../../store/actions";
import ErrorPage from "../../errors/error";
import Slider from "@material-ui/core/Slider";

import "./_styles.scss";



const Configurator = props => {

  const { pageData, error, getData } = props;
  const [title, setTitle] = React.useState("");
  const [name, setName] = React.useState("");
  const [monthIng, setMonthIng] = React.useState(10);
  const [employeeFT, setEmployeeFT] = React.useState(1);
  const [foodCost, setFoodCost] = React.useState(0);
  const [anualSaves, setAnualSaves] = React.useState(0);

  React.useEffect(() => {
    getData();
  }, [getData]);

  React.useEffect(() => {
    setFoodCost(monthIng * 0.3);
  }, [monthIng]);

  React.useEffect(() => {
    setAnualSaves(employeeFT * 1337 + foodCost);
  }, [employeeFT, foodCost]);

  React.useEffect(() => {
    if (pageData) {
      pageData.calculator.title.split(" ").slice(0, 3);

      setTitle(
        pageData.calculator.title
          .split(" ")
          .slice(0, 3)
          .join(" ")
      );
      setName(pageData.calculator.title.split(" ").slice(3, 4));
    }
  }, [pageData]);

  function valuetext(value) {
    return `${value}`;
  }

  return (
    <React.Fragment>
      {error ? (
        <ErrorPage />
      ) : (
        <main className="container">
          <div className="row">
            <div className="col-md-5">
              <label className="title_label_con">
                <h1>{title}</h1>
              </label>
              <br />
              <label className="name_label_con">
                <h1>{name}</h1>
              </label>
              <p className="p_con">
                {pageData && pageData.calculator.description}
              </p>
            </div>
            <div className="col-md-7">
              <div className="panel_right">
                <div className="row">
                  <div className="col-md-6">
                    <label>Monthly ingredient spending</label>
                  </div>
                  <div className="col-md-6">
                    <div className="field">
                      <span>$</span> <label>{monthIng}</label>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <Slider
                      defaultValue={10}
                      getAriaValueText={valuetext}
                      aria-labelledby="discrete-slider"
                      valueLabelDisplay="auto"
                      step={10}
                      onChange={(e, v) => {
                        setMonthIng(v);
                      }}
                      min={10}
                      max={100}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <label>Full-time employees that process invoices</label>
                  </div>
                  <div className="col-md-6">
                    <div className="field2">
                      <span>{employeeFT}</span>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <Slider
                      defaultValue={1}
                      getAriaValueText={valuetext}
                      aria-labelledby="discrete-slider"
                      valueLabelDisplay="auto"
                      step={1}
                      onChange={(e, v) => {
                        setEmployeeFT(v);
                      }}
                      min={1}
                      max={10}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <label className="result">
                      $ <span>{foodCost}</span>
                    </label>
                    <br/>
                    <span className="sub_result">
                      Estimated cost food savings
                    </span>
                  </div>
                  <div className="col-md-6">
                  <label className="result">
                      $ <span>{anualSaves}</span>
                    </label>
                    <br/>
                    <span className="sub_result">
                    Your estimated annual savings
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      )}
    </React.Fragment>
  );
};

const mapStateToProps = state => {
  return {
    pageData: state.page_two,
    error: state.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getData: () => dispatch(belloteroActions.loadPageTwo())
  };
};
Configurator.propTypes = {
  pageData: PropTypes.any,
  error: PropTypes.bool,
  getData: PropTypes.func
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Configurator);
