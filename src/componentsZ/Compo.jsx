import CPlus from "./CPlus"
import DSA from "./DSA"
import JsCom from "./JsCom"
import Python from "./Python"

function Compo() {
    return (
        <div className=" flex justify-center p-20">
            <div className=" grid md:grid-cols-3 gap-10 ">
                <JsCom></JsCom>
                <Python></Python>
                <CPlus></CPlus>
                <DSA></DSA>
                <JsCom></JsCom>
                <Python></Python>
                <CPlus></CPlus>
                <DSA></DSA>
                <JsCom></JsCom>
                <Python></Python>
                <CPlus></CPlus>
                <DSA></DSA>
                <JsCom></JsCom>
                <Python></Python>
                <CPlus></CPlus>
                <DSA></DSA>
            </div>
        </div>

    )
}

export default Compo
