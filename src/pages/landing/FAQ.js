// @flow
import React from "react";
import { Container, Row, Col } from "react-bootstrap";

// components
import FAQs from "../../components/FAQs";

const FAQ = () => {
  const rawFaqs = [
    {
      id: 1,
      question: "Can I use this template for my client?",
      answer:
        "Yup, the marketplace license allows you to use this theme in any end products. For more information on licenses, please refere here.",
      titleClass: "text-body",
      textClass: "pb-1 text-muted",
    },
    {
      id: 2,
      question: "Can this theme work with Wordpress?",
      answer:
        "No. This is a HTML template. It won't directly with wordpress, though you can convert this into wordpress compatible theme.",
      titleClass: "text-body",
      textClass: "pb-1 text-muted",
    },
    {
      id: 3,
      question: "How do I get help with the theme?",
      answer:
        "Use our dedicated support email (support@coderthemes.com) to send your issues or feedback. We are here to help anytime.",
      titleClass: "text-body",
      textClass: "pb-1 text-muted",
    },
    {
      id: 4,
      question: "Will you regularly give updates of Hyper?",
      answer:
        "Yes, We will update the Hyper regularly. All the future updates would be available without any cost.",
      titleClass: "text-body",
      textClass: "pb-1 text-muted",
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
                  <i className="mdi mdi-frequently-asked-questions"></i>
                </h1>
                <h3 className="">Frequently Asked Questions</h3>
                <p className="text-muted mt-3">
                  {" "}
                  Nisi praesentium similique totam odio obcaecati,
                  reprehenderit, dignissimos rem temporibus ea inventore alias!
                  <br /> Beatae animi nemo ea tempora, temporibus laborum
                  facilis ut!
                </p>

                <button type="button" className="btn btn-success btn-sm mt-2">
                  <i className="mdi mdi-email-outline me-1"></i> Email us your
                  question
                </button>
                <button type="button" className="btn btn-info btn-sm mt-2 ms-1">
                  <i className="mdi mdi-twitter me-1"></i> Send us a tweet
                </button>
              </div>
            </Col>
          </Row>

          {/* question/answer */}
          <FAQs rawFaqs={rawFaqs} />
        </Container>
      </section>
    </>
  );
};

export default FAQ;
