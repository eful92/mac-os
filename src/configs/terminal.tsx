import type { TerminalData } from "../types";

const terminal: TerminalData[] = [
  {
    id: "about",
    title: "about",
    type: "folder",
    children: [
      {
        id: "about-bio",
        title: "bio.txt",
        type: "file",
        content: (
          <div className="py-1">
            <div>
              Hi! This is syaiful yusuf.
            </div>
            <div className="mt-1">
              Before that, I got my bachelor's degree in Software Engineering at
              Ambyar University.
            </div>
          </div>
        )
      },
      {
        id: "about-interests",
        title: "interests.txt",
        type: "file",
        content:
          "Machine Learning / Deep Learning / Continual Learning / Meta-Learning / Vision-Language Learning"
      },
      {
        id: "about-who-cares",
        title: "who-cares.txt",
        type: "file",
        content:
          "I'm open to summer research opportunities for summer 2022 lol."
      },
      {
        id: "about-contact",
        title: "contact.txt",
        type: "file",
        content: (
          <ul className="list-disc ml-6">
            <li>
              Email:{" "}
              <a
                className="text-blue-300"
                href="mailto:syaifulyusuf612@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                syaifulyusuf612@gmail.com
              </a>{" "}
              /{" "}
              <a
                className="text-blue-300"
                href="mailto:syaifulyusuf612@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                syaifulyusuf612@gmail.com
              </a>
            </li>
            <li>
              Github:{" "}
              <a
                className="text-blue-300"
                href="https://github.com/eful92"
                target="_blank"
                rel="noreferrer"
              >
                https://github.com/eful92
              </a>
            </li>
            <li>
              Linkedin:{" "}
              <a
                className="text-blue-300"
                href="https://www.linkedin.com"
                target="_blank"
                rel="noreferrer"
              >
                https://www.linkedin.com
              </a>
            </li>
            <li>
              Blog:{" "}
              <a
                className="text-blue-300"
                href="h"
                target="_blank"
                rel="noreferrer"
              >
                https:
              </a>
            </li>
            <li>
              知乎:{" "}
              <a
                className="text-blue-300"
                href="https://www"
                target="_blank"
                rel="noreferrer"
              >
                https://www.z
              </a>
            </li>
          </ul>
        )
      }
    ]
  },
  {
    id: "about-dream",
    title: "my-dream.cpp",
    type: "file",
    content: (
      <div className="py-1">
        <div>
          <span className="text-yellow-400">while</span>(
          <span className="text-blue-400">sleeping</span>) <span>{"{"}</span>
        </div>
        <div>
          <span className="text-blue-400 ml-9">money</span>
          <span className="text-yellow-400">++</span>;
        </div>
        <div>
          <span>{"}"}</span>
        </div>
      </div>
    )
  }
];

export default terminal;
