import "./App.css";
import useNotification from "./hooks/use-notification";

function App() {
  //this is custom hook for notification it will takes the position for notification and
  // triggerNotification is function which is take th type, message and duration
  // after taking all the value it return the component called as 'NotificationComponent';
  const { NotificationComponent, triggerNotification } =
    useNotification("top-right");

  return (
    <div className="App">
      <button
        onClick={() =>
          triggerNotification({
            type: "success",
            message: "Work Done",
            duration: 3000,
          })
        }
      >
        Trigger Success
      </button>
      <button
        onClick={() =>
          triggerNotification({
            type: "error",
            message: "Something went wrong!",
            duration: 3000,
          })
        }
      >
        Trigger Success
      </button>
      <button
        onClick={() =>
          triggerNotification({
            type: "info",
            message: "Read Carefully",
            duration: 3000,
          })
        }
      >
        Trigger Success
      </button>
      <button
        onClick={() =>
          triggerNotification({
            type: "warning",
            message: "Do not try me",
            duration: 3000,
          })
        }
      >
        Trigger Success
      </button>
      {NotificationComponent}
    </div>
  );
}

export default App;
