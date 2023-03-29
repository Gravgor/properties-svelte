<script lang="ts">
     /** @type {import('./$types').PageData} */

     type PageData = {
    props: {
        properties: {
            title: string;
            description: string;
            propertyImage: string;
            link: string;
        }[];
    };
};
    export let data;
</script>


<div class="flex flex-col h-screen">
    <div class="flex-shrink-0 bg-teal-500">
      <div class="py-4 px-3 text-white text-lg font-semibold">
        Skyline Estates
      </div>
    </div>
    <div class="flex-1 flex overflow-hidden">
      <nav class="flex-shrink-0 bg-gray-100 w-56 px-4 py-6 border-r border-gray-200">
        <a href="/user/admin" class="block font-semibold text-teal-500 mb-4 hover:text-teal-600">
          Dashboard
        </a>
        <a href="/user/admin" class="block font-semibold text-gray-600 mb-4 hover:text-gray-800">
          Properties
        </a>
        <a href="/user/admin/add" class="block font-semibold text-gray-600 mb-4 hover:text-gray-800">
          Add Property
        </a>
        <a href="/user/admin/logout" class="block font-semibold text-gray-600 mb-4 hover:text-gray-800">
          Logout
        </a>
      </nav>
      <div class="flex-1 overflow-y-auto">
        <div class="px-6 py-4">
          <h2 class="text-xl font-semibold mb-4">All Properties</h2>
          <ul>{#each data.properties as property}
            <li class="flex justify-between items-center bg-gray-100 rounded-lg px-4 py-3 mb-2">
                <div class="flex flex-col">
                  <h3 class="font-semibold text-gray-800">{property.name}</h3>
                  <p class="text-gray-600">{property.address}, {property.state}</p>
                </div>
                <div>
                  <button class="text-red-500 hover:text-red-700" title="Delete Property">
                    <svg class="h-6 w-6 fill-current" viewBox="0 0 20 20">
                      <path
                        d="M3 5a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v1H3V5zm15 4a1 1 0 0 1-1 1H3a1 1 0 1 1 0-2h14a1 1 0 0 1 1 1zM4 15a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v1H4v-1z"
                      />
                    </svg>
                  </button>
                </div>
              </li>
            {/each}
         </ul>
        </div>
        </div>
        </div>
        </div>
  