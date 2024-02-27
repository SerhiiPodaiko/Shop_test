import './Button.scss'
export default function Button({ children, type, className, handlerClick, disabled }) {
  return (
    <button type={type} disabled={disabled} className={className} onClick={handlerClick}>
      {children}
    </button>
  )
}
