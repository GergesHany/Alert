import "./index.scss"
import { Bell, X } from 'lucide-react';


interface IProps {
  
}

const Alert = ({}: IProps) => {
  return (
    <div className="alert-wrapper" >
      <Bell />
      Alert Title
      <p> Alert P </p>
      <span> <X /> </span>
    </div>
  );
};

export default Alert;