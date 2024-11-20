<?php
$glossary = json_decode(file_get_contents('glossary.json'), true);

if (isset($_GET['term'])) {
    $term = $_GET['term'];
    $definition = null;

    foreach ($glossary as $entry) {
        if (strcasecmp($entry['term'], $term) == 0) {
            $definition = $entry['definition'];
            break;
        }
    }

    if ($definition) {
        echo "<h1>$term</h1>";
        echo "<p>$definition</p>";
    } else {
        echo "<p>No results found for '$term'.</p>";
    }
}
?>


<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AINexus</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    <link rel="icon" href="Main.png" type="image/x-icon">
</head>
<body>
    <!-- Navbar HTML -->
    <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container">
            <!-- Brand Name -->
            <h6>Macro Vision Academy's</h6>
            <a class="navbar-brand fw-bold fs-1 mx-auto" href="../../index.php">AINexus</a>
        </div>

        <!-- Search Bar and Button -->
        <div class="container">
            <form class="form-inline w-100">
                <input class="form-control mr-sm-2 w-90" type="search" placeholder="This search functionality will be added soon in the updated versions" aria-label="Search">
                <button class="btn btn-outline-dark fw-bold my-2 my-sm-0" type="submit">GO</button>
            </form>
        </div>

        <!-- Hamburger Menu for Small Screens -->
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mx-auto">
                <li class="nav-item active">
                    <a class="nav-link fw-bold" href="../../index.php">Home</a>
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
                    <a class="nav-link" href="pages/leaders/index.php">Leaders</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="pages/resource-library/index.php">Resource Library</a>
                </li>
                <!-- <li class="nav-item">
                    <a class="nav-link" href="pages/latest-news/index.php">Latest News</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="pages/stories/index.php">Stories</a>
                </li> -->
            </ul>
        </div>
    </nav>

    <div class="hero-section">
        <div class="headline">
            <h1 class="fw-bold">Explore <span id="element"></span> <br> Your Gateway to Knowledge</h1>
        </div>
        <div class="subheadline">
            <h3>Dive into AI terms, career paths, resources, and insights from industry leaders.</h3>
        </div>
        <div class="cta">
            <button><a href="../AI_07/pages/glossary/index.php">Explore AI</a></button>
        </div>
    </div>

    <div class="footer">
        <p class="">Designed & Developed by: Bhavesh Thadhani (XI<sup>th</sup> &#11088;)</p>
        <p class="">Created with the assistance of Nitin Paliwal Sir</p>
        <p>Version 1.0.0 - Genesis</p>
        <p class="">AINexus &#169; 2024-25</p>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
    <script src="script.js"></script>
</body>
</html>

<script src="https://unpkg.com/typed.js@2.1.0/dist/typed.umd.js"></script>
    <script>
      var typed = new Typed("#element", {
        strings: [
          "AI Terminologies",
          "AI Careers",
          "Insights from Industry Leaders",
          "AI Resource Library",
        ],
        typeSpeed: 50,
      });
    </script>