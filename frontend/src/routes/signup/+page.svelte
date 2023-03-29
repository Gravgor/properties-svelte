<script lang="ts">
    import Navbar from "$lib/Navbar.svelte"
    import Hero from "$lib/Hero.svelte"
</script>


<Navbar />
<section>
    <Hero />
    <section class="bg-gray-100 h-screen">
        <div class="container mx-auto relative bottom-44 h-full flex justify-center items-center">
          <div class="bg-white p-8 rounded shadow-md w-96">
            <h2 class="text-2xl font-bold mb-4 text-center text-teal-500">Sign up</h2>
            <form class="mb-4">
              <div class="mb-4">
                <label class="block text-gray-700 font-bold mb-2" for="name">
                  Name
                </label>
                <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Your Name">
              </div>
              <div class="mb-4">
                <label class="block text-gray-700 font-bold mb-2" for="email">
                  Email
                </label>
                <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Your Email">
              </div>
              <div class="mb-4">
                <label class="block text-gray-700 font-bold mb-2" for="password">
                  Password
                </label>
                <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Your Password">
              </div>
              <div class="mb-4">
                <label class="block text-gray-700 font-bold mb-2" for="confirm-password">
                  Confirm Password
                </label>
                <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="confirm-password" type="password" placeholder="Confirm Password">
              </div>
              <div class="flex justify-center">
                <button class="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                  Sign up
                </button>
              </div>
            </form>
            <p class="text-gray-600 text-sm text-center">Already have an account? <a href="/login" class="text-teal-500">Login</a></p>
          </div>
        </div>
      </section>
      
</section>