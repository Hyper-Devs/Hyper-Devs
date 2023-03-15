import "./notificationBox.css";

function notificationBox() {
  return (
    <div className="notifBox">
      <div className="rectangle">
        <p>Notification Access</p>
        <div className="rectangle2">
          <div className="rectangle3">
            <div className="buttonContainer">
              <button>Subscription Status</button>
            </div>
            <div className="buttonContainer">
              <button>Message Context</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default notificationBox;
