import { createContext, useState, useEffect } from 'react';

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  // Loading State
  const [isLoading, setIsLoading] = useState(true);

  // Construct feedback data
  const [feedback, setFeedback] = useState([]);

  // Fetch feedback
  const fetchFeedback = async () => {
    const response = await fetch('/feedback?_sort=id&_order=desc');
    const data = await response.json();

    setFeedback(data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchFeedback();
  }, []); // only fetch once after component mounted

  // Construct initial feedbackEdit
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  // Add feedback
  const addFeedback = async (newFeedback) => {
    const response = await fetch('/feedback', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newFeedback),
    });

    const data = await response.json();

    setFeedback([data, ...feedback]);
  };

  // Delete feedback
  const deleteFeedback = async (id) => {
    if (window.confirm('Are you sure?')) {
      await fetch(`/feedback/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  // Set feedback to be updated
  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    });
  };

  // Update feedback
  const updateFeedback = async (id, updateItem) => {
    const response = await fetch(`/feedback/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updateItem),
    });

    const data = await response.json();

    setFeedback(feedback.map((item) => (item.id === id ? data : item)));

    // Reset edit state to false, so we can add new feedbacks after update
    setFeedbackEdit({
      item: {},
      edit: false,
    });
  };

  return (
    <FeedbackContext.Provider
      value={{
        isLoading,
        feedback,
        feedbackEdit,
        addFeedback,
        deleteFeedback,
        editFeedback,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
