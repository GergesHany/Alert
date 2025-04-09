import "./index.scss"
import { Bell, X } from 'lucide-react';
import type { alertTypes } from "../../../types";
import type { ReactNode } from "react";

interface IProps {
  type: alertTypes,
  title: string,
  icon: ReactNode,
  description?: string,
  children?: ReactNode 
}

const Alert = ({type, title, icon, description, children}: IProps) => {
  return (
    <div className={type}>
      <div className='alert-header'>
        <div className='title'>
          <span> {icon} </span>
          <h4>{title}</h4>
        </div>
        <X size={30} />
      </div>
        {children ? children : <p> {description} </p>}
    </div>
  )
}

export default Alert;