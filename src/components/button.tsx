interface ButtonData {
  text: string;
  buttonClick: Function;
}

export const Button = ({ text, buttonClick }: ButtonData) => {
  return (
    <>
      <button
        className="calc__func"
        id={text.toLowerCase()}
        type="button"
        onClick={(e) => {
          buttonClick((e.target as HTMLButtonElement).id);
        }}
      >
        {text}
      </button>
    </>
  );
};
