/* eslint-disable */
import React, { useEffect, useState } from "react";
import SyntaxHighLighter from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import Loader from "../../Loader/Loader";
import "./Interface.css";

const Interface = () => {
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
            <h2>Interface </h2>
            <ol>
              <li>
                <b>Roaming Indicator</b>
                <br />
                <SyntaxHighLighter language="bash" style={dracula}>
                Display a roaming indicator when in roaming mode.
                </SyntaxHighLighter>
              </li>
              <li>
                <b>LTE to 4G icon</b>
                <br />
                <SyntaxHighLighter language="bash" style={dracula}>                
                Display a 4G icon instead of old LTE icon.
                </SyntaxHighLighter>                
              </li>
              <li>
                <b>Old Style Signal icons</b>
                <br />
                <SyntaxHighLighter language="bash" style={dracula}>
                Merge signal and signal type icons (LTE, 4G, Roaming).
                </SyntaxHighLighter>              
              </li>
              <li>
                <b>Data Disabled indicators</b>
                <br />
                <SyntaxHighLighter language="bash" style={dracula}>
                Display a small cross icon on network icons, indicating that mobile data is turned off.
                </SyntaxHighLighter>
              </li>
              <li>
                <b>Bluetooth Battery status</b>
                <br />
                <SyntaxHighLighter language="bash" style={dracula}>
                Display the battery level of the connected bluetooth devices.
                </SyntaxHighLighter>
              </li>
              <li>
                <b>Traffic Indicators</b>
                <br />
                <SyntaxHighLighter language="bash" style={dracula}>
                Show network traffic status in status bar or QS header.
                </SyntaxHighLighter>
              </li>
              <li>
                <b>Charging Animation</b>
                <br />
                <SyntaxHighLighter language="bash" style={dracula}>
                Display an animation when the device gets plugged in.
                </SyntaxHighLighter>
              </li>
              <li>
                <b>OneUI styled actionbar</b>
                <br />
                <SyntaxHighLighter language="bash" style={dracula}>
                Display a large spacer above settings like in OneUI for easier one hand control.
                </SyntaxHighLighter>
              </li>
              <li>
                <b>Settings Dashboard icon</b>
                <br />
                <SyntaxHighLighter language="bash" style={dracula}>
                Tweak dashboard icons in Settings app.
                </SyntaxHighLighter>
              </li>
              <li>
                <b>Battery Bar</b>
                <br />
                <SyntaxHighLighter language="bash" style={dracula}>
                Show a battery bar above status bar indicating charging and battery levels.
                </SyntaxHighLighter>
              </li>
              <li>
                <b>G-visual Mod</b>
                <br />
                <SyntaxHighLighter language="bash" style={dracula}>
                Tweak status bar height and corner radius of the UI while using default icon shapes.
                </SyntaxHighLighter>
              </li>
            </ol>
          </div>
        </center>
      )}
    </div>
  );
};

export default Interface;
