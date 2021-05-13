import React, { useEffect, useState } from "react";
import SyntaxHighLighter from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import Loader from "../../Loader/Loader";
import "./BuildFlags.css";

const BuildFlags = () => {
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
        <Loader />)}
      {!loading && (
        <center>
          <div className="content">
            <h2>FLAGS PRESENT IN PROJECT SAKURA</h2>
            <p>In this article we will tell you about all the available Flags in ProjectSakura</p>
            <hr />
            <h2>
              List of all flags with their functionality.
            </h2>
            <p>
              <SyntaxHighLighter language="bash" style={dracula}>
                SAKURA_BUILD_TYPE := gapps //For building ProjectSakura with Builtin GAPPS.
              </SyntaxHighLighter>
              <br />
              <br />
              <SyntaxHighLighter language="bash" style={dracula}>
                SAKURA_BUILD_TYPE := microg //For building ProjectSakura with Builtin MICROG.
              </SyntaxHighLighter>
              <br />
              <br />
              <SyntaxHighLighter language="bash" style={dracula}>
                SAKURA_OPLAUNCHER := true //For building ProjectSakura with default OnePlus Launcher.
              </SyntaxHighLighter>
              <br />
              <br />
              <SyntaxHighLighter language="bash" style={dracula}>
                TARGET_USES_BLUR := true //For building ProjectSakura with option to toggle Notification shade Blur.
              </SyntaxHighLighter>
              <br />
              <br />
              <SyntaxHighLighter language="bash" style={dracula}>
                {
                  "EXTRA_FOD_ANIMATIONS := true //For building ProjectSakura with FODAnimations resources. "
                }
              </SyntaxHighLighter>
            </p>
          </div>
        </center>
      )}
    </div>
  );
};

export default BuildFlags;
