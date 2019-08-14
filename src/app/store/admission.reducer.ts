import { Action } from '@ngrx/store';

export interface IAdmissionState {
  name: string;
  email: string;
  rg: string;
  cpf: string;
  hireDate: string;
  registernumber: string;
}

export const admissionInitialState = {
  name: null,
  email: null,
  cpf: null,
  rg: null,
  registernumber: null,
  hireDate: null,
};


export enum ActionTypes {
  admissionUpdateForm = '[Admission Update] Load form values',
}

export class AdmissionActionUpdateForm implements Action {
  readonly type = ActionTypes.admissionUpdateForm;

  constructor(public payload: IAdmissionState) {
  }
}

export function reducer(state = admissionInitialState, action: AdmissionActionUpdateForm) {
  const { payload } = action;
  switch (action.type) {
    case ActionTypes.admissionUpdateForm:
      return {
        ...state,
        ...payload
      };
    default:
      return state;
  }

}
