import Navbar from "./Navbar";
import React, { ReactNode } from "react";
import { Box, Container, CssBaseline, Toolbar } from "@mui/material";
import Head from "next/head";

const drawerWidth = 240;

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Head>
        <title>LEF - Leveling Education Framework</title>
        <meta name="description" content="Leveling Education Framework" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container maxWidth="xl" sx={{ display: "flex", paddingX: 0 }}>
        <CssBaseline />
        <Navbar drawerWidth={drawerWidth} />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            width: { md: `calc(100% - ${drawerWidth}px)` },
          }}
        >
          <Toolbar />
          {children}
        </Box>
        {/*<Footer />*/}
      </Container>
    </>
  );
}
