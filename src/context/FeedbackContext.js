import { createContext, useContext, useState, useEffect } from 'react';

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [feedbacks, setFeedbacks] = useState([]);
  const [feedbackToUpdate, setFeedbackToUpdate] = useState(null);
  const [isEditMode, setIsEditMode] = useState(false);

  useEffect(() => {
    const getFeedbacks = async () => {
      const response = await fetch('/feedbacks');
      const data = await response.json();
      setFeedbacks(data);
      setLoading(false);
    };

    getFeedbacks();
  }, []);

  const handleEdit = (id) => {
    const feedbackToUpdate = feedbacks.find((item) => item.id === id);
    setFeedbackToUpdate(feedbackToUpdate);
    setIsEditMode(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure to delete this review?')) {
      await fetch(`/feedbacks/${id}`, {
        method: 'DELETE',
      });

      const updatedFeedbacks = feedbacks.filter((item) => item.id !== id);
      setFeedbacks(updatedFeedbacks);
    }
  };

  const handleSubmit = async (formData) => {
    if (isEditMode) {
      const response = await fetch(`/feedbacks/${formData.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();

      setFeedbacks(
        feedbacks.map((item) => (item.id === formData.id ? data : item))
      );
    } else {
      const response = await fetch('/feedbacks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();

      setFeedbacks((prev) => [...prev, data]);
    }

    setIsEditMode(false);
  };

  return (
    <FeedbackContext.Provider
      value={{
        loading,
        feedbacks,
        handleEdit,
        feedbackToUpdate,
        handleDelete,
        isEditMode,
        setIsEditMode,
        handleSubmit,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export const useFeedbackContext = () => useContext(FeedbackContext);
