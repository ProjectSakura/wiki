import React from "react";
import "./ApplyMaintainers.css";

const ApplyMaintainers = () => {
  return (
    <div className="environment">
      <center>
        <div className="content">
          <h2>APPLY FOR PROJECT SAKURA MAINTAINERSHIP </h2>
          <p>In this article we will tell you how you can become an Official ProjectSakura Maintainer.
          </p>
          <hr />          
          <h2>GUIDELINES</h2>
          <p>You don't need too many skills to be a device maintainer. Though you need to fullfill these simple guidelines.
          <br /><br />
          1. You must own the device.
          <br /><br />
          2. You must know Basic git ( creating pull requests, properly writing commits, cherry-picking and other basic stuff).
          <br /><br />
          3. You must have made some contributions towards your device community instead of just taking a device tree and compiling.
          <br /><br />
          4. You must know how to read basic logcats.
          <br /><br />
          5. You must have to compile Unofficial builds before you apply for Official.
          <br /><br />
          6. Co-Maintaining is allowed but you cannot be a shadow maintainer for some other guy.
          </p>
          <hr />
          <h2>APPLICATION FORM </h2>
          <p>
          Once you make sure that you are fullfilling all the above guidelines, you can use the Google Form below to apply for Official maintainership.
          <br /> <br />
          <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfKFUSyohdGKQFLEZCxsxCemlcXdKUMPCsShi0TXGJu7ihceg/viewform?embedded=true" width="700" height="520" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
          <br /><br />          
          </p>
        </div>
      </center>
    </div>
  );
};

export default ApplyMaintainers;