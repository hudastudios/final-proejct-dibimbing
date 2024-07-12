const ErrorModal = ({ onClose }) => {

    return (
        <div className="z-50 fixed inset-0 bg-black bg-opacity-10 backdrop-blur-sm flex justify-center items-center">
            <div
                className="w-[322px] rounded-lg bg-white overflow-hidden shrink-0 flex flex-col items-center justify-start p-6 box-border gap-[20px] max-w-full z-[3]"
            >
                <div
                    className="self-stretch flex-1 flex flex-col items-center justify-start gap-[12px]"
                >
                    <img
                        className="w-[252px] flex-1 relative max-h-full object-contain"
                        loading="lazy"
                        alt=""
                        src="/frame-1000008454-1@2x.png"
                    />

                    <div
                        className="self-stretch flex flex-col items-start justify-start"
                    >
                        <p className="m-0 text-base self-stretch relative text-center leading-[20px]">
                            Your email or password is incorrect. Please try again!
                        </p>
                    </div>
                    <div onClick={onClose} className=" w-[180px] h-[40px] bg-[#3B71FE] rounded-3xl mt-2 flex items-center justify-center text-white hover:scale-110 cursor-pointer">
                        Back to Sign in
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ErrorModal;