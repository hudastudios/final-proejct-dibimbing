import { useEffect, useRef } from "react";
import { useState } from "react";
import axios from "axios";

export default function SignupModal({ onClose, openLogin, onOpenSuccessModal, closeSignupModal }) {
    const ref = useRef(null);
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [passwordRepeat, setPasswordRepeat] = useState("");
    // const [profilePictureUrl, setProfilePictureUrl] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [role, setRole] = useState("");
    const [file, setFile] = useState(null);
    const [token, setToken] = useState("");
    const [error, setError] = useState("");
    const [message, setMessage] = useState(null);

    //handlechange register

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handlePasswordChange = (event) => {
        // console.log(event);
        setPassword(event.target.value);
    };

    const handlePasswordRepeatChange = (event) => {
        setPasswordRepeat(event.target.value);
    };

    const handlePhoneNumberChange = (event) => {
        setPhoneNumber(event.target.value);
    };

    const handleRoleChange = (event) => {
        setRole(event.target.value);
    };


    //

    //handle upload function (upload foto profile)

    const handleUpload = async (e) => {
        const file = e.target.files[0];
        const formData = new FormData();
        formData.append("image", file);

        const config = {
            headers: {
                "content-type": "multipart/form-data",
                Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1pZnRhaGZhcmhhbkBnbWFpbC5jb20iLCJ1c2VySWQiOiI5NWE4MDNjMy1iNTFlLTQ3YTAtOTBkYi0yYzJmM2Y0ODE1YTkiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2Nzk4NDM0NDR9.ETsN6dCiC7isPReiQyHCQxya7wzj05wz5zruiFXLx0k`,
                apiKey: "24405e01-fbc1-45a5-9f5a-be13afcd757c",
            },
        };

        try {
            const res = await axios.post(
                "https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/upload-image",
                formData,
                config
            );
            console.log(res);
            setFile(res.data.url);
        } catch (error) {
            console.log(error);
        }
    };

    //

    function succesmodal() {
        onOpenSuccessModal();
        onClose();
    }

    //handle submit function (api call register)

    const handleSubmit = () => {
        const payload = {
            email: email,
            name: name,
            password: password,
            passwordRepeat: passwordRepeat,
            profilePictureUrl: file,
            phoneNumber: phoneNumber,
            role: role,
        };

        for (const key in payload) {
            if (!payload[key]) {
                setMessage("Please input all fields");
                setTimeout(() => {
                    setMessage(null);
                }, 3000);
                return;
            }
        }

        if (payload.password.length < 6) {
            setMessage("Password must be at least 6 characters");
            setTimeout(() => {
                setMessage(null);
            }, 3000);
            return;
        }

        if (payload.password !== payload.passwordRepeat) {
            setMessage("Password and Repeat Password does not match");
            setTimeout(() => {
                setMessage(null);
            }, 3000);
            return;
        }

        if (!payload.profilePictureUrl) {
            setMessage("Please upload your profile picture");
            setTimeout(() => {
                setMessage(null);
            }, 3000);
            return;
        }

        axios
            .post(
                "https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/register",
                payload,
                { headers: { apiKey: "24405e01-fbc1-45a5-9f5a-be13afcd757c" } }
            )
            .then((res) => {
                console.log(res);
                // setToken(res.data.token);

                setTimeout(() => {
                    succesmodal();
                }, 3000);
            })
            .catch((err) => {
                console.log(err.response.data.message);
                setError(err.response.data.message);
            });
    };
    //

    //function onclose outside modal
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
    //

    //other function
    function some() {
        openLogin();
        onClose();
    }
    //
    return (
        <div>
            <div className="fixed z-50 inset-0 flex items-center justify-center bg-black bg-opacity-10">
                <div ref={ref} className="bg-white shadow-2xl rounded-3xl w-[1200px] mq660:w-[680px] h-[690px] mq660:h-[1200px] flex flex-col items-center p-[40px] mq1050:scale-75 mq1440:scale-90 mq768:scale-50">
                    <div className="flex flex-col h-[120px] mq660:h-[140px]">
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

                        <div className="w-[800px] h-[50px] flex gap-4 justify-center font-xtra-large-semibold font-bold text-[32px] text-center text-black">
                            Don’t have an account yet? let’s
                            <div className=" text-[#58C17D] ">
                                Sign up !
                            </div>
                        </div>
                        {/* <div className=" text-center text-[20px] text-red-600 font-bold">
                            test 123
                        </div> */}

                        <div className="text-center text-[20px] text-red-600 font-bold">
                            {message && (message)}{error && (error)}
                        </div>

                    </div>
                    <div className="flex flex-col items-center gap-6">
                        <div className="flex mq660:flex-col gap-16 mq660:gap-6">
                            <div className="flex flex-col gap-6">
                                <div className="flex flex-col items-start gap-2 text-black">
                                    <div className="font-medium text-[14px]">Email</div>
                                    <input
                                        onChange={handleEmailChange}
                                        type="email"
                                        className="w-[300px] mq660:w-[600px] h-[56px] border border-gray-400 p-4 rounded-3xl"
                                        placeholder="enter your email">
                                    </input>
                                </div>
                                <div className="flex flex-col items-start gap-2 text-black">
                                    <div className="font-medium text-[14px]">Name</div>
                                    <input
                                        onChange={handleNameChange}
                                        type="text"
                                        className="w-[300px] mq660:w-[600px] h-[56px] border border-gray-400 p-4 rounded-3xl"
                                        placeholder="enter your name">
                                    </input>
                                </div>
                            </div>
                            <div className="flex flex-col gap-6">
                                <div className="flex flex-col items-start gap-2 text-black">
                                    <div className="font-medium text-[14px]">Password</div>
                                    <input
                                        onChange={handlePasswordChange}
                                        type="password"
                                        className="w-[300px] mq660:w-[600px] h-[56px] border border-gray-400 p-4 rounded-3xl"
                                        placeholder="enter your password">
                                    </input>
                                </div>
                                <div className="flex flex-col items-start gap-2 text-black">
                                    <div className="font-medium text-[14px]">Confirm Password</div>
                                    <input
                                        onChange={handlePasswordRepeatChange}
                                        type="password"
                                        className="w-[300px] mq660:w-[600px] h-[56px] border border-gray-400 p-4 rounded-3xl"
                                        placeholder="confirm your password">
                                    </input>
                                </div>
                            </div>
                            <div className="flex flex-col gap-6">
                                <div className="flex flex-col items-start gap-2 text-black">
                                    <div className="font-medium text-[14px]">Select Role</div>
                                    <select onChange={handleRoleChange} className="w-[300px] mq660:w-[600px] h-[56px] border border-gray-400 p-4 rounded-3xl">
                                        <option value="-">-</option>
                                        <option value="admin">Admin</option>
                                        <option value="user">User</option>
                                    </select>
                                </div>
                                <div className="flex flex-col items-start gap-2 text-black">
                                    <div className="font-medium text-[14px]">Phone Number</div>
                                    <input
                                        onChange={handlePhoneNumberChange}
                                        type="number"
                                        className="w-[300px] mq660:w-[600px] h-[56px] border border-gray-400 p-4 rounded-3xl"
                                        placeholder="enter your phone number">
                                    </input>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="flex flex-col items-start gap-2 text-black">
                                <div className="font-medium text-[14px]"> Upload Profile Picture</div>
                                <div className="flex gap-4 items-center">
                                    <input
                                        type="file"
                                        className="block w-[300px] mq660:w-[600px] pl-4 h-[56px] text-sm text-gray-900 border border-gray-300 rounded-3xl cursor-pointer file:my-2 file:mr-6 file:border-spacing-4 file:border-black file:rounded-3xl file:bg-black file:text-white file:py-1 file:px-2"
                                        accept=".png, .jpeg, .jpg"
                                        placeholder=""
                                        onChange={handleUpload}>
                                    </input>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=" flex flex-col gap-4 items-center pt-[40px] mq660:pt-[80px]">
                        <button onClick={handleSubmit} className="w-[240px] h-[56px] bg-[#3B71FE] rounded-3xl text-[#FCFCFD] text-[14px] font-medium hover:bg-blue-700">
                            Sign Up
                        </button>
                        <div className=" font-medium text-16px text-[#7D7C84] flex gap-2">
                            if you already have an account
                            <div onClick={some} className="font-medium text-16px text-[#34C759] hover:cursor-pointer" >
                                Sign in
                            </div>
                        </div>
                        <div className="font-medium text-16px text-[#7D7C84]" >
                            Forgot Password?
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}