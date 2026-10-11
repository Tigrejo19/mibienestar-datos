# MiBienestar — verificación del proceso de borrado

**Revisión:** 2026-10-11. **Base:** `main`.
Este repositorio únicamente redirige al procedimiento canónico. No procesa solicitudes ni borra datos por sí mismo.

## Fuente única
https://tigrejo19.github.io/politicaprivacidad-mibienestar/eliminar-cuenta.html

## Pruebas obligatorias antes de certificar el borrado

- [ ] Desde la app: usuario autenticado solicita eliminar, se verifica identidad y se elimina Firebase Authentication.
- [ ] Se eliminan todos los datos asociados a UID, incluidas subcolecciones, preferencias, logs, tokens/instalaciones y vínculos de nickname; comprobar también rutas nuevas.
- [ ] Los fallos parciales quedan registrados, se reintentan con idempotencia y se confirma el resultado.
- [ ] Borrado vía correo sin acceso a la app: proceso real verificado con identidad, plazos y respuesta; no exigir reinstalar.
- [ ] Supresión y conservación residual en backups/logs documentadas según comportamiento del proveedor, sin prometer plazos desconocidos.
- [ ] Copias locales en otros dispositivos y suscripciones Google Play explicadas correctamente.
- [ ] URL externa registrada en Play Console, accesible públicamente y sin login.
- [ ] Solicitudes de derechos atendidas dentro del plazo legal aplicable, incluida verificación sin solicitar contraseñas.

**Importante:** pasar `scripts/validate-deletion.cjs` demuestra coherencia de la página, **no** el borrado real en Firebase ni el cumplimiento jurídico. Fuente: [Google Play User data](https://support.google.com/googleplay/android-developer/answer/10144311).
