import React, { useState } from "react";
import "./css/adminStyle.css";

const formElements = {
  problemStatement: "",
  image: "",
  video: "",
  equation: "",
  correctAns: "",
  wrongAns: ["", "", ""],
};

const CreateQuiz = () => {
  const [FormFields, setFormFields] = useState([]);

  const handleFormChange = (event, index, wrongAnsIndex) => {
    let data = [...FormFields];
    if (event.target.name === "wrongAns") {
      data[index][event.target.name][wrongAnsIndex] = event.target.value;
    } else {
      data[index][event.target.name] = event.target.value;
    }
    console.log(data);
    setFormFields(data);
  };

  const handleAddMore = (e) => {
    setFormFields([
      ...FormFields,
      {
        problemStatement: "",
        image: "",
        video: "",
        equation: "",
        correctAns: "",
        wrongAns: ["", "", ""],
      },
    ]);
    e.preventDefault();
  };

  const removeQuestion = (index) => {
    let data = [...FormFields];
    data.splice(index, 1);
    setFormFields(data);
  };
  return (
    <div className="new-quiz">
      <h1  style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}>Create New Quiz</h1>

      <form className="form">
      {/* <input autocomplete="off" type="text" placeholder="standard" name="standard" />
        <input autocomplete="off"  type="text" placeholder="Subject" name="Subject" />
        <input autocomplete="off" type="text" placeholder="DifficultyLevel" name="difficultyLevel" /> */}
        {FormFields.map((form, index) => {
          return (
            <div key={index} style={{ "margin-bottom": "25px","border-bottom":"2px solid black" }}>
              <h3
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                Question {index + 1}
              </h3>
              <button
                type="button"
                style={{ width: "22%" }}
                onClick={() => removeQuestion(index)}
              >
                Remove Question
              </button>
              <input autocomplete="off"
                type="text"
                placeholder="problem Statement"
                name="problemStatement"
                onChange={(event) => handleFormChange(event, index)}
                value={form.problemStatement}
              ></input>
              <input autocomplete="off"
                type="file"
                accept="image/*"
                placeholder="upload image"
                name="image"
                onChange={(event) => handleFormChange(event, index)}
                value={form.image}
              />
              <input autocomplete="off"
                type="file"
                accept="video/*"
                placeholder="upload video"
                name="video"
                onChange={(event) => handleFormChange(event, index)}
                value={form.video}
              />
              <textarea  
                rows="4"
                cols="50"
                placeholder="Enter equations"
                name="equation"
                onChange={(event) => handleFormChange(event, index)}
                value={form.equation}
              />
              <div
                className="input options"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <h5>Enter options</h5>
                <div>
                  <input autocomplete="off"
                    type="text"
                    placeholder="Correct Ans"
                    name="correctAns"
                    onChange={(event) => handleFormChange(event, index)}
                    value={form.correctAns}
                  ></input>
                  <input autocomplete="off"
                    placeholder="Wrong Ans"
                    name="wrongAns"
                    onChange={(event) => handleFormChange(event, index, 0)}
                    value={form.wrongAns[0]}
                  ></input>
                </div>
                <div>
                  <input autocomplete="off"
                    placeholder="Wrong Ans"
                    name="wrongAns"
                    onChange={(event) => handleFormChange(event, index, 1)}
                    value={form.wrongAns[1]}
                  ></input>
                  <input autocomplete="off"
                    placeholder="Wrong Ans"
                    name="wrongAns"
                    onChange={(event) => handleFormChange(event, index, 2)}
                    value={form.wrongAns[2]}
                  ></input>
                </div>
              </div>
            </div>
          );
        })}
        <button style={{ width: "20%" }} onClick={handleAddMore}>
          Add Question
        </button>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default CreateQuiz;
