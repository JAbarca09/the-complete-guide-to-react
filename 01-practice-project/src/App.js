import React, { useState } from 'react';
import InputForm from './Components/InputForm';
import Users from './Components/Users';
import ErrorModal from './Components/ErrorModal';

import './App.css';

const App = () => {

  const [usersArr, setUsersArr] = useState([]);
  const [showModal, setShowModal] = useState(false); //should be false on start
  const [errorMessage, setErrorMessage] = useState("");

  const saveUserHandler = (userData) => {
    //add the user to the array
    setUsersArr((userArr) => {
      userData.key = userArr.length + 1;
      return [userData, ...userArr];
    })
  }

  const switchOnErrorModal = (triggerState) => {
    setShowModal(triggerState); //turns the error modal on
  }

  const switchOffErrorModal = () => {
    setShowModal((triggerState) => !triggerState); //on off switch
  }

  const setErrorModalMessage = (errorMessage) => {
    setErrorMessage(errorMessage);
  }

  return (
    <div className="bgBlack">
      <InputForm onErrorModalMessage={setErrorModalMessage} onTurnErrorModalOn={switchOnErrorModal} onSaveUser={saveUserHandler} />
      <Users usersArr={usersArr} />
      {
        showModal && <ErrorModal onSaveErrorMessage={errorMessage} onErrorModalTrigger={switchOffErrorModal} />
      }
    </div>
  );
}

export default App;
