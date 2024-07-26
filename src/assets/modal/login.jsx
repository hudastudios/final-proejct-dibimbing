import { useEffect, useRef } from "react";
import { useState } from "react";
import axios from "axios";
import ErrorModal from "./ErrorModal";
import LoginSuccessModal from "./LoginSuccessModal";
import Navbar from "../navbar/navbar";

export default function LoginModal({ onClose, openSignup }) {
    const ref = useRef(null);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [token, setToken] = useState(null);
    const [errorLogin, setErrorLogin] = useState(false);
    const [detail, setDetail] = useState({});
    const [foto, setFoto] = useState(null);
    const [name, setName] = useState(null)
    const [emaill, setEmaill] = useState(null)
    const [phoneNumber, setPhoneNumber] = useState(null)

    //// Login
    const handleChangeEmail = (event) => {
        // console.log(event);
        setEmail(event.target.value);
    };

    const handleChangePassword = (event) => {
        // console.log(event);
        setPassword(event.target.value);
    };

    const handleLogin = async (event) => {

        const payload = {
            email: email,
            password: password,
        };

        event.preventDefault();

        try {
            const response = await axios.post(
                'https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/login',
                payload,
                {
                    headers: {
                        apiKey: "24405e01-fbc1-45a5-9f5a-be13afcd757c",
                    },
                }
            );
            setDetail(response.data.data);
            // console.log(response);

            const token = response.data.token;

            setToken(token);
            localStorage.setItem('access_token', token);

            const foto = response.data.data.profilePictureUrl

            setFoto(foto);
            localStorage.setItem('access_foto', foto);

            const name = response.data.data.name

            setName(name);
            localStorage.setItem('access_name', name);

            const emaill = response.data.data.email

            setEmaill(emaill);
            localStorage.setItem('access_email', emaill);

            const phoneNumber = response.data.data.phoneNumber

            setName(phoneNumber);
            localStorage.setItem('access_phoneNumber', phoneNumber);

            setTimeout(() => {
                onClose()
            }, 3000);

        } catch (error) {
            // console.log(error);
            setErrorLogin(true)
        }
    };
    ////

    function some() {
        openSignup();
        onClose();
    }

    useEffect(() => {
        const handleOutSideClick = (event) => {
            if (!ref.current?.contains(event.target)) {
                onClose();
            }
        };

        window.addEventListener("mousedown", handleOutSideClick);

        return () => {
            window.removeEventListener("mousedown", handleOutSideClick);
        };
    }, [ref]);


    return (
        <div>
            {token ? <LoginSuccessModal></LoginSuccessModal> :
                <form>
                    <div className="fixed z-40 inset-0 flex items-center justify-center bg-black bg-opacity-10">
                        <div ref={ref} className="bg-white shadow-2xl rounded-3xl w-[596px] h-[690px] flex flex-col items-center gap-[32px] p-[48px] mq1050:scale-75 mq2560:scale-90 mq750:scale-50">
                            <div className="flex flex-row items-center justify-center gap-[4px]">
                                <img
                                    className="h-6 w-6 relative overflow-hidden shrink-0"
                                    loading="lazy"
                                    alt=""
                                    src="/radar-1.svg"
                                />

                                <div
                                    className="relative tracking-[0.01em] leading-[26px] font-semibold inline-block min-w-[64px] text-black"
                                >
                                    Trav.id
                                </div>
                            </div>
                            <div className="w-[406px] h-[90px] font-xtra-large-semibold font-bold text-[32px] text-center text-black">
                                Hey there, welome back let’s
                                <div className=" text-[#58C17D] pt-2">
                                    Sign in !
                                </div>
                            </div>
                            <div className="flex flex-col items-start gap-2 text-black">
                                <div className="font-medium text-[14px]">Email</div>
                                <input onChange={handleChangeEmail}
                                    className="w-[502px] h-[56px] border border-gray-400 p-4 rounded-3xl"
                                    type="email" placeholder="Email">

                                </input>
                            </div>
                            <div className="flex flex-col items-start gap-2 text-black">
                                <div className="font-medium text-[14px]">Password</div>
                                <input onChange={handleChangePassword}
                                    className="w-[502px] h-[56px] border border-gray-400 p-4 rounded-3xl"
                                    type="password" placeholder="Password">
                                </input>
                            </div>
                            <button onClick={handleLogin} type="submit" className="w-[502px] h-[56px] bg-[#3B71FE] rounded-3xl text-[#FCFCFD] text-[14px] font-medium hover:bg-blue-700">
                                Sign in
                            </button>
                            <div className=" font-medium text-16px text-[#7D7C84] flex gap-2">
                                Don’t have an account yet? try
                                <div onClick={some} className="font-medium text-16px text-[#34C759] hover:cursor-pointer" >
                                    Sign Up
                                </div>
                            </div>
                            <div className="font-medium text-16px text-[#7D7C84]" >
                                Forgot Password?
                            </div>
                            {errorLogin ? <ErrorModal onClose={() => setErrorLogin(false)}></ErrorModal> : null}
                        </div>
                    </div>
                </form>
            }
            <Navbar error={errorLogin} foto={foto}></Navbar>
        </div>
    );
}
