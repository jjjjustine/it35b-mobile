import React, { useState } from 'react';
import { IonInput, IonItem, IonLabel, IonInputPasswordToggle } from '@ionic/react';

const PasswordInputExample: React.FC = () => {
  const [password, setPassword] = useState('NeverGonnaGiveYouUp');

  return (
    <IonItem>
      <IonLabel position="stacked">Password</IonLabel>
      <IonInput
        type="password"
        value={password}
        onIonChange={e => setPassword(e.detail.value!)}
      >
        <IonInputPasswordToggle slot="end" />
      </IonInput>
    </IonItem>
  );
};

export default PasswordInputExample;