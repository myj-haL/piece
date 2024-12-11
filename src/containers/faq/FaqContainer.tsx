import { Box } from "@chakra-ui/react";
import Head from "next/head";
import Layout from "@/components/Layouts";
import { FaqHeader } from "./Faq.Header";
import { FaqContents } from "./Faq.Cotents";
import { createContext, useState } from "react";

export const SearchContext = createContext(null);

const FaqContainer = () => {
  const [searchValue, setSearchValue] = useState("");
  return (
    <>
      <Head>
        <title>PIECE</title>
      </Head>
      <Box>
        <Layout>
          <Box margin={"0 auto"} padding={"0 0 80px"}>
            <SearchContext.Provider value={{ searchValue, setSearchValue }}>
              <FaqHeader />
              <FaqContents />
            </SearchContext.Provider>
          </Box>
        </Layout>
      </Box>
    </>
  );
};

export default FaqContainer;
