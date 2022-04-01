import React from "react";

export function Link({ href, children }) {
  return (
    <a
      href={href}
      referrerPolicy="no-referrer"
      target="_blank"
      rel="noreferrer"
    >
      {children}
    </a>
  );
}
