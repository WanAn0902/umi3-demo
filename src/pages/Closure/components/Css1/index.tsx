import './style.less';

export default function Css1() {
  return (
    <div>
      <div className="img-box enter-box">
        <img src="http://resource.beige.world/imgs/beige.jpg" alt="" />
        <div className="cover">
          <h3>标题名称</h3>
          <p className="con">Bei Ge</p>
          <p className="brier">这里放内容简介，内容简介,这里放内容简介，内容简介,这里放内容简介，内容简介</p>
          <div className="handle"><span>.</span><span>.</span><span>.</span></div>
        </div>
      </div>
      <div className="img-box">2</div>
      <div className="img-box">3</div>
      <div className="img-box">4</div>
      <div className="img-box">5</div>
    </div>
  );
}