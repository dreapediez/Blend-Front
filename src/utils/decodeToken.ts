import { JwtPayloadCustom } from "../types/userTypes";
import jwtDecode from "jwt-decode";

const decodeToken = (token: string) => {
  const jwtPayload: JwtPayloadCustom = jwtDecode(token);

  return {
    id: jwtPayload.id,
    username: jwtPayload.username,
    email: jwtPayload.email,
  };
};

export default decodeToken;
