
import { onlyIcons, setOnlyIcons } from "../routing/Routing"
import AsideTabs from "./tabs/AsideTabs";
function Aside() {
    function clickHander() {
        setOnlyIcons(!onlyIcons);
    }
    return (
        <section className="w-full h-full p-1 overflow-hidden">
            <div className="w-full h-full border rounded">
                {/* Aside Logo + Menu icon */}
                <div className={`flex pl-[19px] gap-3 items-center border-b h-[50px]`}>
                    <div
                        className="w-[27px] bg-secondary h-[27px] flex justify-center items-center rounded press-3"
                        onClick={clickHander}
                    >
                    
                    </div>
                    <img  className={`h-[40px] transition-all duration-1000 ${onlyIcons ? " w-0" : " w-[100px]"} `} alt="logo" />
                </div>

                {/* Aside Tabs */}
                <div className="max-h-[calc(100%-50px)] overflow-y-auto hide-scrollbar overflow-x-hidden">
                    <AsideTabs />
                </div>
            </div>
        </section>
    );
}

export default Aside;
