
// Classname and the such in index.css get applied before inhouse style of ant-design. Ant design causes an overflow on the x axis which is negated by exporting the style object like such
export const rowStyle = {
  marginLeft: 0,
  marginRight: 0
}