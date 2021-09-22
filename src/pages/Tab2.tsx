import { IonAvatar, IonChip, IonContent, IonHeader, IonLabel, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Tab2.css';

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 2</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div>that a div</div>
          <IonTitle>chip with avatar</IonTitle>
        <IonChip color="secondary">
          <IonAvatar>
            <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
          </IonAvatar>
          <IonLabel>Chip Avatar</IonLabel>
        </IonChip>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;