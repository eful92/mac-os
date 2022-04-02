import { FaPaw, FaVuejs } from "react-icons/fa";
import {
  GiNinjaHeroicStance,
  GiJumpingDog,
  GiEnergySword,
  GiCat,
  GiFishEscape
} from "react-icons/gi";
import { VscGithub } from "react-icons/vsc";
import { GoRepo, GoBrowser } from "react-icons/go";
import { RiGamepadLine } from "react-icons/ri";
import { HiFire } from "react-icons/hi";
import { CgFormatText } from "react-icons/cg";
import { BiCube, BiGame } from "react-icons/bi";
import { BsFillImageFill, BsGrid1X2 } from "react-icons/bs";
import { AiFillAudio } from "react-icons/ai";

import type { BearData } from "../types";

const bear: BearData[] = [
  {
    id: "profile",
    title: "Profile",
    icon: <FaPaw />,
    md: [
      {
        id: "about-me",
        title: "About Me",
        file: "markdown/about-me.md",
        icon: <GiNinjaHeroicStance />,
        excerpt: "Nothing Special..."
      },
      {
        id: "github-stats",
        title: "Github Stats",
        file: "markdown/github-stats.md",
        icon: <VscGithub />,
        excerpt: "Nothing Special..."
      },
      {
        id: "Road map",
        title: "About This Site",
        file: "markdown/about-site.md",
        icon: <GoBrowser />,
        excerpt: "Nothing Special..."
      },

  },
  {
    id: "project 2021-2022",
    title: "Projects 2021-2022",
    icon: <GoRepo />,
    md: [
      {
        id: "Magang 2021",
        title: "Magang 2021",
        file: "markdown/magang-me.md",
        icon: <HiFire />,
        excerpt: "PBB TANAH BARU...",
        link: "https://nervous-allen-8eda03.netlify.app/"
      },
      {
        id: "Web Lanjut",
        title: "Web Lanjut",
        file: "markdown/web-me.md",
        icon: <GiJumpingDog />,
        excerpt: "DATA PENUDUK DESA TELUKJAYA...",
        link: "https://nervous-allen-8eda03.netlify.app/"
      },
      {
        id: "Skripsi 2022",
        title: "Skripsi 2022",
        file: "markdown/skripsi-me.md",
        icon: <RiGamepadLine />,
        excerpt: "SPK MENENTUKAN KELAYAKAN PESTISIDA METODE TOPSIS DAN MAUT...",
        link: "https"
      },
      {
        id: "Project 2022",
        title: "Project 2022",
        file: "markdown/project-me.md",
        icon: <GiFishEscape />,
        excerpt: "Next...",
        link: "https://syflyusf.netlify.app/"
      }
    ]
  }
];

export default bear;
