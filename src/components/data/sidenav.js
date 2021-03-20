import SettingsOverscanIcon from "@material-ui/icons/SettingsOverscan";
import ReportProblemIcon from "@material-ui/icons/ReportProblem";
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

const data = [
  {
    topname: "Guides",
    topicon: <HomeIcon />,
    content: [
      {
        name: "Setting up environment",
        icon: <SettingsOverscanIcon />,
        url: "/guides/environment",
      },
      {
        name: "Reporting a bug",
        icon: <ReportProblemIcon />,
        url: "/guides/report-bug",
      },
      {
        name: "Installing Sakura",
        icon: <CloudDownloadIcon />,
        url: "/guides/install-sakura",
      },
    ],
  },
  {
    topname: "Mantainers",
    topicon: <HomeIcon />,

    content: [
      {
        name: "Apply for mantainership",
        icon: <GroupAddIcon />,
        url: "/mantainers/apply",
      },
      {
        name: "Support new device",
        icon: <PhoneAndroidIcon />,
        url: "/mantainers/support-us",
      },
      {
        name: "Code of Conduct",
        icon: <BookIcon />,
        url: "/mantainers/code-of-conduct",
      },
    ],
  },
  {
    topname: "Features",
    topicon: <HomeIcon />,
    content: [
      {
        name: "Animation",
        icon: <SlideshowIcon />,
        url: "/features/animation",
      },
      {
        name: "Gestures",
        icon: <GestureTwoToneIcon />,
        url: "/features/gestures",
      },
      {
        name: "Hardware Buttons",
        icon: <TouchAppIcon />,
        url: "/features/hardware-buttons",
      },
      {
        name: "Miscellaneous",
        icon: <GestureTwoToneIcon />,
        url: "/features/features/miscellaneous",
      },
      {
        name: "Navigation",
        icon: <NavigationIcon />,
        url: "/features/navigation",
      },
      {
        name: "Notification",
        icon: <NotificationsActiveIcon />,
        url: "/features/Notification",
      },
      {
        name: "Power Menu",
        icon: <PowerSettingsNewIcon />,
        url: "/features/power-menu",
      },
      {
        name: "Statusbar",
        icon: <EqualizerIcon />,
        url: "/features/statusbar",
      },
    ],
  },
];
export default data;
