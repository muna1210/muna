import { useState } from "react";
export default function Figma() {
return(
    <div className=" w-screen h-screen bg-white">
        <div className=" w-screen h-32 bg-stone-200 flex items-center">
                <p className=" italic text-6xl font-thin">XOXO</p>
                <p className="text-lg">New</p>
                <p className="text-lg">Coming soon</p>
                <p className="text-lg">Collection</p>
            <img className="" src="user.svg"/>
            <img src="bag.svg"/>
            <img src="heart.svg"/>
        </div>
    </div>
);
}
