import { OptionsObject } from 'notistack';

export const showSnackbar = (
    enqueueSnackbar: ((text: string, arg1: OptionsObject) => void),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    action: any,
    text: string,
    variant: 'success' | 'error'
): void => {
    const x: OptionsObject = {
        variant: variant,
        anchorOrigin: {
            vertical: 'bottom',
            horizontal: 'center'
        },
        action: (x) => action != null ? action(x) : false
    };
    enqueueSnackbar(text, x);
};
