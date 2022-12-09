import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AttemptQuiz = () => {
  const API_URL =
    "https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple";

  const [Questions, setQuestions] = useState([]);
  const [QuestionNo, setQuestionNo] = useState(0);
  const [score,setscore]=useState(0)
  const [addStyle,setaddStyle]=useState(false)
  const navigate = useNavigate();
  

  useEffect(() => {
    async function fetchData() {
      await fetch(API_URL)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setQuestions(data.results);
        });
    }
    fetchData();
  }, []);



  const handleButtonClick = (e) => {
    e.preventDefault();
    if(e.target.value===Questions[QuestionNo].correct_answer){
      setscore(score+10)
    }
    setaddStyle(true)
    setTimeout(() => {
      setQuestionNo(QuestionNo+1)
      setaddStyle(false)
    }, 500);
    if(QuestionNo===9){
      navigate("/dashboard/:studentId")
  }
      
  };
  return Questions.length > 0 ? (
    <div className="quiz-container">
      <div className="quiz-main">
        <h3 style={{"font-size":"30px","color":"white"}} >Score: {score}/100    </h3>
        <h3 style={{"font-size":"30px","color":"white"}} > QuestionNo:{QuestionNo+1}   </h3>
        <div className="quiz-question">
          <h1
            dangerouslySetInnerHTML={{ __html: Questions[QuestionNo].question }}
          />
        </div>
        <div className="options">
          <div>image</div>
          <div>video</div>
        </div>
        <div>equation</div>
        <div className="options">
          <div>
            <div>
              <button  name="option1" value={ Questions[QuestionNo].correct_answer} style={addStyle===true?{"background":"green"}:{}} className="quiz-options" onClick={handleButtonClick}>
                {Questions[QuestionNo].correct_answer}
              </button>
            
            </div>
            <div>
              {" "}
              <button name="option2" className="quiz-options" style={addStyle===true?{"background":"red"}:{}} value= {Questions[QuestionNo].incorrect_answers[0]} onClick={handleButtonClick}>
                {Questions[QuestionNo].incorrect_answers[0]}
              </button>
            </div>
          </div>
          <div>
            <div>
              <button  name="option3" className="quiz-options" style={addStyle===true?{"background":"red"}:{}} value={Questions[QuestionNo].incorrect_answers[1]} onClick={handleButtonClick}>
              {Questions[QuestionNo].incorrect_answers[1]}
              </button>
            </div>
            <div>
              <button  name="option4" className="quiz-options" style={addStyle===true?{"background":"red"}:{}} value=   {Questions[QuestionNo].incorrect_answers[2]} onClick={handleButtonClick}>
              {Questions[QuestionNo].incorrect_answers[2]}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="loader">
      <img
        src="https://quizgamefinal.netlify.app/img/loader.gif"
        alt="loading"
        className="loader-img"
      />
    </div>
  );
};

export default AttemptQuiz;
