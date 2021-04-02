import Head from 'next/head'
import Navbar from '@/components/Navbar/Navbar'

type LayoutProps = {
    title?: string
    contained?: boolean
    children: React.ReactNode
}

export default function Layout({ title, contained, children }: LayoutProps) {
    return (
        <div className="flex flex-col w-screen h-screen bg-gray-50">
            <Head>
                <title>{`${title} - Boilerplate-2.0` || 'Boierlplate-2.0'}</title>
            </Head>
            <Navbar />

            <main className="flex-1 mt-2 overflow-auto">
                <div className={`${contained ? 'container mx-auto px-3 md:px-1 lg:px-0' : ''}`}>{children}</div>
            </main>
        </div>
    )
}
