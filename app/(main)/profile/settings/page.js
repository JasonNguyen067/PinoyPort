import "./settings.css";
/*so page doesn't have to be reloaded*/
import Link from "next/link";
/*icons for page*/
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ChevronRightIcon from "@mui/icons-material/ChevronRight";


export default function SettingsPage() {
  return (
    /*background*/
    <div className="settings-container">
      {/*top left arrow*/}
      <Link href="/profile" className="settings-back">
        <ArrowBackIcon sx={{ fontSize: 24 }}/>
      </Link>
      {/*elements at the bottom*/}
      <div className="settings-bottom">
        <h1 className="settings-title">Settings</h1>
      {/*menu of buttons*/}
        <div className="settings-menu">
          <SettingsItem label="Edit Profile" href="/profile/edit" />
          <SettingsItem label="Notifications" href="/profile/notifications" />
          <SettingsItem label="Privacy" href="/profile/privacy" />
          <SettingsItem label="Help" href="/profile/help" />
          <SettingsItem label="Terms" href="/profile/terms" />
          <SettingsItem label="Log Out" href="/login" />
        </div>
      </div>
    </div>
  );
}

/*makes the menu clickable and redirect you to needed page*/
function SettingsItem({ label, href }) {
  return (
    <Link href={href} className="settings-item">
      <span>{label}</span>
      <ChevronRightIcon sx={{ fontSize: 24 }} />
    </Link>
  );
}