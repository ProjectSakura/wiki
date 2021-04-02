import CloudDownloadIcon from "@material-ui/icons/CloudDownload";
import GroupAddIcon from "@material-ui/icons/GroupAdd";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
import BookIcon from "@material-ui/icons/Book";
import SlideshowIcon from "@material-ui/icons/Slideshow";
import GestureTwoToneIcon from "@material-ui/icons/GestureTwoTone";
import TouchAppIcon from "@material-ui/icons/TouchApp";
import NavigationIcon from "@material-ui/icons/Navigation";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
import EqualizerIcon from "@material-ui/icons/Equalizer";
import HomeIcon from "@material-ui/icons/Home";
import SettingEnv from "../Guides/SettingEnv/SettingEnv";
import ReportBug from "../Guides/ReportBug/ReportBug";
import BuildSakura from "../Guides/BuildSakura/BuildSakura";
import InstallSakura from "../Guides/InstallSakura/InstallSakura";
import ApplyMaintainers from "../Guides/ApplyMaintainers/ApplyMaintainers";
import BuildFlags from "../Guides/BuildFlags/BuildFlags";

const filedata = [
  {
    name: "Setting up environment",
    icon: <SettingEnv />,
    url: "/wiki-redesign/",
  },
  {
    name: "Build Sakura",
    icon: <BuildSakura />,
    url: "/wiki-redesign/build-sakura",
  },
  {
    name: "Reporting a bug",
    icon: <ReportBug />,
    url: "/wiki-redesign/report-bug",
  },
  {
    name: "Installing Sakura",
    icon: <InstallSakura />,
    url: "/wiki-redesign/install-sakura",
  },

  {
    name: "Apply for maintainership",
    icon: <ApplyMaintainers />,
    url: "/wiki-redesign/apply",
  },
  {
    name: "Build Flags",
    icon: <BuildFlags />,
    url: "/wiki-redesign/build-flags",
  },
  {
    name: "Animation",
    icon: <SlideshowIcon />,
    url: "/wiki-redesign/animation",
  },
  {
    name: "Gestures",
    icon: <GestureTwoToneIcon />,
    url: "/wiki-redesign/gestures",
  },
  {
    name: "Hardware Buttons",
    icon: <TouchAppIcon />,
    url: "/wiki-redesign/hardware-buttons",
  },
  {
    name: "Miscellaneous",
    icon: <GestureTwoToneIcon />,
    url: "/wiki-redesign/miscellaneous",
  },
  {
    name: "Navigation",
    icon: <NavigationIcon />,
    url: "/wiki-redesign/navigation",
  },
  {
    name: "Notification",
    icon: <NotificationsActiveIcon />,
    url: "/wiki-redesign/notification",
  },
  {
    name: "Power Menu",
    icon: <PowerSettingsNewIcon />,
    url: "/wiki-redesign/power-menu",
  },
  {
    name: "Statusbar",
    icon: <EqualizerIcon />,
    url: "/wiki-redesign/statusbar",
  },
];
export default filedata;
