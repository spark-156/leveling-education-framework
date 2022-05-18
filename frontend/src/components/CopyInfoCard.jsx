import { CustomCard } from "./CustomCard";
import { CopyToClipboardButton } from "./CopyToClipboardButton";
import { InfoButton } from "./InfoButton";
import { Drawer } from "antd";
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
      extra={<>
        <InfoButton info={info} onClick={() => showDrawer()} />
        <CopyToClipboardButton content={copy} />
      </>}
      children={children}
    />
    <Drawer title={infoTitle} placement="right" onClose={onClose} visible={visible}>
      <p>{ info }</p>
    </Drawer>
  </>
}
