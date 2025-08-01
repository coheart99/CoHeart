✅ Instrucciones para activar enlaces de invitación en tu app:

1. Sube el archivo `Auth.jsx` a tu proyecto en GitHub (junto con los demás `.jsx`).
   - Si usas Vite o React, guárdalo en la carpeta `src` o donde tengas los otros componentes.

2. Asegúrate de importar y usar `<Auth />` en tu `App.jsx` si detectas la ruta `/auth`.

3. Sube también `vercel.json` a la raíz de tu proyecto (nivel superior).

4. Haz un nuevo deploy en Vercel.

Así, cuando alguien entre a `https://coheart.online/auth?...`, Vercel no dará error y mostrará tu app correctamente.
