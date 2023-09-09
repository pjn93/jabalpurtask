import React from "react";
import "./par7.css";
import ARR from '../images/arr.png'

const Para7 = () => {
  return (
    <div className="para7">
      <div className="para71">
        <img
          className="quote"
          src="https://clickflox.com/wp-content/uploads/2018/11/quote-1.png"
          alt="quotes"
        />
        <div className="feurat" style={{ marginLeft: "70px" }}>
          <p style={{ fontSize: "1.4em" }}>
            "Fuerat aestu carentem habentia spectent tonitrua mutastis locavit
            liberioris."
          </p>
          <p style={{ fontSize: "18px" }}>-Adam Sendler</p>
        </div>
      </div>

      <div className="para72">
        <div>
          <h1 style={{ fontSize: "2.5em", textTransform: "uppercase" }}>
            Upcoming Events
          </h1>
          <hr style={{ border: "1px solid tomato", width: "100px" }} />
        </div>
        <div
          style={{
            marginTop: "60px",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            flexDirection: "row",
            flexWrap: "wrap",
            gap: "100px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              flexWrap: "wrap",
              justifyContent: "space-between",
              gap: "40px",
            }}
          >
            <img
              src="https://clickflox.com/wp-content/uploads/2020/01/hiking-v1.jpg"
              alt="img71"
              className="img7"
            />
            <div>
              <h3 style={{ fontSize: "20px" }}>Everest Camp Trek</h3>
              <p style={{ fontSize: "18px", lineHeight: "2rem" }}>
                Fuerat aestu carentem habentia spectent tonitrua mutastis <br />{" "}
                locavit liberioris inistra possedit.
              </p>
              <button className="btn3">
              <div style={{display:'flex',  justifyContent:'center', gap:'10px'}}>
              <h4> Learn More</h4>
              <img src={ARR} alt="arr" width='20px' height='20px' style={{marginTop:'15px'}}/>
              </div>
             </button>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              flexWrap: "wrap",
              justifyContent: "space-between",
              gap: "40px",
            }}
          >
            <img
              src="https://clickflox.com/wp-content/uploads/2020/01/walking-v1.jpg"
              alt="img71"
              className="img7"
            />
            <div>
              <h3 style={{ fontSize: "20px" }}>walking Holiday</h3>
              <p style={{ fontSize: "18px", lineHeight: "2rem" }}>
                Fuerat aestu carentem habentia spectent tonitrua mutastis <br />{" "}
                locavit liberioris inistra possedit.
              </p>
              <button className="btn3">
              <div style={{display:'flex',  justifyContent:'center', gap:'10px'}}>
              <h4> Learn More</h4>
              <img src={ARR} alt="arr" width='20px' height='20px' style={{marginTop:'15px'}}/>
              </div>
             </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Para7;
