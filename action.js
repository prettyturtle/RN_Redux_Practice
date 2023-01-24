export const ACTIONS = {
  ADD_NAME: "ADD_NAME",
  DELETE_NAME: "DELETE_NAME",
  PLUS_NUMBER: "PLUS_NUMBER",
  MINUS_NUMBER: "MINUS_NUMBER",
  FETCH_NEWS_LIST_REQUEST: "FETCH_NEWS_LIST_REQUEST",
  FETCH_NEWS_LIST_SUCCESS: "FETCH_NEWS_LIST_SUCCESS",
};

// export const getNewsList = () => (dispatch) => {
//   dispatch({ type: ACTIONS.FETCH_NEWS_LIST_REQUEST });

//   setTimeout(() => {
//     dispatch({
//       type: ACTIONS.FETCH_NEWS_LIST_SUCCESS,
//       newsList: ["안", "녕", "하", "세", "요"],
//     });
//   }, 2000);
// };

export const getNewsList = (query) => (dispatch) => {
  dispatch({ type: ACTIONS.FETCH_NEWS_LIST_REQUEST });

  // setTimeout(() => {
  //   dispatch({ type: GET_NEWS_LIST_SUCCESS })
  // }, 2000)
  const baseApiURL = "https://openapi.naver.com/v1/search/news.json";
  const apiURLWithQuery = baseApiURL + `?query=${decodeURIComponent("TEST")}`;
  const clientID = "_F3DTYK7RoQsqGeJklhI";
  const clientSecret = "5kGPEPACq_";
  const headers = {
    "X-Naver-Client-Id": clientID,
    "X-Naver-Client-Secret": clientSecret,
  };

  fetch(apiURLWithQuery, { headers })
    .then((result) => {
      return result.json();
    })
    .then((result) => {
      dispatch({ type: ACTIONS.FETCH_NEWS_LIST_SUCCESS, result });
    })
    .catch((ex) => {});
};
