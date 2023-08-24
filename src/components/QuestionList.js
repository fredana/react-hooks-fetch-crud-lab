import React, { useState, useEffect } from "react";
import QuestionItem from "./QuestionItem"; 

function QuestionList() {
  const [questions, setQuestions] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/questions")
      .then((response) => response.json())
      .then((data) => setQuestions(data))
      .catch((error) => console.error("Error fetching questions:", error));
  }, []);
  
  const onDeleteQuestion = (questionId) => {
    // Call the API to delete the question
    fetch(`http://localhost:4000/questions/${questionId}`, {
      method: "DELETE",
      // ...
    })
      .then((response) => response.json())
      .then(() => {
        // Update the state to remove the deleted question
        setQuestions((prevQuestions) =>
          prevQuestions.filter((question) => question.id !== questionId)
        );
      })
      .catch((error) => console.error("Error deleting question:", error));
  };  

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
         {questions.map((question) => (
          <QuestionItem 
            key={question.id} 
            question={question}
            onDeleteQuestion={onDeleteQuestion} // Pass the onDeleteQuestion function 
          />
        ))}
      </ul>
    </section>
  );
}

export default QuestionList;

// import React, { useState, useEffect } from "react";
// import QuestionItem from "./QuestionItem"; // You'll need to create this component

// function QuestionList() {
//   const [questions, setQuestions] = useState([]);

//   useEffect(() => {
//     fetch("http://localhost:4000/questions")
//       .then((response) => response.json())
//       .then((data) => setQuestions(data))
//       .catch((error) => console.error("Error fetching questions:", error));
//   }, []);

//   return (
//     <section>
//       <h1>Quiz Questions</h1>
//       <ul>
//         {questions.map((question) => (
//           <QuestionItem key={question.id} question={question} />
//         ))}
//       </ul>
//     </section>
//   );
// }

// export default QuestionList;
