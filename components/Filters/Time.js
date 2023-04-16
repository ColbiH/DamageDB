import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'


const people= [
    {
        id: 1,
        name: 'All',
        type: "",
    },
    {
        id: 2,
        name: "12:00 AM",
        type: 'AND (EXTRACT(HOUR FROM CrashTime) = 0)'
    },
    {
        id: 3,
        name: "1:00 AM",
        type: 'AND (EXTRACT(HOUR FROM CrashTime) = 1)'
    },
    {
        id: 4,
        name: "2:00 AM",
        type: 'AND (EXTRACT(HOUR FROM CrashTime) = 2)'
    },
    {
        id: 5,
        name: "3:00 AM",
        type: 'AND (EXTRACT(HOUR FROM CrashTime) = 3)'
    },
    {
        id: 6,
        name: "4:00 AM",
        type: 'AND (EXTRACT(HOUR FROM CrashTime) = 4)'
    },
    {
        id: 7,
        name: "5:00 AM",
        type: 'AND (EXTRACT(HOUR FROM CrashTime) = 5)'
    },
    {
        id: 8,
        name: "6:00 AM",
        type: 'AND (EXTRACT(HOUR FROM CrashTime) = 6)'
    },
    {
        id: 9,
        name: "7:00 AM",
        type: 'AND (EXTRACT(HOUR FROM CrashTime) = 7)'
    },
    {
        id: 10,
        name: "8:00 AM",
        type: 'AND (EXTRACT(HOUR FROM CrashTime) = 8)'
    },
    {
        id: 11,
        name: "9:00 AM",
        type: 'AND (EXTRACT(HOUR FROM CrashTime) = 9)'
    },
    {
        id: 12,
        name: "10:00 AM",
        type: 'AND (EXTRACT(HOUR FROM CrashTime) = 10)'
    },
    {
        id: 13,
        name: "11:00 AM",
        type: 'AND (EXTRACT(HOUR FROM CrashTime) = 11)'
    },
    {
        id: 14,
        name: "12:00 PM",
        type: 'AND (EXTRACT(HOUR FROM CrashTime) = 12)'
    },
    {
        id: 15,
        name: "1:00 PM",
        type: 'AND (EXTRACT(HOUR FROM CrashTime) = 13)'
    },
    {
        id: 16,
        name: "2:00 PM",
        type: 'AND (EXTRACT(HOUR FROM CrashTime) = 14)'
    },
    {
        id: 17,
        name: "3:00 PM",
        type: 'AND (EXTRACT(HOUR FROM CrashTime) = 15)'
    },
    {
        id: 18,
        name: "4:00 PM",
        type: 'AND (EXTRACT(HOUR FROM CrashTime) = 16)'
    },
    {
        id: 19,
        name: "5:00 PM",
        type: 'AND (EXTRACT(HOUR FROM CrashTime) = 17)'
    },
    {
        id: 20,
        name: "6:00 PM",
        type: 'AND (EXTRACT(HOUR FROM CrashTime) = 18)'
    },
    {
        id: 21,
        name: "7:00 PM",
        type: 'AND (EXTRACT(HOUR FROM CrashTime) = 19)'
    },
    {
        id: 22,
        name: "8:00 PM",
        type: 'AND (EXTRACT(HOUR FROM CrashTime) = 20)'
    },
    {
        id: 23,
        name: "9:00 PM",
        type: 'AND (EXTRACT(HOUR FROM CrashTime) = 21)'
    },
    {
        id: 24,
        name: "10:00 PM",
        type: 'AND (EXTRACT(HOUR FROM CrashTime) = 22)'
    },
    {
        id: 25,
        name: "11:00 PM",
        type: 'AND (EXTRACT(HOUR FROM CrashTime) = 23)'
    }
]




function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Time(props) {
    const [selected, setSelected] = useState(people[0])

    function handleSelection(selected) {
        setSelected(selected);
        if (props.onTimeSelect) {
            props.onTimeSelect(selected.type);
        }
    }

    return (
        <Listbox value={selected} onChange={handleSelection}>
            {({ open }) => (
                <>
                    <Listbox.Label className="block text-sm font-medium leading-6 text-gray-900 text-center">Time of Day</Listbox.Label>
                    <div className="relative mt-2">
                        <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6">
              <span className="flex items-center">
                <span className="ml-3 block truncate">{selected.name}</span>
              </span>
                            <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </span>
                        </Listbox.Button>

                        <Transition
                            show={open}
                            as={Fragment}
                            leave="transition ease-in duration-100"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                {people.map((person) => (
                                    <Listbox.Option
                                        key={person.id}
                                        className={({ active }) =>
                                            classNames(
                                                active ? 'bg-indigo-600 text-white' : 'text-gray-900',
                                                'relative cursor-default select-none py-2 pl-3 pr-9'
                                            )
                                        }
                                        value={person}
                                    >
                                        {({ selected, active }) => (
                                            <>
                                                <div className="flex items-center">
                                                    <span className={classNames(selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate')}>
                            {person.name}
                          </span>
                                                </div>

                                                {selected ? (
                                                    <span
                                                        className={classNames(
                                                            active ? 'text-white' : 'text-indigo-600',
                                                            'absolute inset-y-0 right-0 flex items-center pr-4'
                                                        )}
                                                    >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                                                ) : null}
                                            </>
                                        )}
                                    </Listbox.Option>
                                ))}
                            </Listbox.Options>
                        </Transition>
                    </div>
                </>
            )}
        </Listbox>
    )
}
