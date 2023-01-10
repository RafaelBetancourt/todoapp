import React from 'react';
import './TodoItem.css';

function TodoItem(props) {

    // const onComplete = () => {
    //     alert('Ya completaste la tarea ' + props.text);
    // };

    // const onDelete = () => {
    //     alert('Borraste la tarea ' + props.text);
    // };

    return (
        <li className="TodoItem">
            <span
                className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
                onClick={props.onComplete}
                title='Presiona el icono "Check" para marcar la tarea como completada'
            >
                √
            </span>
            <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
                {props.text}
            </p>
            <span className="Icon Icon-delete"
                onClick={props.onDelete}
                title='Presiona el icono "X" para eliminar la tarea de la lista'
            >
                X
            </span>
        </li>
    )
}

export { TodoItem };