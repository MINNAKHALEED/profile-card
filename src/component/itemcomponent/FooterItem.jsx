/* eslint-disable react/prop-types */
import './FooterItem.css'
const FooterItem = ({item}) => {
  return (
    <div className="footeritem">

      <div className='stats'>
      <h2 className='statsnumber'>{item.statsnumber}</h2>
      <p className='statstitle'>{item.statstitle}</p>
      </div>
      
    </div>
  );
}

export default FooterItem;
