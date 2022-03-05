import { useSnackbar } from 'notistack';

/**
 * crete a notification setter
 * @returns notificatiion setter
 */
const useSetNotification = () => {
  const { enqueueSnackbar } = useSnackbar();

  /**
   * notification setter
   * @param {Object} params - notification params
   * @param {String} params.message - notification message
   * @param {String} params.variant - notification variant [error, info, success, warning, default]
   */
  const setNotification = (message, variant) =>
    enqueueSnackbar(message || 'Operación exitosa', { variant: variant || 'success' });
  return setNotification;
};

export default useSetNotification;
