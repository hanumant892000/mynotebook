import React, { useEffect } from "react";
import { useAuthState } from "../contextapi/AuthState";
import { useNavigate } from "react-router-dom";

function ProtectAuth({ children }) {

  const navigate = useNavigate();
  const { isLogin } = useAuthState();

  useEffect(() => {
    if (!isLogin) {
      navigate("/login");
      return;
    }
  }, []);

  return <>{children}</>;
}

export default ProtectAuth;
