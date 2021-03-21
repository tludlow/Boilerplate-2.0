import Link from 'next/link'
import { useStore } from 'pages/_app'
export default function Navbar() {
    const incrementCounter = useStore((state) => state.increase)
    const reset = useStore((state) => state.reset)

    return (
        <nav className="w-full h-[50px] bg-blue-500 shadow">
            <div className="container flex items-center justify-between h-full mx-auto">
                <Link href="/404">
                    <a href="/404">
                        <svg
                            className="w-6 h-6 text-white hover:text-gray-200"
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
                    </a>
                </Link>
                <div className="space-x-5 text-white">
                    <button onClick={incrementCounter}>Add 1</button>
                    <button onClick={reset}>Reset</button>
                </div>
            </div>
        </nav>
    )
}
