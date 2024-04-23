import { axiosinstance } from "../Apicalls/index";

export const RegisterUser = async (payload) => {
  try {
    const response = await axiosinstance.post(
      "http://localhost:7676/user/register",
      payload
    );
    return response.data;
  } catch (error) {
    console.log("error in fetch User ApI", error);
  }
};

export const loginUser = async (payload) => {
  try {
    const response = await axiosinstance.post(
      "http://localhost:7676/user/login",
      payload
    );
    return response.data;
  } catch (error) {
    console.log("error in fetch User ApI", error);
  }
};

export const GetCurrentUsers = async () => {
  try {
    const response = await axiosinstance.get(
      "http://localhost:7676/user/get-currentuser"
    );
    return response.data;
  } catch (error) {
    console.log("error in fetch User ApI", error);
  }
};



// get user details


export const GetAllUser =async()=>{

  try {
      const response =await axiosinstance.get("http://localhost:7676/user/get-usersdetails")
      return response.data
      
  } catch (error) {
      
      
      return error
  }
}