import './ExploreContainer.css';
import PasswordInputExample from '../pages/PasswordInputExample';

interface ContainerProps { }

const ExploreContainer: React.FC<ContainerProps> = () => {
  return (
    <div id="container">
      <strong>Ga Practice pang tao ha!</strong>
      <PasswordInputExample />
    </div>
  );
};

export default ExploreContainer;
