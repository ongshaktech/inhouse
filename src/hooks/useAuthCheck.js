import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { userLogedIn } from "../features/auth/authSlice";

export default function useAuthCheck() {
  let [authIsReady, setAuthIsReady] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    let localAuth = localStorage.getItem("inhouse-auth");

    if (localAuth) {
      let auth = JSON.parse(localAuth);

      if (auth?.key) {
        dispatch(
          userLogedIn({
            key: auth?.key,
          })
        );
      }
    }

    setAuthIsReady(true);
  }, [dispatch]);

  return authIsReady;
}
