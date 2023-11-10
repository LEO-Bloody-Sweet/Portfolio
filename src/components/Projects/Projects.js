import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
// import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
// import bitsOfCode from "../../Assets/Projects/blog.png";
import Game from "../../Assets/Projects/BubbleGame.png"
import Notekeeper from "../../Assets/Projects/Notekeeper.png"
import GitFinder from "../../Assets/Projects/GitFinder.png"
import Grilli from "../../Assets/Projects/Grilli.png"
import education from "../../Assets/Projects/EducationWebsite.png"


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Game}
              isBlog={false}
              title="Bubble Game"
              description="Introducing a fun and challenging web-based game! You'll find a grid of small bubbles, each marked with a number. Your goal is to click on the bubble with the number that matches the 'Hit' number displayed at the top. Hurry, though, because you only have 60 seconds to get as many correct hits as you can. Keep hitting the right numbers, and your score will keep increasing. Give it a try and test your reflexes and accuracy in this exciting game!"
              ghLink="https://github.com/mohdsultan18/"
              demoLink="https://bubble-game-by-mohd-sultan.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Notekeeper}
              isBlog={false}
              title="Notekeeper"
              description="NoteKeeper, a user-friendly web application designed to simplify your note-keeping and organization needs. Create Notebooks: Easily categorize your notes for work, personal use, or any other purpose, keeping your thoughts organized. Manage Notes: Within each notebook, you can create, edit, update, and delete notes, making it a breeze to keep your ideas in check.Secure Local Storage: Your data is stored in your browser's local storage, ensuring that you can access your notes anytime, without the need for accounts or syncing."
              ghLink="https://github.com/mohdsultan18"
              demoLink="https://notekeeper-by-mohd-sultan.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Grilli}
              isBlog={false}
              title="Grilli"
              description="Experience a culinary delight like no other at [Restaurant Name]. Our expert chefs craft dishes with the finest, locally-sourced ingredients, offering a blend of traditional and contemporary flavors. Whether it's a romantic dinner or a family gathering, our warm ambiance and attentive service create the perfect setting for an unforgettable dining adventure. Join us and savor a symphony of exquisite flavors that will leave you craving for more."
              ghLink="https://github.com/mohdsultan18"
              demoLink="https://grilli-by-mohd-sultan.netlify.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={GitFinder}
              isBlog={false}
              title="GitFinder"
              description="GitFinder - Seamlessly navigate GitHub profiles and repositories. Easily browse user profiles and repositories, and when you click on a repository, it seamlessly opens the original GitHub page for an uninterrupted experience."
              ghLink="https://github.com/mohdsultan18"
              demoLink="https://gitfinder-by-mohd-sultan.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={education}
              isBlog={false}
              title="School Website"
              description="Explore the world of online learning. Our platform offers a diverse range of courses, providing accessible and flexible education tailored to your needs. Join us in the journey of knowledge and skill development from the comfort of your home."
              ghLink="https://github.com/mohdsultan18"
              demoLink="https://new-education-website-by-sultan.netlify.app/"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
