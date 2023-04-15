import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'


const startingId = 1;
const nycZipcodes = [
    "All",
    "10001",
    "10002",
    "10003",
    "10004",
    "10005",
    "10006",
    "10007",
    "10009",
    "10010",
    "10011",
    "10012",
    "10013",
    "10014",
    "10016",
    "10017",
    "10018",
    "10019",
    "10020",
    "10021",
    "10022",
    "10023",
    "10024",
    "10025",
    "10026",
    "10027",
    "10028",
    "10029",
    "10030",
    "10031",
    "10032",
    "10033",
    "10034",
    "10035",
    "10036",
    "10037",
    "10038",
    "10039",
    "10040",
    "10044",
    "10128",
    "10280",
    "10301",
    "10302",
    "10303",
    "10304",
    "10305",
    "10306",
    "10307",
    "10308",
    "10309",
    "10310",
    "10312",
    "10314",
    "10451",
    "10452",
    "10453",
    "10454",
    "10455",
    "10456",
    "10457",
    "10458",
    "10459",
    "10460",
    "10461",
    "10462",
    "10463",
    "10464",
    "10465",
    "10466",
    "10467",
    "10468",
    "10469",
    "10470",
    "10471",
    "10472",
    "10473",
    "10474",
    "10475",
    "11001",
    "11004",
    "11005",
    "11040",
    "11101",
    "11102",
    "11103",
    "11104",
    "11105",
    "11106",
    "11109",
    "11201",
    "11203",
    "11204",
    "11205",
    "11206",
    "11207",
    "11208",
    "11209",
    "11210",
    "11211",
    "11212",
    "11213",
    "11214",
    "11215",
    "11216",
    "11217",
    "11218",
    "11219",
    "11220",
    "11221",
    "11222",
    "11223",
    "11224",
    "11225",
    "11226",
    "11228",
    "11229",
    "11230",
    "11231",
    "11232",
    "11233",
    "11234",
    "11235",
    "11236",
    "11237",
    "11238",
    "11239",
    "11354",
    "11355",
    "11356",
    "11357",
    "11358",
    "11359",
    "11360",
    "11361",
    "11362",
    "11363",
    "11364",
    "11365",
    "11366",
    "11367",
    "11368",
    "11369",
    "11370",
    "11371",
    "11372",
    "11373",
    "11374",
    "11375",
    "11377",
    "11378",
    "11379",
    "11385",
    "11411",
    "11412",
    "11413",
    "11414",
    "11415",
    "11416",
    "11417",
    "11418",
    "11419",
    "11420",
    "11421",
    "11422",
    "11423",
    "11426",
    "11427",
    "11428",
    "11429",
    "11430",
    "11432",
    "11433",
    "11434",
    "11435",
    "11436",
    "11451",
    "11691",
    "11692",
    "11693",
    "11694",
    "11697"
];


const people = nycZipcodes.map((zipcode, index) => ({
    id: startingId + index,
    name: `${zipcode}`,
}));



function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Zipcode() {
    const [selected, setSelected] = useState(people[0])

    return (
        <Listbox value={selected} onChange={setSelected}>
            {({ open }) => (
                <>
                    <Listbox.Label className="block text-sm font-medium leading-6 text-gray-900 text-center">Zip Code</Listbox.Label>
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
