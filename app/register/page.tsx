import RegisterForm from "@/components/RegisterForm";

type Props = {
    searchParams?: Record<"callbackUrl" | "error", string>
}

const Register = (props: Props) => {
    return (
        <RegisterForm/>
    )
}
export default Register;