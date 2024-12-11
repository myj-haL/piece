"use client";

import useScreenSize from "@/hook/useScreenSize";
import React, { useEffect, useState } from "react";

export const TitleRender = ({ title }: { title: string }) => {
  const { device } = useScreenSize();
  const [deviceType, setDeviceType] = useState<string>('');

  useEffect(() => {
      setDeviceType(device);
  }, [device]);
  
  const [isClient, setIsClient] = React.useState(false);
  React.useEffect(() => {
    setIsClient(true);
  }, []);
  if (!isClient) return null;
  if (deviceType === 'mobile') {
    return (
      <>
        {title.split("\n").map((line, i) => (
          <React.Fragment key={i}>
            {line}
            <br />
          </React.Fragment>
        ))}
      </>
    );
  }
  return <>{title}</>;
};
