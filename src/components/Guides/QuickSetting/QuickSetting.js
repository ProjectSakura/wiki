import React, { useEffect, useState } from "react";
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
              <li>QuickSettings Background opacity controller</li>
              <li>
                <b>QS tint:</b>
                {" "}
                Tint the QS tiles with accent color.
              </li>
              <li>
                <b>Tile Title controller:</b>
                {" "}
                Display or hide the tile titles in QS.
              </li>
              <li>
                <b>Vibration controller:</b>
                {" "}
                Give haptic feedback while clicking on QS icons.
              </li>
              <li>
                <b>Data usage in QS header:</b>
                {" "}
                Display current data usage from Wifi or Mobile internet.
              </li>
              <li>QS rows and column controller</li>
              <li>Custom Header images for QuickSettings</li>
            </ol>
          </div>
        </center>
      )}
    </div>
  );
};

export default QuickSetting;
