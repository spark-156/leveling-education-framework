import React from "react";

import { LoadingOutlined } from "@ant-design/icons";

export default function Loading() {
  return (
    <>
      <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw"
      }}>
        <LoadingOutlined style={{ fontSize: "2rem" }} />
      </div>
    </>
  );
}