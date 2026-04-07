import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar  } from "@ionic/react";

const Login: React.FC = () => {
    const navigation =useIonRouter();
    const doLogin = () => {
        navigation.push('/app', 'forward', 'replace');
    }
    return(
        
        <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonButtons slot="start">
        <IonMenuButton></IonMenuButton>
        </IonButtons>
        <IonTitle>Login</IonTitle>
        </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
        <IonButtons expand="full" onclick={() => doLogin()}>
            Login
        </IonButtons>
        </IonContent>
        </IonPage>
    )
}

export default Login;