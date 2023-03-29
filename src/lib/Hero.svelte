

<style>
.hero {
  position: relative;
  height: 600px;
  background-color: #0A192F;
  color: #fff;
  overflow: hidden;
}

.hero-image {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
}

.hero-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.hero-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}

.hero-heading {
  font-size: 4rem;
  font-weight: 700;
  margin-bottom: 1.5
}

.btn-primary{
    background-color: #00d1b2;
    background-image: linear-gradient(315deg, #00d1b2 0%, #ffdd00 74%);
    color: #fff;
    padding: 1rem 2rem;
    border-radius: 5px;
    text-decoration: none;
    font-size: 1.2rem;
    font-weight: 700;
    text-transform: uppercase;
    margin-top: 1.5rem;
    transition: all 0.3s ease;
}

.btn-primary:hover {
    background-color: #fff;
    background-image: linear-gradient(315deg, #fff 0%, #ffdd00 74%);
    color: #00d1b2;
}


</style>


<section class="hero">
    <div class="hero-image">
      <img src="path-to-image" alt="Skyline Estates Property">
    </div>
    <div class="hero-content">
      <h1 class="hero-heading">Discover Your Dream Home</h1>
      <a href="#" class="btn-primary">Explore Properties</a>
    </div>
  </section>
  