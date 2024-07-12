import { Link } from "react-router-dom";

const LogOutSuccess = ({ onClose }) => {
    return (
        <div className=" z-50 fixed inset-0 bg-black bg-opacity-10 backdrop-blur-sm flex justify-center items-center">
            <div
                className="w-[322px] rounded-lg bg-white overflow-hidden shrink-0 flex flex-col items-center justify-start pr-6 pl-6 pb-6 pt-6 box-border max-w-full z-[3]"
            >
                <div className="self-stretch flex flex-row items-center justify-end">
                </div>
                <div
                    className="self-stretch flex-1 flex flex-col items-center justify-start"
                >
                    <img
                        className="flex-1 relative max-h-full object-contain scale-75"
                        loading="lazy"
                        alt=""
                        src="/seeyousoon.png"
                    />

                    <div
                        className="self-stretch flex flex-col items-start justify-start"
                    >
                        <div className="m-0 text-base self-stretch relative leading-[20px] flex flex-col gap-5">
                            <div className="a font-bold text-center">You've Been Logged Out</div>
                            <div className=" text-center">Please log back in.</div>
                        </div>
                    </div>
                    <Link to='/'>
                        <div onClick={onClose} className=" w-[180px] h-[40px] bg-[#3B71FE] rounded-3xl mt-6 flex items-center justify-center text-white hover:scale-110">
                            Back to home
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
};

export default LogOutSuccess;