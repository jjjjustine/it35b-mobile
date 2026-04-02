import './ExploreContainer.css';
import { IonCheckbox } from '@ionic/react';
import PasswordInputExample from '../pages/PasswordInputExample';

interface ContainerProps { }

const ExploreContainer: React.FC<ContainerProps> = () => {
  return (
    <div id="container">
      <strong>Ga Practice pang tao ha!</strong>
      <p>HEHEHE</p>
      <PasswordInputExample />
      <IonCheckbox>I agree to the terms and conditions</IonCheckbox>
    </div>
  );
};

export default ExploreContainer;
