import React, { useEffect, useState } from "react";
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
                : Display a roaming indicator when in roaming mode.
              </li>
              <li>
                <b>LTE to 4G icon</b>
                : Display a 4G icon instead of old LTE icon.
              </li>
              <li>
                <b>Old Style Signal icons</b>
                : Merge signal and signal type icons (LTE, 4G, Roaming), this saves some space on the status bar.
              </li>
              <li>
                <b>Data Disabled indicators</b>
                : Display a small cross icon on network icons, indicating that mobile data is turned off.
              </li>
              <li>
                <b>Bluetooth Battery status</b>
                : Display the battery level of the connected bluetooth devices.
              </li>
              <li>
                <b>Traffic Indicators</b>
                : Show network traffic status in status bar or QS header.
              </li>
              <li>
                <b>Charging Animation</b>
                : Display an animation when the device gets plugged in.
              </li>
              <li>
                <b>OneUI styled actionbar</b>
                : Display a large spacer above settings like in OneUI for easier one hand control.
              </li>
              <li>
                <b>Sakura Themes</b>
                : A set of themes like ChocoX, Transparent Mizu Theme, Pitch black, Google Grey and many more.
              </li>
              <li>
                <b>Settings Dashboard icon</b>
                : Tweak dashboard icons in Settings app.
              </li>
              <li>
                <b>Battery Bar</b>
                : Show a battery bar above status bar indicating charging and battery levels.
              </li>
              <li>
                <b>G-visual Mod</b>
                : Tweak status bar height and corner radius of the UI while using default icon shapes.
              </li>
            </ol>
          </div>
        </center>
      )}
    </div>
  );
};

export default Interface;
