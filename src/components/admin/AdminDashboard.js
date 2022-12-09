import React, { useState } from "react";
import NavBar from "./NavBar";
// import SideBar from './SideBar'
import "./css/adminStyle.css";
import CreateQuiz from "./CreateQuiz"



const AdminDashboard = (props) => {

  const [QuestionPapers, setQuestionPapers] = useState([]);
 
  const findQuizzes = () => {};

  return (
    <div>
      <NavBar item1="Home" item2="Profile"/>
      <div className="dashboard-main">
        <div className="sideBar-container">
          <h1>Get Quiz</h1>
          <form>
            <input placeholder="Get Quiz by ID"></input>
            <input placeholder="Get Quiz by Subject"></input>
            <input placeholder="Get Quiz by Standard"></input>
            <button onClick={findQuizzes}>Search Quiz</button>
          </form>
        </div>

        {QuestionPapers.length >= 1 ? (
          <div>
            <h1>dfgfdg</h1>
          </div>
        ) :<CreateQuiz/>}
        <div></div>
      </div>
    </div>
  );
};

export default AdminDashboard;
