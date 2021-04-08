import ant from './ant';
import example from './example';

export default [
  ...ant,
  ...example,
  {
    path: '/',
    redirect: '/welcome',
  },
  {
    component: './404',
  },
];
