import React from "react";
import { Avatar } from "antd";
import { Link } from "./Link";
import { useSelector } from "react-redux";
import { selectBreakpoint } from "../store/breakpointSlice";

export function LucaBergmanProfile () {
  const breakpoint = useSelector(selectBreakpoint)
  return <>
    {!breakpoint ? "This website has been made by: " : null}
    <Link href="https://www.lucabergman.nl">
      <Avatar src="/fotovanmij.jpeg" size="large" alt='picteure of me'/>Luca Bergman
    </Link>
  </>
}