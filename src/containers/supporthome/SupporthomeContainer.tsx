import { Box } from "@chakra-ui/react";
import Head from "next/head";
import Layout from "@/components/Layouts";
import { SupportHeader } from "./Support.Header";
import { HelpMoreContents, SupportContents } from "./Support.Contents";

const SupporthomeContainer = () => {
  return (
    <>
      <Head>
        <title>PIECE</title>
      </Head>
      <Box>
        <Layout>
          <Box margin={"0 auto"}>
            <SupportHeader />
            <SupportContents />
            <HelpMoreContents />
          </Box>
        </Layout>
      </Box>
    </>
  );
};

export default SupporthomeContainer;
