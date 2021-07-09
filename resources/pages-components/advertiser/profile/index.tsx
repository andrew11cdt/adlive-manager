import { useState } from "react";
import ADSLIVEButton, { AdButton } from "../../../components/button";
import AdCard, { CardSelect } from "../../../components/card";
import AdvertiserStoreActions from "../../../stores/advertiser-store/advertiser-store.actions";
import useAdvertiserStore from "../../../stores/advertiser-store/advertiser-store.hook";
import SubLayout from "../../sub-layout";
import styles from "./styles.module.scss";
import moment from "moment";
import { MutedText } from "../../../components/typography";
import { AdIcon } from "../../../components/icon";
import Divider from "../../../components/divider";

interface User {
  createdAt: string;
  email: string;
  id: number;
  name: string;
  recId: string;
  status: string;
}
export enum SelectOptions {
  manageLocations = "Manage Locations",
  setupDevice = "Setup device",
  changePassword = "Change password",
  shareScreen = "Share screen",
}
export default function AdvertiserProfile() {
  const { auth } = useAdvertiserStore();
  const [user, setUser] = useState<User>(auth?.user);
  const menuButtons = [
    SelectOptions.manageLocations,
    SelectOptions.setupDevice,
    SelectOptions.changePassword,
    SelectOptions.shareScreen,
  ];
  return (
    <>
      <SubLayout
        header={<span>Profile</span>}
        content={
          <div className={styles.content}>
            {user && (
              <AdCard
                body={
                  <div className={styles.profileCard}>
                    <div>{user.email}</div>
                    {user.createdAt && (
                      <div>
                        Tạo ngày{" "}
                        {moment(user.createdAt).format("d/MMM/yy HH:MM")}
                      </div>
                    )}
                    <MutedText>{user.recId}</MutedText>
                  </div>
                }
              />
            )}
            <div className={styles.reportCard}>
              <div>All campaign reports</div>
              <AdIcon name="Download" />
            </div>
            <div className={styles.menuCard}>
              {menuButtons.map((opt, i) => (
                <div>
                  <div style={{ padding: "0px 12px" }}>
                    <MutedText>{opt}</MutedText>
                  </div>
                  {i !== menuButtons.length - 1 && <Divider />}
                </div>
              ))}
              <span className={styles.logOutBtnWrap}>
                <AdButton
                  title="Log out"
                  icon={<AdIcon name="attention-highlight" mr={6} />}
                  onClick={() => {
                    AdvertiserStoreActions.signOut();
                  }}
                />
              </span>
            </div>
          </div>
        }
      ></SubLayout>
    </>
  );
}
