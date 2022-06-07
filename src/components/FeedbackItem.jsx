import Card from './shared/Card';
import { FaEdit, FaTrash } from 'react-icons/fa';

function FeedbackItem({ feedback, onEdit, onDelete }) {
  const { rating, review } = feedback;

  const handleEdit = () => {
    onEdit(feedback.id);
  };

  const handleDelete = () => {
    onDelete(feedback.id);
  };

  return (
    <Card>
      <div className='feedback-item'>
        <div className='icons'>
          <FaEdit fill='#2a9d8f' onClick={handleEdit} />
          <FaTrash fill='#264653' onClick={handleDelete} />
        </div>
        <div className='rating'>{rating}</div>
        <div className='review'>{review}</div>
      </div>
    </Card>
  );
}

export default FeedbackItem;
