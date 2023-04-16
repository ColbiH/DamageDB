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
        name: 'January',
        type: 'AND EXTRACT(MONTH FROM CrashDate) = 1',
    },
    {
        id: 3,
        name: 'February',
        type: 'AND EXTRACT(MONTH FROM CrashDate) = 2',
    },
    {
        id: 4,
        name: 'March',
        type: 'AND EXTRACT(MONTH FROM CrashDate) = 3',
    },
    {
        id: 5,
        name: 'April',
        type: 'AND EXTRACT(MONTH FROM CrashDate) = 4',
    },
    {
        id: 6,
        name: 'May',
        type: 'AND EXTRACT(MONTH FROM CrashDate) = 5',
    },
    {
        id: 7,
        name: 'June',
        type: 'AND EXTRACT(MONTH FROM CrashDate) = 6',
    },
    {
        id: 8,
        name: 'July',
        type: 'AND EXTRACT(MONTH FROM CrashDate) = 7',
    },
    {
        id: 9,
        name: 'August',
        type: 'AND EXTRACT(MONTH FROM CrashDate) = 8',
    },
    {
        id: 10,
        name: 'September',
        type: 'AND EXTRACT(MONTH FROM CrashDate) = 9',
    },
    {
        id: 11,
        name: 'October',
        type: 'AND EXTRACT(MONTH FROM CrashDate) = 10',
    },
    {
        id: 12,
        name: 'November',
        type: 'AND EXTRACT(MONTH FROM CrashDate) = 11',
    },
    {
        id: 13,
        name: 'December',
        type: 'AND EXTRACT(MONTH FROM CrashDate) = 12',
    }
]


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Month(props) {
    const [selected, setSelected] = useState(people[0])

    function handleSelection(selected) {
        setSelected(selected);
        if (props.onMonthSelect) {
            props.onMonthSelect(selected.type);
        }
    }

    return (
        <Listbox value={selected} onChange={handleSelection}>
            {({ open }) => (
                <>
                    <Listbox.Label className="block text-sm font-medium leading-6 text-gray-900 text-center">Month</Listbox.Label>
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
