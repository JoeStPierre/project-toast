import React from "react";

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

  function createToast(message, variant) {
    const newToast = {
      id: crypto.randomUUID(),
      message,
      variant,
    };

    setToasts([...toasts, newToast]);
  }

  function dissmissToast(id) {
    const filteredToast = toasts.filter((toast) => toast.id !== id);
    setToasts(filteredToast);
  }

  return (
    <ToastContext.Provider
      value={{
        toasts,
        createToast,
        dissmissToast,
      }}
    >
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
