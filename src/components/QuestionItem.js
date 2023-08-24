import React from "react";

function QuestionItem({ question, onUpdateQuestion, onDeleteQuestion }) {

  
  const handleDeleteClick = () => {
        // Send a DELETE request to the API
        fetch(`http://localhost:4000/questions/${question.id}`, {
          method: "DELETE",
        })
          .then(() => onDeleteQuestion(question.id))
          .catch((error) => console.error("Error deleting question:", error));
      };

  const handleDropdownChange = (event) => {
    const newCorrectIndex = parseInt(event.target.value);

    // Send a PATCH request to the API
    fetch(`http://localhost:4000/questions/${question.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        correctIndex: newCorrectIndex,
      }),
    })
      .then(() => onUpdateQuestion(question.id, newCorrectIndex))
      .catch((error) => console.error("Error updating question:", error));
  };

  return (
    <li>
      {/* Display question details */}
      <select value={question.correctIndex} onChange={handleDropdownChange}>
        {/* Dropdown options */}
      </select>
      <button onClick={handleDeleteClick} >Delete Question</button>
    </li>
  );
}



// import React, { useState } from "react";
// // import QuestionForm from "./QuestionForm";


// function QuestionItem({ question, onDeleteQuestion, onUpdateQuestion }) {
//   const { id, prompt, answers, correctIndex } = question;
//   const [newCorrectIndex, setNewCorrectIndex] = useState(correctIndex);

//   if (!Array.isArray(answers)) {
//     return <li>Error: Invalid answers data</li>;
//   }

//   const options = answers.map((answer, index) => (
//     <option key={index} value={index}>
//       {answer}
//     </option>
//   ));

//   const handleDeleteClick = () => {
//     // Send a DELETE request to the API
//     fetch(`http://localhost:4000/questions/${question.id}`, {
//       method: "DELETE",
//     })
//       .then(() => onDeleteQuestion(question.id))
//       .catch((error) => console.error("Error deleting question:", error));
//   };

//   const handleDropdownChange = (event) => {
//     const newCorrectIndex = parseInt(event.target.value);
//     setNewCorrectIndex(newCorrectIndex);

//     // Send a PATCH request to the API
//     fetch(`http://localhost:4000/questions/${question.id}`, {
//       method: "PATCH",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         correctIndex: newCorrectIndex,
//       }),
//     })
//     .then((response) => response.json())
//       .then(() => onUpdateQuestion(question.id, newCorrectIndex))
//       .catch((error) => console.error("Error updating question:", error));
//   };


//   return (
//     <li>
//       <h4>Question {id}</h4>
//       <h5>Prompt: {prompt}</h5>
//       <label>
//         Correct Answer:
//         <select value={correctIndex} onChange={handleDropdownChange}>{options}</select>
//       </label>
      
//       <button onClick={handleDeleteClick} >Delete Question</button>
//     </li>
//   );
// }

// import React from "react";

// function QuestionItem({ question }) {
//   const { id, prompt, answers, correctIndex } = question;

//   const options = answers.map((answer, index) => (
//     <option key={index} value={index}>
//       {answer}
//     </option>
//   ));

//   return (
//     <li>
//       <h4>Question {id}</h4>
//       <h5>Prompt: {prompt}</h5>
//       <label>
//         Correct Answer:
//         <select defaultValue={correctIndex}>{options}</select>
//       </label>
//       <button>Delete Question</button>
//     </li>
//   );
// }

export default QuestionItem;



