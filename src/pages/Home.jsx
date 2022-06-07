import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaQuestion } from 'react-icons/fa';
import FeedbackForm from '../components/FeedbackForm';
import FeedbackList from '../components/FeedbackList';

function Home() {
  const [feedbacks, setFeedbacks] = useState([
    {
      id: 1,
      rating: 10,
      review: 'Awesome service',
    },
    {
      id: 2,
      rating: 8,
      review: 'Good product',
    },
  ]);

  const [feedbackToUpdate, setFeedbackToUpdate] = useState(null);
  const [isEditMode, setIsEditMode] = useState(false);

  const handleSubmit = (formData) => {
    if (isEditMode) {
      setFeedbacks(
        feedbacks.map((item) =>
          item.id === formData.id ? { ...item, ...formData } : item
        )
      );
    } else {
      setFeedbacks((prev) => [...prev, formData]);
    }

    setIsEditMode(false);
  };

  const handleEdit = (id) => {
    const feedbackToUpdate = feedbacks.find((item) => item.id === id);
    setFeedbackToUpdate(feedbackToUpdate);
    setIsEditMode(true);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure to delete this review?')) {
      const updatedFeedbacks = feedbacks.filter((item) => item.id !== id);
      setFeedbacks(updatedFeedbacks);
    }
  };

  return (
    <>
      <div className='logo'>
        <Link to={'/'}>Feedback UI</Link>
      </div>
      <div className='container'>
        <FeedbackForm
          isEditMode={isEditMode}
          feedbackToUpdate={feedbackToUpdate}
          onSubmit={handleSubmit}
        />
        <FeedbackList
          feedbacks={feedbacks}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </div>
      <Link to={'/about'} className='question-mark'>
        <FaQuestion size={30} fill={'#fff'} />
      </Link>
    </>
  );
}

export default Home;
