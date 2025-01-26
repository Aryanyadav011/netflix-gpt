import { createBrowserRouter } from "react-router-dom";
import Browse from "./Browse";
import Login from "./Login";
import { RouterProvider } from "react-router-dom";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { addUser,removeUser } from "../utils/userSlice";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";

const Body = () =>{
    const dispatch=useDispatch();
    //const navigate=useNavigate();
    


    const appRouter=createBrowserRouter([
        {
            path: "/",
            element: <Login/>
        },
        {
            path: "/browse",
            element: <Browse/>
        }
    ]);

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
             
              const {uid, email, displayName, photoURL} = user;
              dispatch(
                addUser({
                    uid:uid, 
                    email: email, 
                    displayName:displayName,
                    photoURL:photoURL 

              })
            );
            //navigate("/browse");

              

            
            } else {
              
              dispatch(removeUser());
              //navigate("/");
           
            }
          });

          return ()=> unsubscribe();
    },[]);
    return(
        <div>
           <RouterProvider router={appRouter}>
           {/* <Login/>
            <Browse/> */}
           </RouterProvider>
           

        </div>
    )
}
export default Body;