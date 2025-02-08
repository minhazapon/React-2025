

function Banner() {
    return (
        <>
            <div>
                <div
                    className="hero min-h-screen"
                    style={{
                        backgroundImage: "url(https://content.jdmagicbox.com/comp/def_content_category/restaurants/photo-1517248135467-4c7edcad34c4-restaurants-3-abymb.jpg)",
                    }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-neutral-content text-center">
                        <div className="max-w-md">
                            <p className=" font-thin text-xl ">The Best Food Restaurant</p>
                            <p className=" font-thin text-4xl mt-3 ">Welcome to the < br></br>italian food</p>
                            <div className=" flex justify-center ">
                                <p className="  bg-white h-[200px] w-[1px] "></p>
                            </div>
                            <button className="border-[1px] border-white text-xl font-thin p-3">Check Our Restaurant</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner
