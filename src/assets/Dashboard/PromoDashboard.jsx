import DashboardSidebar from "./DashboardSidebar";
import { useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { MdOutlineCreateNewFolder } from "react-icons/md"
import { spiral } from 'ldrs'
import { GrUpdate } from "react-icons/gr";
import { MdOutlineDeleteOutline } from "react-icons/md";

export default function PromoDashboard() {
    const [detail, setDetail] = useState([])
    const [promoDetail, setPromoDetail] = useState([])
    const [searchItem, setSearchItem] = useState('')
    const [showModal, setShowModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [showCreateModal, setShowCreateModal] = useState(false);
    const [selectedUserId, setSelectedUserId] = useState(null);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [terms_condition, setTerms_condition] = useState("");
    const [promo_code, setPromo_code] = useState("");
    const [promo_discount_price, setPromoDiscountPrice] = useState("");
    const [minimum_claim_price, setMinimum_claim_price] = useState("");
    const [file, setFile] = useState(null);
    const token = localStorage.getItem('access_token')
    const [loading, setLoading] = useState()
    const [loadingImage, setLoadingImage] = useState()
    const [showDetails, setShowDetails] = useState(false)

    console.log(selectedUserId);
    spiral.register()
    //////////////////////// Get Banner ////////////////////////

    const getBanner = async () => {

        try {
            const response = await axios.get(
                'https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/promos',
                {
                    headers: {
                        apiKey: "24405e01-fbc1-45a5-9f5a-be13afcd757c",
                    },
                }
            );
            setDetail(response.data.data);
            console.log(response);
            setLoading(true);

        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getBanner();
    }, []);

    const getPromoDetail = async () => {

        try {
            const response = await axios.get(
                `https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/promo/${selectedUserId}`,
                {
                    headers: {
                        apiKey: "24405e01-fbc1-45a5-9f5a-be13afcd757c",
                    },
                }
            );
            setPromoDetail(response.data.data);
            console.log(response);

        } catch (error) {
            console.log(error);
        }
    };
    //////////////////////// Delete Baner ////////////////////////    

    const delBanner = async () => {

        try {
            const response = await axios.delete(
                `https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/delete-promo/${selectedUserId}`,
                {
                    headers: {
                        apiKey: "24405e01-fbc1-45a5-9f5a-be13afcd757c",
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            setDetail(response.data.data);
            console.log(response);
            window.location.reload();

            setTimeout(() => {
                toast.success(response.data.data.message)
            }, 1000);
        } catch (error) {
            console.log(error);
        }
    };



    const openDialog = (id) => {
        setSelectedUserId(id);
    };

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    };

    const handleTerms_conditionChange = (event) => {
        setTerms_condition(event.target.value);
    };

    const handlePromo_codeChange = (event) => {
        setPromo_code(event.target.value);
    };

    const handlePromoDiscountPriceChange = (event) => {
        setPromoDiscountPrice(event.target.value);
    };

    const handleMinimum_claim_priceChange = (event) => {
        setMinimum_claim_price(event.target.value);
    };

    // const handleMinimum_claim_priceChange = (event) => {
    //     setMinimum_claim_price(`<iframe src=${event.target.value} width='600' height='450' style='border:0;' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe>`)
    // };

    //////////////////////// handle upload ////////////////////////    

    const handleUpload = async (e) => {
        const file = e.target.files[0];
        const formData = new FormData();
        formData.append("image", file);

        const config = {
            headers: {
                "content-type": "multipart/form-data",
                Authorization: `Bearer ${token}`,
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
            setLoadingImage(true)
        } catch (error) {
            console.log(error);
            toast.error('your image is to large, or change different image')
        }
    };

    //////////////////////// Update Banner ////////////////////////    

    const updateBanner = () => {
        const payload = {
            title: title,
            description: description,
            imageUrl: file,
            terms_condition: terms_condition,
            promo_code: promo_code,
            promo_discount_price: Math.floor(promo_discount_price),
            minimum_claim_price: Math.floor(minimum_claim_price),
        };

        for (const key in payload) {
            if (!payload[key]) {
                toast.error("Please input all fields, or wait for the image to be uploaded");
                setTimeout(() => {
                    setMessage(null);
                }, 3000);
                return;
            }
        }

        if (!payload.imageUrl) {
            toast.error("Please upload your profile picture");
            setTimeout(() => {
                setMessage(null);
            }, 3000);
            return;
        }
        axios
            .post(
                `https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/update-promo/${selectedUserId}`,
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
                if (res.data.code === "200") {
                    setDetail((prevUsers) =>
                        prevUsers.map((user) =>
                            user.id === selectedUserId
                                ? { ...user }
                                : user
                        )
                    );

                }
                setTimeout(() => {
                    window.location.reload();
                }, 2000);

            })

            .catch((err) => {
                console.log(err);
            })
    };

    //////////////////////// Create Banner ////////////////////////

    const createPromo = () => {
        const payload = {
            title: title,
            description: description,
            imageUrl: file,
            terms_condition: terms_condition,
            promo_code: promo_code,
            promo_discount_price: Math.floor(promo_discount_price),
            minimum_claim_price: Math.floor(minimum_claim_price),
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

        if (!payload.imageUrl) {
            toast.error("Please upload your profile picture");
            setTimeout(() => {
                setMessage(null);
            }, 3000);
            return;
        }
        axios
            .post(
                `https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/create-promo`,
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
                if (res.data.code === "200") {
                    setDetail((prevUsers) =>
                        prevUsers.map((user) =>
                            user.id === selectedUserId
                                ? { ...user }
                                : user
                        )
                    );

                }
                setTimeout(() => {
                    window.location.reload();
                }, 2000);

            })

            .catch((err) => {
                console.log(err);
            })
    };

    function some() {
        setTimeout(() => {
            setShowDetails(true);
        }, 1500);
        getPromoDetail();
    }

    function someOne() {
        setShowDetails(false);
        setShowModal(false)

    }

    return (
        <div className="flex">
            <DashboardSidebar></DashboardSidebar>
            <div className="flex flex-col w-full bg-white gap-4">
                <div className="fixed bg-white flex w-full h-[60px] items-center justify-between px-[100px] shadow-lg mq500:flex-col mq1050:gap-[10px] mq1050:px-0 mq1050:pl-[70px] mq500:h-[120px]">
                    <div className=" text-[20px] font-extrabold">Promo</div>

                    <input
                        className="h-[30px] border border-green-400 rounded-xl w-[300px] text-center mq500:w-[250px] "
                        type="text"
                        onChange={(e) => setSearchItem(e?.target?.value)}
                        placeholder='Type to search'
                    />
                    <button
                        className="text-white bg-green-600 rounded-lg flex items-center gap-2 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => setShowCreateModal(true)}
                    >
                        Create New Promo
                        <MdOutlineCreateNewFolder size={20} />
                    </button>
                </div>
                <div className="w-full pt-[100px] overflow-scroll flex flex-wrap justify-center items-start">
                    {loading
                        ?
                        <div className="w-full flex flex-wrap justify-center items-start mq500:pl-[70px] mq500:pt-[46px]">
                            {detail.filter((item) => {
                                return searchItem.toLowerCase() === ''
                                    ? item
                                    : item?.title?.toLowerCase().includes(searchItem.toLowerCase())
                            }
                            ).map((item) => (<div onClick={() => openDialog(item.id)} className='w-[480px] h-[286px] bg-[#F3F9FF] rounded-xl border border-white shadow-xl mx-[40px] mb-[30px] overflow-auto' >
                                <div className="h-full flex flex-col gap-2 items-center justify-center">
                                    <div className="w-full h-[160px] rounded-lg bg-gray-300 overflow-hidden">
                                        <img className='w-[480px] h-[160px]' src={item.imageUrl} alt="" />
                                    </div>
                                    <div>{item.title}</div>
                                    <div className="flex flex-col gap-2">
                                    </div>
                                    <div className="flex gap-2">
                                        <button onClick={() => setShowModal(true)} className="flex gap-2 items-center bg-green-600 text-white px-4 py-2 rounded-3xl"><GrUpdate /> Update</button>
                                        <button onClick={() => setShowDeleteModal(true)} className="flex gap-1 items-center bg-[#0A82FD] text-white px-4 py-2 rounded-3xl"><MdOutlineDeleteOutline size={22} /> Delete</button>
                                    </div>
                                </div>
                            </div>))}
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

                </div>
            </div>
            {showModal ? (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div className="relative flex justify-center w-auto my-6 mx-auto max-w-3xl">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col px-[60px] bg-white outline-none focus:outline-none mq500:scale-50">
                                {/*header*/}
                                <div className="flex items-start justify-between p-5 pb-0 border-b border-solid border-blueGray-200 rounded-t">
                                    <h3 className="text-3xl font-semibold">
                                        Update Promo
                                    </h3>
                                    <button
                                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                        onClick={() => setShowModal(false)}
                                    >
                                        <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                            ×
                                        </span>
                                    </button>
                                </div>
                                {/*body*/}
                                <div className="flex flex-col items-center ">
                                    <div className="flex mq500:flex-col">
                                        <div>
                                            <div className="relative p-6 flex-auto">
                                                <div className="flex flex-col items-start gap-2 text-black">
                                                    <div className="font-medium text-[14px]">Title</div>
                                                    <input
                                                        onChange={handleTitleChange}
                                                        type="text"
                                                        className="w-[400px] mq660:w-[600px] h-[56px] border border-gray-400 p-4 rounded-3xl"
                                                        placeholder={showDetails ? promoDetail.title : ''}>
                                                    </input>
                                                </div>
                                            </div>
                                            <div className="relative p-6 flex-auto">
                                                <div className="flex flex-col items-start gap-2 text-black">
                                                    <div className="font-medium text-[14px]">Promo Discount Price</div>
                                                    <input
                                                        onChange={handlePromoDiscountPriceChange}
                                                        type="number"
                                                        className="w-[400px] mq660:w-[600px] h-[56px] border border-gray-400 p-4 rounded-3xl"
                                                        placeholder={showDetails ? promoDetail.promo_discount_price : ''}>
                                                    </input>
                                                </div>
                                            </div>
                                            <div className="relative p-6 flex-auto">
                                                <div className="flex flex-col items-start gap-2 text-black">
                                                    <div className="font-medium text-[14px]">Description</div>
                                                    <textarea
                                                        onChange={handleDescriptionChange}
                                                        type="text"
                                                        className="w-[400px] mq660:w-[600px] h-[160px] border border-gray-400 p-4 rounded-3xl"
                                                        placeholder={showDetails ? promoDetail.description : ''}>
                                                    </textarea>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="relative p-6 flex-auto">
                                                <div className="flex flex-col items-start gap-2 text-black">
                                                    <div className="font-medium text-[14px]">Promo Code</div>
                                                    <input
                                                        onChange={handlePromo_codeChange}
                                                        type="text"
                                                        className="w-[400px] mq660:w-[600px] h-[56px] border border-gray-400 p-4 rounded-3xl"
                                                        placeholder={showDetails ? promoDetail.promo_code : ''}>
                                                    </input>
                                                </div>
                                            </div>
                                            <div className="relative p-6 flex-auto">
                                                <div className="flex flex-col items-start gap-2 text-black">
                                                    <div className="font-medium text-[14px]">Minimum Claim Price</div>
                                                    <input
                                                        onChange={handleMinimum_claim_priceChange}
                                                        type="number"
                                                        className="w-[400px] mq660:w-[600px] h-[56px] border border-gray-400 p-4 rounded-3xl"
                                                        placeholder={showDetails ? promoDetail.minimum_claim_price : ''}>
                                                    </input>
                                                </div>
                                            </div>
                                            <div className="relative p-6 flex-auto">
                                                <div className="flex flex-col items-start gap-2 text-black">
                                                    <div className="font-medium text-[14px]">Terms and Condition</div>
                                                    <textarea
                                                        onChange={handleTerms_conditionChange}
                                                        type="text"
                                                        className="w-[400px] mq660:w-[600px] h-[160px] border border-gray-400 p-4 rounded-3xl"
                                                        placeholder={showDetails ? promoDetail.terms_condition : ''}>
                                                    </textarea>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-start gap-2 text-black pb-6 ">
                                        <div className="font-medium text-[14px]"> Upload Profile Picture</div>
                                        <div className="flex gap-4 items-center">
                                            <input
                                                onChange={handleUpload}
                                                type="file"
                                                className="bg-white block w-[300px] mq660:w-[600px] pl-4 h-[56px] text-sm text-gray-900 border border-gray-300 rounded-3xl cursor-pointer file:my-2 file:mr-6 file:border-spacing-4 file:border-black file:rounded-3xl file:bg-black file:text-white file:py-1 file:px-2"
                                                accept=".png, .jpeg, .jpg"
                                                placeholder=""
                                            >
                                            </input>
                                        </div>
                                    </div>
                                </div>
                                {/*footer*/}
                                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                                    <button
                                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={someOne}
                                    >
                                        Close
                                    </button>
                                    <button
                                        className="bg-blue-600 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={some}
                                    >
                                        Show Promo Details
                                    </button>
                                    <button
                                        className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={updateBanner}
                                    >
                                        Save Changes
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
            {showDeleteModal ? (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex items-start justify-between p-5 pb-0 border-b border-solid border-blueGray-200 rounded-t">
                                    <h3 className="text-3xl font-semibold">
                                        Delete Banner
                                    </h3>
                                    <button
                                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                        onClick={() => setShowDeleteModal(false)}
                                    >
                                        <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                            ×
                                        </span>
                                    </button>
                                </div>
                                {/*body*/}
                                <div className="flex flex-col items-center p-8">
                                    Are you sure to delete this banner ?
                                </div>
                                {/*footer*/}
                                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                                    <button
                                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setShowDeleteModal(false)}
                                    >
                                        cancle
                                    </button>
                                    <button
                                        className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={delBanner}
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
            {showCreateModal ? (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div className="relative flex justify-center w-auto my-6 mx-auto max-w-3xl">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col px-[60px] bg-white outline-none focus:outline-none mq500:scale-50">
                                {/*header*/}
                                <div className="flex items-start justify-between p-5 pb-0 border-b border-solid border-blueGray-200 rounded-t">
                                    <h3 className="text-3xl font-semibold">
                                        Create Promo
                                    </h3>
                                    <button
                                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                        onClick={() => setShowModal(false)}
                                    >
                                        <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                            ×
                                        </span>
                                    </button>
                                </div>
                                {/*body*/}
                                <div className="flex flex-col items-center ">
                                    <div className="flex mq500:flex-col">
                                        <div>
                                            <div className="relative p-6 flex-auto">
                                                <div className="flex flex-col items-start gap-2 text-black">
                                                    <div className="font-medium text-[14px]">Title</div>
                                                    <input
                                                        onChange={handleTitleChange}
                                                        type="text"
                                                        className="w-[400px] mq660:w-[600px] h-[56px] border border-gray-400 p-4 rounded-3xl"
                                                        placeholder={promoDetail.title}>
                                                    </input>
                                                </div>
                                            </div>
                                            <div className="relative p-6 flex-auto">
                                                <div className="flex flex-col items-start gap-2 text-black">
                                                    <div className="font-medium text-[14px]">Promo Discount Price</div>
                                                    <input
                                                        onChange={handlePromoDiscountPriceChange}
                                                        type="number"
                                                        className="w-[400px] mq660:w-[600px] h-[56px] border border-gray-400 p-4 rounded-3xl"
                                                        placeholder={promoDetail.promo_discount_price}>
                                                    </input>
                                                </div>
                                            </div>
                                            <div className="relative p-6 flex-auto">
                                                <div className="flex flex-col items-start gap-2 text-black">
                                                    <div className="font-medium text-[14px]">Description</div>
                                                    <textarea
                                                        onChange={handleDescriptionChange}
                                                        type="text"
                                                        className="w-[400px] mq660:w-[600px] h-[160px] border border-gray-400 p-4 rounded-3xl"
                                                        placeholder={promoDetail.description}>
                                                    </textarea>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="relative p-6 flex-auto">
                                                <div className="flex flex-col items-start gap-2 text-black">
                                                    <div className="font-medium text-[14px]">Promo Code</div>
                                                    <input
                                                        onChange={handlePromo_codeChange}
                                                        type="text"
                                                        className="w-[400px] mq660:w-[600px] h-[56px] border border-gray-400 p-4 rounded-3xl"
                                                        placeholder={promoDetail.promo_code}>
                                                    </input>
                                                </div>
                                            </div>
                                            <div className="relative p-6 flex-auto">
                                                <div className="flex flex-col items-start gap-2 text-black">
                                                    <div className="font-medium text-[14px]">Minimum Claim Price</div>
                                                    <input
                                                        onChange={handleMinimum_claim_priceChange}
                                                        type="number"
                                                        className="w-[400px] mq660:w-[600px] h-[56px] border border-gray-400 p-4 rounded-3xl"
                                                        placeholder={promoDetail.minimum_claim_price}>
                                                    </input>
                                                </div>
                                            </div>
                                            <div className="relative p-6 flex-auto">
                                                <div className="flex flex-col items-start gap-2 text-black">
                                                    <div className="font-medium text-[14px]">Terms and Condition</div>
                                                    <textarea
                                                        onChange={handleTerms_conditionChange}
                                                        type="text"
                                                        className="w-[400px] mq660:w-[600px] h-[160px] border border-gray-400 p-4 rounded-3xl"
                                                        placeholder={promoDetail.terms_condition}>
                                                    </textarea>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-start gap-2 text-black pb-6 ">
                                        <div className="font-medium text-[14px]"> Upload Profile Picture</div>
                                        <div className="flex gap-4 items-center">
                                            <input
                                                onChange={handleUpload}
                                                type="file"
                                                className="bg-white block w-[300px] mq660:w-[600px] pl-4 h-[56px] text-sm text-gray-900 border border-gray-300 rounded-3xl cursor-pointer file:my-2 file:mr-6 file:border-spacing-4 file:border-black file:rounded-3xl file:bg-black file:text-white file:py-1 file:px-2"
                                                accept=".png, .jpeg, .jpg"
                                                placeholder=""
                                            >
                                            </input>
                                        </div>
                                    </div>
                                </div>
                                {/*footer*/}
                                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                                    <button
                                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setShowCreateModal(false)}
                                    >
                                        Close
                                    </button>
                                    <button
                                        className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={createPromo}
                                    >
                                        Save Changes
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </div>
    );
}