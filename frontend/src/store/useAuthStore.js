import { create } from "zustand";

export const useAuthStore = create ((set)=>({
    isLogged: false,
    login: ()=>{
        console.log("we just loggedin , hi");
        set({isLogged: true});
    }
}))