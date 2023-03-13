
import { toast } from "react-toastify";





export const registerFn = async (useremail, username, userpassword) => {


  try {

    const response = await fetch("http://localhost:3000/register", {
      method: "POST",
      body: JSON.stringify({ useremail, username, userpassword }),
      headers: { "content-Type": "application/json" },
    });

    if (response.status === 200) {
      toast.success(`you have successfully created your account `, {
        position: "top-right",
        autoClose: 3026,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      function navigate() {
        window.location.href = "/login"
      }
      setTimeout(navigate, 3000)
    }
    else {
      toast.error(`Opps!!, username  or email is already in use`, {
        position: "top-right",
        autoClose: 3026,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }

  } catch (error) {
    console.log(error);
  }
}


