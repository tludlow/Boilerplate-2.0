import Layout from '@/components/Layout'
import { useQuery } from 'react-query'
import axios from 'axios'

export default function Index() {
    const fetchData = async () => {
        const response = await axios.get(`http://localhost:5000/test`)
        return response.data
    }

    const { isLoading, isError, data, error } = useQuery(['restaurants'], fetchData)

    return (
        <Layout title="Index" contained>
            <p className="text-[#42f5ec]">This is a very custom situation right now</p>
            <div className="mt-12">
                {isLoading ? (
                    <span>Loading...</span>
                ) : isError ? (
                    <span>error.message</span>
                ) : (
                    data.restaurants.map((post: any, i: any) => (
                        <p key={i}>
                            Name: {post.name} - {post.distance}km
                        </p>
                    ))
                )}
            </div>
        </Layout>
    )
}
