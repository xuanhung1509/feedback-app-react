import { FaTimes } from 'react-icons/fa';
import Card from './shared/Card';
import PropTypes from 'prop-types';

function FeedbackItem({ item, handleDelete }) {
  return (
    <Card>
      <p>{item.rating}</p>
      <button className='delete-item' onClick={() => handleDelete(item.id)}>
        <FaTimes color='purple'/>
      </button>
      <p>{item.text}</p>
    </Card>
  )
}

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default FeedbackItem;