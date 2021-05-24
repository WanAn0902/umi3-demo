import { Button } from 'antd';

const MyPromise = Promise;

MyPromise.prototype.finallyTest = function (cb) {
  return this.then(function (val) {
    return MyPromise.resolve(cb()).then(function() {
      return val;
    })
  }, function (err) {
    return MyPromise.resolve(cb()).then(function() {
      throw err
    })
  })
}

export default function Finally() {
  return (
    <div>
      <Button type="primary">运行一下</Button>
    </div>
  );
}