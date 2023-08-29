// @flow
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import image1 from "../../assets/images/features-1.svg";
import image2 from "../../assets/images/features-2.svg";
//backUpFeatures imports features data if planning to invoke Features.js within its own page. Otherwise features will be imported as props if this Features.js is invoked from the index page.

const Features = () => {
  const features = [
    {
      id: 1,
      title: "Inbuilt applications and pages",
      desc: "Hyper comes with a variety of ready-to-use applications and pages that help to speed up the development",
      image: image1,
      features: [
        "Projects & Tasks",
        "Ecommerce Application Pages",
        "Profile, pricing, invoice",
        "Login, signup, forget password",
      ],
    },
    {
      id: 2,
      title: "Simply beautiful design",
      desc: "The simplest and fastest way to build dashboard or admin panel. Hyper is built using the latest tech and tools and provide an easy way to customize anything, including an overall color schemes, layout, etc.",
      image: image2,
      features: [
        "Built with latest Bootstrap",
        "Extensive use of SCSS variables",
        " Well documented and structured code",
        "Detailed Documentation",
      ],
    },
  ];
  return (
    <>
      <section className="py-5">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="text-center">
                <h1 className="mt-0">
                  <i className="mdi mdi-heart-multiple-outline"></i>
                </h1>
                <h3>
                  Features you'll <span className="text-danger">love</span>
                </h3>
                <p className="text-muted mt-2">
                  Hyper comes with next generation ui design and have multiple
                  benefits
                </p>
              </div>
            </Col>
          </Row>

          {features.map((item, index) => {
            return item.id % 2 !== 0 ? (
              <Row key={index} className="mt-2 py-5 align-items-center">
                <Col lg={5} md={6}>
                  <img src={item.image} className="img-fluid" alt="" />
                </Col>
                <Col md={{ span: 5, offset: 1 }} lg={6}>
                  <h3 className="fw-normal">{item.title}</h3>
                  <p className="text-muted mt-3">{item.desc}</p>

                  <div className="mt-4">
                    {item.features.map((item, index) => {
                      return (
                        <p key={index} className="text-muted">
                          <i className="mdi mdi-circle-medium text-primary"></i>{" "}
                          {item}
                        </p>
                      );
                    })}
                  </div>
                  <Link to="#" className="btn btn-primary btn-rounded mt-3">
                    Read More <i className="mdi mdi-arrow-right ms-1"></i>
                  </Link>
                </Col>
              </Row>
            ) : (
              <Row key={index} className="pb-3 pt-5 align-items-center">
                <Col lg={6} md={5}>
                  <h3 className="fw-normal">{item.title}</h3>
                  <p className="text-muted mt-3">{item.desc}</p>

                  <div className="mt-4">
                    {item.features.map((item, index) => {
                      return (
                        <p key={index} className="text-muted">
                          <i className="mdi mdi-circle-medium text-success"></i>{" "}
                          {item}
                        </p>
                      );
                    })}
                  </div>
                  <Link to="#" className="btn btn-success btn-rounded mt-3">
                    Read More <i className="mdi mdi-arrow-right ms-1"></i>
                  </Link>
                </Col>
                <Col md={{ span: 6, offset: 1 }} lg={5}>
                  <img src={item.image} className="img-fluid" alt="" />
                </Col>
              </Row>
            );
          })}
        </Container>
      </section>
    </>
  );
};

export default Features;
