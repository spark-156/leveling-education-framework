import { IconButton, Icon, Alert } from "rsuite"

import copy from 'copy-to-clipboard';

export function CopyToClipboardButton({ content }) {

    const setClipboard = (content) => {
        copy(content)
        Alert.success('Coppied contents to clipboard!')
    }

    return <IconButton icon={<Icon icon="copy" />} onClick={() => setClipboard(content)} />
}
