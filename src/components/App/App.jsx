import React from 'react';
import {Header} from '../Header/Header';
import {Search} from '../Search/Search';
import {Todos} from '../Todos/Todos';
import {AddField} from '../AddField/AddField';
import './App.scss';
import {useSelector} from 'react-redux';

export const App = () => {
    const todos = useSelector((state) => state.todo.todos);

    return (
        <div className="wrapper">
            <div className="todo">
                <div className="todo__container _container">
                    <div className="todo__body">
                        <Header/>
                        <Search/>
                        <Todos items={todos}/>
                        <AddField/>
                    </div>
                </div>
            </div>
        </div>
    );
}

