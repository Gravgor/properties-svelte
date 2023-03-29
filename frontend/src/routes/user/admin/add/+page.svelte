


<div class="flex flex-col h-screen">
    <div class="flex-shrink-0 bg-teal-500">
      <div class="py-4 px-3 text-white text-lg font-semibold">
        Skyline Estates
      </div>
    </div>
    <div class="flex-1 flex overflow-hidden">
      <nav class="flex-shrink-0 bg-gray-100 w-56 px-4 py-6 border-r border-gray-200">
        <a href="/user/admin" class="block font-semibold text-gray-600 mb-4 hover:text-gray-800">
          Dashboard
        </a>
        <a href="/user/admin" class="block font-semibold text-teal-500 mb-4 hover:text-teal-600">
          Properties
        </a>
        <a href="user/admin/add" class="block font-semibold text-gray-600 mb-4 hover:text-gray-800">
          Add Property
        </a>
        <a href="/user/admin/logout" class="block font-semibold text-gray-600 mb-4 hover:text-gray-800">
          Logout
        </a>
      </nav>
      <div class="flex flex-col w-full p-4">
        <h2 class="text-2xl font-bold mb-4">Add Property</h2>
        <form class="flex flex-col overflow-auto" method="POST">
          <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2" for="property-title">
              Property Title
            </label>
            <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="property-title" type="text" placeholder="Enter property title">
          </div>
          <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2" for="property-description">
              Property Description
            </label>
            <textarea class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="property-description" placeholder="Enter property description"></textarea>
          </div>
          <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2" for="property-price">
              Property Price
            </label>
            <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="property-price" type="number" placeholder="Enter property price">
          </div>
          <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2" for="property-image">
              Property Image
            </label>
            <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="property-image" type="text" placeholder="Enter property image url">
          </div>
          <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2" for="property-address">
              Property Address
            </label>
            <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="property-address" type="text" placeholder="Enter property address">
          </div>
          <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2" for="property-city">
              Property City
            </label>
            <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="property-city" type="text" placeholder="Enter property city">
          </div>
          <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2" for="property-state">
              Property State
            </label>
            <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="property-state" type="text" placeholder="Enter property state">
          </div>
          <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2" for="property-zip">
              Property Zip
            </label>
            <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="property-zip" type="text" placeholder="Enter property zip">
          </div>
          <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2" for="property-country">
              Property Country
            </label>
            <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="property-country" type="text" placeholder="Enter property country">
          </div>
          <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2" for="property-bedrooms">
              Property Bedrooms
            </label>
            <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="property-bedrooms" type="text" placeholder="Enter property bedrooms">
          </div>
          <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2" for="property-bathrooms">
              Property Bathrooms
            </label>
            <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="property-bathrooms" type="text" placeholder="Enter property bathrooms">
          </div>
          <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2" for="property-square">
              Property Square Feet
            </label>
            <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="property-square" type="text" placeholder="Enter property square feet">
          </div>
          <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2" for="property-lot">
              Property Lot Size
            </label>
            <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="property-lot" type="text" placeholder="Enter property lot size">
          </div>
          <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2" for="property-year">
              Property Year Built
            </label>
            <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="property-year" type="text" placeholder="Enter property built year">
          </div>
          <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2" for="property-type">
              Property Type
            </label>
            <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="property-type" type="text" placeholder="Enter property type">
          </div>
          <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2" for="property-status">
              Property Status
            </label>
            <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="property-status" type="text" placeholder="Enter property status(sale/loan)">
          </div>
          <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2" for="property-featured">
              Property Fetured
            </label>
            <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="property-featured" type="text" placeholder="Is property featured (true/false)">
          </div>
          <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
            Add Property
          </button>
        </form>
      </div>

    </div>
    </div>
