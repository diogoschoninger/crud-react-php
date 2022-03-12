export function Header(props) {
  return(
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}
    >
      {props.children}
    </div>
  )
}
