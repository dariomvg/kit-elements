import { useState } from "react";
import "../styles/Collapse.css";
import { PropsCollapse } from "../types";

export const Collapse = ({
  children,
  title,
  bg="dark",
  width="100%",
}: PropsCollapse): JSX.Element => {
  const [active, setActive] = useState(false);
  const handleContent = () => setActive(!active);

  return (
    <div
      className={`container ${bg} ${active ? "visible" : ""}`}
      style={{ width: width}}>
      <div className="sec-title">
        <h3 className="title">{title}</h3>
        {active ? (
          <svg
            width={30}
            height={30}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#fff"
            className={`icon w-6 h-6 ${
              bg == "dark" ? "icon-dark" : "icon-light"
            }`}
            onClick={handleContent}>
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m4.5 15.75 7.5-7.5 7.5 7.5"
            />
          </svg>
        ) : (
          <svg
            width={30}
            height={30}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#fff"
            className={`icon w-6 h-6 ${
              bg == "dark" ? "icon-dark" : "icon-light"
            }`}
            onClick={handleContent}>
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        )}
      </div>
      <div className="content">{children}</div>
    </div>
  );
};
