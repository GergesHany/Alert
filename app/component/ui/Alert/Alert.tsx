import "./index.scss"
import { Bell, X } from 'lucide-react';


interface IProps {
  
}

const Alert = ({}: IProps) => {
  return (
    <div className="alert-danger" >
      <div className="alert-header">
        <div className="title">
          <span> <Bell /> </span> 
          <h4> Alert Title </h4>  
        </div>
        <X className="close" size={30} /> 
      </div>
      
      <p> Alert P </p>

    </div>
  );
};

export default Alert;