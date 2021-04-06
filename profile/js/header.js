document.getElementById("getHeader").innerHTML = `<nav class="navbar navbar-expand-lg navbar-light bg-light" style=" height: 60px;">
<div class="container" id="con">
    <a class="navbar-brand" href="#">
        <img src="iti-logo-1.png" width="35" class="d-inline-block align-top" alt="">
    </a>
    <!-- <form class="form-inline my-2 my-lg-0">
    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
</form> -->
    <button class="navbar-toggler" type="button" data-toggle="collapse"
        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
        aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
        <ul class="navbar-nav text-lg-center custom-nav">
            <li class="nav-item active">
                <a class="nav-link" href="#"><i class="fas fa-home-lg-alt d-lg-block"></i><span
                        class="d-lg-block">Home</span>
                    <span class="sr-only">(current)</span>
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#"><i class="fas fa-users d-lg-block"></i>Groups
                    <span class="sr-only">(current)</span>
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#"><i class="fas fa-archive d-lg-block"></i>Jobs
                    <span class="sr-only">(current)</span>
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#"><i class="fas fa-comment-dots d-lg-block"></i>Messaging
                    <span class="sr-only">(current)</span>
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#"><i class="fas fa-bell d-lg-block"></i>Notifications
                    <span class="sr-only">(current)</span>
                </a>
            </li>
            <li class="nav-item dropdown custom-drop-down">
                <a class="nav-link dropdown-toggle cutom-drop-nav" href="#" id="navbarDropdown"
                    role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <img src="img/nav-img.png" width="30" height="30" class="d-lg-block align-top" alt="">
                    Me
                </a>
                <div class="dropdown-menu drop-user-profile" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item text-center" href="#">
                        <img src="img/nav-img.png" class="mx-auto" width="100" alt="" srcset="">
                        <h3 class="">Student Name</h3>
                        <h6 class="">Track Name</h6>
                    </a>
                    <div class="dropdown-divider"></div>
                    <h6 class="ml-3">Account</h6>
                    <a class="dropdown-item" href="#">Settings</a>
                    <a class="dropdown-item" href="#">Help</a>
                    <a class="dropdown-item" href="#">Language</a>
                    <div class="dropdown-divider"></div>
                    <h6 class="ml-3">Manage</h6>
                    <a class="dropdown-item" href="#">Posts & Activity</a>
                    <a class="dropdown-item" href="#">Posting Account</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#">Sign Out</a>
                </div>
            </li>
        </ul>
        <a class="toggle-btn btn" href="#" id="sidebarCollapse" role="button">
            <i class="fas fa-th d-lg-block"></i>
            <span>Work</span>
        </a>
    </div>

</div>
</nav>
<!-- Sidebar  -->
<nav id="sidebar">
<div id="dismiss">
    <i class="fas fa-arrow-right"></i>
</div>

<div class="sidebar-body">
    <div class="card">
        <div class="card-header">
            <h4>Visit Our Sites</h4>
        </div>
        <div class="card-body text-center">
            <a href="#" class="btn">
                <i class="fab fa-leanpub"></i>
                <div>Learn</div>
            </a>
            <a href="#" class="btn">
                <i class="fas fa-briefcase"></i>
                <div>Jobs</div>
            </a>
            <a href="#" class="btn">
                <i class="fab fa-leanpub"></i>
                <div>Learn</div>
            </a>
            <a href="#" class="btn">
                <i class="fas fa-briefcase"></i>
                <div>Jobs</div>
            </a>
            <a href="#" class="btn">
                <i class="fab fa-leanpub"></i>
                <div>Learn</div>
            </a>
            <a href="#" class="btn">
                <i class="fas fa-briefcase"></i>
                <div>Jobs</div>
            </a>
            <a href="#" class="btn">
                <i class="fab fa-leanpub"></i>
                <div>Learn</div>
            </a>
            <a href="#" class="btn">
                <i class="fas fa-briefcase"></i>
                <div>Jobs</div>
            </a>
            <a href="#" class="btn">
                <i class="fab fa-leanpub"></i>
                <div>Learn</div>
            </a>
            <a href="#" class="btn">
                <i class="fas fa-briefcase"></i>
                <div>Jobs</div>
            </a>

        </div>

    </div>
</div>
</nav>
<div class="overlay"></div>`