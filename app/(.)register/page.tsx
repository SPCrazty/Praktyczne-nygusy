import { Modal } from "@/components/Modal";
import RegisterForm from "@/components/RegisterForm";

type Props = {
    searchParams?: Record<"callbackUrl" | "error", string>
}

const Register2 = (props: Props) => {
    return (
        <Modal>
            <RegisterForm/>
        </Modal>
    )
}
export default Register2;