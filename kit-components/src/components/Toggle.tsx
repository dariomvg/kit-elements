import "../styles/Toggle.css";
import { PropsToggle } from "../types";

export const Toggle = ({ onClick }: PropsToggle): JSX.Element => {
  return (
    <label className="switch">
      <input type="checkbox" onClick={onClick} />
      <span className="slider"></span>
    </label>
  );
};