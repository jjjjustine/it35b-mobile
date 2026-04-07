import { IonButtons, IonContent, IonHeader, IonIcon, IonItem, IonMenu, IonMenuButton, IonMenuToggle, IonPage, IonRouterOutlet, IonSplitPane, IonTitle, IonToolbar  } from "@ionic/react";
import { Redirect, Route  } from "react-router";
import Home from "./Home";
import About from "./About";
import { homeOutline, informationCircleOutline, logOutOutline } from "ionicons/icons"
const Menu: React.FC = () => {
    const path = {
        {name:'Home', url:'./app/home',icon;homeOutline},
        {name: 'About',url:'./app/about'icon;informationCircleOutline}

    }
    return(
        
        <IonPage>
            <IonSplitPane contentId="main">
        <IonMenu contentId="main">

    <IonHeader>
      <IonToolbar>
        <IonButtons slot="start">
            <IonMenuButton></IonMenuButton>
                </IonButtons>
            <IonTitle>Menu</IonTitle>
                </IonToolbar>
    </IonHeader>
        </IonMenu>
        <IonRouterOutlet id="main">
            <Route exact path="/app/home" component={Home}/>
            <Route exact path="/app">
            <Redirect to="/app/home">
            </Redirect>
            </Route>
        </IonRouterOutlet>
        <IonContent>
            {path.map((item, index) =>(
                <IonMenuToggle key={index}>
                    <IonItem routerLink={item.url} routerDirection="forward">
                        <IonIcon icon={item.icon} slot="start"></IonIcon>
                        {item.name}
                    </IonItem>
                </IonMenuToggle>
            ))}
        </IonContent>
        </IonSplitPane>
        </IonPage>
    )
}

export default Menu;