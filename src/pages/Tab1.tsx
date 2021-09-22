import { IonButton, IonContent, IonFab, IonFabButton, IonHeader, IonIcon, IonPage, IonProgressBar, IonRefresher, IonRefresherContent, IonTitle, IonToolbar, useIonActionSheet } from '@ionic/react';
import { add } from 'ionicons/icons';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';

const Tab1: React.FC = () => {
  const [present, dismiss] = useIonActionSheet()

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Action Sheet</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonRefresher slot="fixed" onIonRefresh={(ev) => setTimeout(() => {
          ev.detail.complete();
        }, 2000)}>
          <IonRefresherContent>
          </IonRefresherContent>
        </IonRefresher>
        <IonButton
          expand="block"
          onClick={() =>
            present({
              header: 'Albums',
              buttons: [
                { text: 'Delete', role: 'destructive', handler: () => alert('delete was clicked') },
                { text: 'Share' },
                { text: 'Play' },
                { text: 'Favorite' },
                { text: 'Cancel', role: 'cancel' }
              ]
            })
          }
        >
          Show ActionSheet
        </IonButton>
        <IonButton
          mode="ios"
          expand="block"
          onClick={() =>
            present({
              header: 'Albums',
              mode: "ios",
              buttons: [
                { text: 'Delete', role: 'destructive', handler: () => alert('delete was clicked') },
                { text: 'Share' },
                { text: 'Play' },
                { text: 'Favorite' },
                { text: 'Cancel', role: 'cancel' }
              ]
            })
          }
        >
          Show ActionSheet ios style
        </IonButton>
        <IonTitle>progress Bar</IonTitle>
        <br />
        <IonProgressBar color="primary" value={0.5}></IonProgressBar><br />
        <IonFab vertical="bottom" horizontal="end" slot="fixed">
          <IonFabButton>
            <IonIcon icon={add} />
          </IonFabButton>
        </IonFab>
      </IonContent>
    </IonPage >
  );
};

export default Tab1;
