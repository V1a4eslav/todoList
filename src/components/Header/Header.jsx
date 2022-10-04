import './Header.scss';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';

export const Header = () => {

   const todos = useSelector((state) => state.todo.todos);

   const [countMore, setCountMore] = useState(0);
   const [countDone, setCountDone] = useState(0);

   useEffect(() => {
      const activeList = todos.filter(todo => !todo.done).length;
      setCountMore(activeList);
      const doneList = todos.filter(todo => todo.done).length;
      setCountDone(doneList);
   }, [todos]);

   return (
      <header className="todo__header header">
         <h1 className="header__title">Todo List</h1>
         <div className="header__counters counters">
            <span className="counters__more"><span className="count">{countMore}</span> more to do</span>
            /
            <span className="counters__done"><span className="count">{countDone}</span> done</span>
         </div>
      </header>
   );
}

