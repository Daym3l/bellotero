import * as actionsTypes from "./actions";
import Axios from "axios";

export const onClickNavHandler = name => {
  return {
    type: actionsTypes.ON_CLICK_HANDLER,
    linkName: name
  };
};

export const getNavItems = () => {
  return dispatch => {
    let jsonData = [];
    Axios.get(
      "https://raw.githubusercontent.com/Bernabe-Felix/Bellotero/master/app.json"
    )
      .then(res => {
        if (res.status === 200 && res.data) {
          jsonData = res.data.menu.items;
          if (jsonData.length > 0) {
            jsonData.forEach(val => {
              val.active = false;
            });
            dispatch(setNavItems(jsonData));
          }
        }
      })
      .catch(error => {
        dispatch(connectionFail());
      });
  };
};

export const connectionFail = () => {
  return {
    type: actionsTypes.CONECTION_FAILED
  };
};

export const setNavItems = navItems => {
  return {
    type: actionsTypes.SET_NAV_ITEMS,
    newItems: navItems
  };
};

export const setPageOne = pageContent => {
  return {
    type: actionsTypes.SET_PAGE_ONE_CONTENT,
    pageContent: pageContent
  };
};

export const setPageTwo = pageContent => {
  return {
    type: actionsTypes.SET_PAGE_TWO_CONTENT,
    pageContent: pageContent
  };
};

export const loadPageOne = () => {
  return dispatch => {
    let jsonData = [];
    Axios.get(
      "https://raw.githubusercontent.com/Bernabe-Felix/Bellotero/master/page1.json"
    ).then(res => {
        if (res.status === 200 && res.data) {
          jsonData = res.data;
          dispatch(setPageOne(jsonData));
        }
      })
      .catch(error => {
        dispatch(connectionFail());
      });
  };
};


export const loadPageTwo = () => {
  return dispatch => {
    let jsonData = [];
    Axios.get(
      "https://raw.githubusercontent.com/Bernabe-Felix/Bellotero/master/page2.json"
    ).then(res => {
        if (res.status === 200 && res.data) {
          jsonData = res.data;
          dispatch(setPageTwo(jsonData));
        }
      })
      .catch(error => {
        dispatch(connectionFail());
      });
  };
};
