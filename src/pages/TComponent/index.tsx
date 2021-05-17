import { PageContainer } from '@ant-design/pro-layout';
import { Button } from 'antd';
import { useState } from 'react';
import MapList from './components/MapList';

const list = [
  { id: 1, name: "张一", amount: 1000 },
  { id: 2, name: "张二", amount: 2000 },
  { id: 3, name: "张三", amount: 3000 },
  { id: 4, name: "张四", amount: 4000 },
  { id: 5, name: "张五", amount: 5000 },
  { id: 6, name: "张六", amount: 6000 },
];

const TComponent: React.FC = () => {
  const [stateA, setStateA] = useState<number>(0);
  let a = 0;

  function addA() {
    a =+ 1;  //此处拿到的a永远是0
  }

  function addStateA() {
    setStateA(stateA+1);
  }

  function onConsole() {
    console.log("a", a);
    console.log("stateA", stateA);
  }

  return (
    <PageContainer title="泛型组件">
      <Button type="primary" onClick={addA} style={{ marginRight: 15 }}>{`a+1(${a})`}</Button>
      <Button type="primary" onClick={addStateA} style={{ marginRight: 15 }}>{`stateA+1(${stateA})`}</Button>
      <Button type="primary" onClick={onConsole}>console</Button>
      <MapList 
        list={list}
        renderItem={(item) => (<p key={item.id}>{`${item.id}、${item.name}有￥${item.amount.toFixed(2)}`}</p>)}
      />
    </PageContainer>
  );
};

export default TComponent; 
