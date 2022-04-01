import React, { useContext } from 'react';
import AlertContext from '../context/alert/AlertContext';

const Alert = () => {
  const { alert } = useContext(AlertContext);
  if (alert !== null) {
    return (
      <p className="flex mb-4 space-x-2 items-center">
        {alert.type === 'error' && (
          <i
            className="fas fa-info-circle"
            style={{ color: 'rgba(255,0,0,0.8)' }}
          />
        )}
        <p className="flex-1 text-white text-base font-semibold">
          <strong>{alert.msg}</strong>
        </p>
      </p>
    );
  }
};

export default Alert;
