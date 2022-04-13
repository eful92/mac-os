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
        id: "JOKI SKRIPSI",
        title: "JOKI SKRIPSI",
        file: "markdown/github-stats.md",
        icon: <VscGithub />,
        excerpt: "JOKI SKRIPSI ALL JURUSAN"
link: "https://api.whatsapp.com/send?phone=6281290836967"
},
{
        id: "Road-Map",
        title: "Road-Map",
        file: "markdown/about-site.md",
        icon: <GoBrowser />,
        excerpt: "Something about this personal portfolio site..."
      }
]
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
        id: "DSS WASPAS NATIVE OOP",
        title: "DSS WP PENILAIAN SISWA BERPRESTASI",
        file: "markdown/web-me.md",
        icon: <GiJumpingDog />,
        excerpt: "Skripsi 2022..",
        link: "http://spksiswaberprestasi.rf.gd/"
      },
      {
        id: "DSS MAUT TOPSIS OOP",
        title: "DSS MAUT TOPSIS OOP",
        file: "markdown/skripsi-me.md",
        icon: <RiGamepadLine />,
        excerpt: "SPK TOPSIS DAN MAUT...",
        link: "https"
      },
{
        id: "DSS SMART OOP",
        title: "DSS SMART OOP",
        file: "markdown/kuliah-me.md",
        icon: <BiCube />,
        excerpt: "next...",
        link: ""
      },
      {
        id: "DSS SAW OOP",
        title: "DSS SAW OOP",
        file: "markdown/galeri-me.md",
        icon: <GiCat />,
        excerpt: "..",
        link: ""
      },
      {
        id: "File DSS 2022",
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
