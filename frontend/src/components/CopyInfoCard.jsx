import ReactMarkdown from "react-markdown";
import { CustomCard } from "./CustomCard";
import { CopyToClipboardButton } from "./CopyToClipboardButton";
import { InfoButton } from "./InfoButton";
import { Drawer, Space } from "antd";
import { useState } from "react";


export function CopyInfoCard ({ children, title, copy, info, infoTitle, headStyle }) {
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };

  return <>
    <CustomCard 
      headStyle={headStyle}
      title={title}
      extra={info ? 
        <Space>
          <InfoButton info={info} onClick={() => showDrawer()} />
          <CopyToClipboardButton content={copy} />
        </Space> 
        : 
        <Space>
          <CopyToClipboardButton content={copy} />
        </Space>
      }
      children={children}
    />
    {info ? <Drawer title={infoTitle} placement="right" onClose={onClose} visible={visible}>
      <ReactMarkdown>{ info }</ReactMarkdown>
    </Drawer> : null}
  </>
}
