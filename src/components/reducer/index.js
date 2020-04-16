const initialSate = {
  board: [],
  list: [],
  checklist: [],
};

const reducer = (state = initialSate, action) => {
  console.log(action.type);
  switch (action.type) {
    case 'BOARD_DATA':
      return {
        ...state,
        board: action.json,
      };
    case 'LIST_DATA':
      return {
        ...state,
        list: action.json,
      };

    case 'CHECKLIST_DATA':
      return {
        ...state,
        checklist: action.json,
      };

    default:
      return state;
  }
};

export default reducer;
