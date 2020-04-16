import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBoard } from './action';
import { Link } from 'react-router-dom';
import { Card, Row } from 'antd';

function Board() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBoard());
  }, []);

  const boards = useSelector((state) => state.board);

  return (
    <>
      <h1>Board</h1>
      <Row>
        {boards.map((board) => (
          <Link to={`/list/${board.id}`}>
            <Card
              style={{
                width: 200,
                color: 'white',
                fontSize: '1.5rem',
                height: 100,
                backgroundImage: `url(${board.prefs.backgroundImage})`,
              }}
            >
              {board.name}
            </Card>
          </Link>
        ))}
      </Row>
    </>
  );
}

export default Board;
