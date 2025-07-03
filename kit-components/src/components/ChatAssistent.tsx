import { OptionChatAssistent, PropsChatAssistent } from "../types";
import "../styles/chat-assistent.css";
import { useState } from "react";

export const ChatAssistent = ({
  options,
  messageMain,
  theme,
  width,
  height,
}: PropsChatAssistent) => {
  const [optionSelected, setOptionSelected] =
    useState<OptionChatAssistent | null>(null);

  const selectOption = (option: OptionChatAssistent) => {
    setOptionSelected(option);
  };

  const resetOptions = () => {
    setOptionSelected(null);
  };

  return (
    <section
      className={`section-chat-assistent ${
        theme === "dark" ? "chat-assist-dark" : ""
      }`}
      style={{ width, height }}>
      <div className="container-chat-assistent">
        {messageMain && (
          <p className="message-main-chat-assist">{messageMain}</p>
        )}
        {!optionSelected && (
          <ul className="list-chat-assist">
            {options.map((option) => (
              <li
                className="item-chat-assist"
                key={option.id}
                onClick={() => selectOption(option)}>
                {option.option}
              </li>
            ))}
          </ul>
        )}
      </div>
      {optionSelected && (
        <>
          <div className="container-selected-option">
            <h3 className="option-chat-assist">{optionSelected.option}</h3>
            <p className="content-chat-assist">{optionSelected.content}</p>
            <a href={optionSelected.path} className="path-chat-assist">
              Más información acá
            </a>
          </div>
          <div className="box-question-chat">
            <button className="button-question" onClick={resetOptions}>
              Volver al inicio
            </button>
          </div>
        </>
      )}
    </section>
  );
};
