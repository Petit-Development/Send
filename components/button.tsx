interface ButtonProps {
  text: string;
  onClick?: () => void;
  alt?: boolean;
}

const Button: React.FC<ButtonProps> = ({ text, onClick, alt = false }) => {
  return (
    <div
      onClick={onClick}
      className={`transition-all duration-75 bg-petit-light-purple rounded-3xl px-7 py-3 m-7 shadow-2xl ${
        alt ? 'hover:bg-petit-grey' : 'hover:bg-petit-purple'
      } hover:shadow-none select-none cursor-pointer`}
    >
      {text}
    </div>
  );
};

export default Button;
