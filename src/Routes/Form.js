import {Button,Card  } from 'react-bootstrap';
import akswhr from '../Img/akswhr.png';
import {useNavigate,Routes,Route } from 'react-router-dom';




function Form(){
    return (
      <>
        <h4>여러가지 양식을 구경해보쇼</h4>
        <p>기본 양식에서 수정하기? 쌉파서블</p>

        <CardList/>
      </>
    );
}

function CardList(props){

    let navigate = useNavigate();


    return(
        <>
          <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={akswhr} />
          <Card.Body>
            <Card.Title> 만족도 조사 </Card.Title>
            <Button onClick={()=>{ navigate("/Form/:id")}} variant="primary">미리보기</Button>
            &nbsp; &nbsp;
            <Button variant="primary">사용하기</Button>
          </Card.Body>
        </Card>
        </>
    )
}

export default Form;