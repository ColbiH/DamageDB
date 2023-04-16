import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'


const people= [
    {
        id: 1,
        name: 'All',
        type: '',
    },
    {
        id: 2,
        name: 'Sedan',
        type: 'AND (v.type = \'Sedan\')',
    },


    {
        id: 3,
        name: 'Station Wagon/SUV',
        type: 'AND (v.type = \'Station Wagon/Sport Utility v\')',
    },
    {
        id: 4,
        name: 'Van',
        type: 'AND (v.type = \'Van\')',
    },
    {
        id: 5,
        name: 'Motorcycle',
        type: 'AND (v.type = \'Motorcycle\')',
    },
    {
        id: 6,
        name: 'Bus',
        type: 'AND (v.type = \'Bus\')',
    },
    {
        id: 7,
        name: 'Truck ',
        type: 'AND (v.type = \'Box Truck\' or v.type = \'Pick-up Truck\' or v.type =  \'Tractor Truck\')',
    },
    {
        id: 8,
        name: 'Bike',
        type: 'AND (v.type = \'Bike\' or v.type = \'E-Bike\')',
    },
    {
        id: 9,
        name: 'Taxi',
        type: 'AND (v.type = \'Taxi\')',
    },
    {
        id: 10,
        name: 'Other',
        type: 'AND (v.type != \'Taxi\' AND v.type != \'E-Bike\' AND v.type != \'Bike\' AND v.type != \'Box Truck\' AND v.type != \'Pick-up Truck\' AND v.type !=  \'Tractor Truck\' AND v.type != \'Bus\' AND v.type != \'Motorcycle\' AND v.type != \'Van\' AND v.type != \'Station Wagon/Sport Utility v\' AND v.type != \'Sedan\')',
    }
]



function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Vehicle(props) {
    const [selected, setSelected] = useState(people[0])

    function handleSelection(selected) {
        setSelected(selected);
        if (props.onVehicleTypeSelect) {
            props.onVehicleTypeSelect(selected.type);
        }
    }

    return (
        <Listbox value={selected} onChange={handleSelection}>
            {({ open }) => (
                <>
                    <Listbox.Label className="block text-sm font-medium leading-6 text-gray-900 text-center">Vehicle Type</Listbox.Label>
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
