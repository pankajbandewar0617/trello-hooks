// GET ALL BOARD

export const getBoard = () => {
  return {
    type: 'GET_BOARD',
  };
};

// GET ALL LIST

export const getList = (boardID) => {
  return {
    type: 'GET_LIST',
    boardID,
  };
};

// GET ALL CHECKLIST

export const getChecklist = (id) => {
  return {
    type: 'GET_CHECKLIST',
    id,
  };
};
