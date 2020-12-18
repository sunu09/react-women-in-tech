import React,{Component} from 'react';
import Iframe from 'react-iframe';

class ActionPage extends Component {
    render(){
      return(
        <div>
          <h1>WHAT WE NEED?</h1>
          <h3>How to retain women in technology?</h3>
          <Iframe url="https://www.bing.com/videos/search?q=what+we+need+to+do+to+make+women+participate+in+technology+job&&view=detail&mid=EF3809EF3BE93DC641CBEF3809EF3BE93DC641CB&&FORM=VRDGAR&ru=%2Fvideos%2Fsearch%3Fq%3Dwhat%2Bwe%2Bneed%2Bto%2Bdo%2Bto%2Bmake%2Bwomen%2Bparticipate%2Bin%2Btechnology%2Bjob%26FORM%3DHDRSC3"
            position="absolute"
            width="100%"
            id="myId"
            className="myClassname"
            height="50%"
            styles={{height: "25px"}}/>

          {/* <img src="https://i.pinimg.com/originals/61/f5/2a/61f52a7fc89bc53ca034827d04af1fe4.jpg"/> */}
         
        </div>
      );
    }
  }

  export default ActionPage;