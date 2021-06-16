import ReportProblemIcon from "@material-ui/icons/ReportProblem";
import BuildSakuraIcon from "@material-ui/icons/Build";
import CloudDownloadIcon from "@material-ui/icons/CloudDownload";
import GroupAddIcon from "@material-ui/icons/GroupAdd";
import BookIcon from "@material-ui/icons/Book";
import SlideshowIcon from "@material-ui/icons/Slideshow";
import GestureTwoToneIcon from "@material-ui/icons/GestureTwoTone";
import SettingsIcon from "@material-ui/icons/Settings";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import ArtTrackIcon from "@material-ui/icons/ArtTrack";
import LockIcon from "@material-ui/icons/Lock";
import HomeIcon from "@material-ui/icons/Home";

const data = [
  {
    topname: "Basic Info",
    topicon: <HomeIcon />,
    content: [
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
        name: "Building Sakura",
        icon: <BuildSakuraIcon />,
        url: "/build-sakura",
      },
      {
        name: "Build Flags",
        icon: <BookIcon />,
        url: "/build-flags",
      },
      {
        name: "Apply for maintainership",
        icon: <GroupAddIcon />,
        url: "/apply",
      },
    ],
  },
  {
    topname: "Features",
    topicon: <HomeIcon />,
    content: [
      {
        name: "Interface",
        icon: <SlideshowIcon />,
        url: "/interface",
      },
      {
        name: "Quick Settings",
        icon: <SettingsIcon />,
        url: "/quicksetting",
      },
      {
        name: "Lock Screen",
        icon: <LockIcon />,
        url: "/lockscreen",
      },
      {
        name: "Gesture",
        icon: <GestureTwoToneIcon />,
        url: "/gesture",
      },
      {
        name: "Miscellaneous",
        icon: <ArtTrackIcon />,
        url: "/miscellaneous",
      },
      {
        name: "Notification",
        icon: <NotificationsActiveIcon />,
        url: "/notification",
      },
    ],
  },
];
export default data;
