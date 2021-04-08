import { PageContainer } from '@ant-design/pro-layout';
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
  return (
    <PageContainer title="泛型组件">
      <MapList 
        list={list}
        renderItem={(item) => (<p key={item.id}>{`${item.id}、${item.name}有￥${item.amount.toFixed(2)}`}</p>)}
      />
    </PageContainer>
  );
};

export default TComponent; 
