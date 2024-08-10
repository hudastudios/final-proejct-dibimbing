import DashboardSidebar from "./DashboardSidebar";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";

export default function MyProfileDashboard() {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [file, setFile] = useState(null);
    const [message, setMessage] = useState(null);


    const nama = localStorage.getItem('access_name');
    const emaill = localStorage.getItem('access_email');
    const phoneNumberr = localStorage.getItem('access_phoneNumber');
    const photo = localStorage.getItem('access_foto');
    const token = localStorage.getItem('access_token')


    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handlePhoneNumberChange = (event) => {
        setPhoneNumber(event.target.value);
    };

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

    const handleSubmit = () => {
        const payload = {
            email: email,
            name: name,
            profilePictureUrl: file,
            phoneNumber: phoneNumber,
        };

        for (const key in payload) {
            if (!payload[key]) {
                toast.error("Please input all fields");
                setTimeout(() => {
                    setMessage(null);
                }, 3000);
                return;
            }
        }

        if (!payload.profilePictureUrl) {
            toast.error("Please upload your profile picture");
            setTimeout(() => {
                setMessage(null);
            }, 3000);
            return;
        }

        axios
            .post(
                "https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/update-profile",
                payload,
                {
                    headers: {
                        apiKey: "24405e01-fbc1-45a5-9f5a-be13afcd757c",
                        Authorization: `Bearer ${token}`,
                    },
                }
            )
            .then((res) => {
                console.log(res);
                toast.success(res.data.message)
            })
            .catch((err) => {
                console.log(err.response.data.message);
            });
    };

    return (
        <div className="flex">
            <DashboardSidebar></DashboardSidebar>
            <div className="flex flex-col w-full bg-white h-[700px] mq2560:h-[1400px] mq500:max-h-[932px] gap-4">
                <div className="fixed z-40 bg-white flex w-full h-[60px] items-center justify-between mq500:justify-center px-[100px] mq500:px-0 shadow-lg">
                    <div className=" text-[20px] font-extrabold">EDIT MY PROFILE</div>
                    <input
                        className="h-[30px] border border-green-400 rounded-xl w-[300px] text-center hidden "
                        type="text"
                        onChange={(e) => setSearchItem(e?.target?.value)}
                        placeholder='Type to search'
                    />
                </div>
                <div className="w-full  overflow-scroll flex flex-wrap justify-center items-start mq500:w-[340px] mt-[100px] mq500:ml-[80px]">
                    <div className='w-[440px] h-[470px] mq500:w-[300px] mq500:h-[330px] bg-[#F3F9FF] rounded-xl border border-white shadow-xl mx-[40px] mb-[30px] overflow-auto mq500:h-[470px] mq500:w-[300px]' >
                        <div className="h-full flex flex-col gap-10 items-center justify-center">
                            <div className="text-[26px]">My Profile</div>
                            <div className="w-[120px] h-[120px] rounded-full bg-gray-300">
                                <img className="w-[120px] h-[120px] border-blue-400 border-8 rounded-full shadow-2xl" src={photo} alt="" />
                            </div>
                            <div>{nama}</div>
                            <div className="flex flex-col gap-2">
                                <div className="flex items-center gap-2">
                                    <MdEmail size={20}></MdEmail>
                                    <div>{emaill}</div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <FaPhoneAlt size={16}></FaPhoneAlt>
                                    <div>{phoneNumberr}</div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='w-[440px] h-[470px] mq500:w-[300px] mq500:h-[330px] bg-[#F3F9FF] rounded-xl border border-white shadow-xl mx-[40px] mb-[30px] overflow-auto' >
                        <div className="h-full flex flex-col gap-2 items-center justify-center mq500:scale-75">
                            <div className="flex flex-col items-start gap-2 text-black">
                                <div className="font-medium text-[14px]">Name</div>
                                <input
                                    onChange={handleNameChange}
                                    type="text"
                                    className="w-[300px] mq660:w-[600px] mq500:w-[300px] h-[56px] border border-gray-400 p-4 rounded-3xl"
                                    placeholder={nama}>
                                </input>
                            </div>
                            <div className="flex flex-col items-start gap-2 text-black">
                                <div className="font-medium text-[14px]">Email</div>
                                <input
                                    onChange={handleEmailChange}
                                    type="text"
                                    className="w-[300px] mq660:w-[600px] mq500:w-[300px] h-[56px] border border-gray-400 p-4 rounded-3xl"
                                    placeholder={emaill}>
                                </input>
                            </div>
                            <div className="flex flex-col items-start gap-2 text-black">
                                <div className="font-medium text-[14px]">Phone Number</div>
                                <input
                                    onChange={handlePhoneNumberChange}
                                    type="text"
                                    className="w-[300px] mq660:w-[600px] mq500:w-[300px] h-[56px] border border-gray-400 p-4 rounded-3xl"
                                    placeholder={phoneNumberr}>
                                </input>
                            </div>
                            <div className="flex flex-col items-start gap-2 text-black ">
                                <div className="font-medium text-[14px]"> Upload Profile Picture</div>
                                <div className="flex gap-4 items-center">
                                    <input
                                        onChange={handleUpload}
                                        type="file"
                                        className="bg-white block w-[300px] mq500:w-[300px] mq660:w-[600px] pl-4 h-[56px] text-sm text-gray-900 border border-gray-300 rounded-3xl cursor-pointer file:my-2 file:mr-6 file:border-spacing-4 file:border-black file:rounded-3xl file:bg-black file:text-white file:py-1 file:px-2"
                                        accept=".png, .jpeg, .jpg"
                                        placeholder=""
                                    >
                                    </input>
                                </div>
                            </div>
                            <div className="flex mt-4">
                                <button onClick={handleSubmit} className="flex bg-[#0A82FD] items-center gap-2 text-white px-4 py-2 rounded-3xl">Update Profile</button>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div >
    );
}