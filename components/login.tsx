"use client"
import React, { useRef } from "react";
import InputBox from "./InputBox";
import { Button } from "./Button";
import Link from "next/link";
import { signIn } from "next-auth/react";

type Props = {
    className?: string;
    callbackUrl?: string;
    error?: string;
}

const Login = (props: Props) => {
    const userName = useRef("");
    const pass = useRef("");
    const onSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await signIn("credentials", {
            email: userName.current,
            password: pass.current,
            redirect: true,
            callbackUrl: props.callbackUrl ?? "http://localhost:3000",
        });
    };
    return(
       <div className="h-50 bg-pink-200 flex justify-center items-center p-16 border-4 border-pink-300"> 
       <div className={props.className}>
        </div>
        {!!props.error && <p>Logowanie nie powiodło się</p>}
        <form onSubmit={onSubmit}>
            <InputBox className="block w-full p-2 rounded  focus:ring-2 focus:ring-pink-500 focus:border-transparent focus:outline-none"
                name="email"
                labelText="Adres e-mail"
                onChange={(e) => (userName.current = e.target.value)}
            />
            <InputBox className="block w-full p-2 rounded focus:ring-2 focus:ring-pink-500 focus:border-transparent focus:outline-none"
                name="password"
                type="password"
                labelText="Hasło"
                onChange={(e) => (pass.current = e.target.value)}
            />
                    <div className="flex items-center justify-center mt-2 gap-2">
          <Link href={"/signin"} className="w-280 border border-pink-600 text-pink-600 transition hover:bg-pink-600 hover:text-white hover:border-transparent text-center p-2 rounded-md w-28">
            Sign In
          </Link>
          <Link
            href={props.callbackUrl ?? "/"}
            className="w-28 border border-red-600 text-center py-2 rounded-md text-red-600 transition hover:bg-red-600 hover:text-white hover:border-transparent active:scale-95"
          >
            Cancel
          </Link>
        </div>
        </form></div>
    )
};

export default Login;