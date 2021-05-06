import { ADSLIVE_ICON_VARIANT } from "../../components/icon";
import AdvertiserAlert from "../../pages-components/advertiser/alert";
import AdvertiserCampaign from "../../pages-components/advertiser/campaign";
import AdvertiserProfile from "../../pages-components/advertiser/profile";
import AdvertiserScreen from "../../pages-components/advertiser/screen";
import AdvertiserVideo from "../../pages-components/advertiser/video";

export const advertiserHeaderItems = [
  {
    id: "adsl-l-hi-1",
    title: "Screen",
    iconVariant: ADSLIVE_ICON_VARIANT.SCREEN,
    contentComponent: AdvertiserScreen,
  },
  {
    id: "adsl-l-hi-2",
    title: "Video",
    iconVariant: ADSLIVE_ICON_VARIANT.VIDEO,
    contentComponent: AdvertiserVideo,
  },
  {
    id: "adsl-l-hi-3",
    title: "Campaign",
    iconVariant: ADSLIVE_ICON_VARIANT.SEND,
    contentComponent: AdvertiserCampaign,
  },
  {
    id: "adsl-l-hi-4",
    title: "Alert",
    iconVariant: ADSLIVE_ICON_VARIANT.ALERT,
    contentComponent: AdvertiserAlert,
  },
  {
    id: "adsl-l-hi-5",
    title: "Profile",
    iconVariant: ADSLIVE_ICON_VARIANT.A_C,
    contentComponent: AdvertiserProfile,
  },
];
