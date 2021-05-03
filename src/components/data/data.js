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
    url: "/wiki/",
  },
  {
    name: "Build Sakura",
    icon: <BuildSakura />,
    url: "/wiki/build-sakura",
  },
  {
    name: "Reporting a bug",
    icon: <ReportBug />,
    url: "/wiki/report-bug",
  },
  {
    name: "Installing Sakura",
    icon: <InstallSakura />,
    url: "/wiki/install-sakura",
  },

  {
    name: "Apply for maintainership",
    icon: <ApplyMaintainers />,
    url: "/wiki/apply",
  },
  {
    name: "Build Flags",
    icon: <BuildFlags />,
    url: "/wiki/build-flags",
  },
  {
    name: "Animation",
    icon: <SlideshowIcon />,
    url: "/wiki/animation",
  },
  {
    name: "Gestures",
    icon: <GestureTwoToneIcon />,
    url: "/wiki/gestures",
  },
  {
    name: "Hardware Buttons",
    icon: <TouchAppIcon />,
    url: "/wiki/hardware-buttons",
  },
  {
    name: "Miscellaneous",
    icon: <GestureTwoToneIcon />,
    url: "/wiki/miscellaneous",
  },
  {
    name: "Navigation",
    icon: <NavigationIcon />,
    url: "/wiki/navigation",
  },
  {
    name: "Notification",
    icon: <NotificationsActiveIcon />,
    url: "/wiki/notification",
  },
  {
    name: "Power Menu",
    icon: <PowerSettingsNewIcon />,
    url: "/wiki/power-menu",
  },
  {
    name: "Statusbar",
    icon: <EqualizerIcon />,
    url: "/wiki/statusbar",
  },
];
export default filedata;
