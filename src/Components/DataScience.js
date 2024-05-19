import React from "react";
import Card from 'react-bootstrap/Card';
import Container from "react-bootstrap/Container";

export function DataScience() {
  const Details = [
    {
      cardtitle: "Machine Learning 101",
      cardimage: "https://s3.ap-south-1.amazonaws.com/guvi-2.0/course-thumbnail/webps/ml.webp",
      cardLanguage: "English",
      cardenrolled: "89871 Enrolled",
      classname:"btn course-tag premium",
      coursetype:"Premium"
    },
    {
      cardtitle: "Data Analytics Using Pandas",
      cardimage: "https://s3.ap-south-1.amazonaws.com/guvi-2.0/course-thumbnail/webps/python.webp",
      cardLanguage: "English",
      cardenrolled: "21327 Enrolled",
      classname:"btn course-tag premium",
      coursetype:"Premium"
    },
    {
      cardtitle: "Keras for Beginners",
      cardimage: "https://s3.ap-south-1.amazonaws.com/guvi-2.0/course-thumbnail/webps/keras.webp",
      cardLanguage: "Hindi",
      cardenrolled: "2371 Enrolled",
      classname:"btn course-tag premium",
      coursetype:"Premium"
    },
    {
      cardtitle: "Introduction to Data Engineering and Bigdata",
      cardimage: "https://s3.ap-south-1.amazonaws.com/guvi-2.0/course-thumbnail/webps/bigdata.webp",
      cardLanguage: "English",
      cardenrolled: "20543 Enrolled",
      classname:"btn course-tag essential",
      coursetype:"Essential"
    },
    {
      cardtitle: "Data Visualization in Python",
      cardimage: "https://s3.ap-south-1.amazonaws.com/guvi-2.0/course-thumbnail/webps/python.webp",
      cardLanguage: "English",
      cardenrolled: "20578 Enrolled",
      classname:"btn course-tag premium",
      coursetype:"Premium"
    },
    {
      cardtitle: "Introduction to Datascience with R",
      cardimage: "https://s3.ap-south-1.amazonaws.com/guvi-2.0/course-thumbnail/webps/data_science_with_r.webp",
      cardLanguage: "English",
      cardenrolled: "5584 Enrolled",
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
