![Imagen principal](20-8-2025_amigo_secreto_portada.png)
# AluraOne Challenge Amigo Secreto
> Proyecto desarrollado como parte del proceso de selección del Programa ONE de Alura LATAM. Este proyecto busca aplicar los conocimientos adquiridos en los cursos, principalmente en JavaScript y Git/GitHub.
>
> La funcionalidad de esta aplicación de "Amigo Secreto" permite a los usuarios ingresar una lista de nombres. La aplicación sortea a una persona y muestra su nombre en la pantalla.

## Tabla de contenidos
- [Funcionalidades](#funcionalidades)
- [Características](#características)
- [Tecnologías](#tecnologías)
- [Instalación](#instalación)
- [Uso](#uso)
- [Contacto](#contacto)

---

## Funcionalidades
* Agrega nombres de Amigos.
* Los nombres ingresados son mostrados en un recuadro. 
* Selecciona a un amigo entre el listado para ser mostrado como Amigo Secreto.

---

## Características
* Validación de Entrada: Reconoce cuando el usuario ingresa nombres que posea algún caracter diferentes a letras, numeros y "." "_". Aunque inmediatamente alerte del fallido ingreso, sí permite el ingreso de combinaciones; pero al menos debe ingresar una letra para ser aceptado. Tambien reconoce cuando el campo está en vacio o solo con espacio devolviendo otra alerta.
  
* Formato automático de nombre: El formato de cada nombre ingresado será automaticamente cambiado a uno que contenga la primera letra en mayúscula y las demas en minúsculas.

* Entrada de datos con el teclado: Los nombres se pueden registrar usando la tecla `Enter` en lugar del mouse. Esto agiliza el proceso y hace que la experiencia sea más rápida y eficiente.
  
* Validación de participantes: El sistema de sorteo verifica automáticamente la cantidad de nombres registrados antes de ejecutar la acción. Si la lista contiene menos de dos participantes, la aplicación muestra una alerta para indicar que se deben añadir más nombres.

* Retroalimentación visual: Cuando un nombre es seleccionado como ganador, el programa lo resalta automáticamente en color rojo dentro de la lista de participantes. Este cambio visual permite una identificación inmediata del nombre que ha sido elegido.

---

## Tecnologías
Este proyecto fue creado con las siguientes tecnologías:
* HTML5: Estructura de la aplicación.
* CSS3: Estilos y diseño responsivo.
* JavaScript (Vanilla): Lógica de agregar nombres y sorteo.

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

https://janampag.github.io/AluraOne-Challenge_amigo_secreto/


# Ejemplo de cómo ejecutar tu proyecto
python app.py

# Si es una aplicación web
npm start

## Contacto
* **Tu nombre:** [JanampaG](https://github.com/tu_usuario_de_github)](https://github.com/janampag)
