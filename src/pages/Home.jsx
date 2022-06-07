import { Link } from 'react-router-dom';
import { FaQuestion } from 'react-icons/fa';
import FeedbackForm from '../components/FeedbackForm';
import FeedbackInfo from '../components/FeedbackInfo';
import FeedbackList from '../components/FeedbackList';

function Home() {
  return (
    <>
      <div className='logo'>
        <Link to={'/'}>Feedback UI</Link>
      </div>
      <div className='container'>
        <FeedbackForm />
        <FeedbackInfo />
        <FeedbackList />
      </div>
      <Link to={'/about'} className='question-mark'>
        <FaQuestion size={30} fill={'#fff'} />
      </Link>
    </>
  );
}

export default Home;
