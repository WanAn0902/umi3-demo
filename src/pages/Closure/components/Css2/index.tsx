import './style.less';

export default function Css2() {
  return (
    <div className='poster'>
      <h1><span className='prefix-text'>S</span>TAND BY M<span className='suffix-text'>E</span></h1>
      <h4 className='sub-title'>DORAEMON</h4>
      <div className='doraemon'>
        {/* <!-- 脸部 --> */}
        <div className='header'></div>
        <div className='face'></div>
        {/* <!-- 眼睛部分 --> */}
        <div className='eye eye-left'>
          <div className='pupil'>
            <div className='pupil-mask'></div>
            <div className='pupil-middle'></div>
            <div className='pupil-small'></div>
            <div className='tear-top'></div>
            <div className='tear-bottom'></div>
          </div>
        </div>
        <div className='eye eye-right mirror'>
          <div className='pupil mirror'>
            <div className='pupil-mask'></div>
            <div className='pupil-middle'></div>
            <div className='pupil-small'></div>
            <div className='tear-top'></div>
            <div className='tear-bottom'></div>
          </div>
        </div>
        {/* <!-- 鼻子部分 --> */}
        <div className='nose'>
          <div className='blink'></div>
        </div>
        {/* <!-- 胡子部分 --> */}
        <div className='beard beard-left'>
          <div className='beard-line-top'></div>
          <div className='beard-line-middle'></div>
          <div className='beard-line-bottom'></div>
        </div>
        <div className='beard beard-right mirror'>
          <div className='beard-line-top'></div>
          <div className='beard-line-middle'></div>
          <div className='beard-line-bottom'></div>
        </div>
        {/* <!-- 嘴巴部分 --> */}
        <div className='mouth'></div>
        <div className='mouth-cover'></div>
      </div>
    </div>
  );
}