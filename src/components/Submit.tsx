import { useDispatch, useSelector } from "react-redux";
import { handleInput } from "../store/slices/nameSlice";
import { sendData } from "../thunks/useThunk";

function Submit() {
  const dispatch = useDispatch();

  const value = useSelector((state) => state.nameReducer.value);

  const handleForm = (e) => {
    e.preventDefault();
    dispatch(sendData(value));
  };

  return (
    <>
      <form onSubmit={handleForm}>
        <input
          placeholder="type.."
          className="border-2 border-amber-300 rounded p-2"
          onChange={(e) => dispatch(handleInput(e.target.value))}
          required
        />
        <button className="bg-yellow-400 p-2 rounded">enter</button>
      </form>
    </>
  );
}

export default Submit;
