import Alert from "~/component/ui/Alert/Alert";
import { AlertTriangle, Ban, Bell, CheckCheck, Info } from "lucide-react";

export function Welcome() {
  return (
    <div className='App'>
      <Alert 
        type = "alert-default"
        title = "Default"
        icon = {<Bell size={24} />}
        >
          <p>
            This is an alert with default type, 
            it has a description and a child component and you can add link like this <a href="https://www.google.com">Google</a>
          </p>
      </Alert>

     <Alert 
        type = "alert-info"
        title = "Default"
        icon = {<Bell size={24} />}
        >
          <p>
          This is an alert with info type, 
            it has a description and a child component and you can add link like this <a href="https://www.google.com">Google</a>
          </p>
      </Alert>

     <Alert 
        type = "alert-warning"
        title = "Default"
        icon = {<Bell size={24} />}
        >
          <p>
          This is an alert with warning type , 
            it has a description and a child component and you can add link like this <a href="https://www.google.com">Google</a>
          </p>
      </Alert>


      <Alert 
        type = {"alert-error"}
        title = {"Error"}
        icon = {<Ban size={24} />}
        description = "This is an alert with error type"
      />

      <Alert 
        type = {"alert-success"}
        title = {"Success"}
        icon = {<CheckCheck size={24} />}
        description = "This is an alert with success type"
      />
    </div>
  )
}

