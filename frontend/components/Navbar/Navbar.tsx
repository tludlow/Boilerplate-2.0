import Link from 'next/link'
import { useUserStore } from 'store/useUserStore'
export default function Navbar() {
    const { logged_in, logout, username } = useUserStore()

    return (
        <nav className="w-full h-[50px] bg-blue-500 shadow">
            <div className="container flex items-center justify-between h-full mx-auto">
                <Link href="/">
                    <a
                        className="flex items-center space-x-3 group focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        href="/404"
                    >
                        <svg
                            className="w-6 h-6 text-white group-hover:text-gray-300"
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
                        <h1 className="text-lg font-bold text-white group-hover:text-gray-300">Boilerplate 2.0</h1>
                    </a>
                </Link>
                <div className="space-x-5 text-white">
                    {logged_in ? (
                        <div className="flex items-center space-x-2">
                            <img src="" alt="" />
                            <h3>{username}</h3>
                            <button className="hover:text-gray-300" onClick={logout}>
                                Logout
                            </button>
                        </div>
                    ) : (
                        <div>
                            <Link href="/login">Log in</Link>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    )
}
