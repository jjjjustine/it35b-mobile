import { IonButton, IonTitle, IonContent, IonMenuButton, IonHeader, IonPage, IonToolbar, useIonRouter  } from "@ionic/react";

const Login: React.FC = () => {
        const navigation = useIonRouter();
        const doLogin = () => {
        navigation.push('/app','forward','replace');
    }

    return (

        <IonPage>
                <IonHeader>
                        <IonToolbar>
                            <IonMenuButton slot="start" />
                            <IonTitle>Login</IonTitle>
                        </IonToolbar>
                </IonHeader>
                            <IonContent fullscreen className="ion-padding">
                        <IonButton expand="full" onClick={doLogin}>
                                    Login
                     </IonButton>
                    </IonContent>
        </IonPage>
    );
};


export default Login;