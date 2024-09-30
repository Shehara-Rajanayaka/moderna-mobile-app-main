import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface AuthState {
  code: string;
  firstName: string;
  surName: string;
  password: string;
  passwordLengthAcceptable: boolean;
  passwordContainData: boolean;
  email: string;
}

const initialState: AuthState = {
  code: '',
  firstName: '',
  surName: '',
  password: '',
  passwordLengthAcceptable: false,
  passwordContainData: false,
  email: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCode(state, action: PayloadAction<string>) {
      state.code = action.payload;
    },
    setFirstName(state, action: PayloadAction<string>) {
      state.firstName = action.payload;
    },
    setSurName(state, action: PayloadAction<string>) {
      state.surName = action.payload;
    },
    setPassword(state, action: PayloadAction<string>) {
      state.password = action.payload;
      state.passwordLengthAcceptable = action.payload.length >= 8;
      // Example regex check for password requirements
      const passwordRegex =  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/;
      state.passwordContainData = passwordRegex.test(action.payload);
    },
    setEmail(state, action: PayloadAction<string>) {
      state.email = action.payload;
    },
  },
});

export const {setCode, setFirstName, setSurName, setPassword, setEmail} =
  authSlice.actions;

export default authSlice.reducer;
