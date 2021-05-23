import React, { useEffect, useState } from "react";
import Loader from "../../Loader/Loader";
import "./ApplyMaintainers.css";

const ApplyMaintainers = () => {
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
            <h2>APPLY FOR PROJECT SAKURA MAINTAINERSHIP </h2>
            <p>
              In this article we will tell you how you can become an Official ProjectSakura Maintainer.
            </p>
            <hr />
            <h2>GUIDELINES</h2>
            <p>
              You don't need too many skills to be a device maintainer. Though you need to fullfill these simple guidelines.
              <br />
              <br />
              1. You must own the device.
              You can maintain the device that have minimal hardware difference and use common trees with your device.
              BLIND building is absolutely NOT allowed.
              <br />
              <br />
              2. You must know Basic git ( creating pull requests, properly writing commits, cherry-picking and other basic stuff).
              <br />
              <br />
              3. You must have made some contributions towards your device community instead of just taking a device tree and compiling.
              <br />
              <br />
              4. You must know how to read basic logcats.
              <br />
              <br />
              5. You must have to compile Unofficial builds before you apply for Official. Do NOT apply as soon as you built an unofficial build and instead maintain it for a period of 2 months.
              Applying before you have even built will lead to instant rejection and we will blacklist you in our database.
              <br />
              <br />
              6. Co-Maintaining is allowed but you cannot be a shadow maintainer for some other guy.
              <br />
              <br />
              <b>You will recieve an email or Telegram message if we acknowledge your application. In some cases we may talk to you for some period of time to decide if we should accept or reject your application.</b>
            </p>
            <hr />
            <h2>APPLICATION FORM </h2>
            <p>
              Once you make sure that you are fullfilling all the above guidelines, you can use the Google Form below to apply for Official maintainership.
              <br />
              {" "}
              <br />
              <div>
                <iframe className="form" title="maintainer-form" src="https://docs.google.com/forms/d/e/1FAIpQLSfKFUSyohdGKQFLEZCxsxCemlcXdKUMPCsShi0TXGJu7ihceg/viewform?embedded=true" width="700" height="520" frameBorder="0">Loading…</iframe>
              </div>
              <br />
              <br />
            </p>
          </div>
        </center>
      )}
    </div>
  );
};

export default ApplyMaintainers;
