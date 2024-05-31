import { useState } from "react";
import { useNavigate } from "react-router-dom";





function Join(){

    let navigate = useNavigate();

    let [id, setId] = useState('');
    let [idErr , setIdErr] = useState('');
    let [pw, setPw] = useState('');
    let [confirmPw , setConfirmPw ] = useState('');

    let 아이디중복확인 = ()=>{
        console.log('아이디 중복확인');
    }

    let 회원가입완료 = (e) =>{
        e.preventDefault();
        //여기에 회원가입 버튼 클릭시 처리할 로직을 추가해야댐

        if(!id.trim()){
            setIdErr('아이디어디갔어');
            return;
        }
        console.log('회원가입완료');
    }
    
    return (
      <>
        <div className="LoginForm">

          <h2>어더오데요</h2>
          <p> 어서 가입을 하쇼 !</p>

          <div className="form-group">
            <input type="text" id="id" placeholder="아이디를 입력" 
                  value={id}  onChange={e => { setId(e.target.value);}}/>
            <button onClick={아이디중복확인}>중복확인</button>
            {
                idErr && <span className="error">{idErr}</span>
            }
          </div>

          <div className="form-group">
            <input type="password" placeholder="비밀번호 입력" 
                  value={pw}  onChange={e => { setPw(e.target.value);}}/>
          </div>
          <div className="form-group">
            <input type="password" placeholder="비밀번호 재입력" />
          </div>



        <button type="submit" style={{backgroundColor:"#F79F81"}}>회원가입🤝</button>
        <button type="button" onClick={()=>{navigate(-1)}}>취소👎</button>
        <button type="button" onClick={()=>{navigate("/")}}>홈으로</button>



        </div>
      </>
    );
}



export default Join;