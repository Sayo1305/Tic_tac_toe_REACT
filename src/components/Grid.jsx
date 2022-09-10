import React from 'react';
import { useState } from 'react';
import Modal from './Modal';
const Grid = () => {
      const [textgrid , settextgrid] = useState(Array(9).fill(' '));
      const [open , setopen] = useState(false);
      const [player_x , setplayer_x] = useState(false);
      const [visited ,setvisited] = useState(Array(9).fill(false));
      const [winner , setwinner] = useState(false);
      const [X_score , setX_score] = useState(0);
      const [O_score , setO_score] = useState(0);
      const [winner_name , setwinner_name] = useState('');
      const handle_click = (idx)=>{
            if(visited[idx] === false && winner === false)
            {
                  let temparr = textgrid;
                  temparr[idx] = (player_x === true ? 'X' : 'O');

                  settextgrid(temparr);
                  // console.log(textgrid);
                  setplayer_x(!player_x);
                  visited[idx] = true;
                  setvisited(visited);
                  check_for_winner();
            }
            else if(visited[idx] === true)
                  window.alert("Already filled");
            else if(winner === true){
                  window.alert("clear the board please...😔");
            }
      }
      const check_for_winner =  ()=>
      {
            // horizontal
            if(winner === true)
            {
                  return;
            }
            for(let i = 0 ; i<=6;i+=3)
            {
                  if(textgrid[i] === textgrid[i+1] && textgrid[i+1] === textgrid[i+2] && textgrid[i] !== ' ')
                  {
                        setwinner_name(textgrid[i]);
                        setwinner(true);
                        {
                              textgrid[i] === 'X' ? (setX_score ((prev)=> prev + 1)) : (setO_score((prev)=> prev + 1));
                        }
                  }
            }
            //vertical
            for(let i = 0;i<3;i++)
            {
                  if(textgrid[i] === textgrid[i+3] && textgrid[i+3] === textgrid[i+6] && textgrid[i] !== ' ')
                  {
                        setwinner_name(textgrid[i]);
                        setwinner(true);
                        {
                              textgrid[i] === 'X' ? (setX_score ((prev)=> prev + 1)) : (setO_score((prev)=> prev + 1));
                        }
                  }
            }
            //diogonal
            if(textgrid[0] === textgrid[4] && textgrid[4] === textgrid[8] && textgrid[0] !== ' ')
            {
                  setwinner_name(textgrid[0]);
                  setwinner(true);
                  {
                        textgrid[0] === 'X' ? (setX_score ((prev)=> prev + 1)) : (setO_score((prev)=> prev + 1));
                  }
            }
            if(textgrid[2] === textgrid[4] && textgrid[4] === textgrid[6] && textgrid[2] !== ' ')
            {
                  setwinner_name(textgrid[2]);
                  setwinner(true);
                  {
                        textgrid[2] === 'X' ? (setX_score ((prev)=> prev + 1)) : (setO_score((prev)=> prev + 1));
                  }
            }
      }
      const handle_clear = ()=>{
            let temp = Array(9).fill(' ');
            settextgrid(temp);
            setvisited(Array(9).fill(false));
            setwinner(false);
      }
      return (
            <div className='container'>
                  <h1 className='head_score'>player {player_x === true ? 'X' : 'O'} turn</h1>
                        <table className='grid'>
                              <tr>
                                    <td className='grid_el' onClick={()=>{
                                          handle_click(0);
                                    }}>{textgrid[0]}</td>
                                    <td className='grid_el'onClick={()=>{
                                          handle_click(1);
                                    }}>{textgrid[1]}</td>
                                    <td className='grid_el'onClick={()=>{
                                          handle_click(2);
                                    }}>{textgrid[2]}</td>
                              </tr>
                              <tr>
                                    <td className='grid_el'onClick={()=>{
                                          handle_click(3);
                                    }}>{textgrid[3]}</td>
                                    <td className='grid_el'onClick={()=>{
                                          handle_click(4);
                                    }}>{textgrid[4]}</td>
                                    <td className='grid_el'onClick={()=>{
                                          handle_click(5);
                                    }}>{textgrid[5]}</td>
                              </tr>
                              <tr>
                                    <td className='grid_el'onClick={()=>{
                                          handle_click(6);
                                    }}>{textgrid[6]}</td>
                                    <td className='grid_el'onClick={()=>{
                                          handle_click(7);
                                    }}>{textgrid[7]}</td>
                                    <td className='grid_el'onClick={()=>{
                                          handle_click(8);
                                    }}>{textgrid[8]}</td>
                              </tr>
                        </table>
                        <div>
                              {
                                    textgrid.includes(' ') === false && winner === false ? (
                                          <div className='draw'>Draw No one wins 😔</div>
                                    ) : (
                                          <div></div>
                                    )
                              }
                        </div>
                        <div className='winner'>
                              {
                                    winner === true ? (
                                          <div>
                                                winner is {winner_name}
                                          </div>
                                    ) : (
                                          <div></div>
                                    )
                              }
                        </div>
                        <div className='button_cont'>
                              <div className='button_container'>
                                    <button className='button_clear' onClick={handle_clear}>clear board</button>
                              </div>
                              <div className='button_container'>
                                    <button className='button_score' onClick={()=>{setopen(!open)}}>veiw score</button>
                                    {
                                          open === true ? 
                                          (
                                                <Modal open={open} setopen ={setopen} Xscore={X_score} Oscore = {O_score}/>
                                          ):
                                          (
                                                <div></div>
                                          )
                                    }
                              </div>
                        </div>
            </div>
      );
};

export default Grid;
