import { useState } from "react";

const Container = (props) => {
  const {name} = props

  const [message, setMessage] = useState(0)

  const handleClicked = () => {

  }

  return (
    <>
    <h1>{name ? name : "Container"}</h1>
    </>
  );
}

export default Container