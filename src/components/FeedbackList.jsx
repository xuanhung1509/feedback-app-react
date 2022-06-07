import FeedbackItem from './FeedbackItem';

function FeedbackList({ feedbacks, onEdit, onDelete }) {
  return (
    <div className='feedback-list'>
      {feedbacks.map((item) => (
        <FeedbackItem
          key={item.id}
          feedback={item}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

export default FeedbackList;
