import React from 'react'

function Projects() {
    const projectsData = [
        {
          image: "/project1.png",
          projectName: "Pokedex",
          projectLink: "https://netlify.com",
          projectDescription:
            "This is a web application that uses the PokeAPI to display information about different Pokemon, including their evolution levels and details. You can compare multiple Pokemon using a queue, and add them to your personal list using Firebase's Firestore database.",
          projectTech: [
            "React",
            "Redux Toolkit",
            "SCSS",
            "Firebase",
            "Typescript",
            "PokeApi",
          ],
          projectExternalLinks: {
            github: "",
            externalLink: "",
          },
        },
        {
          image: "/project2.png",
          projectName: "Realtime Chat App",
          projectLink: "https://netlify.com",
          projectDescription:
            "This is a chat app made with React and Node.js that sends real-time messages and is highly scalable. It uses advanced JavaScript concepts like debouncing and is optimized for React. It has 300+ stars on GitHub and over 180k views on YouTube.",
          projectTech: [
            "React",
            "Sockets",
            "Node.js",
            "Express",
            "MongoDB",
            "Styled Components",
          ],
          projectExternalLinks: {
            github: "",
            externalLink: "",
          },
        },
        {
          image: "/Project1.jpg",
          projectName: "Netflix App",
          projectLink: "https://netlify.com",
          projectDescription:
            "I made a Netflix copy with TMBD Api. It has infinite scrolling and lets you watch movies by genre. You can also add movies to your favorites list.",
          projectTech: [
            "React",
            "Node.js",
            "Firebase",
            "MongoDB",
            "Express",
            "Redux Toolkit",
          ],
          projectExternalLinks: {
            github: "",
            externalLink: "",
          },
        },
      ];
  return (
    <div className='projects' id='work'>
        <div className='title'>
            <h2>Some Things I&apos;ve Built</h2>
        </div>
    </div>
  )
}

export default Projects