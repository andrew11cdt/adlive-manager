import AdvertiserEntrance from "../../resources/layout/advertiser/entrance";
import AdvertiserPageContent from "../../resources/pages-components/advertiser";
import AdvertiserStoreProvider from "../../resources/stores/advertiser-store/advertiser-store.provider";

export default function AdvertiserPage() {
  return (
    <AdvertiserStoreProvider>
      <AdvertiserEntrance>
        <AdvertiserPageContent />
      </AdvertiserEntrance>
    </AdvertiserStoreProvider>
  );
}
