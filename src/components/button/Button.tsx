const Button = ({children, onClick} : any) => {
  return (
    <button onClick={onClick}>
      {children}
    </button>
  )
}

export default Button;
