export function HomeView() {
    return `
    <section class="py-5">
      <div class="row align-items-center gy-4">
        <div class="col-12 col-lg-6">
          <h1 class="hero-title mb-0">Build a better pc</h1>
          <h5 class="fw-lighter">Premium components, verified compatibility, fast delivery</h5>
        </div>
        <div class="col-12 col-lg-6">
          <div class="img-placeholder">
            <img src="img/hero.png" alt="Hero image" />
          </div>
        </div>
      </div>
    </section>

    <h4 class="mb-5">Shop by category</h4>

    <div id="carouselExample" class="carousel slide">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <ul class="nav justify-content-around">

            <li class="nav-item">
              <a class="nav-link nav-icon-pill" href="/category/gpu" data-link>
                <i class="bi bi-gpu-card"></i>
                <span>GPU</span>
              </a>
            </li>

            <li class="nav-item">
              <a class="nav-link nav-icon-pill" href="/category/cpu" data-link>
                <i class="bi bi-cpu"></i>
                <span>CPU</span>
              </a>
            </li>

            <li class="nav-item">
              <a class="nav-link nav-icon-pill" href="/category/ram" data-link>
                <i class="bi bi-memory"></i>
                <span>RAM</span>
              </a>
            </li>

            <li class="nav-item">
              <a class="nav-link nav-icon-pill" href="/category/motherboard" data-link>
                <i class="bi bi-motherboard"></i>
                <span>Motherboard</span>
              </a>
            </li>

            <li class="nav-item">
              <a class="nav-link nav-icon-pill" href="/category/storage" data-link>
                <i class="bi bi-database"></i>
                <span>Storage</span>
              </a>
            </li>

          </ul>
        </div>
        </div>
    </div>
  `;
}
