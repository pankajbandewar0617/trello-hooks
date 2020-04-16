import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card, Col, Row } from 'antd';
import { getList } from './action';
import Cards from './cards';
import 'antd/dist/antd.css';

function List(props) {
  console.log(props);
  const boardID = props.match.params.id;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getList(boardID));
  }, []);

  const lists = useSelector((state) => state.list);

  return (
    <>
      <Row>
        {lists.map((list) => (
          <div key={list.id}>
            <Col>
              <Row>
                <Card title={list.name} bordered={false} style={{ width: 300 }}>
                  <Cards cards={list.cards} />
                </Card>
              </Row>
            </Col>
          </div>
        ))}
      </Row>
    </>
  );
}
export default List;
