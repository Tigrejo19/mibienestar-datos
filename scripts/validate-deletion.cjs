"use strict";

const fs = require("node:fs");
const assert = require("node:assert/strict");

const html = fs.readFileSync("index.html", "utf8");
const canonicalDeletionUrl =
  "https://tigrejo19.github.io/politicaprivacidad-mibienestar/eliminar-cuenta.html";
const canonicalPrivacyUrl =
  "https://tigrejo19.github.io/politicaprivacidad-mibienestar/";

assert.match(html, /<html lang="es">/i);
assert.match(html, /<meta name="viewport"/i);
assert.match(html, /<h1>Eliminación de cuenta y datos de MiBienestar<\/h1>/);
assert.ok(html.includes(`href="${canonicalDeletionUrl}"`), "Missing official deletion link");
assert.ok(html.includes(`href="${canonicalPrivacyUrl}"`), "Missing official privacy link");
assert.ok(html.includes("sin necesidad de instalarla de nuevo"), "Missing external deletion path");
assert.ok(html.includes("Eliminar cuenta"), "Missing in-app deletion path");
assert.ok(html.includes("Google Play"), "Missing subscription clarification");
assert.doesNotMatch(html, /7 a 14 días laborables/i, "Outdated deadline must not return");
assert.doesNotMatch(html, /solo por correo electrónico/i, "Deletion isn't email-only");
assert.doesNotMatch(html, /<script\b/i, "Static legal page must be script-free");
assert.doesNotMatch(html, /http:\/\//i, "Insecure HTTP reference");

console.log("Legacy deletion page contract passed.");
