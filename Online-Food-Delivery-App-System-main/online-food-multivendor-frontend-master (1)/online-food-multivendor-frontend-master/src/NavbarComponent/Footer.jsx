import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div>
      <div class="container my-5">
        <footer class="text-center text-lg-start text-color">
          <div class="container-fluid p-4 pb-0">
            <section class="">
              <div class="row">
                <div class="col-lg-4 col-md-6 mb-4 mb-md-0">
                  <h5 class="text-uppercase text-color-second">
                    Online Food Multi-vendor Shop
                  </h5>

                  <p>
                    Welcome to our vibrant multivendor marketplace, where a
                    world of restaurants and buyers unite to create endless
                    shopping possibilities.
                  </p>
                </div>

                <div class="col-lg-2 col-md-6 mb-4 mb-md-0">
                  <h5 class="text-uppercase text-color-second">About us</h5>

                  <ul class="list-unstyled mb-0">
                    <li>
                      <a href="#!" class="text-color">
                      
                      </a>
                    </li>
                    <li>
                      <a href="#!" class="text-color">
                        
                      </a>
                    </li>
                    <li>
                      <a href="#!" class="text-color">
                  
                      </a>
                    </li>
                    <li>
                      <a href="#!" class="text-color">
                        
                      </a>
                    </li>
                  </ul>
                </div>

                <div class="col-lg-2 col-md-6 mb-4 mb-md-0">
                  <h5 class="text-uppercase text-color-second">Contact us</h5>

                  <ul class="list-unstyled mb-0">
                    <li>
                      <a href="#!" class="text-color">
                        
                      </a>
                    </li>
                    <li>
                      <a href="#!" class="text-color">
                        
                      </a>
                    </li>
                    <li>
                      <a href="#!" class="text-color">
                        
                      </a>
                    </li>
                    <li>
                      <a href="#!" class="text-color">
                        
                      </a>
                    </li>
                  </ul>
                </div>

                <div class="col-lg-2 col-md-6 mb-4 mb-md-0">
                  <h5 class="text-uppercase text-color-second">Careers</h5>

                  <ul class="list-unstyled mb-0">
                    <li>
                      <a href="#!" class="text-color">
                        
                      </a>
                    </li>
                    <li>
                      <a href="#!" class="text-color">
                        
                      </a>
                    </li>
                    <li>
                      <a href="#!" class="text-color">
                      </a>
                    </li>
                    <li>
                      <a href="#!" class="text-color">
                      </a>
                    </li>
                  </ul>
                </div>

                <div class="col-lg-2 col-md-6 mb-4 mb-md-0">
                  <h5 class="text-uppercase text-color-second">Links</h5>

                  <ul class="list-unstyled mb-0">
                    <li>
                      <a href="#!" class="text-color">
                      </a>
                    </li>
                    <li>
                      <a href="#!" class="text-color">
                      </a>
                    </li>
                    <li>
                      <a href="#!" class="text-color">
                      </a>
                    </li>
                    <li>
                      <a href="#!" class="text-color">
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <hr class="mb-4" />

            <section class="">
              <p class="d-flex justify-content-center align-items-center">
                <span class="me-3 text-color">Login from here</span>
                <Link to="/user/login" class="active">
                  <button
                    type="button"
                    class="btn btn-outline-light btn-rounded bg-color custom-bg-text"
                  >
                    Log in
                  </button>
                </Link>
              </p>
            </section>

            <hr class="mb-4" />
          </div>

          <div class="text-center">
            © 2023 Copyright:
            <a class="text-color-3" href="https://rahulraj0901.com/">
              rahulraj0901.com
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
