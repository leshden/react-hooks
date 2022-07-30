const Button = ({children, onClick, ...reset} : any) => {
  return (
    <button onClick={onClick} {...reset}>
      {children}
    </button>
  )
}

export default Button;
