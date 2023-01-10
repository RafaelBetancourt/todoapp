import React from 'react';
import './TodoCounter.css';

function TodoCounter({total, completed}) {

    return (
        <div>
            {/* <h2 className='TodoCounter'>Haz completado {completed} de {total} tareas</h2> */}
            <h1 className='TodoCounter'>Bienvenidos a mi TODO's App</h1>
        </div>
    );
};

export { TodoCounter };