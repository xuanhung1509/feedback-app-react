function Button({ children, type = 'button', variant = 'primary', disabled }) {
  const styles = {
    backgroundColor: `${
      disabled ? '#f4f4f4' : `${variant === 'primary' ? '#264653' : '#f4a261'}`
    } `,
    color: `${disabled ? '#8c8c8c' : '#fff'}`,
  };

  return (
    <button type={type} disabled={disabled} className='btn' style={styles}>
      {children}
    </button>
  );
}

export default Button;
