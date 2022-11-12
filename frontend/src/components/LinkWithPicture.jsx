import React from "react";
import { Avatar } from "antd";
import { Link } from "./Link";

export function LinkWithPicture ({href, imageSrc, alt, children}) {
  return <>
    <Link href={href} style={{ textDecoration: "none" }}>
      <Avatar src={imageSrc} size="medium" alt={alt}/> &nbsp;{children}
    </Link>
  </>
}