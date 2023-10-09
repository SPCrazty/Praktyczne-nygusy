import Login from "@/components/login";
import NavBar from "@/components/navbar";
import React from "react";

type Props = {
    searchParams?: Record<"callbackUrl" | "error", string>
}

const SignInPage = (props: Props) =>{
    return(
        <Login error={props.searchParams?.error} callbackUrl={props.searchParams?.callbackUrl}></Login>
    )
}
export default SignInPage;