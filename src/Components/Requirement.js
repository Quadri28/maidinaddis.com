import React, { useState } from "react";
import "./Requirement.css";
import Footer from "./Footer";
import ContinueButton from "./ContinueButton";

const Requirement = () => {
  const [isActive, setIsActive] = useState("");
  const [choose, setChoose] = useState({
    urgent: "",
    notUrgent: "",
    checking: "",
  });
  const handleChoose = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setChoose({ ...choose, [name]: value });
  };

  return (
    <div>
      <div className="middle-card">
        <p className="middle-card-p">How Urgent is your requirement?</p>

        <div className="cards">
          <div
            className={
              isActive === "urgent" ? "small-cards chosen" : "small-cards"
            }
            id="urgent"
            name='urgent'
            onClick={(e) => {
              setIsActive("urgent");
            }}
          >
            <input
              type="date"
              id="urgent"
              value={choose.urgent}
              name="urgent"
              onChange={handleChoose}
              className={
                isActive === "urgent"
                  ? " chosen circular-calendar"
                  : "circular-calendar"
              }
              onClick={() => {
                setIsActive("urgent");
              }}
            />
            <div className="small-card-child">
              <p>Urgent Requirement</p>
              <p className="small-card-child-description">
                We will contact you within two business days
              </p>
            </div>
          </div>
          <div
            className={
              isActive === "not-so-urgent"
                ? " chosen small-cards"
                : "small-cards"
            }
            id="not-so-urgent"
            onClick={(e) => {
              setIsActive("not-so-urgent");
            }}
          >
            <input
              type="date"
              value={choose.notUrgent}
              id="not-so-urgent"
              name="notUrgent"
              onChange={handleChoose}
              className={
                isActive === "not-so-urgent"
                  ? " chosen circular-calendar"
                  : "circular-calendar"
              }
              onClick={() => {
                setIsActive("not-so-urgent");
              }}
            />
            <div className="small-card-child">
              <p>Not So Urgent Requirement</p>
              <p className="small-card-child-description">
                We will contact you within 7 business days
              </p>
            </div>
          </div>
          <div
            className={
              isActive === "checking" ? " chosen small-cards" : "small-cards"
            }
            id="checking"
            onClick={(e) => {
              setIsActive("checking");
            }}
          >
            <input
              type="date"
              value={choose.checking}
              id="checking"
              name="checking"
              onChange={handleChoose}
              className={
                isActive === "checking"
                  ? " chosen circular-calendar"
                  : "circular-calendar"
              }
              onClick={() => {
                setIsActive("checking");
              }}
            />

            <div className="small-card-child">
              <p>Just checking the site</p>
              <p className="small-card-child-description">
                We will contact you when you are ready
              </p>
            </div>
          </div>
        </div>
        <div className="small-card-button">
          <ContinueButton destination="/duration" name="Continue" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Requirement;
