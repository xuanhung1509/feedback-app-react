import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Card from './shared/Card';
import Button from './shared/Button';
import RatingSelect from './RatingSelect';

function FeedbackForm({ isEditMode, feedbackToUpdate, onSubmit }) {
  const [rating, setRating] = useState(10);
  const [review, setReview] = useState('');
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [showError, setShowError] = useState(false);

  const handleSelect = (selected) => {
    setRating(selected);
  };

  const handleTextChange = (e) => {
    setReview(e.target.value);

    if (e.target.value.length >= 10) {
      setBtnDisabled(false);
      setShowError(false);
    } else {
      setBtnDisabled(true);
      setShowError(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (review.trim().length < 10) {
      setShowError(true);
    } else {
      onSubmit({
        id: isEditMode ? feedbackToUpdate.id : uuidv4(),
        rating,
        review,
      });
    }

    // Reset form
    setRating(10);
    setReview('');
  };

  useEffect(() => {
    if (feedbackToUpdate) {
      setRating(feedbackToUpdate?.rating);
      setReview(feedbackToUpdate?.review);
    }
  }, [feedbackToUpdate]);

  return (
    <form className='feedback-form' onSubmit={handleSubmit}>
      <Card>
        <h1>How would you rate your services with us?</h1>
        <RatingSelect rating={rating} onSelect={handleSelect} />
        <div className='input-group'>
          <input
            type='text'
            placeholder='Write a review'
            value={review}
            onChange={handleTextChange}
          />
          <Button type='submit' disabled={btnDisabled}>
            Send
          </Button>
        </div>
        {showError && (
          <small className='error'>
            Review must be at least 10 characters.
          </small>
        )}
      </Card>
    </form>
  );
}

export default FeedbackForm;

// re-styling
// move things to context
