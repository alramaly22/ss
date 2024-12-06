import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import img1 from '../assets/image1.jpg'; // Import images directly if in src
import img2 from '../assets/image2.jpg'; 
import img3 from '../assets/image3.jpg'; 

const Features = () => {
  const features = [
    {
      title: "التشخيص",
      text: "تحديد المشكلات بدقة من خلال تحليل النطق.",
      icon: "bi bi-search",
      imgSrc: img1,
    },
    {
      title: "خطط علاج شخصية",
      text: "تمارين مخصصة لكل حرف يواجه الطفل صعوبة في نطقه.",
      icon: "bi bi-person-check",
      imgSrc: img2,
    },
    {
      title: "متابعة التقدم",
      text: "تقييمات دورية مع توصيات للتكرار أو التقدم.",
      icon: "bi bi-graph-up-arrow",
      imgSrc: img3,
    },
    // Add other features as needed
  ];

  return (
    <Container className="py-5 features-section" id="features">
      <h2 className="text-center mb-5">مميزاتنا</h2>
      <Row className="g-4">
        {features.map((feature, index) => (
          <Col md={6} lg={4} key={index}>
            <Card
              className="text-center shadow-sm feature-card"
              data-aos="fade-up"
              data-aos-delay={`${index * 100}`}
              data-aos-duration="1000"
            >
              <Card.Body>
                <div className="feature-icon mb-3">
                  <img
                    src={feature.imgSrc}
                    alt={feature.title}
                    className="img-fluid"
                    style={{ maxHeight: "150px", objectFit: "cover" }}
                  />
                  <i className={`${feature.icon}`}></i>
                </div>
                <Card.Title className="mb-2">{feature.title}</Card.Title>
                <Card.Text>{feature.text}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Features;
