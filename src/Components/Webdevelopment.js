import React from "react";
import Card from 'react-bootstrap/Card';
import Container from "react-bootstrap/Container";

export function Webdevelopment() {
  const Details = [
    {
      cardtitle: "Angular",
      cardimage: "https://s3.ap-south-1.amazonaws.com/guvi-2.0/course-thumbnail/webps/angular.webp",
      cardLanguage: "Tamil",
      cardenrolled: "4506 Enrolled",
      classname:"btn course-tag premium",
      coursetype:"Premium"
    },
    {
      cardtitle: "Angular",
      cardimage: "https://s3.ap-south-1.amazonaws.com/guvi-2.0/course-thumbnail/webps/angular.webp",
      cardLanguage: "English",
      cardenrolled: "38358 Enrolled",
      classname:"btn course-tag premium",
      coursetype:"Premium"
    },
    {
      cardtitle: "CSS Grid and Flexbox",
      cardimage: "https://s3.ap-south-1.amazonaws.com/guvi-2.0/course-thumbnail/webps/css.webp",
      cardLanguage: "English",
      cardenrolled: "2004 Enrolled",
      classname:"btn course-tag free",
      coursetype:"Free"
    },
    {
      cardtitle: "CSS",
      cardimage: "https://s3.ap-south-1.amazonaws.com/guvi-2.0/course-thumbnail/webps/css.webp",
      cardLanguage: "Hindi",
      cardenrolled: "2004 Enrolled",
      classname:"btn course-tag free",
      coursetype:"Free"
    },
    {
      cardtitle: "CSS Animation English",
      cardimage: "https://s3.ap-south-1.amazonaws.com/guvi-2.0/course-thumbnail/webps/css.webp",
      cardLanguage: "English",
      cardenrolled: "2001 Enrolled",
      classname:"btn course-tag free",
      coursetype:"Free"
    },
    {
      cardtitle: "CSS",
      cardimage: "https://s3.ap-south-1.amazonaws.com/guvi-2.0/course-thumbnail/webps/css.webp",
      cardLanguage: "Tamil",
      cardenrolled: "2006 Enrolled",
      classname:"btn course-tag free",
      coursetype:"Free"
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
