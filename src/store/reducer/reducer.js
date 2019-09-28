import * as actionsTypes from "../actions/actions";

const initState = {
  navItems: [],
  page_one: null,
  page_two: null,
  error: false
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case actionsTypes.GET_NAV_ITEMS:
      return state;
    case actionsTypes.LOAD_PAGE_ONE:
      return state;
    case actionsTypes.LOAD_PAGE_TWO:
      return state;
    case actionsTypes.ON_CLICK_HANDLER:
      let data = state.navItems;
      data.forEach(element => {
        if (element.text === action.linkName) {
          element.active = true;
        } else {
          element.active = false;
        }
      });
      return { ...state, navItems: [...data] };
    case actionsTypes.SET_NAV_ITEMS:
      return {
        ...state,
        navItems: action.newItems,
        error: false
      };
    case actionsTypes.SET_PAGE_ONE_CONTENT:
      return {
        ...state,
        page_one: action.pageContent,
        page_two: null,
        error: false
      };
      case actionsTypes.SET_PAGE_TWO_CONTENT:
          return {
            ...state,
            page_one: null,
            page_two: action.pageContent,
            error: false
          };
    case actionsTypes.CONECTION_FAILED:
      return {
        ...state,
        error: true
      };
    default:
      return state;
  }
};
export default reducer;
