import './Search.scss';

export const Search = () => {

   // const a = () => { 

   //  }

   return (
      <div className="todo__search search">
         <input type="text" className="search__input" placeholder='Search...' />
         <div className="search__buttons btns">
            <button className="btn btns__all _active">All</button>
            <button className="btn btns__active">Active</button>
            <button className="btn btns__done">Done</button>
         </div>
      </div>
   );
}
