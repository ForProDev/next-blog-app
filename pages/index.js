import Layout from "../components/Layout"
import Link from "next/link"
export default function App({ posts }) {
  return (
    <Layout title="Dev Blog app">
      <h1 className="text-4xl font-bold text-gray-800 text-center">
        Dev Blog App
      </h1>
      <div class=" container mt-16 max-w-4xl mx-auto">
        {posts.map((post, index) => (
          <div key={index} className="rounded-4 flex my-8">
            <img
              className="h-40 w-80 rounded-2xl"
              src={post.postIMG}
              alt={post.author}
            />
            <div className="ml-8">
              <h1 className="text-xl font-bold text-gray-600">{post.title}</h1>
              <p className="mt-2">{post.description.join().slice(0, 120)}...</p>
              <Link href={`/post?id=${post._id}`}>
                <a>
                  <button className="rounded mt-2 bg-black text-white py-1 px-2">
                    read more
                  </button>
                </a>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export async function getStaticProps(context) {
  try {
    const res = await fetch("https://blog-projects-api.herokuapp.com/api/post")
    const posts = await res.json()
    // console.log(post)
    return {
      props: { posts },
    }
  } catch (error) {
    error && console.error(error.message)
  }
}
