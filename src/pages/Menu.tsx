import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar  } from "@ionic/react";

const Menu: React.FC = () => {
    return(
        
        <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonButtons slot="start">
            <IonMenuButton></IonMenuButton>
                </IonButtons>
            <IonTitle>Menu</IonTitle>
                </IonToolbar>
    </IonHeader>
        
        <IonContent fullscreen>
        <h1>Menu</h1>
        </IonContent>
        </IonPage>
    )
}

export default Menu;