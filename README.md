![20-8-2025_amigo_secreto_portada.png](https://github.com/janampag/AluraOne-Challenge_amigo_secreto/blob/master/20-8-2025_amigo_secreto_portada.png)
# AluraOne Challenge Amigo Secreto
> Proyecto desarrollado como parte del proceso de selección del Programa ONE de Alura LATAM. Este proyecto busca aplicar los conocimientos adquiridos en los cursos, principalmente en JavaScript y Git/GitHub.
>
> La funcionalidad de esta aplicación de "Amigo Secreto" permite a los usuarios ingresar una lista de nombres. La aplicación sortea a una persona y muestra su nombre en la pantalla.

## Tabla de contenidos
- [Características](#características)
- [Tecnologías](#tecnologías)
- [Instalación](#instalación)
- [Uso](#uso)
- [Contribución](#contribución)
- [Licencia](#licencia)
- [Contacto](#contacto)

---

## Funcionalidades
* Agrega nombres de Amigos.
* Los nombres ingresados son mostrados en un recuadro. 
* Selecciona a un amigo entre el listado para ser mostrado como Amigo Secreto.

---

## Características
* Validación de Entrada: Reconoce cuando el usuario ingresa nombres que posea algún caracter diferentes a letras, numeros y "." "_". Aunque inmediatamente alerte del fallido ingreso, sí permite el ingreso de combinaciones; pero al menos debe ingresar una letra para ser aceptado. Tambien reconoce cuando el campo está en vacio o solo con espacio devolviendo otra alerta.
* Formato automático de nombre: Cada nombre ingresado el formato será automaticamente cambiado a uno que contenga la primera letra en mayúscula y las demas en minúsculas.
* Característica 3: La tercera característica más relevante.

---

## Tecnologías
Este proyecto fue creado con las siguientes tecnologías:
* [Lenguaje de programación] - Ej: `Python`, `JavaScript`, `Java`.
* [Framework/Librería 1] - Ej: `React`, `Django`, `Express.js`.
* [Framework/Librería 2] - Ej: `Node.js`, `Pandas`, `Spring Boot`.
* [Base de datos] - Ej: `PostgreSQL`, `MongoDB`.

---

## Instalación
Para tener una copia local y en funcionamiento, sigue estos sencillos pasos.

1.  **Clona el repositorio:**
    ```sh
    git clone [https://github.com/tu_usuario/nombre_de_tu_repositorio.git](https://github.com/tu_usuario/nombre_de_tu_repositorio.git)
    cd nombre_de_tu_repositorio
    ```

2.  **Instala las dependencias:**
    ```sh
    # Si usas npm
    npm install

    # Si usas pip (Python)
    pip install -r requirements.txt
    ```

3.  **Configura las variables de entorno (si es necesario):**
    Crea un archivo `.env` en el directorio raíz y añade tus variables:
    ```sh
    # Ejemplo de un archivo .env
    API_KEY=tu_clave_de_api
    DATABASE_URL=tu_url_de_base_de_datos
    ```

---

## Uso
Describe cómo usar tu proyecto, proporcionando ejemplos de código o comandos.

```sh
# Ejemplo de cómo ejecutar tu proyecto
python app.py

# Si es una aplicación web
npm start
