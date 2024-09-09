const Header = () => {
    return (
        <>
        <header1 className="bg-black text-white py-4 px-20 flex items-center justify-between">
        <div className="flex items-center">
          <span className="text-sm font-medium">USD</span>
        </div>
        <div className="text-center">
          <p className="text-sm font-medium">FREE SHIPPING ON ALL HERMAN MILLER! FEB. 25-26.</p>
        </div>
        <div>
          <a href="/support" className="text-sm font-medium hover:underline">Support</a>
        </div>
      </header1>
      <header2 className="bg-white-100 py-4 px-20 flex items-center space-x-10">
      <a href="/" className="text-gray-600 hover:text-gray-900"><h1 className="text-2xl font-bold">Ecommerce.</h1></a>

        
        <div className="flex items-center space-x-4">
          <a href="Product" className="text-gray-600 hover:text-gray-900">Products</a>
          <a href="About" className="text-gray-600 hover:text-gray-900">About</a>
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative text-gray-600 hover:text-gray-900 flex items-center"> {/* Added flex items-center */}
            <svg className="h-5 w-5 text-gray-400 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Search"
              className="rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          {/* ... */}
        </div>
      </header2>
        <hr/>
        </>
    )
}

export default Header;
