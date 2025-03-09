import { siteConfig } from "@/constants/config";
import React from "react";
import { Button } from "./ui/button";

const DownloadResume = () => {
  const downloadCV = () => {
    // You can link this to your actual resume file
    const link = document.createElement("a");
    link.href = siteConfig.resume.url;
    link.download = siteConfig.resume.filename;
    link.target = "_blank";
    link.click();
  };

  return <Button onClick={downloadCV}>Download CV</Button>;
};

export default DownloadResume;
