import React from "react";
import "./InstallSakura.css";

const InstallSakura = () => {
  return (
    <div className="environment">
      <center>
        <div className="content">
          <h2>INSTALLING SAKURA </h2>
          <p>In this article we will tell you how to flash ProjectSakura. <br /><br />
          <i>This article only cover universal steps that you need to take and things may differ for every device so it's better if you also follow the XDA thread for your device.</i>  </p>
          <hr />          
          <h2>DOWNLOAD PROJECT SAKURA</h2>
          <p>To flash ProjectSakura you will need to get the flashable ROM zip for your device. We have a download center where you can get builds for every device that we support, Go to  <a href="https://ProjectSakura.xyz/download" target="_blank">ProjectSakura | Downloads</a>
          <br /><br />
          If you cannot find the build for your device on our download center then it probably is unsupported  by us.
          <br /><br />
          <i>Note: Some devices also need specific firmwares and Vendors to be flashed with ROM. To know more you should check the XDA thread or Telegram Chats of your device.</i>          
          </p>
          <hr />
          <h2>FLASHING PROJECT SAKURA </h2>
          <p>After you have downloaded all the needed files, you can proceed with the flashing process. Boot your device into recovery mode and go to advanced wipe after that wipe dalvik, cache, system, vendor and data. 
          <br /><br />
          Once you have wiped, flash the required firmware/ vendor zips and the flashable ROM zip. Then reboot to system and enjoy a clean Android experience. 
          <br /><br />          
          <i>Note: ProjectSakura provides three types of builds GAPPS, VANILLA and MICROG. You may or maynot need to flash a separate GAPPS package depending on the type of the build; maintainer is releasing.</i>
          </p>
          <hr />
          <h2>GAINING ROOT ACCESS</h2>
          <p>You will need to flash Magisk in order to gain root access. You can download the flashable magisk zip from it's Github Repo. We only recommend you to download magisk from verified sources.
          </p>
        </div>
      </center>
    </div>
  );
};

export default InstallSakura;