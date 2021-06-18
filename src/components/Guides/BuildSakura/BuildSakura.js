import React, { useEffect, useState } from "react";
import SyntaxHighLighter from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import Loader from "../../Loader/Loader";
import "./BuildSakura.css";

const BuildSakura = () => {
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
            <h2>BUILDING SAKURA</h2>
            <p>
              Here we will guide you on how to build Project Sakura for your
              device.
            </p>
            <hr />
            <h2>HOW TO SETUP A BUILD ENVIRONMENT</h2>
            <p>
              To Build Project Sakura you can use any 64 Bit Linux Distro, though
              we recommend using Ubuntu 18.04, LinuxMint, MXLinux or Manjaro. You
              can setup the build environment using
              <a href="https://github.com/akhilnarang/scripts" target="_blank" rel="noreferrer">
                {" "}
                Akhil Narang's Script
              </a>
              <br />
              <br />
            </p>
            <div className="wrapper">
              <SyntaxHighLighter language="bash" style={dracula}>
                git clone https://github.com/akhilnarang/scripts; cd scripts; sudo bash setup/android_build_env.sh
              </SyntaxHighLighter>
            </div>
            <br />
            <p>
              Or You can install all the packages manually using the commands
              below.
              <br />
              <br />
            </p>
            <div className="wrapper">
              <SyntaxHighLighter language="bash" style={dracula}>
                sudo apt-get install openjdk-8-jdk && sudo apt-get update && sudo apt-get install git-core gnupg flex bison gperf libsdl1.2-dev libesd0-dev squashfs-tools build-essential zip curl libncurses5-dev zlib1g-dev openjdk-8-jre openjdk-8-jdk pngcrush schedtool libxml2 libxml2-utils xsltproc lzop libc6-dev schedtool g++-multilib lib32z1-dev lib32ncurses5-dev lib32readline-gplv2-dev gcc-multilib maven tmux screen w3m ncftp
              </SyntaxHighLighter>
            </div>
            <hr />
            <h2>SYNCING SOURCES </h2>
            <p>
              To Sync ProjectSakura Sources you will need to execute the following
              command
              {" "}
              <br />
              (PS: This command will shallow sync the sources which saves
              bandwidth and storage space if you are just going to build and not
              do any source side changes.)
              <br />
              <br />
            </p>
            <div className="wrapper">
              <SyntaxHighLighter language="bash" style={dracula}>
                repo init --depth=1 -u git://github.com/ProjectSakura/android.git -b 11 && repo sync --current-branch --force-sync --no-clone-bundle --no-tags --optimized-fetch --prune -j `nproc`
              </SyntaxHighLighter>
            </div>
            <hr />
            <h2>BUILDING SAKURA </h2>
            <p>
              Now execute the below command to start building ProjectSakura,
              replace "devicecodename" with your device's code. E.g, for ASUS
              ZENFONE MAX PRO M1 we will write X00T.
              <br />
              <br />
            </p>
            <SyntaxHighLighter language="bash" style={dracula}>
              . build/envsetup.sh && lunch lineage_devicecodename-userdebug && mka bacon -jx
            </SyntaxHighLighter>
          </div>
        </center>
      )}
    </div>
  );
};

export default BuildSakura;
