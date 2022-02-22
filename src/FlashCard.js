import { useState } from "react"

const FlashCard = () => {

  const [showQuestion, setShowQuestion] = useState (true)
  const renderCard = () => {
    if(showQuestion) {
      return <p>Question</p>
    } else {
      return <p>Answer</p>
    }
  }

  return (
    <div> 
      <button style={{marginTop: '10px'}} onClick={() => setShowQuestion(!showQuestion)}>Toggle</button>
      {renderCard()}
    </div>
  )
}

export default FlashCard