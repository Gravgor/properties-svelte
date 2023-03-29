<script lang="ts">





</script>


<style>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #0A192F;
  color: #EAE7DC;
}

.navbar-logo img {
  height: 40px;
}

.navbar-menu {
  display: flex;
  justify-content: center;
  align-items: center;
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.navbar-item {
  margin: 0 1rem;
}

.navbar-link {
  color: #EAE7DC;
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: bold;
  text-transform: uppercase;
}

.navbar-link:hover {
  color: #00d1b2;
}

.navbar-button {
  margin-right: 1rem;
}

@media (max-width: 768px) {
  .navbar {
    flex-direction: column;
  }

  .navbar-menu {
    flex-direction: column;
    margin-top: 1rem;
  }

  .navbar-item {
    margin: 0.5rem 0;
  }

  .navbar-button {
    margin: 0;
  }
  .btn {
    background-color: #00d1b2;
    background-image: linear-gradient(315deg, #00d1b2 0%, #ffdd00 74%);
    color: #fff;
    padding: 0.45rem 1rem;
    border-radius: 0.25rem;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 1.2rem;
    transition: all 0.3s ease;
  }
}

.btn {
    background-color: #00d1b2;
    background-image: linear-gradient(315deg, #00d1b2 0%, #ffdd00 74%);
    color: #fff;
    padding: 0.75rem 1rem;
    border-radius: 0.25rem;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 1.2rem;
    transition: all 0.3s ease;
}


.btn:hover {
    background-color: #fff;
    background-image: linear-gradient(315deg, #fff 0%, #ffdd00 74%);
    color: #00d1b2;
}


</style>

<nav class="navbar">
    <div class="navbar-logo">
      <a href="#"><img src="logo.png" alt="Skyline Estates"></a>
    </div>
    <ul class="navbar-menu">
      <li class="navbar-item"><a href="#" class="navbar-link">Home</a></li>
      <li class="navbar-item"><a href="#" class="navbar-link">Properties</a></li>
      <li class="navbar-item"><a href="#" class="navbar-link">About Us</a></li>
      <li class="navbar-item"><a href="#" class="navbar-link">Contact</a></li>
    </ul>
    <div class="navbar-button">
      <a href="#" class="btn btn-primary">Schedule a Tour</a>
    </div>
  </nav>
