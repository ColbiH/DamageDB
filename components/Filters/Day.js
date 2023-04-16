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
        name: 1,
        type: 'AND (EXTRACT(DAY FROM CrashDate) = 1)'
    },
    {
        id: 3,
        name: 2,
        type: 'AND (EXTRACT(DAY FROM CrashDate) = 2)'
    },
    {
        id: 4,
        name: 3,
        type: 'AND (EXTRACT(DAY FROM CrashDate) = 3)'
    },
    {
        id: 5,
        name: 4,
        type: 'AND (EXTRACT(DAY FROM CrashDate) = 4)'
    },
    {
        id: 6,
        name: 5,
        type: 'AND (EXTRACT(DAY FROM CrashDate) = 5)'
    },
    {
        id: 7,
        name: 6,
        type: 'AND (EXTRACT(DAY FROM CrashDate) = 6)'
    },
    {
        id: 8,
        name: 7,
        type: 'AND (EXTRACT(DAY FROM CrashDate) = 7)'
    },
    {
        id: 9,
        name: 8,
        type: 'AND (EXTRACT(DAY FROM CrashDate) = 8)'
    },
    {
        id: 10,
        name: 9,
        type: 'AND (EXTRACT(DAY FROM CrashDate) = 9)'
    },
    {
        id: 11,
        name: 10,
        type: 'AND (EXTRACT(DAY FROM CrashDate) = 10)'
    },
    {
        id: 12,
        name: 11,
        type: 'AND (EXTRACT(DAY FROM CrashDate) = 11)'
    },
    {
        id: 13,
        name: 12,
        type: 'AND (EXTRACT(DAY FROM CrashDate) = 12)'
    },
    {
        id: 14,
        name: 13,
        type: 'AND (EXTRACT(DAY FROM CrashDate) = 13)'
    },
    {
        id: 15,
        name: 14,
        type: 'AND (EXTRACT(DAY FROM CrashDate) = 14)'
    },
    {
        id: 16,
        name: 15,
        type: 'AND (EXTRACT(DAY FROM CrashDate) = 15)'
    },
    {
        id: 17,
        name: 16,
        type: 'AND (EXTRACT(DAY FROM CrashDate) = 16)'
    },
    {
        id: 18,
        name: 17,
        type: 'AND (EXTRACT(DAY FROM CrashDate) = 17)'
    },
    {
        id: 19,
        name: 18,
        type: 'AND (EXTRACT(DAY FROM CrashDate) = 18)'
    },
    {
        id: 20,
        name: 19,
        type: 'AND (EXTRACT(DAY FROM CrashDate) = 19)'
    },
    {
        id: 21,
        name: 20,
        type: 'AND (EXTRACT(DAY FROM CrashDate) = 20)'
    },
    {
        id: 22,
        name: 21,
        type: 'AND (EXTRACT(DAY FROM CrashDate) = 21)'
    },
    {
        id: 23,
        name: 22,
        type: 'AND (EXTRACT(DAY FROM CrashDate) = 22)'
    },
    {
        id: 24,
        name: 23,
        type: 'AND (EXTRACT(DAY FROM CrashDate) = 23)'
    },
    {
        id: 25,
        name: 24,
        type: 'AND (EXTRACT(DAY FROM CrashDate) = 24)'
    },
    {
        id: 26,
        name: 25,
        type: 'AND (EXTRACT(DAY FROM CrashDate) = 25)'
    },
    {
        id: 27,
        name: 26,
        type: 'AND (EXTRACT(DAY FROM CrashDate) = 26)'
    },
    {
        id: 28,
        name: 27,
        type: 'AND (EXTRACT(DAY FROM CrashDate) = 27)'
    },
    {
        id: 29,
        name: 28,
        type: 'AND (EXTRACT(DAY FROM CrashDate) = 28)'
    },
    {
        id: 30,
        name: 29,
        type: 'AND (EXTRACT(DAY FROM CrashDate) = 29)'
    },
    {
        id: 31,
        name: 30,
        type: 'AND (EXTRACT(DAY FROM CrashDate) = 30)'
    },
    {
        id: 32,
        name: 31,
        type: 'AND (EXTRACT(DAY FROM CrashDate) = 31)'
    }
]




function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Day(props) {
    const [selected, setSelected] = useState(people[0])

    function handleSelection(selected) {
        setSelected(selected);
        if (props.onDaySelect) {
            props.onDaySelect(selected.type);
        }
    }

    return (
        <Listbox value={selected} onChange={handleSelection}>
            {({ open }) => (
                <>
                    <Listbox.Label className="block text-sm font-medium leading-6 text-gray-900 text-center">Day</Listbox.Label>
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
