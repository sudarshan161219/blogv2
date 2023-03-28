
import { toast } from "react-toastify";





export const loginFn = async (username, userpassword) => {
  try {
    const response = await fetch("http://localhost:3000/api/login", {
      method: "POST",
      body: JSON.stringify({ username, userpassword }),
      headers: { "content-Type": "application/json" },
      credentials: "include",
    })

    if (response.status === 200) {
      toast.success(`successfully logged in`, {
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
        window.location.href = "/"
      }
      setTimeout(navigate, 3000)
    } else {
      toast.error(`Opps!!, Login failed`, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  } catch (error) {
    console.log(error);
  }
}

export const profileFn = async (token) => {
  try {
    await fetch("http://localhost:3000/profile", {
      credentials: "include",
      headers: { "authorization": `Bearer  ${token}` },
      // Authorization: token
    }).then((response) => {
      response.json().then((userInfo) => {
        console.log(userInfo);
      })
    })

  } catch (error) {
    console.log(error);
  }
}