import {toast } from "react-hot-toast";

export default function validateUrl (url) {
    try {
        const newUrl = new URL(url)
        return newUrl.protocol === "http:" ||  newUrl.protocol === "https:"
    } catch (error) {
        toast.error("Please provide valid url");
        // return false
    }
}