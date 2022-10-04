import './Search.scss';
import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";
import { changeValueSearch, saveFilterLabel } from "../../store/slice/searchSlice";

export const Search = () => {
    const dispatch = useDispatch();
    const term = useSelector((state) => state.field.term);
    const filterLabel = useSelector((state) => state.field.filterLabel);

    const onClickFilterButton = (label) => {
        dispatch(saveFilterLabel(label));
    }

    const buttonArray = [
        { label: 'All', className: "btn" },
        { label: 'Active', className: "btn" },
        { label: 'Done', className: "btn" }
    ]

    return (
        <div className="todo__search search">
            <input value={term}
                type="text"
                className="search__input"
                placeholder='Search...'
                onChange={(e) => dispatch(changeValueSearch(e.target.value))}
            />
            <div className="search__buttons btns">
                {buttonArray.map((button) => (
                    <button key={button.label} onClick={() => onClickFilterButton(button.label)} className={[button.className, filterLabel === button.label ? "_active" : null].join(' ')}>{button.label}</button>
                ))}
            </div>
        </div>
    );
}
