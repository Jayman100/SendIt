function Button({ children, onclick }) {
  return (
    <button onClick={onclick} className="bg-button py-4 px-10 rounded-lg ">
      {children}
    </button>
  );
}

export default Button;
