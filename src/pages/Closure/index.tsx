import { PageContainer } from '@ant-design/pro-layout';
import { Card, Tabs } from 'antd';
import Css1 from './components/Css1';
import Css2 from './components/Css2';

export default function Closure() {
  return (
    <PageContainer title="闭包/CSS">
      <Card>
        <Tabs>
          <Tabs.TabPane key="1" tab="css1">
            <Css1 />
          </Tabs.TabPane>
          <Tabs.TabPane key="2" tab="css2">
            <Css2 />
          </Tabs.TabPane>
        </Tabs>
      </Card>
    </PageContainer>
  );
}