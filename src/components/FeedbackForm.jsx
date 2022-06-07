import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useFeedbackContext } from '../context/FeedbackContext';
import Card from './shared/Card';
import Button from './shared/Button';
import RatingSelect from './RatingSelect';

function FeedbackForm() {
  const { isEditMode, setIsEditMode, feedbackToUpdate, handleSubmit } =
    useFeedbackContext();
  const [rating, setRating] = useState(10);
  const [review, setReview] = useState('');
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [showError, setShowError] = useState(false);

  const onSelect = (selected) => {
    setRating(selected);
  };

  const onTextChange = (e) => {
    setReview(e.target.value);

    if (e.target.value.length >= 10) {
      setBtnDisabled(false);
      setShowError(false);
    } else {
      setBtnDisabled(true);
      setShowError(true);
    }
  };

  const cancelEdit = () => {
    setIsEditMode(false);
    setRating(10);
    setReview('');
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (review.trim().length < 10) {
      setShowError(true);
    } else {
      handleSubmit({
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
    <form className='feedback-form' onSubmit={onSubmit}>
      <Card>
        <h1>How would you rate your services with us?</h1>
        <RatingSelect rating={rating} handleSelect={onSelect} />
        <div className='input-group'>
          <input
            type='text'
            placeholder='Write a review'
            value={review}
            onChange={onTextChange}
          />
          {isEditMode && (
            <div onClick={cancelEdit}>
              <Button type='button' variant='secondary'>
                Cancel
              </Button>
            </div>
          )}
          <Button type='submit' variant='primary' disabled={btnDisabled}>
            {isEditMode ? 'Update' : 'Send'}
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
