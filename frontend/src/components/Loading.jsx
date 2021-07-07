import React from "react";

export default function Loading() {
  const style = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  }

  return (
    <div style={style}>
      Loading...
    </div>
  );
}