import { useFeedbackContext } from '../context/FeedbackContext';

function FeedbackInfo() {
  const { feedbacks } = useFeedbackContext();

  const updateAverage = () => {
    const ratings = feedbacks.map((item) => +item.rating);
    const sum = ratings.reduce(
      (accumulator, current) => accumulator + current,
      0
    );
    let average = sum / ratings.length;
    average = average.toFixed(2);
    return average;
  };

  return (
    <div className='feedback-info'>
      <span>{feedbacks.length} Reviews</span>
      <span>Average Rating: {updateAverage()}</span>
    </div>
  );
}

export default FeedbackInfo;
