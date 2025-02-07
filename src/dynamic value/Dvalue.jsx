

function Dvalue() {

    const aponInfo = {

        name: 'Minhazul Abedin Apon',
        age: 23,
        city: 'jhenaidah',
        district: 'jhenaidah',
        profession: 'software developer',
        school: 'jheniadah govt. high school',
        college: 'shishukunj college',
        company: 'toptal'

    }

    return (
        <>
            <div className=" border-[1px] border-cyan-700 p-10 mt-10 mb-10 ml-10 mr-10 rounded-xl ">
                <p className=" text-xl text-center font-thin  "> {aponInfo.name} </p>
                <p className=" text-xl text-center font-thin  "> {aponInfo.age} </p>
                <p className=" text-xl text-center font-thin  "> {aponInfo.city} </p>
                <p className=" text-xl text-center font-thin  "> {aponInfo.district} </p>
                <p className=" text-xl text-center font-thin  "> {aponInfo.profession} </p>
                <p className=" text-xl text-center font-thin  "> {aponInfo.school} </p>
                <p className=" text-xl text-center font-thin  "> {aponInfo.college} </p>
                <p className=" text-xl text-center font-thin  "> {aponInfo.company} </p>
            </div>
        </>
    )
}

export default Dvalue
