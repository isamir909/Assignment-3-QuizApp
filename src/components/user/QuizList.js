import React from 'react'
import "./CSS/quiz.css"
const QuizList = () => {
    // const [fetchQuiz,setfetchQuiz]=useState([])

  return (
    <div>
        <div className='container'>
              <div className='main'>
                <h1 style={{"border-bottom":"2px solid black","margin":"7px", "padding":"4px"}}>Quiz List</h1>
                <div style={{"display":"flex","justifyContent":"space-between","alignItems":"center"}}>
                  <h3>Quiz 1</h3>
                  <h3>Status</h3>
                  <h3>Status</h3>
                </div>

              </div>
        </div>
    </div>
  )
}

export default QuizList
