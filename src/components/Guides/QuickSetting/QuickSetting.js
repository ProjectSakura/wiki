import React, { useEffect, useState } from "react";
import SyntaxHighLighter from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import Loader from "../../Loader/Loader";
import "./QuickSetting.css";

const QuickSetting = () => {
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
            <h2 className="heading"><span>Quick Setting</span></h2>
            <ol>
              <li><b>QuickSettings Background opacity controller</b></li>
              <li>
                <b>QS tint:</b>
                <br />
                <SyntaxHighLighter language="bash" style={dracula}>
                  Tint the QS tiles with accent color.
                </SyntaxHighLighter>
              </li>
              <li>
                <b>Tile Title controller:</b>
                <br />
                <SyntaxHighLighter language="bash" style={dracula}>
                  Display or hide the tile titles in QS.
                </SyntaxHighLighter>
              </li>
              <li>
                <b>Vibration controller:</b>
                <br />
                <SyntaxHighLighter language="bash" style={dracula}>
                  Give haptic feedback while clicking on QS icons.
                </SyntaxHighLighter>
              </li>
              <li>
                <b>Data usage in QS header:</b>
                <br />
                <SyntaxHighLighter language="bash" style={dracula}>
                  Display current data usage from Wifi or Mobile internet.
                </SyntaxHighLighter>
              </li>
              <li><b>QS rows and column controller</b></li>
              <li><b>Custom Header images for QuickSettings</b></li>
            </ol>
          </div>
        </center>
      )}
    </div>
  );
};

export default QuickSetting;
