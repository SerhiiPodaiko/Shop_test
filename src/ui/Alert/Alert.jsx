import './Alert.scss'

// ================== COLORS ============
// success
// error
// info
// ================== COLORS ============

const Alert = ({ children, color }) => {
  return (
    <div className={`alert alert-${color}`}>
      <p className='alert__message'>{children}</p>
    </div>
  )
}

export default Alert
