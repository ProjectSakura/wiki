import React from "react";
import "./ReportBug.css";

const ReportBug = () => {
  return (
    <div className="environment">
      <center>
        <div className="content">
          <h2>REPORTING A BUG</h2>
          <p>Here we will guide you on how to report a bug related to Project Sakura</p>
          <hr />          
          <h2>WHERE SHOULD I REPORT BUGS</h2>
          <p>You can report Bugs that are related to our Source on our <a href="https://github.com/ProjectSakura/Bug_Tracker" target="_blank">Bug Reports Repo.</a>
          <br />
          If you are facing a bug related to a specific device then you can report about it to the device maintainer in our Telegram Chat or the device specific support Group.
          </p>
          <hr />
          <h2>WHAT DO I NEED TO INCLUDE IN THE BUG REPORT </h2>
          <p>If you are going to report the bug on our Bug report Repo then you can use the template that we have designed for opening Issues there. 
          <br />
          If you are going to report any device specific bug then you will need to write the description of the bug and properly explain the procedure of 
          reproducing the bug. It is also required to attach screenshots or a logcat. 
          </p>
          <hr />
          <h2>HOW TO TAKE LOGCATS </h2>
          <p>You can follow this amazing article to know how to properly take log using both ADB and Any Logcat Application,
          <a href="https://telegra.ph/BUG-REPORTING-GUIDE-FOR-DUMMIES-10-05" target="_blank"> Follow this link</a></p>
        </div>
      </center>
    </div>
  );
};

export default ReportBug;