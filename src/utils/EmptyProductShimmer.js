const EmptyProductShimmer = () => {

    return (
      <div className="w-full  min-h-screen ms-0 lg:ms-96 ">
        <div className="text-center ">
          <h2 className="text-2xl font-semibold text-gray-800">
            No Products Found
          </h2>
          <p className="mt-2 text-gray-600">
            We couldn’t find any products matching your search.
          </p>
          <button
            className="mt-4 px-6 py-2 text-white bg-blue-600 rounded hover:bg-blue-700"
            onClick={() => window.location.reload()}
          >
            Refresh Page
          </button>
        </div>
      </div>
    )
}

export default EmptyProductShimmer;