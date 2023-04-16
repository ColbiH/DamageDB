import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'


const people= [
    {
        id: 1,
        name: 'All',
        type: ""
    },
    {
        id: 2,
        name: 'Accidents with Injury',
        type: 'AND (NumberOfPersonsInjured > 0)'
    },
    {
        id: 3,
        name: 'Accidents with Death',
        type: 'AND (NumberOfPersonsKilled > 0)'
    },
    {
        id: 4,
        name: 'Accidents with Pedestrian Injury',
        type: 'AND (NumberOfPedestriansInjured > 0)'
    },
    {
        id: 5,
        name: 'Accidents with Pedestrian Death',
        type: 'AND (NumberOfPedestriansKilled > 0)'
    },
    {
        id: 6,
        name: 'Accidents with Cyclists Injury',
        type: 'AND (NumberOfCyclistsInjured > 0)'
    },
    {
        id: 7,
        name: 'Accidents with Cyclists Death',
        type: 'AND (NumberOfCyclistsDeath > 0)'
    },
    {
        id: 8,
        name: 'Accidents with Motorist Injury',
        type: 'AND (NumberOfMotorists > 0)'
    },
    {
        id: 9,
        name: 'Accidents with Motorist Death',
        type: 'AND (NumberOfMotoristsDeath > 0)'
    }
]




function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Casualty(props) {
    const [selected, setSelected] = useState(people[0])

    function handleSelection(selected) {
        setSelected(selected);
        if (props.onCasualtyTypeSelect) {
            props.onCasualtyTypeSelect(selected.type);
        }
    }

    return (
        <Listbox value={selected} onChange={handleSelection}>
            {({ open }) => (
                <>
                    <Listbox.Label className="block text-sm font-medium leading-6 text-gray-900 text-center">Casualty Type</Listbox.Label>
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
