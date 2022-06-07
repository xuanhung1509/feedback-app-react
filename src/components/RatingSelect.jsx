function RatingSelect({ rating: selected, onSelect }) {
  const handleSelect = (e) => {
    const selectedValue = +e.currentTarget.value;
    onSelect(selectedValue);
  };

  return (
    <div className='rating-select'>
      {[...Array(10).keys()].map((i) => (
        <div key={i + 1} className='rating-group'>
          <input
            type='radio'
            name='rating'
            id={i + 1}
            value={i + 1}
            checked={selected === i + 1}
            onChange={handleSelect}
          />
          <label htmlFor={i + 1}>{i + 1}</label>
        </div>
      ))}
    </div>
  );
}

export default RatingSelect;
