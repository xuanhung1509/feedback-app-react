import { useFeedbackContext } from '../context/FeedbackContext';
import { FaEdit, FaTrash } from 'react-icons/fa';
import Card from './shared/Card';

function FeedbackItem({ feedback }) {
  const { handleEdit, handleDelete } = useFeedbackContext();
  const { rating, review } = feedback;

  return (
    <Card>
      <div className='feedback-item'>
        <div className='icons'>
          <FaEdit fill='#2a9d8f' onClick={() => handleEdit(feedback.id)} />
          <FaTrash fill='#264653' onClick={() => handleDelete(feedback.id)} />
        </div>
        <div className='rating'>{rating}</div>
        <div className='review'>{review}</div>
      </div>
    </Card>
  );
}

export default FeedbackItem;
