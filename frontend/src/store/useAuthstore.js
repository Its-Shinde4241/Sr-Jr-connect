import { create } from "zustand";
import { axiosInstance } from "../lib/axios.js";
import toast from "react-hot-toast";

export const useAuthstore = create((set) => ({
    authUser: null,
    isregistering: false,
    isLoggingIn: false,
    isUpdatingProfile: false,
    isCheckingAuth: true,

    checkAuth: async () => {
        try {
            const result = await axiosInstance.get("/auth/check");
            set({ authUser: result.data });
        } catch (error) {
            console.log("Error in checkauth : ", error)
            set({ authUser: null })
        } finally {
            set({ isCheckingAuth: false })
        }
    },

    register: async (data) => {
        set({ isregistering: true });
        // console.log(data);
        try {
            const result = await axiosInstance.post("/auth/register", data);
            set({ authUser: result.data });
            toast.success("Account Created Successfully");
        } catch (error) {
            toast.error(error.response.data.message);
        } finally {
            set({ isregistering: false });
        }
    },

    login: async (data) => {
        set({ isLoggingIn: true });
        try {
            const result = await axiosInstance.post("/auth/login", data);
            set({ authUser: result.data });
            toast.success("Logged in successfully");
        } catch (error) {
            toast.error(error.response.data.message);
        } finally {
            set({ isLoggingIn: false });
        }
    },

    logout: async () => {
        try {
            await axiosInstance.post("/auth/logout");
            set({ authUser: null });
            toast.success("Logged out successfully");
        } catch (error) {
            toast.error(error.response.data.message);
        }
    },
    update: async (data) => {
        set({ isUpdatingProfile: true });
        try {
            const result = await axiosInstance.put("/auth/update", data);
            set({ authUser: result.data });
            toast.success("Profile Updated Successfully");
        } catch (error) {
            toast.error(error.response.data.message);
        } finally {
            set({ isUpdatingProfile: false });
        }
    }
    ,
    deleteUser: async () => {
        try {
            await axiosInstance.delete("/auth/delete");
            set({ authUser: null });
            toast.success("Account Deleted Successfully");
        } catch (error) {
            toast.error(error.response.data.message);
        }
    }
}));
