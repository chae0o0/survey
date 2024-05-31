import { useState } from 'react';
import data from './Notice_data';


function Notice(){

    let [list, setList] = useState(data);


    return(
        <>


        <div>
            여기는 게시판 리스트들 가운데 배치
        </div>

        <div>
            여기는 왼쪽 게시판 리스트들
        </div>


        <div name="글들 "></div>
            <div>제목</div>
            <div>글쓴이 </div>


        <div>
        {
            list.map(function(a,i){
                return <NList list={list[i]}/>
            })
        }
        </div>
        </>
    )
}

function NList(props){
    return(
        <>
        <div>{props.list.id}
            {props.list.title}
            {props.list.date}</div>
        </>
    )
}

export default Notice;