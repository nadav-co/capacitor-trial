import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab3.css';

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          {/* <IonTitle>thats an iion title</IonTitle> */}
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <h1>
          tab content is html tags
        </h1>
        <main>
          <div className="center">text here shold be centered</div>
          <button>this is a button</button>
        </main>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
