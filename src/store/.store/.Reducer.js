export default function InitReducer(
  initState = {
    initLoading: false,
    initList: AddToInitList(),
    initError: "",
  },
  { type, payload },
) {
  switch (type) {
    case "type":
      return payload;
    default:
      return initState;
  }
}
function AddToInitList() {
  let thisState = [];
  if (localStorage.getItem("initState")) {
    thisState = JSON.parse(localStorage.getItem("initState"));
  }
  return thisState;
}
