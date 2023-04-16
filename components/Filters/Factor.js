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
        id:2,
        name: 'Drug Related',
        type:'AND (ContributingFactor = \'Alcohol Involvement\' or ContributingFactor = \'Drugs (illegal)\' or ContributingFactor = \'Prescription Medication\')'
    },
    {
        id:3,
        name: 'Car Defect',
        type:'AND (ContributingFactor = \'Accelerator Defective\' or ContributingFactor = \'Brakes Defective\' or ContributingFactor = \'Steering Failure\' or ContributingFactor = \'Headlights Defective\' or ContributingFactor = \'Windshield Inadequate\' or ContributingFactor = \'Tow Hitch Defective\' or ContributingFactor = \'Tinted Windows\' or ContributingFactor = \'Other Lighting Defects\' or ContributingFactor = \'Tire Failure/Inadequate\')'
    },
    {
        id:4,
        name: 'Road Defectiveness',
        type:'AND (ContributingFactor = \'Pavement Defective \' or ContributingFactor = \'Obstruction/Debris\' or ContributingFactor = \'Pavement Slippery\' or ContributingFactor = \'Traffic Control Device Improper/Non-Working\' or ContributingFactor = \'Shoulders Defective/Improper\' or ContributingFactor = \'Lane Marking Improper/Inadequate\')'
    },
    {
        id:5,
        name: 'Distracted Driving',
        type:'AND (ContributingFactor = \'Texting\' or ContributingFactor = \'Cell Phone (hand-Held)\' or ContributingFactor = \'Listening/Using Headphones\' or ContributingFactor = \'Eating or Drinking\' or ContributingFactor = \'Outside Car Distraction\' or ContributingFactor = \'Using On Board Navigation Device\' or ContributingFactor = \'Other Electronic Device\' or ContributingFactor = \'Passenger Distraction\' or ContributingFactor = \'Fell Asleep\' or ContributingFactor = \'Cell Phone (hands-free)\' or ContributingFactor = \'Lost Consciousness\' or ContributingFactor = \'Fatigued/Drowsy\' or ContributingFactor = \'Illness\')'
    },
    {
        id:6,
        name: 'Violating Driving Laws',
        type:'AND (ContributingFactor = \'Failure to Yield Right-of-Way\' or ContributingFactor = \'Turning Improperly\' or ContributingFactor = \'Traffic Control Disregarded\' or ContributingFactor = \'Unsafe Speed\' or ContributingFactor = \'Vehicle Vandalism\' or ContributingFactor = \'Passing or Lane Usage Improper\' or ContributingFactor = \'Failure to Keep Right\' or ContributingFactor = \'Aggressive Driving/Road Rage\')'
    },

    {
        id:7,
        name: 'Unexpected Hazards',
        type:'AND (ContributingFactor = \'Glare\' or ContributingFactor = \'Animals Action\' or ContributingFactor = \'Reaction to Uninvolved Vehicle\' or ContributingFactor = \'Pedestrian/Bicyclist/Other Pedestrian Error/Confusion\' or ContributingFactor = \'Driverless/Runaway Vehicle\' or ContributingFactor = \'View Obstructed/Limited\')'
    },

    {
        id:8,
        name: 'Driving Too Close',
        type:'AND (ContributingFactor = \'Following Too Closely\' or ContributingFactor = \'Passing Too Closely\' or ContributingFactor = \'Unsafe Lane Changing\' or ContributingFactor = \'Backing Unsafely\')'
    },
    {
        id:9,
        name: 'Other',
        type:'AND (ContributingFactor = \'Unspecified\' or ContributingFactor = \'Other Vehicular\' or ContributingFactor = \'Driver Inexperience\' or ContributingFactor = \'Oversized Vehicle\' or ContributingFactor = \'Physical Disability\')'
    },
]




function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Factor(props) {
    const [selected, setSelected] = useState(people[0])

    function handleSelection(selected) {
        setSelected(selected);
        if (props.onFactorSelect) {
            props.onFactorSelect(selected.type);
        }
    }

    return (
        <Listbox value={selected} onChange={handleSelection}>
            {({ open }) => (
                <>
                    <Listbox.Label className="block text-sm font-medium leading-6 text-gray-900 text-center">Contributing Factor</Listbox.Label>
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
