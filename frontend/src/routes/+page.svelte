<script lang="ts">
    import Navbar from "$lib/Navbar.svelte"
    import Hero from "$lib/Hero.svelte"
    import Footer from "$lib/Footer.svelte";
    import Stats from "$lib/Stats.svelte";
</script>


<style>

.properties {
    background-color: #FFFFFF;
    border-radius: 10px;
    padding: 30px;
    margin-bottom: 30px;
    text-align: center;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
}

.row {
    display: flex;
    flex-wrap: wrap;
}

.col-md-6 {
    flex-basis: 50%;
    padding: 0 20px;
    box-sizing: border-box;
}

.property {
    margin-bottom: 30px;
}

.property-image {
    width: 100%;
    height: 300px;
    overflow: hidden;
    border-radius: 10px;
}

.property-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.property-content {
    margin-top: 20px;
}

.btn-primary {
    background-color: #C9A661;
    color: #FFFFFF;
    padding: 10px 20px;
    border-radius: 5px;
    text-decoration: none;
    display: inline-block;
    margin-top: 20px;
}


</style>
<Navbar />
<section>
    <Hero />
     <Stats />
     <section class="properties">
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <div class="property">
                        <div class="property-image">
                            <img src="https://s3images.zee5.com/wp-content/uploads/2021/08/individual-houses-villas.jpg" alt="">
                        </div>
                        <div class="property-content">
                            <h2>Property 1</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.</p>
                            <a href="/properties/1" class="btn-primary">View Property</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="property">
                        <div class="property-image">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRvcIGYneFcKORoKkeGUn0WEKFVV0XRKKUO7wfvnJNpD_F_kUbiJ5zYXd61IrZbLgNpJ4&usqp=CAU" alt="">
                        </div>
                        <div class="property-content">
                            <h2>Property 2</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.</p>
                            <a href="/properties/2" class="btn-primary">View Property</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="property">
                        <div class="property-image">
                            <img src="https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/au/wp-content/uploads/2022/08/AustralianHousing-scaled.jpg" alt="">
                        </div>
                        <div class="property-content">
                            <h2>Property 3</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.</p>
                            <a href="/properties/3" class="btn-primary">View Property</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="property">
                        <div class="property-image">
                            <img src="https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/au/wp-content/uploads/2022/08/AustralianHousing-scaled.jpg" alt="">
                        </div>
                        <div class="property-content">
                            <h2>Property 4</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.</p>
                            <a href="/properties/4" class="btn-primary">View Property</a>
                        </div>
                    </div>
                </div>
                </div>
            </div>
    </section>
</section>
