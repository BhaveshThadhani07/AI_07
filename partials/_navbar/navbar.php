<nav class="navbar navbar-expand-lg navbar-light">
    <div class="container">
        <!-- Brand Name -->
        <a class="navbar-brand fw-bold fs-1 mx-auto" href="#">AINexus</a>
    </div>

    <!-- Search Bar and Button -->
    <div class="container">
        <form class="form-inline w-100">
            <input class="form-control mr-sm-2 w-90" type="search" placeholder="Search for 150+ AI related terms" aria-label="Search">
            <button class="btn btn-outline-dark fw-bold my-2 my-sm-0" type="submit">GO</button>
        </form>
    </div>

    <!-- Hamburger Menu for Small Screens -->
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mx-auto">
            <li class="nav-item active">
                <a class="nav-link fw-bold" href="index.php">Home</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="pages/about/index.php">About</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="pages/glossary/index.php">Glossary</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="pages/careers/index.php">Careers</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="pages/players/index.php">Players</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="pages/resource-library/index.php">Resource Library</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="pages/latest-news/index.php">Latest News</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">AI Ethics</a>
            </li>
        </ul>
    </div>
</nav>

<style>
    * {
        margin: 0;
        padding: 0;
    }


    /* NAVBAR SECTION */

    .navbar {
        flex-direction: column;
        /* Stack items vertically */
        align-items: center;
        /* Center align items */
        background-color: #759cc9cd;
        z-index: 1;
        position: sticky;
        top: 0;
        overflow-x: hidden;

    }

    .navbar-brand {
        text-align: center;
        /* Center the brand name */
        font-size: 2rem;
        /* Adjust font size as needed */
    }

    .form-inline {
        width: 100%;
        /* Make the form take the full width */
        justify-content: center;
        /* Center the search bar and button */
        margin: 10px 0;
        /* Add margin for spacing */
        display: flex;
        gap: 20px;
    }

    .form-control {
        width: 90%;
        /* Set the search bar width */
    }

    .navbar-nav {
        flex-direction: row;
        /* Keep nav links in a row */
        justify-content: center;
        /* Center align nav links */
    }

    .navbar-nav li a {
        color: black;
    }

    .nav-item {
        margin: 0 10px;
        /* Add spacing between nav items */
    }


    /* Responsive adjustments */
    @media (max-width: 768px) {
        .navbar {
            flex-direction: column;
            /* Stack elements vertically on smaller screens */
        }

        .navbar-nav {
            width: 100%;
            /* Full width for navbar links */
            justify-content: center;
            /* Center align nav links */
        }

        .form-inline {
            flex-direction: row;
            /* Align the search and button horizontally */
            width: 100%;
            /* Full width */
        }

        .form-control {
            width: 80%;
            /* Adjust width for smaller screens */
        }
    }
</style>