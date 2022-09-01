## Modelo de Cajas HTML ##
El modelo de cajas o "box model" es seguramente la característica más importante del lenguaje de hojas de estilos CSS, ya que condiciona el diseño de todas las páginas web. El modelo de cajas es el comportamiento de CSS que hace que todos los elementos de las páginas se representen mediante cajas rectangulares.
Cada vez que se inserta una etiqueta HTML, se crea una nueva caja rectangular que encierra los contenidos de ese elemento.
 ## Partes que componen una caja ##
Las partes que componen cada caja y su orden de visualización desde el punto de vista del usuario son las siguientes:
- Contenido (content): se trata del contenido HTML del elemento (las palabras de un párrafo, una imagen, el texto de una lista de elementos, etc.)
- Relleno (padding): espacio libre opcional existente entre el contenido y el borde.
- Borde (border): línea que encierra completamente el contenido y su relleno.
- Imagen de fondo (background image): imagen que se muestra por detrás del contenido y el espacio de relleno.
- Color de fondo (background color): color que se muestra por detrás del contenido y el espacio de relleno.
- Margen (margin): separación opcional existente entre la caja y el resto de cajas adyacentes.

## Anchura y Altura ##
La propiedad CSS que controla la anchura de la caja de los elementos se denomina width.
| Propiedad | witdh |
| Valor | unidad de medida, porcentaje,  auto,  inherit |
| Se aplica | Todos los elementos, salvo los elementos en línea que no sean imágenes, las filas de tabla y los grupos de filas de tabla |
| Valor Inicial | Auto |
| Descripcion | Establece la altura |

- La propiedad width no admite valores negativos y los valores en porcentaje se calculan a partir de la anchura de su elemento padre.
- El valor inherit indica que la anchura del elemento se hereda de su elemento padre.
- El valor auto, que es el que se utiliza si no se establece de forma explícita un valor a esta propiedad, indica que el navegador debe calcular automáticamente la anchura del elemento, teniendo en cuenta sus contenidos y el sitio disponible en la página.
