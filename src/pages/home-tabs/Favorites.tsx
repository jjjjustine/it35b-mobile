import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar  } from "@ionic/react";

const Favorites: React.FC = () => {
    return(
        
        <IonPage>
    <IonHeader>
            <IonToolbar>
                <IonButtons slot="start">
                    <IonMenuButton></IonMenuButton>
                                <IonTitle>Template</IonTitle>
                                </IonButtons>
                        </IonToolbar>
                    </IonHeader>
        
        <IonContent fullscreen>
                <h1>Favorites</h1>
                </IonContent>
        </IonPage>
    )
}

export default Favorites;
