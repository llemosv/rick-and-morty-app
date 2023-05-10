import { useContext } from "react";
import { PageContext } from "../contexts/PageContext";

export const usePage = () => {
    return useContext(PageContext)
}