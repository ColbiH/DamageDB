import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'


const people =[
    {
        id: 1,
        name: 'All',
        type: '',
    },
    {
        id: 2,
        name: 10453,
        type: 'AND (l.ZipCode = \'10453\')'
    },
    {
        id: 3,
        name: 10451,
        type: 'AND (l.ZipCode = \'10451\')'
    },
    {
        id: 4,
        name: 10032,
        type: 'AND (l.ZipCode = \'10032\')'
    },
    {
        id: 5,
        name: 10468,
        type: 'AND (l.ZipCode = \'10468\')'
    },
    {
        id: 6,
        name: 11427,
        type: 'AND (l.ZipCode = \'11427\')'
    },
    {
        id: 7,
        name: 11203,
        type: 'AND (l.ZipCode = \'11203\')'
    },
    {
        id: 8,
        name: 10036,
        type: 'AND (l.ZipCode = \'10036\')'
    },
    {
        id: 9,
        name: 10027,
        type: 'AND (l.ZipCode = \'10027\')'
    },
    {
        id: 10,
        name: 11411,
        type: 'AND (l.ZipCode = \'11411\')'
    },
    {
        id: 11,
        name: 11412,
        type: 'AND (l.ZipCode = \'11412\')'
    },
    {
        id: 12,
        name: 11237,
        type: 'AND (l.ZipCode = \'11237\')'
    },
    {
        id: 13,
        name: 11231,
        type: 'AND (l.ZipCode = \'11231\')'
    },
    {
        id: 14,
        name: 11224,
        type: 'AND (l.ZipCode = \'11224\')'
    },
    {
        id: 15,
        name: 10463,
        type: 'AND (l.ZipCode = \'10463\')'
    },
    {
        id: 16,
        name: 11104,
        type: 'AND (l.ZipCode = \'11104\')'
    },
    {
        id: 17,
        name: 11219,
        type: 'AND (l.ZipCode = \'11219\')'
    },
    {
        id: 18,
        name: 10472,
        type: 'AND (l.ZipCode = \'10472\')'
    },
    {
        id: 19,
        name: 10466,
        type: 'AND (l.ZipCode = \'10466\')'
    },
    {
        id: 20,
        name: 11228,
        type: 'AND (l.ZipCode = \'11228\')'
    },
    {
        id: 21,
        name: 10039,
        type: 'AND (l.ZipCode = \'10039\')'
    },
    {
        id: 22,
        name: 10069,
        type: 'AND (l.ZipCode = \'10069\')'
    },
    {
        id: 23,
        name: 10005,
        type: 'AND (l.ZipCode = \'10005\')'
    },
    {
        id: 24,
        name: 11207,
        type: 'AND (l.ZipCode = \'11207\')'
    },
    {
        id: 25,
        name: 11370,
        type: 'AND (l.ZipCode = \'11370\')'
    },
    {
        id: 26,
        name: 11421,
        type: 'AND (l.ZipCode = \'11421\')'
    },
    {
        id: 27,
        name: 10017,
        type: 'AND (l.ZipCode = \'10017\')'
    },
    {
        id: 28,
        name: 10128,
        type: 'AND (l.ZipCode = \'10128\')'
    },
    {
        id: 29,
        name: 10458,
        type: 'AND (l.ZipCode = \'10458\')'
    },
    {
        id: 30,
        name: 11355,
        type: 'AND (l.ZipCode = \'11355\')'
    },
    {
        id: 31,
        name: 10012,
        type: 'AND (l.ZipCode = \'10012\')'
    },
    {
        id: 32,
        name: 11413,
        type: 'AND (l.ZipCode = \'11413\')'
    },
    {
        id: 33,
        name: 10454,
        type: 'AND (l.ZipCode = \'10454\')'
    },
    {
        id: 34,
        name: 11232,
        type: 'AND (l.ZipCode = \'11232\')'
    },
    {
        id: 35,
        name: 11379,
        type: 'AND (l.ZipCode = \'11379\')'
    },
    {
        id: 36,
        name: 11436,
        type: 'AND (l.ZipCode = \'11436\')'
    },
    {
        id: 37,
        name: 11249,
        type: 'AND (l.ZipCode = \'11249\')'
    },
    {
        id: 38,
        name: 10075,
        type: 'AND (l.ZipCode = \'10075\')'
    },
    {
        id: 39,
        name: 10307,
        type: 'AND (l.ZipCode = \'10307\')'
    },
    {
        id: 40,
        name: 10018,
        type: 'AND (l.ZipCode = \'10018\')'
    },
    {
        id: 41,
        name: 11105,
        type: 'AND (l.ZipCode = \'11105\')'
    },
    {
        id: 42,
        name: 10471,
        type: 'AND (l.ZipCode = \'10471\')'
    },
    {
        id: 43,
        name: 11369,
        type: 'AND (l.ZipCode = \'11369\')'
    },
    {
        id: 44,
        name: 11229,
        type: 'AND (l.ZipCode = \'11229\')'
    },
    {
        id: 45,
        name: 11354,
        type: 'AND (l.ZipCode = \'11354\')'
    },
    {
        id: 46,
        name: 11365,
        type: 'AND (l.ZipCode = \'11365\')'
    },
    {
        id: 47,
        name: 10030,
        type: 'AND (l.ZipCode = \'10030\')'
    },
    {
        id: 48,
        name: 11692,
        type: 'AND (l.ZipCode = \'11692\')'
    },
    {
        id: 49,
        name: 11040,
        type: 'AND (l.ZipCode = \'11040\')'
    },
    {
        id: 50,
        name: 10168,
        type: 'AND (l.ZipCode = \'10168\')'
    },
    {
        id: 51,
        name: 10172,
        type: 'AND (l.ZipCode = \'10172\')'
    },
    {
        id: 52,
        name: 10065,
        type: 'AND (l.ZipCode = \'10065\')'
    },
    {
        id: 53,
        name: 11238,
        type: 'AND (l.ZipCode = \'11238\')'
    },
    {
        id: 54,
        name: 11218,
        type: 'AND (l.ZipCode = \'11218\')'
    },
    {
        id: 55,
        name: 11213,
        type: 'AND (l.ZipCode = \'11213\')'
    },
    {
        id: 56,
        name: 11432,
        type: 'AND (l.ZipCode = \'11432\')'
    },
    {
        id: 57,
        name: 10474,
        type: 'AND (l.ZipCode = \'10474\')'
    },
    {
        id: 58,
        name: 11216,
        type: 'AND (l.ZipCode = \'11216\')'
    },
    {
        id: 59,
        name: 11226,
        type: 'AND (l.ZipCode = \'11226\')'
    },
    {
        id: 60,
        name: 11214,
        type: 'AND (l.ZipCode = \'11214\')'
    },
    {
        id: 61,
        name: 10019,
        type: 'AND (l.ZipCode = \'10019\')'
    },
    {
        id: 62,
        name: 10457,
        type: 'AND (l.ZipCode = \'10457\')'
    },
    {
        id: 63,
        name: 11373,
        type: 'AND (l.ZipCode = \'11373\')'
    },
    {
        id: 64,
        name: 10040,
        type: 'AND (l.ZipCode = \'10040\')'
    },
    {
        id: 65,
        name: 10034,
        type: 'AND (l.ZipCode = \'10034\')'
    },
    {
        id: 66,
        name: 11414,
        type: 'AND (l.ZipCode = \'11414\')'
    },
    {
        id: 67,
        name: 10028,
        type: 'AND (l.ZipCode = \'10028\')'
    },
    {
        id: 68,
        name: 11429,
        type: 'AND (l.ZipCode = \'11429\')'
    },
    {
        id: 69,
        name: 10031,
        type: 'AND (l.ZipCode = \'10031\')'
    },
    {
        id: 70,
        name: 11106,
        type: 'AND (l.ZipCode = \'11106\')'
    },
    {
        id: 71,
        name: 11418,
        type: 'AND (l.ZipCode = \'11418\')'
    },
    {
        id: 72,
        name: 11225,
        type: 'AND (l.ZipCode = \'11225\')'
    },
    {
        id: 73,
        name: 10314,
        type: 'AND (l.ZipCode = \'10314\')'
    },
    {
        id: 74,
        name: 10464,
        type: 'AND (l.ZipCode = \'10464\')'
    },
    {
        id: 75,
        name: 10280,
        type: 'AND (l.ZipCode = \'10280\')'
    },
    {
        id: 76,
        name: 10281,
        type: 'AND (l.ZipCode = \'10281\')'
    },
    {
        id: 77,
        name: 10302,
        type: 'AND (l.ZipCode = \'10302\')'
    },
    {
        id: 78,
        name: 11211,
        type: 'AND (l.ZipCode = \'11211\')'
    },
    {
        id: 79,
        name: 10456,
        type: 'AND (l.ZipCode = \'10456\')'
    },
    {
        id: 80,
        name: 11378,
        type: 'AND (l.ZipCode = \'11378\')'
    },
    {
        id: 81,
        name: 10021,
        type: 'AND (l.ZipCode = \'10021\')'
    },
    {
        id: 82,
        name: 11239,
        type: 'AND (l.ZipCode = \'11239\')'
    },
    {
        id: 83,
        name: 11693,
        type: 'AND (l.ZipCode = \'11693\')'
    },
    {
        id: 84,
        name: 10461,
        type: 'AND (l.ZipCode = \'10461\')'
    },
    {
        id: 85,
        name: 11372,
        type: 'AND (l.ZipCode = \'11372\')'
    },
    {
        id: 86,
        name: 11356,
        type: 'AND (l.ZipCode = \'11356\')'
    },
    {
        id: 87,
        name: 11434,
        type: 'AND (l.ZipCode = \'11434\')'
    },
    {
        id: 88,
        name: 11375,
        type: 'AND (l.ZipCode = \'11375\')'
    },
    {
        id: 89,
        name: 10013,
        type: 'AND (l.ZipCode = \'10013\')'
    },
    {
        id: 90,
        name: 10001,
        type: 'AND (l.ZipCode = \'10001\')'
    },
    {
        id: 91,
        name: 11417,
        type: 'AND (l.ZipCode = \'11417\')'
    },
    {
        id: 92,
        name: 10029,
        type: 'AND (l.ZipCode = \'10029\')'
    },
    {
        id: 93,
        name: 11374,
        type: 'AND (l.ZipCode = \'11374\')'
    },
    {
        id: 94,
        name: 10020,
        type: 'AND (l.ZipCode = \'10020\')'
    },
    {
        id: 95,
        name: 11415,
        type: 'AND (l.ZipCode = \'11415\')'
    },
    {
        id: 96,
        name: 10038,
        type: 'AND (l.ZipCode = \'10038\')'
    },
    {
        id: 97,
        name: 10278,
        type: 'AND (l.ZipCode = \'10278\')'
    },
    {
        id: 98,
        name: 11695,
        type: 'AND (l.ZipCode = \'11695\')'
    },
    {
        id: 99,
        name: 11221,
        type: 'AND (l.ZipCode = \'11221\')'
    },
    {
        id: 100,
        name: 10462,
        type: 'AND (l.ZipCode = \'10462\')'
    },
    {
        id: 101,
        name: 10469,
        type: 'AND (l.ZipCode = \'10469\')'
    },
    {
        id: 102,
        name: 10475,
        type: 'AND (l.ZipCode = \'10475\')'
    },
    {
        id: 103,
        name: 11201,
        type: 'AND (l.ZipCode = \'11201\')'
    },
    {
        id: 104,
        name: 11220,
        type: 'AND (l.ZipCode = \'11220\')'
    },
    {
        id: 105,
        name: 11361,
        type: 'AND (l.ZipCode = \'11361\')'
    },
    {
        id: 106,
        name: 10025,
        type: 'AND (l.ZipCode = \'10025\')'
    },
    {
        id: 107,
        name: 11206,
        type: 'AND (l.ZipCode = \'11206\')'
    },
    {
        id: 108,
        name: 10310,
        type: 'AND (l.ZipCode = \'10310\')'
    },
    {
        id: 109,
        name: 11691,
        type: 'AND (l.ZipCode = \'11691\')'
    },
    {
        id: 110,
        name: 11377,
        type: 'AND (l.ZipCode = \'11377\')'
    },
    {
        id: 111,
        name: 11368,
        type: 'AND (l.ZipCode = \'11368\')'
    },
    {
        id: 112,
        name: 11230,
        type: 'AND (l.ZipCode = \'11230\')'
    },
    {
        id: 113,
        name: 11433,
        type: 'AND (l.ZipCode = \'11433\')'
    },
    {
        id: 114,
        name: 11419,
        type: 'AND (l.ZipCode = \'11419\')'
    },
    {
        id: 115,
        name: 10035,
        type: 'AND (l.ZipCode = \'10035\')'
    },
    {
        id: 116,
        name: 11428,
        type: 'AND (l.ZipCode = \'11428\')'
    },
    {
        id: 117,
        name: 10312,
        type: 'AND (l.ZipCode = \'10312\')'
    },
    {
        id: 118,
        name: 10459,
        type: 'AND (l.ZipCode = \'10459\')'
    },
    {
        id: 119,
        name: 10006,
        type: 'AND (l.ZipCode = \'10006\')'
    },
    {
        id: 120,
        name: 11234,
        type: 'AND (l.ZipCode = \'11234\')'
    },
    {
        id: 121,
        name: 10011,
        type: 'AND (l.ZipCode = \'10011\')'
    },
    {
        id: 122,
        name: 10010,
        type: 'AND (l.ZipCode = \'10010\')'
    },
    {
        id: 123,
        name: 10033,
        type: 'AND (l.ZipCode = \'10033\')'
    },
    {
        id: 124,
        name: 10023,
        type: 'AND (l.ZipCode = \'10023\')'
    },
    {
        id: 125,
        name: 10024,
        type: 'AND (l.ZipCode = \'10024\')'
    },
    {
        id: 126,
        name: 11005,
        type: 'AND (l.ZipCode = \'11005\')'
    },
    {
        id: 127,
        name: 10282,
        type: 'AND (l.ZipCode = \'10282\')'
    },
    {
        id: 128,
        name: 11215,
        type: 'AND (l.ZipCode = \'11215\')'
    },
    {
        id: 129,
        name: 11357,
        type: 'AND (l.ZipCode = \'11357\')'
    },
    {
        id: 130,
        name: 10460,
        type: 'AND (l.ZipCode = \'10460\')'
    },
    {
        id: 131,
        name: 11422,
        type: 'AND (l.ZipCode = \'11422\')'
    },
    {
        id: 132,
        name: 11101,
        type: 'AND (l.ZipCode = \'11101\')'
    },
    {
        id: 133,
        name: 10306,
        type: 'AND (l.ZipCode = \'10306\')'
    },
    {
        id: 134,
        name: 11223,
        type: 'AND (l.ZipCode = \'11223\')'
    },
    {
        id: 135,
        name: 11235,
        type: 'AND (l.ZipCode = \'11235\')'
    },
    {
        id: 136,
        name: 10002,
        type: 'AND (l.ZipCode = \'10002\')'
    },
    {
        id: 137,
        name: 10467,
        type: 'AND (l.ZipCode = \'10467\')'
    },
    {
        id: 138,
        name: 11366,
        type: 'AND (l.ZipCode = \'11366\')'
    },
    {
        id: 139,
        name: 11694,
        type: 'AND (l.ZipCode = \'11694\')'
    },
    {
        id: 140,
        name: 11358,
        type: 'AND (l.ZipCode = \'11358\')'
    },
    {
        id: 141,
        name: 10014,
        type: 'AND (l.ZipCode = \'10014\')'
    },
    {
        id: 142,
        name: 11426,
        type: 'AND (l.ZipCode = \'11426\')'
    },
    {
        id: 143,
        name: 11004,
        type: 'AND (l.ZipCode = \'11004\')'
    },
    {
        id: 144,
        name: 11435,
        type: 'AND (l.ZipCode = \'11435\')'
    },
    {
        id: 145,
        name: 11364,
        type: 'AND (l.ZipCode = \'11364\')'
    },
    {
        id: 146,
        name: 10309,
        type: 'AND (l.ZipCode = \'10309\')'
    },
    {
        id: 147,
        name: 10470,
        type: 'AND (l.ZipCode = \'10470\')'
    },
    {
        id: 148,
        name: 11363,
        type: 'AND (l.ZipCode = \'11363\')'
    },
    {
        id: 149,
        name: 11102,
        type: 'AND (l.ZipCode = \'11102\')'
    },
    {
        id: 150,
        name: 10026,
        type: 'AND (l.ZipCode = \'10026\')'
    },
    {
        id: 151,
        name: 10455,
        type: 'AND (l.ZipCode = \'10455\')'
    },
    {
        id: 152,
        name: 11204,
        type: 'AND (l.ZipCode = \'11204\')'
    },
    {
        id: 153,
        name: 11367,
        type: 'AND (l.ZipCode = \'11367\')'
    },
    {
        id: 154,
        name: 11420,
        type: 'AND (l.ZipCode = \'11420\')'
    },
    {
        id: 155,
        name: 10037,
        type: 'AND (l.ZipCode = \'10037\')'
    },
    {
        id: 156,
        name: 11212,
        type: 'AND (l.ZipCode = \'11212\')'
    },
    {
        id: 157,
        name: 10304,
        type: 'AND (l.ZipCode = \'10304\')'
    },
    {
        id: 158,
        name: 10009,
        type: 'AND (l.ZipCode = \'10009\')'
    },
    {
        id: 159,
        name: 11362,
        type: 'AND (l.ZipCode = \'11362\')'
    },
    {
        id: 160,
        name: 10465,
        type: 'AND (l.ZipCode = \'10465\')'
    },
    {
        id: 161,
        name: 10308,
        type: 'AND (l.ZipCode = \'10308\')'
    },
    {
        id: 162,
        name: 11423,
        type: 'AND (l.ZipCode = \'11423\')'
    },
    {
        id: 163,
        name: 11222,
        type: 'AND (l.ZipCode = \'11222\')'
    },
    {
        id: 164,
        name: 10004,
        type: 'AND (l.ZipCode = \'10004\')'
    },
    {
        id: 165,
        name: 11416,
        type: 'AND (l.ZipCode = \'11416\')'
    },
    {
        id: 166,
        name: 10000,
        type: 'AND (l.ZipCode = \'10000\')'
    },
    {
        id: 167,
        name: 10169,
        type: 'AND (l.ZipCode = \'10169\')'
    },
    {
        id: 168,
        name: 11697,
        type: 'AND (l.ZipCode = \'11697\')'
    },
    {
        id: 169,
        name: 11109,
        type: 'AND (l.ZipCode = \'11109\')'
    },
    {
        id: 170,
        name: 10119,
        type: 'AND (l.ZipCode = \'10119\')'
    },
    {
        id: 171,
        name: 11210,
        type: 'AND (l.ZipCode = \'11210\')'
    },
    {
        id: 172,
        name: 11236,
        type: 'AND (l.ZipCode = \'11236\')'
    },
    {
        id: 173,
        name: 10016,
        type: 'AND (l.ZipCode = \'10016\')'
    },
    {
        id: 174,
        name: 11233,
        type: 'AND (l.ZipCode = \'11233\')'
    },
    {
        id: 175,
        name: 11217,
        type: 'AND (l.ZipCode = \'11217\')'
    },
    {
        id: 176,
        name: 10022,
        type: 'AND (l.ZipCode = \'10022\')'
    },
    {
        id: 177,
        name: 10452,
        type: 'AND (l.ZipCode = \'10452\')'
    },
    {
        id: 178,
        name: 11205,
        type: 'AND (l.ZipCode = \'11205\')'
    },
    {
        id: 179,
        name: 10305,
        type: 'AND (l.ZipCode = \'10305\')'
    },
    {
        id: 180,
        name: 11385,
        type: 'AND (l.ZipCode = \'11385\')'
    },
    {
        id: 181,
        name: 11209,
        type: 'AND (l.ZipCode = \'11209\')'
    },
    {
        id: 182,
        name: 10301,
        type: 'AND (l.ZipCode = \'10301\')'
    },
    {
        id: 183,
        name: 11208,
        type: 'AND (l.ZipCode = \'11208\')'
    },
    {
        id: 184,
        name: 10003,
        type: 'AND (l.ZipCode = \'10003\')'
    },
    {
        id: 185,
        name: 11360,
        type: 'AND (l.ZipCode = \'11360\')'
    },
    {
        id: 186,
        name: 10473,
        type: 'AND (l.ZipCode = \'10473\')'
    },
    {
        id: 187,
        name: 11103,
        type: 'AND (l.ZipCode = \'11103\')'
    },
    {
        id: 188,
        name: 10007,
        type: 'AND (l.ZipCode = \'10007\')'
    },
    {
        id: 189,
        name: 11430,
        type: 'AND (l.ZipCode = \'11430\')'
    },
    {
        id: 190,
        name: 11001,
        type: 'AND (l.ZipCode = \'11001\')'
    },
    {
        id: 191,
        name: 10271,
        type: 'AND (l.ZipCode = \'10271\')'
    },
    {
        id: 192,
        name: 11359,
        type: 'AND (l.ZipCode = \'11359\')'
    },
    {
        id: 193,
        name: 10115,
        type: 'AND (l.ZipCode = \'10115\')'
    },
    {
        id: 194,
        name: 10165,
        type: 'AND (l.ZipCode = \'10165\')'
    }
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Zipcode(props) {
    const [selected, setSelected] = useState(people[0])

    function handleSelection(selected) {
        setSelected(selected);
        if (props.onZipCodeSelect) {
            props.onZipCodeSelect(selected.type);
        }
    }
    return (
        <Listbox value={selected} onChange={handleSelection}>
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
