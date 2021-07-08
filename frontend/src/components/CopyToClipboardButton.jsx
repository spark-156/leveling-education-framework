import { IconButton, Icon, Alert, Tooltip, Whisper } from "rsuite"

import copy from 'copy-to-clipboard';

export function CopyToClipboardButton({ content }) {

  const tooltip = (
    <Tooltip>
      Copy contents to clipboard
    </Tooltip>
  );

  const setClipboard = (content) => {
    try {
      copy(content)
      Alert.success('Coppied contents to clipboard!')
    } catch {
      Alert.error('Could not copy contents to clipboard. Please do it manually.')
    }
  }

  return (
    <Whisper placement="top" trigger="hover" speaker={tooltip}>
      <IconButton icon={<Icon icon="copy" />} onClick={() => setClipboard(content)} />
    </Whisper>
  )
}
