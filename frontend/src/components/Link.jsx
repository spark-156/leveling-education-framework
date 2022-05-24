import React from "react";

export function Link({ href, children, style }) {
  return (
    <a
      href={href}
      referrerPolicy="no-referrer"
      target="_blank"
      rel="noreferrer"
      style={{ color: "inherit", textDecoration: "underline", ...style }}
    >
      {children}
    </a>
  );
}
