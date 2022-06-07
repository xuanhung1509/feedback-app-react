function Card({ children, variant = 'light', maxWidth = '700px' }) {
  const styles = {
    backgroundColor: `${variant === 'light' ? '#fff' : '#333'}`,
    color: `${variant === 'light' ? '#333' : '#fff'}`,
    margin: '1rem auto',
    maxWidth,
    boxShadow: '2px 4px 6px rgba(0,0,0,0.2)',
  };

  return (
    <div className='card' style={styles}>
      {children}
    </div>
  );
}

export default Card;
