import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";

function ToastShelf({ toasts, handleDismiss }) {
  return (
    <ol className={styles.wrapper}>
      {toasts.map(({ id, toastMessage, toastVariant }) => (
        <li key={id} className={styles.toastWrapper}>
          <Toast id={id} variant={toastVariant} handleDismiss={handleDismiss}>
            {toastMessage}
          </Toast>
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
