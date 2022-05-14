/* eslint-disable react/require-default-props */
import { useEffect } from 'react'
import './styles.scss'

type InfoMessageProps = {
  message: string
  setState?: ({ show, message }: { show: boolean; message: string }) => void
  optOperation?: () => void
  width?: number
  timeout?: number
}

function InfoMessage({
  message,
  setState,
  optOperation = () => null,
  width,
  timeout,
}: InfoMessageProps) {
  useEffect(() => {
    if (setState) {
      setTimeout(() => {
        setState({ show: false, message: '' })
      }, timeout || 2500)
    }

    return () => {
      if (setState) {
        setState({ show: false, message: '' })
        optOperation()
      }
    }
  }, [])

  return (
    <div style={{ width: `${width}%` }} className='infoMessage'>
      <p>{message}</p>
    </div>
  )
}

export default InfoMessage
