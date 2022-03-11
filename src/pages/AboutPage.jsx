import Card from '../components/shared/Card';
import { Link } from 'react-router-dom';

function AboutPage() {
  return (
    <Card>
      <h1>About This Project</h1>
      <p>
        This is a Feedback App to leave comments for a product or a service.
      </p>
      <p>Version: 1.0.0</p>

      <p>
        <Link to='/'>Back to home</Link>
      </p>
    </Card>
  );
}

export default AboutPage;
