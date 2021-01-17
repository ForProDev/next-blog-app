import Link from "next/link"
import Layout from "../components/Layout"
import moment from "moment"

export default function Post({ post }) {
  return (
    <Layout title={post.title}>
      <h1 className="text-4xl font-bold text-gray-800 text-center">
        Dev Blog App
      </h1>

      <div class="container mt-10 max-w-4xl mx-auto px-4">
        <Link href="/">
          <a>
            <button className="rounded my-2 bg-black text-white py-1 px-2">
              &#8592; go back
            </button>
          </a>
        </Link>
        <img className="w-full max-h-80" src={post.postIMG} alt={post.author} />
        <h1 className="text-3xl mt-4 font-bold text-gray-800">{post.title}</h1>
        <div className="mt-2">
          <h3 className="text-md text-pink-600 font-bold">
            <span className="text-gray-800">Autor: </span> {post.author}
          </h3>
          <h3 className="text-md text-pink-600 font-bold">
            <span className="text-gray-800">Posted on: </span>{" "}
            {moment(post.date).format("DD-MMM-YYYY")}
          </h3>
          <div>
            {post.description.map((des, index) => (
              <p className="my-4 text-xl">{des}</p>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export async function getServerSideProps({ query }) {
  const { id } = query
  try {
    const res = await fetch(
      `https://blog-projects-api.herokuapp.com/api/post/${id}`
    )
    const post = await res.json()
    return {
      props: {
        post,
      },
    }
  } catch (error) {
    error && error.message
    return {
      props: {},
    }
  }
}
