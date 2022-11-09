import React from "react";
import { Avatar } from "antd";
import { Link } from "./Link";

export function LucaBergmanProfile () {
  return <>
    <Link href="https://www.lucabergman.nl" style={{ textDecoration: "none" }}>
      <Avatar src="/fotovanmij.jpeg" size="medium" alt='picteure of me'/> &nbsp;Luca Bergman
    </Link>
  </>
}