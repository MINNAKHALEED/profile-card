import FooterItem from "../itemcomponent/FooterItem";

import './FooterWrapper.css';

const FooterWrapper = () => {

const ArrayOfObject =[

{
  statsnumber : "80k",
  statstitle : "followers",
  uniqueid : 1
},

{
  statsnumber : "803k",
  statstitle : "likes",
  uniqueid : 2
},

{
  statsnumber : "1.4k",
  statstitle : "photos",
  uniqueid : 3
}

]


  return (
    <div className="footerdiv">

{

  ArrayOfObject.map(((item) => {
    return(
      <FooterItem key={item.uniqueid} item={item}/>
    )
  }))
}
    
    </div>
  );
}

export default FooterWrapper;






