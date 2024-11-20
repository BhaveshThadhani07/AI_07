<?php
$glossary = json_decode(file_get_contents('glossary.json'), true);

if (isset($_GET['query'])) {
    $query = strtolower($_GET['query']);
    $suggestions = [];

    foreach ($glossary as $entry) {
        if (strpos(strtolower($entry['term']), $query) !== false) {
            $suggestions[] = $entry['term'];
        }
    }

    echo json_encode($suggestions);
}
?>
