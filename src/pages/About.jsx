import { Link } from 'react-router-dom';
import Button from '../components/shared/Button';

function About() {
  return (
    <div className='about'>
      <div className='logo'>
        <Link to={'/'}>Feedback UI</Link>
      </div>
      <div className='container'>
        <h2>About this project</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore
          magnam adipisci dignissimos eveniet, aut ex ut autem commodi inventore
          minus.
        </p>
        <Button>
          <Link to={'/'}>Back to Home</Link>
        </Button>
      </div>
    </div>
  );
}

export default About;
