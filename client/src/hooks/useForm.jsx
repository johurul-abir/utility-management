import { useState } from "react";

//creat hooks for get form data
const useForm = (init) => {
  const [input, setInput] = useState(init);

  //handel function
  const handelInputChange = (e) => {
    e.preventDefault();
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  //reset data
  const resetForm = () => {
    setInput(init);
  };

  return { input, handelInputChange, resetForm };
};

//export default
export default useForm;
