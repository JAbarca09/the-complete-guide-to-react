import { useState } from 'react';

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState('');
  const [enteredNameTouch, setEnteredNameTouch] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== '';
  const nameInputIsValid = !enteredNameIsValid && enteredNameTouch;

  let formIsValid = false;

  if (enteredNameIsValid) {
    formIsValid = true;
  } 
  
  const nameInputChangeHandler = event => {
    setEnteredName(event.target.value);
  };

  const nameInputBlurHandler = event => {
    setEnteredNameTouch(true);
  };

  const formSubmissionHandler = event => {
    event.preventDefault();

    setEnteredNameTouch(true);

    if (!enteredNameIsValid) {
      return;
    }
  
    console.log(enteredName);
    setEnteredName('');
    setEnteredNameTouch(false);
  };

  const nameInputClasses = nameInputIsValid ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' onBlur={nameInputBlurHandler} onChange={nameInputChangeHandler} value={enteredName} />
        {nameInputIsValid && <p className='error-text'>Name must not be empty!</p>}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
