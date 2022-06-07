function Button({ children, type = 'button', disabled }) {
  return (
    <button type={type} disabled={disabled} className='btn'>
      {children}
    </button>
  );
}

export default Button;
