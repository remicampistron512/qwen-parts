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

        <div class="carousel-item">
          <img src="..." class="d-block w-100" alt="...">
        </div>

        <div class="carousel-item">
          <img src="..." class="d-block w-100" alt="...">
        </div>
      </div>

      <button class="carousel-control-prev justify-content-lg-start" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>

      <button class="carousel-control-next justify-content-lg-end" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  `;
}
