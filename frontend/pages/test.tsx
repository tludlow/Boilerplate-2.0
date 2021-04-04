import { useState, useEffect, useRef } from 'react'

//text-[#00CCBC]
export default function Test() {
    return (
        <div>
            <nav className="h-[72px] border-b border-gray-200 ">
                <div className="flex items-center justify-between w-full h-full px-10 mx-auto space-x-24">
                    <div className="">
                        <img
                            className="h-[32px]"
                            src="https://consumer-component-library.roocdn.com/21.22.0/static/images/logo-teal.svg"
                            alt="Logo"
                        />
                    </div>
                    <div className="flex-1">
                        <Search />
                    </div>
                    <div className="flex items-center space-x-4">
                        <button className="flex items-center p-2 space-x-2 border border-gray-200 rounded text-md">
                            <svg
                                className="w-4 h-4 text-[#00CCBC]"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                                />
                            </svg>
                            <span>Sign up or log in</span>
                        </button>
                        <button className="flex items-center p-2 space-x-2 border border-gray-200 rounded">
                            <svg
                                className="w-4 h-4 text-[#00CCBC]"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                            <span>Menu</span>
                        </button>
                    </div>
                </div>
            </nav>
            <div className="grid grid-cols-12 mt-6">
                <div className="col-span-3">
                    <div className="flex flex-col pl-10 divide-y divide-gray-200 divid">
                        <div className="flex items-center justify-between py-3 space-x-1">
                            <div className="flex-shrink-0 bg-gray-400 rounded-full w-9 h-9"></div>
                            <div className="flex flex-col">
                                <span className="text-sm text-gray-500">Now</span>
                                <span className="text-sm font-bold">Windsor and Eton</span>
                            </div>
                            <button className="flex self-end justify-end text-sm text-[#00CCBC]">Change</button>
                        </div>
                        <div className="py-4">
                            <form className="flex flex-col space-y-4" action="">
                                <label className="flex items-center space-x-2 cursor-pointer group" htmlFor="delivery">
                                    <input
                                        className="text-text-[#00CCBC] group-hover:border-[#00CCBC] duration-200"
                                        type="radio"
                                        name="type"
                                        id="delivery"
                                    />
                                    <span className="text-sm text-gray-600">Delivery</span>
                                </label>
                                <label className="flex items-center space-x-2" htmlFor="pickup">
                                    <input className="text-text-[#00CCBC]" type="radio" name="type" id="pickup" />
                                    <span className="text-sm text-gray-600">Pickup</span>
                                </label>
                                <label className="flex items-center space-x-2" htmlFor="table-service">
                                    <input
                                        className="text-text-[#00CCBC]"
                                        type="radio"
                                        name="type"
                                        id="table-service"
                                    />
                                    <span className="text-sm text-gray-600">Table Service</span>
                                </label>
                            </form>
                        </div>
                        <ToggleMenuItem />
                        <ToggleMenuItem />
                    </div>
                </div>
                <div className="col-span-9 px-10">
                    <h2 className="mt-3 text-xl font-bold">Delivering to Windsor and Eton</h2>
                    <Carousel />
                    <section className="mt-5">
                        <h3 className="text-lg font-bold">Featured</h3>
                        <div className="flex items-center mt-3 space-x-3">
                            <div className="rounded shadow-sm border border-gray-200 overflow-hidden w-[262px] h-[307px]">
                                <div
                                    style={{
                                        backgroundImage:
                                            'url(https://f.roocdn.com/images/menus/247475/header-image.jpg?width=262&height=147&auto=webp&format=jpg&fit=crop&v=1597685988)',
                                    }}
                                    className="relative w-full h-[147px] bg-cover"
                                >
                                    <div className="absolute bottom-0 flex flex-col items-center justify-center w-20 h-12 text-sm transform translate-y-1/2 bg-white rounded-full shadow-md right-2">
                                        <span className="font-semibold">20-35</span>
                                        <span className="text-gray-500">mins</span>
                                    </div>
                                </div>
                                <div className="w-full h-24 p-3">
                                    <h5 className="text-sm font-bold">German Doner Kebab</h5>
                                    <p className="flex flex-wrap items-center space-x-2 text-sm text-gray-500">
                                        <span className="flex items-center text-green-600">
                                            <svg
                                                className="inline-block w-5 h-5"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                            <span className="">4.2 Very Good</span>
                                        </span>
                                        <span className="text-gray-500 ">(500+)</span>
                                        <span>&middot;</span> <span>German</span>
                                        <span>&middot;</span> <span>Kebab</span>
                                    </p>
                                    <p className="mt-1 text-sm text-gray-500">
                                        2.0 miles away <span>&middot;</span> £4.49 delivery
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}

function ToggleMenuItem() {
    const [toggled, setToggled] = useState(false)
    return (
        <div className="py-4">
            <button
                onClick={() => setToggled(!toggled)}
                className="flex items-center justify-between w-full cursor-pointer focus:outline-none active:outline-none"
            >
                <h4 className="text-sm font-bold">Sort</h4>
                <svg
                    className={`text-[#00CCBC] w-4 h-4 transform duration-200 ${toggled ? '' : 'rotate-180'}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                </svg>
            </button>
            {toggled && (
                <div className="mt-4">
                    <form className="flex flex-col space-y-4" action="">
                        <label className="flex items-center space-x-2" htmlFor="delivery">
                            <input
                                style={{ color: '#00CCBC' }}
                                className="text-text-[#00CCBC]"
                                type="radio"
                                name="type"
                                id="delivery"
                            />
                            <span className="text-sm text-gray-600">Delivery</span>
                        </label>
                        <label className="flex items-center space-x-2" htmlFor="pickup">
                            <input className="text-text-[#00CCBC]" type="radio" name="type" id="pickup" />
                            <span className="text-sm text-gray-600">Pickup</span>
                        </label>
                        <label className="flex items-center space-x-2" htmlFor="table-service">
                            <input className="text-text-[#00CCBC]" type="radio" name="type" id="table-service" />
                            <span className="text-sm text-gray-600">Table Service</span>
                        </label>
                    </form>
                </div>
            )}
        </div>
    )
}

function Carousel() {
    const [stage, setStage] = useState(0)
    const carouselRef = useRef<HTMLDivElement>(null)

    return (
        <section className="relative flex items-center mt-6 overflow-x-hidden">
            {stage > 0 && (
                <button
                    onClick={() => setStage(stage - 1)}
                    className="absolute left-0 z-20 grid bg-white rounded-full shadow-md place-items-center w-14 h-14"
                >
                    <svg
                        className={`text-[#00CCBC] w-4 h-4 transform duration-200 -rotate-90`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
                </button>
            )}
            <button
                onClick={() => {
                    stage > 2 ? setStage(0) : setStage(stage + 1)
                }}
                className="absolute right-0 z-20 grid bg-white rounded-full shadow-md place-items-center w-14 h-14"
            >
                <svg
                    className={`text-[#00CCBC] w-4 h-4 transform duration-200 rotate-90`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                </svg>
            </button>

            <div
                id="carousel"
                style={{ transform: `translate(-${stage * 750}px, 0px)` }}
                className="flex items-center space-x-3 duration-300"
            >
                <div
                    ref={carouselRef}
                    style={{
                        backgroundImage:
                            'url(https://co-restaurants.roocdn.com/images/1c7da60f5c2053764e80d246ab1ba9f9a3126e0d/shortcut/offers.png?width=167&height=88&fit=crop&bg-color=fb5058&auto=webp&format=png)',
                    }}
                    className="relative flex-shrink-0 h-16 bg-red-200 bg-contain rounded w-36"
                >
                    <span className="absolute font-bold text-white left-2 bottom-2">Offers</span>
                </div>
                <div className="flex-shrink-0 h-16 bg-red-200 rounded w-36">2</div>
                <div className="flex-shrink-0 h-16 bg-red-200 rounded w-36">3</div>
                <div className="flex-shrink-0 h-16 bg-red-200 rounded w-36">4</div>
                <div className="flex-shrink-0 h-16 bg-red-200 rounded w-36">5</div>
                <div className="flex-shrink-0 h-16 bg-red-200 rounded w-36">6</div>
                <div className="flex-shrink-0 h-16 bg-red-200 rounded w-36">7</div>
                <div className="flex-shrink-0 h-16 bg-red-200 rounded w-36">8</div>
                <div className="flex-shrink-0 h-16 bg-red-200 rounded w-36">9</div>
                <div className="flex-shrink-0 h-16 bg-red-200 rounded w-36">10</div>
                <div className="flex-shrink-0 h-16 bg-red-200 rounded w-36">11</div>
                <div className="flex-shrink-0 h-16 bg-red-200 rounded w-36">12</div>
                <div className="flex-shrink-0 h-16 bg-red-200 rounded w-36">13</div>
                <div className="flex-shrink-0 h-16 bg-red-200 rounded w-36">14</div>
                <div className="flex-shrink-0 h-16 bg-red-200 rounded w-36">15</div>
                <div className="flex-shrink-0 h-16 bg-red-200 rounded w-36">16</div>
            </div>
        </section>
    )
}

function Search() {
    const [search, setSearch] = useState('')
    const [isOpen, setIsOpen] = useState(false)

    const suggestionRef = useRef<HTMLDivElement>(null)

    const handleClickOutsideSuggestions = (e: any) => {
        if (suggestionRef.current?.contains(e.target)) {
            return
        }
        setIsOpen(false)
    }

    useEffect(() => {
        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutsideSuggestions)
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutsideSuggestions)
        }
    }, [isOpen])

    return (
        <div className="relative flex items-center max-w-xl">
            <input
                className="max-w-xl w-full pl-8 bg-gray-100 border border-gray-200 rounded focus:outline-[#00CCBC] active:outline-[#00CCBC] relative"
                type="text"
                placeholder="Dishes, restaurants or cuisines"
                value={search}
                onFocus={() => {
                    search.length > 0 ? setIsOpen(true) : ''
                }}
                onChange={(e) => {
                    e.target.value.length > 0 ? setIsOpen(true) : setIsOpen(false)
                    setSearch(e.target.value)
                }}
            />
            <svg
                className="absolute w-5 h-5 text-gray-400 transform left-2"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                />
            </svg>

            {search.length > 0 && (
                <svg
                    className="absolute w-5 h-5 text-gray-400 transform cursor-pointer right-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    onClick={() => setSearch('')}
                >
                    <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                    />
                </svg>
            )}

            {isOpen && (
                <div
                    ref={suggestionRef}
                    className="absolute inset-x-0 z-30 bg-white divide-y rounded shadow-md divide-y-gray-300 top-11"
                >
                    <div className="px-4 py-2">
                        <h4 className="text-lg font-bold">Categories</h4>
                        <p>{search} (12)</p>
                    </div>
                    <div className="px-4 py-2">
                        <h4 className="text-lg font-bold">Restaurants</h4>
                        <div className="space-y-2">
                            <div className="flex space-x-2">
                                <img
                                    src="https://f.roocdn.com/images/menus/404383/header-image.jpg?width=64&height=64&auto=webp&format=jpg&fit=crop&v=1607137915"
                                    alt=""
                                />
                                <div className="text-sm">
                                    <p className="font-bold">Cheeky Chicken & Pizza</p>
                                    <p className="text-gray-400">
                                        <span className="text-green-600">3.8 stars</span> (66) &middot; Around 25 min
                                    </p>
                                </div>
                            </div>
                            <div className="flex space-x-2">
                                <img
                                    src="https://f.roocdn.com/images/menus/404383/header-image.jpg?width=64&height=64&auto=webp&format=jpg&fit=crop&v=1607137915"
                                    alt=""
                                />
                                <div className="text-sm">
                                    <p className="font-bold">Cheeky Chicken & Pizza</p>
                                    <p className="text-gray-400">
                                        <span className="text-green-600">3.8 stars</span> (66) &middot; Around 25 min
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="px-4 py-2">
                        <h4 className="text-lg font-bold">Dishes</h4>
                        <p>na;a;a;a;a;</p>
                        <button className="w-full text-sm font-medium text-left px-1 -ml-1 py-1 hover:bg-gray-100 mt-4 text-[#00CCBC]">
                            View all XX dishes
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}
