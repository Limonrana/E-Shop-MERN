import { toast } from 'react-toastify';

export const successMessage = (message, time = 3000) => {
    toast.success(message, {
        position: 'bottom-center',
        autoClose: time,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
};

export const infoMessage = (message, time = 3000) => {
    toast.info(message, {
        position: 'bottom-center',
        autoClose: time,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
};

export const errorMessage = (message, time = 3000) => {
    toast.error(message, {
        position: 'bottom-center',
        autoClose: time,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
};

export const warningMessage = (message, time = 3000) => {
    toast.warn(message, {
        position: 'bottom-center',
        autoClose: time,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
};
