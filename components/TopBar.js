import { Fragment } from "react";
import {
    Bars3CenterLeftIcon,
} from "@heroicons/react/24/solid";
import { BellIcon, CheckIcon } from "@heroicons/react/24/outline";
import { Menu, Transition, Popover } from "@headlessui/react";
import Link from "next/link";

export default function TopBar({ showNav, setShowNav }) {
    return (
        <div
            className={`fixed w-full h-16 flex justify-between items-center transition-all duration-[400ms] ${
                showNav ? "pl-56" : ""
            }`}
        >
            <div className="pl-4 md:pl-16 flex items-center">
                <Bars3CenterLeftIcon
                    className="h-8 w-8 text-gray-700 cursor-pointer"
                    onClick={() => setShowNav(!showNav)}
                />
                <span className="pl-2 mx-1 text-gray-700 text-3xl font-bold">DamageDB</span>
            </div>
        </div>
    );
}
