import React from "react";
import useEscapeKey from "../../hooks/useEscapeKey";

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

  function createToast(message, variant) {
    const nextToasts = [
      ...toasts,
      {
        id: crypto.randomUUID(),
        message,
        variant,
      },
    ];

    setToasts(nextToasts);
  }

  function dissmissToast(id) {
    const filteredToast = toasts.filter((toast) => toast.id !== id);
    setToasts(filteredToast);
  }

  useEscapeKey(() => setToasts([]));

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
