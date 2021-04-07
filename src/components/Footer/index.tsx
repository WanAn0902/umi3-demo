import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-layout';

export default () => (
  <DefaultFooter
    copyright="2021.04.07 Ivy创建的Demo"
    links={[
      {
        key: 'UI库',
        title: 'UI库',
        href: 'https://pro.ant.design',
        blankTarget: true,
      },
      {
        key: 'github',
        title: <GithubOutlined />,
        href: 'https://github.com/WanAn0902/umi-demo',
        blankTarget: true,
      },
      {
        key: 'umi',
        title: 'umi',
        href: 'https://umijs.org/zh-CN/docs',
        blankTarget: true,
      },
    ]}
  />
);
