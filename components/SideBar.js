import {forwardRef} from "react";
import Link from "next/link";
import {UserIcon, ChartBarSquareIcon, MapIcon} from "@heroicons/react/24/solid";
import { useRouter } from "next/router";

const SideBar = forwardRef(({ showNav }, ref) => {
    const router = useRouter();

    return (
        <div ref={ref} className="fixed w-56 h-full bg-white shadow-sm">
            <div className="flex justify-center mt-6 mb-14">
                <picture>
                    <img
                        className="w-32 h-auto"
                        src="/../public/New-York-Big-Apple.png"
                        alt="logo"
                    />
                </picture>
            </div>

            <div className="flex flex-col">
                <Link href="/">
                    <div
                        className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
                            router.pathname == "/"
                                ? "bg-blue-100 text-blue-500"
                                : "text-gray-400 hover:bg-blue-100 hover:text-blue-500"
                        }`}
                    >
                        <div className="mr-2">
                            <MapIcon className="h-5 w-5" />
                        </div>
                        <div>
                            <p>Zip Code Map</p>
                        </div>
                    </div>
                </Link>
                <Link href="/billing">
                    <div
                        className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
                            router.pathname == "/billing"
                                ? "bg-blue-100 text-blue-500"
                                : "text-gray-400 hover:bg-blue-100 hover:text-blue-500"
                        }`}
                    >
                        <div className="mr-2">
                            <ChartBarSquareIcon className="h-5 w-5" />
                        </div>
                        <div>
                            <p>Charts</p>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    )
});

SideBar.displayName = "SideBar";
export default SideBar;