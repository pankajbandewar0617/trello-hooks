import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getChecklist } from './action';
import CheckItems from './checkItems';

function Checklist(props) {
  const cardID = props.cardId;
  console.log(cardID);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getChecklist(cardID));
  }, []);

  const checkLists = useSelector((state) => state.checklist);
  console.log('in checklist page');
  return (
    <div>
      <div>
        {checkLists.map((check) => (
          <div>
            {console.log(check.name)}
            <CheckItems items={check.checkItems} />
          </div>
        ))}
      </div>
    </div>
  );
}
export default Checklist;
