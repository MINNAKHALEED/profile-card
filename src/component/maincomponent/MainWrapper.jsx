
import './MainWrapper.css';

import BOYIMG from '../../assets/image-victor.jpg';

const MainWrapper = () => {
  return (
    <div className='middlediv'>
      <img src={BOYIMG} alt="" />
      <div className='middletext'>
        <div className='toptext'>
          <p className='name'>victor crest</p>
          <p className='number'>26</p>
        </div>
        <p className='capital'>london</p>
      </div>
    </div>
  );
}

export default MainWrapper;










