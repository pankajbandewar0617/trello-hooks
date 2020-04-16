import React from 'react';
import { Card, Checkbox } from 'antd';

function CheckItems(props) {
  const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };
  return (
    <div>
      {props.items.map((item) => (
        <div key={item.id}>
          <Card style={{ width: 300 }}>
            <Checkbox onChange={() => onChange}>{item.name}</Checkbox>
          </Card>
        </div>
      ))}
      <div>{console.log(props.items)}</div>
    </div>
  );
}

export default CheckItems;
