import React, { useEffect, useState } from "react";
import SyntaxHighLighter from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import Loader from "../../Loader/Loader";
import "./Gesture.css";

const Gesture = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);
  return (
    <div className="environment">
      {loading && (
      <div className="loader">
        <Loader />
      </div>
      )}
      {!loading && (
        <center>
          <div className="content">
            <h2 className="heading"><span>Gesture</span></h2>
            <ol>
              <li>
                <b>Three Finger Gesture:</b>
                <br />
                <SyntaxHighLighter language="bash" style={dracula}>
                  Take a screenshot by swiping with three fingers.
                </SyntaxHighLighter>
              </li>
              <li>
                <b>Layout:</b>
                <br />
                <SyntaxHighLighter language="bash" style={dracula}>
                  Compact, left leaning and right leaning layout for button navigation.
                </SyntaxHighLighter>
              </li>
              <li>
                <b>Invert Layout:</b>
                <br />
                <SyntaxHighLighter language="bash" style={dracula}>
                  Interchange the position of overview and back buttons in 3 button navigation.
                </SyntaxHighLighter>
              </li>
              <li>
                <b>Touch Screen Gestures and Full screen gesture tweaks.</b>
              </li>
            </ol>
          </div>
        </center>
      )}
    </div>
  );
};

export default Gesture;
