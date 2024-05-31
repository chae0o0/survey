import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Join from "./Join";





function Login(){

    let navigate = useNavigate();

    let [id, setId] = useState('');
    let [idErr , setIdErr] = useState(''); //아이디 틀렸을때
    let [pw, setPw] = useState('');
    let [pwErr , setPwErr] = useState(''); //비번 틀렸을때

    
    return (
      <>
        <div className="LoginForm">

          <h2>어더오데요</h2>
          <p> 로그인걸 !~~</p>

          <div className="form-group">
            <input type="text" id="id" placeholder="아이디를 입력" 
                  value={id}  onChange={e => { setId(e.target.value);}}/>
            {
                idErr && <span className="error">{idErr}</span>
            }
          </div>

          <div className="form-group">
            <input type="password" placeholder="비밀번호 입력" 
                  value={pw}  onChange={e => { setPw(e.target.value);}}/>
          </div>
          


        <button type="submit" style={{backgroundColor:"#F79F81"}} >로그인🤝</button>
        <button onClick={()=>{navigate("/Join")}}>회원가입</button>



        </div>
      </>
    );
}



export default Login;