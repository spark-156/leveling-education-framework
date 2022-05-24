import { Avatar } from 'antd';
import { Link } from './Link';


export function LucaBergmanProfile () {
    return <Link style={{ fontSize: "1.05em", fontWeight: 630 }} href="https://www.lucabergman.nl"><Avatar src="/fotovanmij.jpeg" />Luca Bergman</Link>
}