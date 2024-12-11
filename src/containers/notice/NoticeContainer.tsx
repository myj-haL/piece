import { Box } from "@chakra-ui/react";
import Head from "next/head";
import Layout from "@/components/Layouts";
import { NoticeHeader } from "./Notice.Header";
import { NoticeContents } from "./Notice.Contents";
import { createContext, useState } from "react";

export const SearchContext = createContext(null);

const NoticeContainer = () => {
  const [searchValue, setSearchValue] = useState("");
  return (
    <>
      <Head>
        <title>PIECE</title>
      </Head>
      <Box>
        <Layout>
          <Box margin={"0 auto"}>
            <SearchContext.Provider value={{ searchValue, setSearchValue }}>
              <NoticeHeader />
              <NoticeContents />
            </SearchContext.Provider>
          </Box>
        </Layout>
      </Box>
    </>
  );
};

export default NoticeContainer;
