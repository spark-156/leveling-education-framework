import { IconButton, Icon } from "rsuite"

import copy from 'copy-to-clipboard';

export function CopyToClipboardButton({ content }) {

    const setClipboard = (content) => {
        copy(content, { debug: true })
    }

    return <IconButton icon={<Icon icon="copy" />} onClick={() => setClipboard(content)} />
}
