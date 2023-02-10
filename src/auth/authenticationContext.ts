import {claim} from "./auth.model";
import React from "react";

const AuthenticationContext = React.createContext<{
    claims: claim[];
    update: (claims: claim[]) => void;
}>({
    claims: [], update: () => {
    }
});
export default AuthenticationContext;