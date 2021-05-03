import ReportProblemIcon from "@material-ui/icons/ReportProblem";
import BuildSakuraIcon from "@material-ui/icons/Build"
import CloudDownloadIcon from "@material-ui/icons/CloudDownload";
import GroupAddIcon from "@material-ui/icons/GroupAdd";
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
    topname: "Basic Info",
    topicon: <HomeIcon />,
    content: [
      {
        name: "Building Sakura",
        icon: <BuildSakuraIcon />,
        url: "/build-sakura",
      },
      {
        name: "Installing Sakura",
        icon: <CloudDownloadIcon />,
        url: "/install-sakura",
      },
      {
        name: "Reporting a bug",
        icon: <ReportProblemIcon />,
        url: "/report-bug",
      },      
    ],
  },
  {
    topname: "Maintainers",
    topicon: <HomeIcon />,

    content: [
      {
        name: "Apply for maintainership",
        icon: <GroupAddIcon />,
        url: "/apply",
      },
      {
        name: "Build Flags",
        icon: <BookIcon />,
        url: "/build-flags",
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
    ],
  },
];
export default data;
