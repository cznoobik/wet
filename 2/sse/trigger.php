<?php
// Seznam možných barev
$colors = ["red", "green", "blue", "yellow", "purple", "orange", "cyan", "magenta"];

// Vyber náhodnou barvu
$randomColor = $colors[array_rand($colors)];

// Ulož barvu do souboru
file_put_contents("color.txt", $randomColor);

// Vrátíme zprávu pro konzoli
echo "Barva změněna na: $randomColor";
