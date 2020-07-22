import { Alert } from '../../interfaces/alert';

export const SET_ALERT = 'Blitster/alert/SET_ALERT';
export const REMOVE_ALERT = 'Blitster/alert/REMOVE_ALERT';
export const CLEAR_ALERTS = 'Blitster/alert/CLEAR_ALERTS';

interface SetAlertAction {
  type: typeof SET_ALERT;
  alert: Alert;
}

interface RemoveAlertAction {
  type: typeof REMOVE_ALERT;
  id: string;
}

interface ClearAlertsAction {
  type: typeof CLEAR_ALERTS;
}

export type AlertActionTypes =
  | SetAlertAction
  | RemoveAlertAction
  | ClearAlertsAction;
