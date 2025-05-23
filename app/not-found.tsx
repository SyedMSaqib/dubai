import Link from "next/link"

const NotFound = () => {
  return (
    <section className="bg-whiten h-screen py-[200px]">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
          <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-black">
            404
          </h1>
          <p className="mb-4 text-3xl tracking-tight font-bold text-black md:text-4xl">
            Something&apos;s missing.
          </p>
          <p className="mb-4 text-lg font-light text-black">
            Sorry, we can&apos;t find that page. You&apos;ll find lots to explore on the home page.
          </p>
          <Link
            href="/"
            className="inline-flex text-white bg-black hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center my-4"
          >
            Back to Homepage
          </Link>
        </div>
      </div>
    </section>
  )
}

export default NotFound
