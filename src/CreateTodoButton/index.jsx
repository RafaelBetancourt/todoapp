import React from 'react';
import './CreateTodoButton.css';

function CreateTodoButton(props) {

  const onClickButton = () => {
    props.setOpenModal(prevState => !prevState);
  };

  return (
    <div>
      <button
        className="CreateTodoButton"
        onClick={onClickButton}

      >
        +
      </button>
      <h1 className='botontext'>Presiona el botón para crear tarea</h1>
    </div>
  )
}

export { CreateTodoButton };