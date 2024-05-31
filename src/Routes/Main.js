import {useNavigate } from 'react-router-dom';



function Main(){

    let navigate = useNavigate();




    return(
        <>

        <h2>무료 온라인 설문조사 가보자고</h2>

        <p>설문조사 아직도 직접 만드시나요 네</p>


        <button onClick={()=>{ navigate("/login")}}>가보자고</button>


        <div>여기에 사용 예시 보여줘 ~</div>
    

        </>
    )
}


export default Main;