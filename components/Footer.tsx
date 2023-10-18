'use client'
import { useRouter } from 'next/navigation';
const Footer = () => {
    const router = useRouter();

    const Ptaszek = () => {
        router.push('https://ptoszek.pl');
      }
    return(
<footer className="bg-white rounded-lg m-0">
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:items-center sm:justify-between">
            <ul className="flex flex-wrap justify-center items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                <li>
                    <a href="#" className="mr-4 hover:underline md:mr-6 ">O nas</a>
                </li>
                <li>
                    <a href="#" className="mr-4 hover:underline md:mr-6">Strona główna</a>
                </li>
                <li>
                    <a href="#" className="mr-4 hover:underline md:mr-6 ">Usługi</a>
                </li>              
            </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="flex flex-wrap justify-center text-sm text-gray-500 sm:text-center dark:text-gray-400"> <a onClick={Ptaszek}>Placeholder</a></span>
    </div>
</footer>

    );

}
export default Footer;
