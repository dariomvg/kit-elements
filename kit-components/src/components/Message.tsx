import { MessageTypes } from "../types";
import "../styles/Message.css";

export const Message = ({
  content,
  username,
  theme = "dark",
}: MessageTypes) => {
  return (
    <div className={`message ${theme === "light" ? "message-light" : ""}`}>
      {username && <strong className="username">{username}</strong>}
      <p
        className={`content-message ${
          content.length > 200 ? "max-message" : ""
        }`}>
        {content}
      </p>
    </div>
  );
};
