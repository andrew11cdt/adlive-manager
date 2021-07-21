import AdvertiserEntrance from "../../resources/layout/advertiser/entrance";
import AdvertiserPageContent from "../../resources/pages-components/advertiser";
import AdvertiserStoreProvider from "../../resources/stores/advertiser-store/advertiser-store.provider";
import store from "../../resources/stores/advertiser-store/store"
import { Provider } from 'react-redux';
export default function AdvertiserPage() {
  return (
    <Provider store={store}>
      <AdvertiserStoreProvider>
        <AdvertiserEntrance>
          <AdvertiserPageContent />
        </AdvertiserEntrance>
      </AdvertiserStoreProvider>
    </Provider>
  );
}
