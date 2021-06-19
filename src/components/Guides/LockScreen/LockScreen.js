/* eslint-disable */
import React, { useEffect, useState } from "react";
import SyntaxHighLighter from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import Loader from "../../Loader/Loader";
import "./LockScreen.css";

const LockScreen = () => {
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
            <h2>Lock Screen</h2>
            <ol>
              <li>
                <b>Lockscreen charging information:</b>
                <br />
                {" "}
                <SyntaxHighLighter className="syntax" language="bash" wrapLongLines={true} lineProps={{ style: { wordBreak: 'break-all', whiteSpace: 'pre-wrap' } }} style={dracula}>
                  show basic information on lock screen while charging.
                </SyntaxHighLighter>
              </li>
              <li>
                <b>Background blur:</b>
                <br />
                {" "}
                <SyntaxHighLighter className="syntax" language="bash" wrapLongLines={true} lineProps={{ style: { wordBreak: 'break-all', whiteSpace: 'pre-wrap' } }} style={dracula}>
                  Blur the lock screen background if QS blur is enabled.
                </SyntaxHighLighter>
              </li>
              <li>
                <b>Weather:</b>
                <br />
                {" "}
                <SyntaxHighLighter className="syntax" language="bash" wrapLongLines={true} lineProps={{ style: { wordBreak: 'break-all', whiteSpace: 'pre-wrap' } }} style={dracula}>
                  Show weather on lockscreen or at a glance using OmniJaws weather controller.
                </SyntaxHighLighter>
              </li>
              <li>
                <b>Screen Off Animations:</b>
                <br />
                {" "}
                <SyntaxHighLighter className="syntax" language="bash" wrapLongLines={true} lineProps={{ style: { wordBreak: 'break-all', whiteSpace: 'pre-wrap' } }} style={dracula}>
                  use a custom animation for locking screen.
                </SyntaxHighLighter>
              </li>
              <li>
                <b>Secure Lockscreen:</b>
                <br />
                {" "}
                <SyntaxHighLighter className="syntax" language="bash" wrapLongLines={true} lineProps={{ style: { wordBreak: 'break-all', whiteSpace: 'pre-wrap' } }} style={dracula}>
                  Block powermenu on lockscreen or require authentication to perform power actions.
                </SyntaxHighLighter>
              </li>
            </ol>
          </div>
        </center>
      )}
    </div>
  );
};

export default LockScreen;
