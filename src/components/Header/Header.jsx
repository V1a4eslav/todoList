import './Header.scss';

export const Header = () => {
   return (
      <header className="todo__header header">
         <h1 className="header__title">Todo List</h1>
         <div className="header__counters counters">
            <span className="counters__more"><span className="count">0</span> more to do</span>
            /
            <span className="counters__done"><span className="count">0</span> done</span>
         </div>
      </header>
   );
}

