import React from 'react'
import { Toaster, toast} from 'react-hot-toast';
import { useAppContext } from "../context/Context";



const ToastAlert = () => {
    const {  alertText, alertType } = useAppContext();

if(alertType === "success"){
    toast.success(alertText)
}
if(alertType === "error"){
    toast.error(alertText)
}

  return (
    <Toaster position='top-center' reverseOrder={false}></Toaster>
  )
}

export default ToastAlert