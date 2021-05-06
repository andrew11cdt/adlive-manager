import AdvertiserSignInPageContent from "../../resources/pages-components/advertiser/sign-in";
import AdvertiserStoreProvider from "../../resources/stores/advertiser-store/advertiser-store.provider";

export default function AdvertiserSignInPage() {
  return (
    <AdvertiserStoreProvider>
      <AdvertiserSignInPageContent />
    </AdvertiserStoreProvider>
  );
}
