import PropTypes from 'prop-types';

function FeedbackStats({ feedback }) {
  // Calculate average rating
  let average = feedback.reduce((acc, cur) => {
    return acc + cur.rating;
  }, 0) / feedback.length;

  average = average.toFixed(1).replace(/[.,]0$/, '');

  return (
    <div className="feedback-stats">
      <h4>{feedback.length} Reviews</h4>
      <h4>Average Rating: {average}</h4>
    </div>
  )
}

FeedbackStats.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
    })
  ),
};

export default FeedbackStats;