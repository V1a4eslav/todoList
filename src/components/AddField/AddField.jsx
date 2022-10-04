import './AddField.scss';
import { useAddTodo } from '../../hooks/useAddTodo';


export const AddField = () => {
    const {addHandler, setValue, value} = useAddTodo();
    return (
        <div className="todo__add-field add-field">
            <input
                value={value}
                onChange={(e) => setValue(e.target.value)}
                type="text"
                className="add-field__input"
                placeholder='Add todo...'/>
            <button
                onClick={value ? addHandler : null}
                className="add-field__btn">Add
            </button>
        </div>
    );
}
