import {useState, useEffect, Fragment} from "react";
import SideBar from './SideBar';
import TopBar from './TopBar';
import {Transition} from "@headlessui/react";

export default function Layout({ children }) {
    const [showNav, setShowNav] = useState(true);

    return (
        <>
            <TopBar showNav={showNav} setShowNav={setShowNav} />
            <Transition
                as={Fragment}
                show={showNav}
                enter="transform transition duration-[400ms]"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transform duration-[400ms] transition ease-in-out"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
                >
                <SideBar showNav={showNav}/>
            </Transition>
            <main className={`pt-16 transition-all duration-[400ms] ${showNav && "pl-56"}`}>
                <div className="px-4 md:px-16">{children}</div>
            </main>
        </>
    );
}