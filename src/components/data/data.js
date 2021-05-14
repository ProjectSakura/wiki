import SlideshowIcon from "@material-ui/icons/Slideshow";
import GestureTwoToneIcon from "@material-ui/icons/GestureTwoTone";
import TouchAppIcon from "@material-ui/icons/TouchApp";
import NavigationIcon from "@material-ui/icons/Navigation";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
import EqualizerIcon from "@material-ui/icons/Equalizer";
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
    url: "/",
  },
  {
    name: "Build Sakura",
    icon: <BuildSakura />,
    url: "/build-sakura",
  },
  {
    name: "Reporting a bug",
    icon: <ReportBug />,
    url: "/report-bug",
  },
  {
    name: "Installing Sakura",
    icon: <InstallSakura />,
    url: "/install-sakura",
  },

  {
    name: "Apply for maintainership",
    icon: <ApplyMaintainers />,
    url: "/apply",
  },
  {
    name: "Build Flags",
    icon: <BuildFlags />,
    url: "/build-flags",
  },
  {
    name: "Animation",
    icon: <SlideshowIcon />,
    url: "/animation",
  },
  {
    name: "Gestures",
    icon: <GestureTwoToneIcon />,
    url: "/gestures",
  },
  {
    name: "Hardware Buttons",
    icon: <TouchAppIcon />,
    url: "/hardware-buttons",
  },
  {
    name: "Miscellaneous",
    icon: <GestureTwoToneIcon />,
    url: "/miscellaneous",
  },
  {
    name: "Navigation",
    icon: <NavigationIcon />,
    url: "/navigation",
  },
  {
    name: "Notification",
    icon: <NotificationsActiveIcon />,
    url: "/notification",
  },
  {
    name: "Power Menu",
    icon: <PowerSettingsNewIcon />,
    url: "/power-menu",
  },
  {
    name: "Statusbar",
    icon: <EqualizerIcon />,
    url: "/statusbar",
  },
];
export default filedata;
