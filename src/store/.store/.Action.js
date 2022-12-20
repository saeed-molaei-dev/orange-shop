export default function GetData(data) {
  return async (dispatch, getState) => {
    dispatch({
      type: "type",
      payload:  { initList: [] },
    });
  };
}
