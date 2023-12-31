import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import "./style.css";
const ContactContainer = () => {
  const myData = [
    
    {
      name: "Linkedin",
      link: "https://www.linkedin.com/in/edukondal-gogu-030397222/",
      text: "Follow to my linkedin.",
    },

    {
      name: "GitHub",
      link: "https://github.com/goguedukondal",
      text: "Follow to my github account.",
    },

    {
      name: "Email",
      link: "mailto:goguedukondal2468@gmail.com",
      text: "write to me a mail",
    },
  ];
  return (
    <div className="contactWrap">
      <Container>
        <Row>
          <Col>
            <p>CONNECT WITH US</p>
          </Col>
        </Row>
        <Row>
          <Col className="conectIcon">
            <ul className="socialIconsList">
              <li>
                <a
                  rel="noreferrer"
                  href="https://www.linkedin.com/in/edukondal-gogu-030397222/"
                  target="_blank"
                >
                  <BsLinkedin />
                </a>
              </li>

              <li>
                <a
                  rel="noreferrer"
                  href="https://github.com/goguedukondal"
                  target="_blank"
                >
                  <BsGithub />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col>
            <ListGroup className="contactList">
              {myData && myData.length > 0
                ? myData.map((item) => {
                    return (
                      <ListGroup.Item key={item.name}>
                        <span>{item.text}</span>
                        <a href={item.link} rel="noreferrer" target="_blank">
                          {item.link}
                        </a>
                      </ListGroup.Item>
                    );
                  })
                : ""}
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactContainer;
