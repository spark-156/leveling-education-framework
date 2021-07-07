import { IconButton, Icon, Alert } from "rsuite"

import copy from 'copy-to-clipboard';

export function CopyToClipboardButton({ content }) {

    const setClipboard = (content) => {
        try {
            copy(content)
            Alert.success('Coppied contents to clipboard!')
        } catch {
            Alert.error('Could not copy contents to clipboard. Please do it manually.')
        }
    }

    return <IconButton icon={<Icon icon="copy" />} onClick={() => setClipboard(content)} />
}
