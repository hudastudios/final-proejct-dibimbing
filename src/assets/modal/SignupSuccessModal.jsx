const SignupSuccessModal = ({ onClose, openLogin }) => {

    function some() {
        onClose();
        openLogin();
    }

    return (
        <div className=" z-50 fixed inset-0 bg-black bg-opacity-10 backdrop-blur-sm flex justify-center items-center">
            <div
                className="w-[340px] rounded-lg bg-white overflow-hidden shrink-0 flex flex-col items-center justify-start pr-6 pl-6 pb-6 box-border max-w-full z-[3]"
            >

                <div
                    className="flex flex-col items-center justify-start"
                >
                    <img
                        className="flex-1 relative max-h-full object-contain"
                        loading="lazy"
                        alt=""
                        src='/checkgreen.png'
                    />

                    <div
                        className="self-stretch flex flex-col items-start justify-start"
                    >
                        <div className="m-0 text-base self-stretch relative  flex flex-col items-center gap-2">
                            <div className="a font-bold text-center text-[20px] ">Registration Complete!</div>
                            <div className=" text-center">Your account has been created!</div>
                            <div onClick={some} className=" w-[180px] h-[40px] bg-[#3B71FE] rounded-3xl mt-2 flex items-center justify-center text-white hover:scale-110 cursor-pointer">
                                Continue to Sign in
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
};

export default SignupSuccessModal;