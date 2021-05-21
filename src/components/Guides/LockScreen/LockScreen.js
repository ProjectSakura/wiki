import React, { useEffect, useState } from "react";
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
                {" "}
                show basic information on lock screen while charging.
              </li>
              <li>
                <b>Background blur:</b>
                {" "}
                Blur the lock screen background if QS blur is enabled.
              </li>
              <li>
                <b>Weather:</b>
                {" "}
                Show weather on lockscreen or at a glance using OmniJaws weather controller.
              </li>
              <li>
                <b>Screen Off Animations:</b>
                {" "}
                use a custom animation for locking screen.
              </li>
              <li>
                <b>Secure Lockscreen:</b>
                {" "}
                Block powermenu on lockscreen or require authentication to perform reboot or power off functions from lockscreen.
              </li>
            </ol>
          </div>
        </center>
      )}
    </div>
  );
};

export default LockScreen;
