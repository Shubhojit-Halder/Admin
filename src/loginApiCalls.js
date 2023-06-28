
import { loginStart,loginSuccessful,loginFailed } from "./ReduxStore/userSlice";
import { publicRequest } from "./RequestMethods";

export const loginReq=async (dispatch,user)=>{
    dispatch(loginStart());
    try{
        const res = await publicRequest.post("/auth/login",user)
        dispatch(loginSuccessful(res.data))
    }catch(error){
        dispatch(loginFailed());
    }
}