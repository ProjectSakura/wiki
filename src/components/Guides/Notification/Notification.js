import React, { useEffect, useState } from "react";
import SyntaxHighLighter from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import Loader from "../../Loader/Loader";
import "./Notification.css";

const Notification = () => {
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
            <h2 className="heading"><span>Notification</span></h2>
            <ol>
              <li>
                <b>Notification Opacity:</b>
                <br />
                <SyntaxHighLighter language="bash" style={dracula}>
                  Change the transparency of Notifications.
                </SyntaxHighLighter>
              </li>
              <li>
                <b>Heads Up:</b>
                <br />
                <SyntaxHighLighter language="bash" style={dracula}>
                  Tweak notification heads values.
                </SyntaxHighLighter>
              </li>
              <li>
                <b>Less Boring Heads Up:</b>
                <br />
                <SyntaxHighLighter language="bash" style={dracula}>
                  Show notification heads up only for important applications.
                </SyntaxHighLighter>
              </li>
              <li>
                <b>Noisy Notification:</b>
                <br />
                <SyntaxHighLighter language="bash" style={dracula}>
                  Disable sounds and vibrations of all notifications when your display is on.
                </SyntaxHighLighter>
              </li>
              <li>
                <b>Horizon Light:</b>
                <br />
                <SyntaxHighLighter language="bash" style={dracula}>
                  Show nice looking accented bars on both sides of the screen in Ambient Notifications.
                </SyntaxHighLighter>
              </li>
              <li>
                <b>In-Call vibration tweaks.</b>
              </li>
            </ol>
          </div>
        </center>
      )}
    </div>
  );
};

export default Notification;
