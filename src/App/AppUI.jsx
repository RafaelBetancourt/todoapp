import React from 'react';
import { TodoContext } from '../TodoContext';
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { TodoForm } from "../TodoForm";
import { CreateTodoButton } from "../CreateTodoButton";
import { Modal } from '../Modal';
import './AppUI.css';
import { Metronome } from '@uiball/loaders'



function AppUI() {

    const {
        error,
        loading,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal,
    } = React.useContext(TodoContext);

    return (
        <>
            <div className='mainApp'>
                <TodoCounter />
                <TodoSearch />


                <TodoList>

                    {error && <p>Hubo un error...</p>}
                    {loading &&

                        <div class="metronome">
                            <div class="metronome__dot"></div>
                            <div class="metronome__dot"></div>
                            <div class="metronome__dot"></div>
                            <div class="metronome__dot"></div>
                            <Metronome
                                size={40}
                                speed={1.9}
                                color="Black"
                            />
                            <p className='cargando'>Cargando...</p>
                        </div>

                    }
                    {(!loading && !searchedTodos.length) && <p className='creaprimertodo'>Crea tu primer TODO!</p>}

                    {searchedTodos.map(todo => (
                        <TodoItem
                            key={todo.text}
                            text={todo.text}
                            completed={todo.completed}
                            onComplete={() => completeTodo(todo.text)}
                            onDelete={() => deleteTodo(todo.text)}
                        />
                    ))}
                </TodoList>


                {!!openModal && (
                    <Modal>
                        <TodoForm />
                    </Modal>
                )}

                <CreateTodoButton
                    setOpenModal={setOpenModal}
                />
            </div>
        </>
    )
}

export { AppUI };
