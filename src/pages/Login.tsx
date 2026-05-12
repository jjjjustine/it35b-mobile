import { IonButton, IonTitle, IonContent, IonMenuButton, IonHeader, IonPage, IonToolbar, useIonRouter, IonIcon  } from "@ionic/react";
import { logoGoogle } from "ionicons/icons";
import { supabase } from "../lib/supabaeClient";

const Login: React.FC = () => {
  const navigation = useIonRouter();
    const doLogin = () => {
        navigation.push('/app','forward','replace');
    }
    const signInWithGoogle = async() => {
        await supabase.auth.signInWithOAuth({
            provider: 'google',
            options: {
                redirectTo: `${window.location.origin}/app`
            }
        });
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
                        <IonButton expand="full" onClick={signInWithGoogle} fill="outline">
                            <IonIcon icon={logoGoogle} />
                                    Login
                     </IonButton>
                    </IonContent>
        </IonPage>
    );
};


export default Login;