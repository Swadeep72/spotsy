import { faq } from "../../Constant";
import FaqQuestions from "./FaqQuestions";

const Faq = () => (
  <div className="faq">
    <div className="h1-p">
      <p1>Frequently Asked Questions</p1>
      <p>
        We are happy to help!&nbsp;<a>Contact us</a>&nbsp;today for answers.
      </p>
    </div>
    <div>
      {faq.map((data, index) => (
        <FaqQuestions key={index} title={data} />
      ))}
    </div>
    <div className="blank"></div>
  </div>
);

export default Faq;
