export interface IFieldState {
    value: string;
    error: boolean;
    required: boolean;
}

export interface IInFormState {
    firstName: IFieldState,
    lastName: IFieldState,
    email: IFieldState,
    designation: IFieldState
}

export interface IOutFormState extends IInFormState {
    id: string;
}