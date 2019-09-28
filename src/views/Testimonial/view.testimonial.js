import React from "react";
import "./_styles.scss";
import { connect } from "react-redux";
import * as belloteroActions from "../../store/actions";
import PropTypes from "prop-types";
import ErrorPage from "../../errors/error";

const Testimonial = props => {
  const { pageData, error, getData } = props;
  const [contentData, setContentData] = React.useState([]);
  const [reviewSize, setReviewSize] = React.useState(0);
  const [page, setPage] = React.useState(0);
  React.useEffect(() => {
    getData();
  }, [getData]);

  React.useEffect(() => {
    if (pageData) {
      setContentData(pageData.slider.reviews);
    }
  }, [pageData]);
  React.useEffect(() => {
    setReviewSize(contentData.length);
  }, [contentData]);

  const setPaginator = action => {
    switch (action) {
      case "next":
        if (page+1<contentData.length) {
          setPage(page + 1);
        }
        break;

      default:
        if (page!== 0) {
          setPage(page - 1);
        }
        break;
    }
  };

  return (
    <React.Fragment>
      {error ? (
        <ErrorPage />
      ) : (
        <main className="container">
          <div>
            <label className="title_label">
              <h1>{pageData && pageData.slider.title}</h1>
            </label>
          </div>
          {contentData.length > 0 && (
            <div className="customer_card">
              <div className="row">
                <div className="col-md-4 left-area">
                  <h3>{contentData[page].name}</h3>
                  <label>{contentData[page].position}</label>
                </div>
                <div className="col-md-8">
                  <p>{contentData[page].comment}</p>
                  <div className="pag">
                    {page + 1}/{reviewSize}
                  </div>
                  <button className="pag_back" onClick={()=>setPaginator("back")}>{"<"}</button>
                  <button className="pag_next" onClick={()=>setPaginator("next")}>{">"}</button>
                </div>
              </div>
            </div>
          )}
        </main>
      )}
    </React.Fragment>
  );
};
const mapStateToProps = state => {
  return {
    pageData: state.page_one,
    error: state.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getData: () => dispatch(belloteroActions.loadPageOne())
  };
};
Testimonial.propTypes = {
  pageData: PropTypes.any,
  error: PropTypes.bool,
  getData: PropTypes.func
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Testimonial);
