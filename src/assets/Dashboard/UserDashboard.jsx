import PaginationUser from "../components/PaginationUser";
import DashboardSidebar from "./DashboardSidebar";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { useState, useEffect } from "react";
import axios from "axios";
import { data } from "autoprefixer";
import ChangeRoleModal from "../modal/ChangeRoleModal";
import toast from "react-hot-toast";
import { spiral } from 'ldrs'

export default function DashboardUser() {
    const [detail, setDetail] = useState([])
    const [searchItem, setSearchItem] = useState('')
    const [selectedUserId, setSelectedUserId] = useState(null);
    const [selectedRole, setSelectedRole] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [changeRoleModal, setChangeRoleModal] = useState(false)
    const [loading, setLoading] = useState()
    // const [filteredUsers, setFilteredUsers] = useState(detail)
    console.log(selectedRole);
    console.log(selectedUserId);
    spiral.register()
    const handleInputChange = (e) => {

        const filteredItems = detail.filter((user) => {
            return searchItem.toLowerCase() === ''
                ? user
                : user?.name?.toLowerCase().includes(searchTerm.toLowerCase())
        }
        )

        setFilteredUsers(filteredItems);
    }


    const getUser = async () => {

        try {
            const response = await axios.get(
                'https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/all-user',
                {
                    headers: {
                        apiKey: "24405e01-fbc1-45a5-9f5a-be13afcd757c",
                        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1pZnRhaGZhcmhhbkBnbWFpbC5jb20iLCJ1c2VySWQiOiI5NWE4MDNjMy1iNTFlLTQ3YTAtOTBkYi0yYzJmM2Y0ODE1YTkiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2Nzk4NDM0NDR9.ETsN6dCiC7isPReiQyHCQxya7wzj05wz5zruiFXLx0k`,
                    },
                }
            );
            setDetail(response?.data?.data);
            console.log(response);
            setLoading(true);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getUser();
    }, []);

    const openDialog = (id, role) => {
        setSelectedUserId(id);
    };

    const handleRoleChange = (event) => {
        setSelectedRole(event.target.value);
    };

    const updateRole = () => {
        setIsLoading(true);
        axios
            .post(
                `https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/update-user-role/${selectedUserId}`,
                { role: selectedRole },
                {
                    headers: {
                        apiKey: "24405e01-fbc1-45a5-9f5a-be13afcd757c",
                        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1pZnRhaGZhcmhhbkBnbWFpbC5jb20iLCJ1c2VySWQiOiI5NWE4MDNjMy1iNTFlLTQ3YTAtOTBkYi0yYzJmM2Y0ODE1YTkiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2Nzk4NDM0NDR9.ETsN6dCiC7isPReiQyHCQxya7wzj05wz5zruiFXLx0k`,
                    },
                }
            )
            .then((res) => {
                console.log(res);
                toast.success(res.data.message)
                if (res.data.code === "200") {
                    setDetail((prevUsers) =>
                        prevUsers.map((user) =>
                            user.id === selectedUserId
                                ? { ...user, role: selectedRole }
                                : user
                        )
                    );

                }
            })

            .catch((err) => {
                console.log(err);
            })
            .finally(() => setIsLoading(false));
    };

    const ESTIMATED_ITEM_HEIGHT = 290

    return (
        <div className="flex">
            <DashboardSidebar></DashboardSidebar>
            <div className="flex flex-col w-full bg-white gap-4 mq500:max-w-[320px]">
                <div className="flex w-full h-[60px] items-center justify-between px-[100px] mq500:justify-center mq500:gap-2 shadow-lg mq500:flex-col mq500:h-[80px] mq500:px-0">
                    <div className=" text-[20px] font-extrabold mq500:text-[16px]">USER LIST</div>
                    <input
                        className="h-[30px] border border-green-400 rounded-xl w-[300px] text-center "
                        type="text"
                        onChange={(e) => setSearchItem(e?.target?.value)}
                        placeholder='Type to search'
                    />
                </div>
                <div className="w-full h-[700px] mq1050:h-[1366px] mq2560:h-[1191px] overflow-scroll flex flex-wrap justify-center items-start mq500:max-w-[320px]">
                    {loading
                        ?
                        <div className="w-full h-[700px] mq1050:h-[1366px] mq2560:h-[1191px] overflow-scroll flex flex-wrap justify-center items-start">
                            {detail.filter((user) => {
                                return searchItem.toLowerCase() === ''
                                    ? user
                                    : user?.name?.toLowerCase().includes(searchItem.toLowerCase())
                            }
                            ).map((user) => (
                                <div onClick={() => openDialog(user.id, user.role)} className='w-[260px] h-[290px] bg-[#F3F9FF] rounded-xl border border-white shadow-xl mx-[40px] mb-[30px] overflow-auto' >
                                    <div className="h-full flex flex-col gap-2 items-center justify-center">
                                        <div className="w-[120px] h-[120px] rounded-full bg-gray-300">
                                            <img className="w-[120px] h-[120px] rounded-full" src={user?.profilePictureUrl} alt="" />
                                        </div>
                                        <div>{user?.name}</div>
                                        <div className="flex flex-col gap-2">
                                            <div className="flex items-center gap-2">
                                                <MdEmail size={20}></MdEmail>
                                                <div>{user?.email}</div>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <FaPhoneAlt size={16}></FaPhoneAlt>
                                                <div>{user?.phoneNumber}</div>
                                            </div>
                                        </div>
                                        <div className="flex gap-2">
                                            <select
                                                onChange={handleRoleChange}
                                                className="w-[100px] h-[40px] p-2 text-[12px] border border-green-400 rounded-3xl">
                                                <option value='' disabled selected>{user?.role}</option>
                                                <option value="admin">Admin</option>
                                                <option value="user">User</option>
                                            </select>
                                            <button onClick={updateRole} className="bg-[#0A82FD] text-white px-4 py-2 rounded-3xl">change role</button>
                                        </div>
                                    </div>

                                </div>
                            ))}
                        </div>
                        :
                        <div className=" mt-[200px]">
                            <l-spiral
                                size="100"
                                speed="0.9"
                                color="blue"
                            ></l-spiral>
                        </div>
                    }
                    {detail.filter((user) => {
                        return searchItem.toLowerCase() === ''
                            ? user
                            : user?.name?.toLowerCase().includes(searchItem.toLowerCase())
                    }
                    ).map((user) => (
                        <div onClick={() => openDialog(user.id, user.role)} className='w-[260px] h-[290px] bg-[#F3F9FF] rounded-xl border border-white shadow-xl mx-[40px] mb-[30px] overflow-auto' >
                            <div className="h-full flex flex-col gap-2 items-center justify-center">
                                <div className="w-[120px] h-[120px] rounded-full bg-gray-300">
                                    <img className="w-[120px] h-[120px] rounded-full" src={user?.profilePictureUrl} alt="" />
                                </div>
                                <div>{user?.name}</div>
                                <div className="flex flex-col gap-2">
                                    <div className="flex items-center gap-2">
                                        <MdEmail size={20}></MdEmail>
                                        <div>{user?.email}</div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <FaPhoneAlt size={16}></FaPhoneAlt>
                                        <div>{user?.phoneNumber}</div>
                                    </div>
                                </div>
                                <div className="flex gap-2">
                                    <select
                                        onChange={handleRoleChange}
                                        className="w-[100px] h-[40px] p-2 text-[12px] border border-green-400 rounded-3xl">
                                        <option value='' disabled selected>{user?.role}</option>
                                        <option value="admin">Admin</option>
                                        <option value="user">User</option>
                                    </select>
                                    <button onClick={updateRole} className="bg-[#0A82FD] text-white px-4 py-2 rounded-3xl">change role</button>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}