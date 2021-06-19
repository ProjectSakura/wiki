/* eslint-disable */
import React, { useEffect, useState } from "react";
import SyntaxHighLighter from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import Loader from "../../Loader/Loader";
import "./Miscellaneous.css";

const Miscellaneous = () => {
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
            <h2 className="heading"><span>Miscellaneous</span></h2>
            <ol>
              <li>
                <b>Clipboard Access Alerts:</b>
                <br />
                <SyntaxHighLighter className="syntax" language="bash" wrapLongLines={true} lineProps={{ style: { wordBreak: 'break-all', whiteSpace: 'pre-wrap' } }} style={dracula}>
                  Show a toast when any app accesses your clipboard like in iOS.
                </SyntaxHighLighter>
              </li>
              <li>
                <b>Screenshot Sound:</b>
                <br />
                <SyntaxHighLighter className="syntax" language="bash" wrapLongLines={true} lineProps={{ style: { wordBreak: 'break-all', whiteSpace: 'pre-wrap' } }} style={dracula}>
                  Tweak the quality of the screenshots taken, though it is to note that it may not affect the size of the screenshots.
                </SyntaxHighLighter>
              </li>
              <li>
                <b>Volume Panel Timeout:</b>
                <br />
                <SyntaxHighLighter className="syntax" language="bash" wrapLongLines={true} lineProps={{ style: { wordBreak: 'break-all', whiteSpace: 'pre-wrap' } }} style={dracula}>
                  Tweak to control the time of volume panel visibility.
                </SyntaxHighLighter>
              </li>
              <li>
                <b>Volume Steps:</b>
                <br />
                <SyntaxHighLighter className="syntax" language="bash" wrapLongLines={true} lineProps={{ style: { wordBreak: 'break-all', whiteSpace: 'pre-wrap' } }} style={dracula}>
                  Change the amount of steps of volume and decrease in each button press.
                </SyntaxHighLighter>
              </li>
              <li>
                <b>Gaming Mode:</b>
                <br />
                <SyntaxHighLighter className="syntax" language="bash" wrapLongLines={true} lineProps={{ style: { wordBreak: 'break-all', whiteSpace: 'pre-wrap' } }} style={dracula}>
                  A very basic gaming mode, it won’t increase your performance tho.
                </SyntaxHighLighter>
              </li>
            </ol>
          </div>
        </center>
      )}
    </div>
  );
};

export default Miscellaneous;
