import { BoxLinksTypes } from "../types";
import "../styles/BoxLinks.css";
import { useState } from "react";

export const BoxLinks = ({
  links,
  title,
  theme = "dark",
  width = "100%",
}: BoxLinksTypes) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div
      className={`box-links ${theme === "light" ? "theme-light" : ""} ${
        open ? "open-box-links" : ""
      }`}
      style={{ width: width }}>
      <div className="header-box-links">
        <p className="title-box-links">{title}</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke={theme === "dark" ? "#fff" : "#101010"}
          className="size-6 icon-arrow-link"
          width="20"
          onClick={() => setOpen(!open)}>
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m19.5 8.25-7.5 7.5-7.5-7.5"
          />
        </svg>
      </div>
      <nav className="nav-box-links">
        {links.length > 0 &&
          links.map(({ id, link, name }) => (
            <a
              href={link}
              target="_blank"
              key={id}
              title={name}
              className="link-box">
              {name}
            </a>
          ))}
      </nav>
    </div>
  );
};
