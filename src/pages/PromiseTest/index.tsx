import { PageContainer } from '@ant-design/pro-layout';
import { Collapse } from 'antd';
import Finally from './components/Finally';

const { Panel } = Collapse;

export default function PromiseTest() {
  return (
    <PageContainer title="Promise练习">
      <Collapse defaultActiveKey={['1']}>
        <Panel header="1、实现一个Promise.prototype.finally" key="1">
          <Finally />
        </Panel>
      </Collapse>
    </PageContainer>
  );
}