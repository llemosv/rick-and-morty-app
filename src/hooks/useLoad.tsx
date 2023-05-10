import { useContext } from "react";
import { LoadContext } from "../contexts/LoadContext";

export const useLoad = () => {
    return useContext(LoadContext)
}