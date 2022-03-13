import { useState, useContext, useEffect } from 'react';
import RatingSelect from './RatingSelect';
import Card from './shared/Card';
import Button from './shared/Button';
import FeedbackContext from '../context/FeedbackContext';

function FeedbackForm() {
  const [text, setText] = useState('');
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState('');
  const [rating, setRating] = useState(10);

  // Get addFeedback() and feedbackEdit from the Context
  const { addFeedback, feedbackEdit, updateFeedback } =
    useContext(FeedbackContext);

  // Display feedbackEdit onto the Form
  useEffect(() => {
    if (feedbackEdit.edit === true) {
      setText(feedbackEdit.item.text);
      setRating(feedbackEdit.item.rating);
      setBtnDisabled(false);
    }
  }, [feedbackEdit]);

  const handleTextChange = (e) => {
    // The weird thing is that when we clear the input, the button still shows clickable, and when we start typing the 1st character, the message hasn't shown until we hit 2 characters.
    // It seems that setText does not change the "text" right away so the {if} statement evaluate the previous value, not the current one.
    // This is one way to fix it.

    const currentValue = e.target.value;

    setText(currentValue);

    if (currentValue === '') {
      setBtnDisabled(true);
      setMessage(null);
    } else if (currentValue !== '' && currentValue.trim().length < 10) {
      setBtnDisabled(true);
      setMessage('Text must be at least 10 characters.');
    } else {
      setBtnDisabled(false);
      setMessage(null);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length >= 10) {
      const newFeedback = {
        text,
        rating,
      };

      if (feedbackEdit.edit === true) {
        updateFeedback(feedbackEdit.item.id, newFeedback);
      } else {
        addFeedback(newFeedback);
      }

      // Clear form
      setText('');
    }
  };

  return (
    <Card>
      <form className='feedback-form' onSubmit={handleSubmit}>
        <h2>How would you rate our services?</h2>
        <RatingSelect handleRatingSelect={(rating) => setRating(rating)} />
        <div className='input-group'>
          <input
            type='text'
            placeholder='Write a review...'
            onInput={handleTextChange}
            value={text}
          />
          <Button type='submit' version='secondary' isDisabled={btnDisabled}>
            Send
          </Button>
        </div>
        {message && <div className='message'>{message}</div>}
      </form>
    </Card>
  );
}

export default FeedbackForm;
