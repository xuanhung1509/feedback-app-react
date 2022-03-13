import { FaTimes, FaEdit } from 'react-icons/fa';
import { useContext } from 'react';
import Card from './shared/Card';
import PropTypes from 'prop-types';
import FeedbackContext from '../context/FeedbackContext';

function FeedbackItem({ item }) {
  const { deleteFeedback, editFeedback } = useContext(FeedbackContext);
  return (
    <Card>
      <div className='rating-display'>{item.rating}</div>
      <button className='delete-item' onClick={() => deleteFeedback(item.id)}>
        <FaTimes color='purple' />
      </button>
      <button onClick={() => editFeedback(item)} className='edit-item'>
        <FaEdit color='purple' />
      </button>
      <div className='text-display'>{item.text}</div>
    </Card>
  );
}

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default FeedbackItem;
