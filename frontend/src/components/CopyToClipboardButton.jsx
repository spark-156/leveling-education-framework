import React from "react";
import { Button, Tooltip, message } from "antd";
import { CopyOutlined } from "@ant-design/icons";
import copy from "copy-to-clipboard";

export function CopyToClipboardButton({ content }) {

  const setClipboard = (content) => {
    try {
      copy(content)
      message.success("Coppied contents to clipboard!", [1])
    } catch {
      message.error("Could not copy contents to clipboard. Please do it manually.", [1])
    }
  }

  return <Tooltip title="Copy card contents to clipboard">
    <Button icon={<CopyOutlined />} onClick={() => setClipboard(content)} />
  </Tooltip>
}
