import React from "react";
import Card from 'react-bootstrap/Card';
import Container from "react-bootstrap/Container";

export function Database() {
  const Details = [
    {
      cardtitle: "JDBC",
      cardimage: "https://s3.ap-south-1.amazonaws.com/guvi-2.0/course-thumbnail/webps/java.webp",
      cardLanguage: "Hindi",
      cardenrolled: "2004 Enrolled",
      classname:"btn course-tag free",
      coursetype:"Free"
    },
    {
      cardtitle: "SQL",
      cardimage: "https://s3.ap-south-1.amazonaws.com/guvi-2.0/course-thumbnail/webps/sql.webp",
      cardLanguage: "Tamil",
      cardenrolled: "2014 Enrolled",
      classname:"btn course-tag free",
      coursetype:"Free"
    },
    {
      cardtitle: "SQL",
      cardimage: "https://s3.ap-south-1.amazonaws.com/guvi-2.0/course-thumbnail/webps/sql.webp",
      cardLanguage: "Bengali",
      cardenrolled: "2003 Enrolled",
      classname:"btn course-tag free",
      coursetype:"Free"
    },
    {
      cardtitle: "Sqlite",
      cardimage: "https://s3.ap-south-1.amazonaws.com/guvi-2.0/course-thumbnail/webps/sqlite.webp",
      cardLanguage: "Tamil",
      cardenrolled: "2010 Enrolled",
      classname:"btn course-tag free",
      coursetype:"Free"
    },
    {
      cardtitle: "MongoDB",
      cardimage: "https://s3.ap-south-1.amazonaws.com/guvi-2.0/course-thumbnail/webps/mongodb.webp",
      cardLanguage: "English",
      cardenrolled: "70047 Enrolled",
      classname:"btn course-tag premium",
      coursetype:"Premium"
    },
    {
      cardtitle: "MongoDB",
      cardimage: "https://s3.ap-south-1.amazonaws.com/guvi-2.0/course-thumbnail/webps/mongodb.webp",
      cardLanguage: "Tamil",
      cardenrolled: "7922 Enrolled",
      classname:"btn course-tag premium",
      coursetype:"Premium"
    },
    {
      cardtitle: "Redis with Python RESTful API",
      cardimage: "https://s3.ap-south-1.amazonaws.com/guvi-2.0/course-thumbnail/webps/redis.webp",
      cardLanguage: "English",
      cardenrolled: "24155 Enrolled",
      classname:"btn course-tag premium",
      coursetype:"Premium"
    },
    {
      cardtitle: "Apache Cassandra with Python",
      cardimage: "https://s3.ap-south-1.amazonaws.com/guvi-2.0/course-thumbnail/webps/python.webp",
      cardLanguage: "English",
      cardenrolled: "6368 Enrolled",
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
