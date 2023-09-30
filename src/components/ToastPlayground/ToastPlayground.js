import React from "react";

import Button from "../Button";
import ToastShelf from "../ToastShelf";

import styles from "./ToastPlayground.module.css";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastPlayground() {
  const [toasts, setToasts] = React.useState([]);
  const [toastMessage, setToastMessage] = React.useState("");
  const [toastVariant, setToastVariant] = React.useState(VARIANT_OPTIONS[0]);

  function handleNewToast(event) {
    event.preventDefault();
    const newToast = {
      id: crypto.randomUUID(),
      toastMessage,
      toastVariant,
    };

    setToasts([...toasts, newToast]);
    setToastMessage("");
    setToastVariant(VARIANT_OPTIONS[0]);
  }

  function handleDismiss(id) {
    const filteredToast = toasts.filter((toast) => toast.id !== id);
    setToasts(filteredToast);
  }

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      <ToastShelf toasts={toasts} handleDismiss={handleDismiss} />

      <form className={styles.controlsWrapper} onSubmit={handleNewToast}>
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: "baseline" }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea
              required
              id="message"
              className={styles.messageInput}
              value={toastMessage}
              onChange={(event) => setToastMessage(event.target.value)}
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            {VARIANT_OPTIONS.map((option) => (
              <label htmlFor={option} key={option}>
                <input
                  required
                  id={option}
                  type="radio"
                  name="variant"
                  value={option}
                  checked={option === toastVariant}
                  onChange={(event) => setToastVariant(event.target.value)}
                />
                {option}
              </label>
            ))}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            <Button>Pop Toast!</Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ToastPlayground;
