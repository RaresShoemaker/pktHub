// import { TOASTER_ACTIONS, TOASTER_TYPES } from './constants';
// import { ToasterBannerState, ToasterBannerAction } from './constants';

// const initialState: ToasterBannerState = {
// 	showToaster: true,
// 	toasterMessage: 'Test message',
// 	toasterType: TOASTER_TYPES.SUCCESS
// };

// const toasterReducer = (state: ToasterBannerState, action: ToasterBannerAction) => {
// 	switch (action.type) {
// 		case TOASTER_ACTIONS.SHOW_TOASTER:
// 			return {
// 				...state,
// 				showToaster: true,
// 				toasterMessage: action.payload.message,
// 				toasterType: action.payload.type
// 			};

// 		case TOASTER_ACTIONS.HIDE_TOASTER:
// 			return {
// 				...state,
// 				showToaster: false,
// 				toasterMessage: '',
// 				toasterType: null
// 			};

// 		default:
// 			throw new Error('Invalid action type' + action.type);
// 	}
// };

// export { initialState, toasterReducer };

// ToasterBannerReducer.ts
import { Toast, ToasterBannerState, ToasterBannerAction, TOASTER_ACTIONS } from './constants';

const initialState: ToasterBannerState = {
  toasts: []
};

const generateId = () => Math.random().toString(36).substring(2, 9);

const toasterReducer = (state: ToasterBannerState, action: ToasterBannerAction): ToasterBannerState => {
  switch (action.type) {
    case TOASTER_ACTIONS.ADD_TOAST: {
      const newToast: Toast = {
        ...action.payload,
        id: action.payload.id || generateId()
      };
      
      return {
        ...state,
        toasts: [newToast, ...state.toasts].slice(0, 3) // Keep maximum 3 toasts
      };
    }

    case TOASTER_ACTIONS.REMOVE_TOAST: {
      return {
        ...state,
        toasts: state.toasts.filter(toast => toast.id !== action.payload.id)
      };
    }

    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};

export { initialState, toasterReducer };