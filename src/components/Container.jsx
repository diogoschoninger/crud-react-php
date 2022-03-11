export function Container(props) {
  return(
    <div style={{
      maxWidth: '1100px',
      margin: 'auto'
    }}>{props.children}
    </div>
  )
}
