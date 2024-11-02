<?php
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AINexus</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
</head>

<body>

    <?php include '../../partials/_navbar/navbar.php'; ?>

    <div class="main">
        <div class="above">
            <h1>AI Visionaries Shaping the Future</h1>
            <h5>
                "Artificial Intelligence is the new electricity, transforming every industry and reshaping the world as we know it."
                <br><i>— Andrew Ng</i>
            </h5>
        </div>
        <div class="center">
            <ul class="carousel">
                <img src="../../assets/leaders/left.svg" alt="" class="carousel-left fw-bold" onclick="prevSlide()">

                <li class="card active">
                    <div class="centred-images">
                        <img src="../../assets/leaders/01_andrewNG.jpg" alt="Andrew Ng" height="200px" width="200px" draggable="false">
                        <h5 class="my-3 fw-bold">Andrew Ng</h5>
                    </div>
                </li>
                <li class="card">
                    <div class="centred-images">
                        <img src="../../assets/leaders/02_demisHassabis.webp" alt="Andrej Karpathy" height="200px" width="200px">
                        <h5 class="my-3 fw-bold">Demis Hassabis</h5>
                    </div>
                </li>
                <li class="card">
                    <div class="centred-images">
                        <img src="../../assets/leaders/03_geofferyHinton.webp" alt="Andrej Karpathy" height="200px" width="200px">
                        <h5 class="my-3 fw-bold">Geoffery Hinton</h5>
                    </div>
                </li>
                <li class="card">
                    <div class="centred-images">
                        <img src="../../assets/leaders/04_andrejKarpathy.jpg" alt="Andrej Karpathy" height="200px" width="200px">
                        <h5 class="my-3 fw-bold">Andrej Karpathy</h5>
                    </div>
                </li>
                <li class="card">
                    <div class="centred-images">
                        <img src="../../assets/leaders/06_kaiFuLee.jpg" alt="Kai Fu Lee" height="200px" width="200px">
                        <h5 class="my-3 fw-bold">Kai-Fu Lee</h5>
                    </div>
                </li>
                <li class="card">
                    <div class="centred-images">
                        <img src="../../assets/leaders/05_samAltman..jpg" alt="Sam Altman" height="200px" width="200px">
                        <h5 class="my-3 fw-bold">Sam Altman</h5>
                    </div>
                </li>
                <li class="card">
                    <div class="centred-images">
                        <img src="../../assets/leaders/07_mustafaSuleyman.jpg" alt="Sam Altman" height="200px" width="200px">
                        <h5 class="my-3 fw-bold">Mustafa Suleyman</h5>
                    </div>
                </li>
                <li class="card">
                    <div class="centred-images">
                        <img src="../../assets/leaders/08_yannLecun.jpg" alt="Sam Altman" height="200px" width="200px">
                        <h5 class="my-3 fw-bold">Yann LeCun</h5>
                    </div>
                </li>
                <li class="card">
                    <div class="centred-images">
                        <img src="../../assets/leaders/09_ianGoodfellow.jpg" alt="Sam Altman" height="200px" width="200px">
                        <h5 class="my-3 fw-bold">Ian Goodfellow</h5>
                    </div>
                </li>
                <li class="card">
                    <div class="centred-images">
                        <img src="../../assets/leaders/10_elonMusk.jpg" alt="Sam Altman" height="200px" width="200px">
                        <h5 class="my-3 fw-bold">Elon Musk</h5>
                    </div>
                </li>
                <img src="../../assets/leaders/right.svg" alt="" class="carousel-right fw-bold" onclick="nextSlide()">
            </ul>
        </div>
    </div>


    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
    <!-- <script src="script.js"></script> -->
    <script src="../leaders/script.js"></script>
</body>

</html>