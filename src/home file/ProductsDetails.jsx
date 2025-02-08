

function Details({ product }) {

    const { image, price, title } = product

    return (
        <>
            <div className="relative bg-white  overflow-hidden h-[300px] w-[350px]  ">
                <img src={image} alt="" className="w-full h-[300px] object-cover" />
                <div className="absolute top-2 right-2 bg-green-700 text-white text-sm px-2 py-1 rounded-md">{price}</div>
                <div className="absolute bottom-0 w-full bg-gradient-to-t from-black to-transparent p-4">
                    <h3 className="text-white text-lg font-semibold">{title}</h3>
                </div>
            </div>
        </>
    )
}

export default Details
