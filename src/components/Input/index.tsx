import { Box, Input } from "@chakra-ui/react";
import Image from "next/image";
import { useEffect, useState } from "react";

import SearchIcon from "/public/images/styles/images/ic-search.svg";
import useScreenSize from "@/hook/useScreenSize";


export const CustomInput = ({ placeholder, searchValue, setSearchValue }) => {
  const { device } = useScreenSize();
  const [deviceType, setDeviceType] = useState<string>('');

  useEffect(() => {
      setDeviceType(device);
  }, [device]);

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  if (isClient) {
    return (
      <Box position={"relative"}>
        <Input
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          position={"relative"}
          height={["44px", "80px"]}
          width={"100%"}
          maxWidth={"760px"}
          textAlign={["left", "center"]}
          fontSize={["16px", "28px"]}
          fontWeight="600"
          lineHeight={["40px", "80px"]}
          borderRadius={["24px", "40px"]}
          padding={["11px 20px", "0 20px"]}
          border={["1px solid #DADCE3", "3px solid #292A2E"]}
          outline={"none"}
          outlineColor={"none"}
          outlineOffset={"none"}
          _hover={{
            borderColor: ["#DADCE3", "#292A2E"],
            outline: "none",
            outlineOffset: "none",
            boxShadow: "none",
          }}
          _focus={{
            borderColor: ["#DADCE3", "#292A2E"],
            outline: "none",
            outlineOffset: "none",
            boxShadow: "none",
          }}
          sx={{
            "&::placeholder": {
              color: "#8C919F",
              fontSize: ["16px", "28px"],
              fontWeight: "600",
              lineHeight: "40px",
              letterSpacing: "-0.03em",
              textAlign: ["left", "center"],
            },

            "&::-ms-clear, &::-ms-reveal": {
              display: "none",
            },
            "&::-webkit-search-decoration, &::-webkit-search-cancel-button, &::-webkit-search-results-button, &::-webkit-search-results-decoration":
              {
                display: "none",
              },
            "&[type='search']::-webkit-search-decoration, &[type='search']::-webkit-search-cancel-button, &[type='search']::-webkit-search-results-button, &[type='search']::-webkit-search-results-decoration":
              {
                display: "none",
              },
          }}
          placeholder={placeholder}
          type="search"
        />
        <button
          style={{
            position: "absolute",
            right: "24px",
            top: "50%",
            transform: "translateY(-50%)",
            background: "none",
            border: "none",
            cursor: "pointer",
          }}
          type="button"
        >
          <Image
            style={{
              width: deviceType === 'mobile' ? '20px' : '32px',   
              height: deviceType === 'mobile' ? '20px' : '32px' 
            }}
            src={SearchIcon}
            alt="search"
          />
        </button>
      </Box>
    );
  }
  return null;
};
