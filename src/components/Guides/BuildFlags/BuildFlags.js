/* eslint-disable */
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
        <div className="loader">
          <Loader />
        </div>
      )}
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
              <SyntaxHighLighter className="syntax" language="bash" wrapLongLines={true} lineProps={{ style: { wordBreak: 'break-all', whiteSpace: 'pre-wrap' } }} style={dracula}>
                SAKURA_BUILD_TYPE=coregapps //For building ProjectSakura with Builtin Core GAPPS
              </SyntaxHighLighter>
              <br />
              <br />
              <SyntaxHighLighter className="syntax" language="bash" wrapLongLines={true} lineProps={{ style: { wordBreak: 'break-all', whiteSpace: 'pre-wrap' } }} style={dracula}>
               SAKURA_BUILD_TYPE=basicgapps //For building ProjectSakura with Builtin Basic GAPPS
              </SyntaxHighLighter>
              <br />
              <br />
              <SyntaxHighLighter className="syntax" language="bash" wrapLongLines={true} lineProps={{ style: { wordBreak: 'break-all', whiteSpace: 'pre-wrap' } }} style={dracula}>
                SAKURA_BUILD_TYPE := microg //For building ProjectSakura with Builtin MICROG.
              </SyntaxHighLighter>
              <br />
              <br />
              <SyntaxHighLighter className="syntax" language="bash" wrapLongLines={true} lineProps={{ style: { wordBreak: 'break-all', whiteSpace: 'pre-wrap' } }} style={dracula}>
                SAKURA_LAWNCHAIR := true //For building ProjectSakura with default Lawnchair Launcher.
              </SyntaxHighLighter>
              <br />
              <br />
              <SyntaxHighLighter className="syntax" language="bash" wrapLongLines={true} lineProps={{ style: { wordBreak: 'break-all', whiteSpace: 'pre-wrap' } }} style={dracula}>
                TARGET_USES_BLUR := true //For building ProjectSakura with option to toggle Notification shade Blur.
              </SyntaxHighLighter>
              <br />
              <br />
              <SyntaxHighLighter className="syntax" language="bash" wrapLongLines={true} lineProps={{ style: { wordBreak: 'break-all', whiteSpace: 'pre-wrap' } }} style={dracula}>
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
