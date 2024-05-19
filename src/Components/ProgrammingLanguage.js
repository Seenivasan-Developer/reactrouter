import React from "react";
import Card from 'react-bootstrap/Card';
import Container from "react-bootstrap/Container";

export function ProgrammingLanguage() {
  const Details = [
    {
      cardtitle: "C Plus Plus Programming",
      cardimage: "https://s3.ap-south-1.amazonaws.com/guvi-2.0/course-thumbnail/webps/cplusplus.webp",
      cardLanguage: "English",
      cardenrolled: "26787 Enrolled",
      classname:"btn course-tag premium",
      coursetype:"Premium"
    },
    {
      cardtitle: "C Plus Plus Programming",
      cardimage: "https://s3.ap-south-1.amazonaws.com/guvi-2.0/course-thumbnail/webps/cplusplus.webp",
      cardLanguage: "Tamil",
      cardenrolled: "4765 Enrolled",
      classname:"btn course-tag premium",
      coursetype:"Premium"
    },
    {
      cardtitle: "Java",
      cardimage: "https://s3.ap-south-1.amazonaws.com/guvi-2.0/course-thumbnail/webps/java.webp",
      cardLanguage: "English",
      cardenrolled: "40913 Enrolled",
      classname:"btn course-tag premium",
      coursetype:"Premium"
    },
    {
      cardtitle: "Java",
      cardimage: "https://s3.ap-south-1.amazonaws.com/guvi-2.0/course-thumbnail/webps/java.webp",
      cardLanguage: "Tamil",
      cardenrolled: "56873 Enrolled",
      classname:"btn course-tag premium",
      coursetype:"Premium"
    },
    {
      cardtitle: "Java 8",
      cardimage: "https://s3.ap-south-1.amazonaws.com/guvi-2.0/course-thumbnail/webps/java.webp",
      cardLanguage: "Tamil",
      cardenrolled: "5416 Enrolled",
      classname:"btn course-tag premium",
      coursetype:"Premium"
    }
    
  ]
  return (
    <Container>
      <div className="maindiv">
      {
        Details.map((det, index) => {
         return <Card key={index} border="light" style={{ width: '19rem', marginTop: '15px', marginRight: '20px' }} >
            <Card.Img variant="top" src={det.cardimage} />
            <Card.Body>
              <span className={det.classname}>{det.coursetype}</span>
              <Card.Title className="ctitle">{det.cardtitle}</Card.Title>
              <div className="mx-2 my-2">
                <img className="mr-2 mb-1 p" src="https://www.guvi.in/web-build/images/global.f1e3ee320b767a2949b071dd554974c7.svg" alt="globe"></img><p className="d-inline mr-2 p"> {det.cardLanguage} </p>
                <img className="mr-2 mb-1 p" src="https://www.guvi.in/web-build/images/pepole.efc153efe81e864c1771c81120eedb5b.svg" alt="enrolled"></img><p className="d-inline p"> {det.cardenrolled}</p>
              </div>
            </Card.Body>
          </Card>
        })
      }
      </div>
    </Container>
  );
}
