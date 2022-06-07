import { useFeedbackContext } from '../context/FeedbackContext';
import FeedbackItem from './FeedbackItem';

function FeedbackList() {
  const { loading, feedbacks } = useFeedbackContext();

  if (loading) return <h3>Loading...</h3>;

  return (
    <div className='feedback-list'>
      {feedbacks.map((item) => (
        <FeedbackItem key={item.id} feedback={item} />
      ))}
    </div>
  );
}

export default FeedbackList;
