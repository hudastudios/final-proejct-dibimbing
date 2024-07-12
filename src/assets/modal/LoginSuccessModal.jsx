
const LoginSuccessModal = () => {
    const name = localStorage.getItem('access_name');
    const foto = localStorage.getItem('access_foto');

    return (
        <div className=" z-50 fixed inset-0 bg-black bg-opacity-10 backdrop-blur-sm flex justify-center items-center">
            <div
                className="w-[340px] rounded-lg bg-white overflow-hidden shrink-0 flex flex-col items-center justify-start pr-6 pl-6 pb-6 box-border max-w-full z-[3]"
            >

                <div
                    className="flex flex-col items-center justify-start"
                >
                    <img
                        className="flex-1 relative max-h-full object-contain rounded-full scale-75 border-solid border-8 border-blue-500"
                        loading="lazy"
                        alt=""
                        src={foto}
                    />

                    <div
                        className="self-stretch flex flex-col items-start justify-start"
                    >
                        <div className="m-0 text-base self-stretch relative  flex flex-col gap-5">
                            <div className="a font-bold text-center text-[20px] ">Welcome Back, {name}</div>
                            <div className=" text-center">In a moment you will be redirected to the home page</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default LoginSuccessModal;