import { ChatTypes } from "../types";
import "../styles/Chat.css"

export const Chat = ({
  children,
  theme = "dark",
  width = "100%",
  height = "auto",
}: ChatTypes) => {
  return (
    <section
      className={`section-chat ${theme === "light" ? "chat-light" : ""}`}
      style={{ width: width, height: height }}>
      {children}
    </section>
  );
};
