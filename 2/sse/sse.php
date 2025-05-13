<?php
// SSE – server-sent events
header('Content-Type: text/event-stream');
header('Cache-Control: no-cache');
header('Connection: keep-alive');

// Soubor, kde je aktuální barva pozadí
$colorFile = "color.txt";

// Nekonečná smyčka – odesílá každou sekundu aktuální barvu
while (true) {
    // Načti aktuální barvu
    if (file_exists($colorFile)) {
        $color = trim(file_get_contents($colorFile));
    } else {
        $color = "white";
    }

    // Odešli barvu klientovi
    echo "data: $color\n\n";
    ob_flush();
    flush();

    // Pauza 1 sekunda
    sleep(1);
}
