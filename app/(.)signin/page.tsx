import { Modal } from "@/components/Modal";
import Login from "@/components/login";
import React from "react";

type Props = {
    searchParams?: Record<"callbackUrl" | "error", string>
}

const SignInPage2 = (props: Props) =>{
    return(
        <Modal>
            
<Login error={props.searchParams?.error} callbackUrl={props.searchParams?.callbackUrl}></Login>
        </Modal>
    )
} 
export default SignInPage2;