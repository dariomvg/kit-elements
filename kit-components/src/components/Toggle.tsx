import "../styles/Toggle.css";
import { PropsToggle } from "../types";

export const Toggle = ({ onClick }: PropsToggle) => {
  return (
    <label className="switch">
      <input type="checkbox" onClick={onClick} data-testid="input" />
      <span className="slider"></span>
    </label>
  );
};
