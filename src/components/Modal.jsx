import React from 'react';

const Modal = ({open , setopen , Xscore , Oscore})=> {
      return (
            <div className='modal1'>
                  <div className='score_head'>
                        X vs O
                  </div>
                  <div className='score'> 
                        {Xscore} : {Oscore}
                  </div>
                  <button onClick={()=>{setopen(!open)}}>close</button>
            </div>
      );
}

export default Modal;