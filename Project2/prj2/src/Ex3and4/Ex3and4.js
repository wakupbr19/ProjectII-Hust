import React from "react";
import { useState, useRef } from "react";
import './Ex3and4.css';

function Ex3and4() {
        const [marioPosition, setMarioPosition] = useState(46);
        const [diamondPosition, setDiamondPosition] = useState(5);
        const [command, setCommand] = useState("");

        const commandRef = useRef();
        
        var currentPosition = marioPosition;

        const MarioPic = () => {
                return (<img 
                        className="marioPic" 
                        src="mario.png" 
                        alt="mario"
                        ></img>);
        }
        const DiamondPic = () =>{
                return(<img 
                        className="diamondPic" 
                        src="diamond.png" 
                        alt="diamond"
                        ></img>);
        }

        function handleMove(move) {
                if (move.toLowerCase().trim() === "move up") {
                        if (currentPosition > 0 && currentPosition < 7) {
                                alert("Không thể di chuyển ra ngoài khu vực chơi vui lòng nhập lệnh khác");
                        } else if (currentPosition === 16 || currentPosition === 17 || currentPosition === 18 
                                || currentPosition === 25 ||currentPosition === 26 || currentPosition === 27 || currentPosition === 28 
                                || currentPosition === 39 ||currentPosition === 40 || currentPosition === 41 || currentPosition === 42)
                                {
                                alert("Không thể di chuyển vào ô vật cản");
                        } else {
                                currentPosition = currentPosition -6;
                                setMarioPosition(currentPosition);
                                console.log('Move up');
                        }
                } else
                if (move.toLowerCase().trim() === "move down") {
                        if (currentPosition > 42 && currentPosition < 49) {
                                alert("Không thể di chuyển ra ngoài khu vực chơi vui lòng nhập lệnh khác");
                        } else if (currentPosition === 4 || currentPosition === 5 || currentPosition === 6 
                                || currentPosition === 16 ||currentPosition === 15 || currentPosition === 14 || currentPosition === 13 
                                || currentPosition === 27 ||currentPosition === 28 || currentPosition === 29 || currentPosition === 30)
                                {
                                alert("Không thể di chuyển vào ô vật cản");
                        } else {
                                currentPosition = currentPosition +6;
                                setMarioPosition(currentPosition);
                                console.log('Move down');
                        }
                } else
                if (move.toLowerCase().trim() === "move right") {
                        if (currentPosition % 6 === 0) {
                                alert("Không thể di chuyển ra ngoài khu vực chơi vui lòng nhập lệnh khác");
                        } else if (currentPosition === 9 || currentPosition === 32) {
                                alert("Không thể di chuyển vào ô vật cản");
                        } else {
                                currentPosition = currentPosition +1;
                                setMarioPosition(currentPosition);
                                console.log('Move right');
                        }
                } else
                if (move.toLowerCase().trim() === "move left") {
                        if (currentPosition % 6 === 1) {
                                alert("Không thể di chuyển ra ngoài khu vực chơi vui lòng nhập lệnh khác");
                        } else if (currentPosition === 23 ) {
                                alert("Không thể di chuyển vào ô vật cản");
                        } else {
                                currentPosition = currentPosition -1;
                                setMarioPosition(currentPosition);
                                console.log('Move left');
                        }
                }
        }

        async function handleRun(event) {
                event.preventDefault();
                if (marioPosition === diamondPosition) {
                        alert("Chúc mừng bạn đã chiến thắng");
                        setDiamondPosition("");
                }

                const moves = command.split(",");
                console.log(moves);
                for (let i in moves) {
                       handleMove(moves[i]); 
                       await wait(666);  
                }
                setCommand("");
        }
        
        function wait(time) {
                return new Promise(resolve => {
                    setTimeout(() => {
                        resolve();
                    }, time);
                });
            }

        const boxes = [];
        for (let i =1; i<=48; i++) {
                boxes[i-1] = i;
        }

        return(
        <>
        <h1 className = 'ex3Title'>Bài tập 3: Vẽ mê cung</h1>
        <h1 className = 'ex4Title'>Bài tập 4: Tạo simulation đối tượng di chuyển theo lịch trình được lập</h1>
        <div className="container">
        <div className="grid-container">
                {
                boxes.map((box) => 
                (
                        box === 10 || box === 11 || box === 12 
                        || box === 19 || box === 20 || box === 21 || box === 22 
                        || box === 36 || box === 35 || box === 34 || box === 33) ? 
                (
                        <div className = 'grid-item blue' key = {box}></div>
                ) 
                : 
                ( 
                        (box === marioPosition) ? 
                        (<div 
                                className = 'grid-item' key = {box}><MarioPic/></div>) 
                        :
                        (
                                (box === diamondPosition) ?
                                (<div className = 'grid-item' key = {box}><DiamondPic/></div>) 
                                :
                                (<div className = 'grid-item' key = {box}></div>)
                        )
                )
                )
                }
              </div>
        
              <div className = "command">
                <h4>Move up</h4>
                <h4>Move down</h4>
                <h4>Move left</h4>
                <h4>Move right</h4>
              <form className="inputForm"
               onSubmit={handleRun}>
                      <label>
                        <input 
                            className="input"
                            type="text" 
                            value={command}
                            ref ={commandRef}
                            onChange={(e) => setCommand(e.target.value)}
                              />
                      </label>
                      <input value="Run" type="submit" className="runButton" onClick={handleRun}/>
               </form>
              </div>
              </div>
             </>
           ) 
        }
        export default Ex3and4;