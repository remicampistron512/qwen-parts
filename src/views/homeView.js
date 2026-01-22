import {renderFeatured} from "../ui/renderFeatured";
import {PRODUCTS} from "../data/products";

export function HomeView() {

    return `
    <section class="py-5 container">
      <div class="row align-items-center gy-4">
        <div class="col-12 col-lg-6">
          <h1 class="hero-title mb-1">Build a better pc</h1>
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

    <div class="container ">
        <div class="row ">
            <div class="my-4  col-xl-2 col-lg-4 col-md-6 col-sm-6  d-flex justify-content-around ">
                <a class="shadow nav-link nav-icon-pill" href="/category/gpu" data-link>
                    <i class="bi bi-gpu-card"></i>
                    <span>GPU</span>
                </a>
            </div>


            <div class="my-4   col-xl-2 col-lg-4  col-md-6 col-sm-6 d-flex justify-content-around">
                <a class="shadow  nav-link nav-icon-pill" href="/category/cpu" data-link>
                    <i class="bi bi-cpu"></i>
                    <span>CPU</span>
                </a>
            </div>

            <div class="my-4   col-xl-2 col-lg-4  col-md-6 col-sm-6 d-flex justify-content-around"> 
                <a class="shadow nav-link nav-icon-pill" href="/category/ram" data-link>
                    <i class="bi bi-memory"></i>
                    <span>RAM</span>
                </a>
            </div>

            <div class="my-4  col-xl-2 col-lg-4 col-md-6 col-sm-6 d-flex justify-content-around">
                <a class="shadow  nav-link nav-icon-pill" href="/category/motherboard" data-link>
                    <i class="bi bi-motherboard"></i>
                    <span>Motherboard</span>
                </a>
            </div>

            <div class="my-4   col-xl-2 col-lg-4  col-md-6 col-sm-6 d-flex justify-content-around ">           
                <a class="shadow nav-link nav-icon-pill" href="/category/storage" data-link>
                    <i class="bi bi-database"></i>
                    <span>Storage</span>
                </a>
            </div>
            
             <div class=" my-4  col-xl-2 col-lg-4  col-md-6 col-sm-6 d-flex justify-content-around">           
                <a class="shadow nav-link nav-icon-pill" href="/category/case" data-link>
                   <i class="bi bi-pc"></i>
                    <span>Case</span>
                </a>
            </div>
            <section class="container py-5">
                
                 ${renderFeatured(PRODUCTS)} 
            </section>

</div>
</div>
     
  `;
}
