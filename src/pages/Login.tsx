import { IonButtons, IonContent, IonHeader, IonLoginButton, IonPage, IonTitle, IonToolbar  } from "@ionic/react";

const Login: React.FC = () => {
    return(
        
        <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonButtons slot="start">
        <IonLoginButton></IonLoginButton>
        </IonButtons>
        <IonTitle>Login</IonTitle>
        </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
        <h1>Login</h1>
        </IonContent>
        </IonPage>
    )
}

export default Login;