import React, { useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import "../style/HomePage.css";
import "bootstrap/dist/css/bootstrap.min.css";
import imgTherapy from "../assets/therapy plane.jpg"; // Import the image
import Testimonials from "../components/Testimonials";
import SpeechTest from "../components/SpeechTest";

const HomePage = () => {
  const features = [
    {
      title: "التشخيص",
      text: "تحديد المشكلات بدقة من خلال تحليل النطق.",
      icon: "bi bi-search",
      imgSrc: imgTherapy, // Use the imported image here
    },
    {
      title: "خطط علاج شخصية",
      text: "تمارين مخصصة لكل حرف يواجه الطفل صعوبة في نطقه.",
      icon: "bi bi-person-check",
      imgSrc: imgTherapy, // Use the imported image here
    },
    {
      title: "متابعة التقدم",
      text: "تقييمات دورية مع توصيات للتكرار أو التقدم.",
      icon: "bi bi-graph-up-arrow",
      imgSrc: imgTherapy, // Use the imported image here
    },
    {
      title: "التكرار حتى الإتقان",
      text: "توفير إمكانية التكرار حتى إتقان النطق الصحيح.",
      icon: "bi bi-arrow-repeat",
      imgSrc: imgTherapy, // Use the imported image here
    },
    {
      title: "التواصل مع الأخصائيين",
      text: "التحدث مباشرة مع أخصائيي علاج النطق.",
      icon: "bi bi-chat-dots",
      imgSrc: imgTherapy, // Use the imported image here
    },
    {
      title: "لوحة تحكم الآباء",
      text: "متابعة التقدم وإدارة الاستشارات بسهولة.",
      icon: "bi bi-speedometer",
      imgSrc: imgTherapy, // Use the imported image here
    },
  ];

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <div className="bg-light text-center py-5 hero-section">
        <Container>
          <h1 className="display-4">
            ! مساعدة الأطفال، دعم الآباء، توجيه الأطباء{" "}
          </h1>
          <p className="lead">
            الحل الشامل لتصحيح النطق المصمم خصيصًا لاحتياجات طفلك.
          </p>
          <Button variant="primary cta-btn" className="m-2">
            <span>ابدأ الآن</span>
          </Button>
          <Button variant="outline-primary more-info-btn" className="m-2">
            <span>تعرف على المزيد</span>
          </Button>
        </Container>
      </div>

      {/* Features Section */}
      <Container className="py-5 features-section" id="features">
        <h2 className="text-center mb-5">مميزاتنا</h2>
        <Row className="g-4">
          {features.map((feature, index) => (
            <Col md={6} lg={4} key={index}>
              <Card
                className="text-center shadow-sm feature-card"
                data-aos="fade-up"
                data-aos-delay={`${index * 100}`} // Adds staggered animation delay
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

      {/* Testimonials Section */}
      <Testimonials />
      {/* <SpeechTest/> */}
    </div>
  );
};

export default HomePage;
