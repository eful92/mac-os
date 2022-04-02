import FaceTime from "../components/apps/FaceTime";
import Terminal from "../components/apps/Terminal";
import Safari from "../components/apps/Safari";
import Bear from "../components/apps/Bear";
import VSCode from "../components/apps/VSCode";
import displaySpotify from "../components/apps/spotify";

import type { AppsData } from "../types";

const apps: AppsData[] = [
  {
    id: "launchpad",
    title: "Launchpad",
    desktop: false,
    img: "img/icons/launchpad.png"
  },
  {
    id: "bear",
    title: "Bear",
    desktop: true,
    show: true,
    width: 860,
    height: 500,
    img: "img/icons/bear.png",
    content: <Bear />
  },
  {
    id: "safari",
    title: "Safari",
    desktop: true,
    show: false,
    width: 1024,
    minWidth: 375,
    minHeight: 200,
    img: "img/icons/safari.png",
    content: <Safari />
  },
  {
    id: "vscode",
    title: "VSCode",
    desktop: true,
    show: false,
    img: "img/icons/vscode.png",
    content: <VSCode />
  },
  {
    id: "facetime",
    title: "FaceTime",
    desktop: true,
    show: false,
    img: "img/icons/facetime.png",
    height: 530,
    content: <FaceTime />
  },
  {
    id: "terminal",
    title: "Terminal",
    desktop: true,
    show: false,
    img: "img/icons/terminal.png",
    content: <Terminal />
  },
  {
    id: "email",
    title: "Mail",
    desktop: false,
    img: "img/icons/mail.png",
    link: "https://gamail.com/syaifulyusuf612@gmail.com"
  },

    {
        id: "spotify",
        title: "Spotify",
        img: "/img/icons/spotify.png",
        disabled: false,
        favourite: true,
        desktop_shortcut: false,
        screen: displaySpotify, // India Top 50 Playlist 😅
    },
  {
    id: "github",
    title: "Github",
    desktop: false,
    img: "img/icons/github.png",
    link: "https://github.com"
  }
];

export default apps;
