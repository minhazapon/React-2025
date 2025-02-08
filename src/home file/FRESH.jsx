

function FRESH() {

    const food = {
        food1: 'premium food',
        food2: 'normal food',
        food3: 'Sea food',
        food4: 'Bengali food',
        food5: 'Pakistani food',
    }

    return (
        <>
            <div className=" mt-20 mb-20 ">
                <div className="">
                    <div className=" flex justify-center items-center gap-20 ">
                        <div className=" bg-white border-[1px]  h-[520px] w-[250px] p-4  ">
                            <div>
                                <p className=" font-semibold text-xl text-green-700 ">BASIC
                                </p>
                                <p className="font-sans text-2xl mt-3">$ 49.99</p>
                                <p className=" mt-3 text-gray-400 ">PER DAY</p>
                            </div>
                            <div className=" mt-8 ">
                                <p className=" text-2xl font-thin text-gray-600 "> {food.food1} </p>
                                <hr className=" mt-3"></hr>
                                <p className=" text-2xl font-thin text-gray-600 ">{food.food2}</p>
                                <hr className=" mt-3"></hr>
                                <p className=" text-2xl font-thin text-gray-600 ">{food.food3}</p>
                                <hr className=" mt-3"></hr>
                                <p className=" text-2xl font-thin text-gray-600 ">{food.food4}</p>
                                <hr className=" mt-3"></hr>
                                <p className=" text-2xl font-thin text-gray-600 ">{food.food5}</p>
                                <hr className=" mt-3"></hr>
                            </div>
                            <button className=" btn text-white bg-green-700 mt-5 text-xs ">read more</button>
                        </div>
                        <div className=" bg-white border-[1px] h-[520px]  w-[250px] ">
                            <div className=" bg-green-700 p-4 ">
                                <p className=" font-semibold text-xl text-white ">BASIC
                                </p>
                                <p className="font-sans text-2xl mt-3 text-white">$ 49.99</p>
                                <p className=" mt-3 text-white ">PER DAY</p>
                            </div>
                            <div className=" mt-8  p-4  ">
                                <p className=" text-2xl font-thin text-gray-600 "> {food.food1} </p>
                                <hr className=" mt-3"></hr>
                                <p className=" text-2xl font-thin text-gray-600 ">{food.food2}</p>
                                <hr className=" mt-3"></hr>
                                <p className=" text-2xl font-thin text-gray-600 ">{food.food3}</p>
                                <hr className=" mt-3"></hr>
                                <p className=" text-2xl font-thin text-gray-600 ">{food.food4}</p>
                                <hr className=" mt-3"></hr>
                                <p className=" text-2xl font-thin text-gray-600 ">{food.food5}</p>
                                <hr className=" mt-3"></hr>
                            </div>
                            <div className="p-4 ">
                                <button className=" btn text-white bg-green-700 text-xs ">read more</button>
                            </div>
                        </div>
                        <div>
                            <p className=" text-center text-5xl ">FRESH MENU</p>
                            <p className=" text-center text-gray-400 mt-5 ">Lorem ipsum dolor sit amet consectetur, adipisicing elit.<br></br> Sapiente voluptate voluptatum reiciendis voluptatem!<br></br> Earum quasi autem quidem libero dolorem architecto hic<br></br> error magni. Impedit tenetur minima dolor delectus dicta illo.</p>
                            <div className=" flex justify-center mt-10">
                                <button className=" btn bg-green-700 text-white ">BOOK TABLE</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default FRESH
