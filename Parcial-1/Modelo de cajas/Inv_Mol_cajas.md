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
## Altura ##
La propiedad CSS que controla la altura de los elementos se denomina height.
| Propiedad | witdh |
| Valor | unidad de medida, porcentaje,  auto,  inherit |
| Se aplica | Todos los elementos, salvo los elementos en línea que no sean imágenes, las columnas de tabla y los grupos de columnas de tabla|
| Valor Inicial | Auto |
| Descripcion | Establece la altura |

- Igual que sucede con width, la propiedad height no admite valores negativos. Si se indica un porcentaje, se toma como referencia la altura del elemento padre. Si el elemento padre no tiene una altura definida explícitamente, se asigna el valor auto a la altura.
- El valor inherit indica que la altura del elemento se hereda de su elemento padre. El valor auto, que es el que se utiliza si no se establece de forma explícita un valor a esta propiedad

## Margen ##
La propiedad CSS que controla la altura de los elementos se denomina height.
| Propiedad | witdh |
| Valor | unidad de medida, porcentaje,  auto,  inherit |
| Se aplica | Todos los elementos, salvo margin-top y margin-bottom que sólo se aplican a los elementos de bloque y a las imágenes|
| Valor Inicial | 0 |
| Descripcion | Establece cada uno de los márgenes horizontales y verticales de un elemento |

margin admite entre uno y cuatro valores, con el siguiente significado:
- Si solo se indica un valor, todos los márgenes tienen ese valor.
- Si se indican dos valores, el primero se asigna al margen superior e inferior y el segundo se asigna a los márgenes izquierdo y derecho.
- Si se indican tres valores, el primero se asigna al margen superior, el tercero se asigna al margen inferior y el segundo valor se asigna los márgenes izquierdo y derecho.
- Si se indican los cuatro valores, el orden de asignación es: margen superior, margen derecho, margen inferior y margen izquierdo.

*la guerra de navegadores que se produjo en los años 90 provocó que cada fabricante (Microsoft y Netscape) añadiera sus propias extensiones y mejoras en sus productos.*
La solución que adoptaron fue la de incluir en el navegador dos modos diferentes de funcionamiento: modo compatible con las páginas antiguas (denominado "modo quirks" y que se podría traducir como "modo raro") y modo compatible con los nuevos estándares (denominado "modo estándar"). El modo quirks es equivalente a la forma en la que se visualizaban las páginas en los navegadores Internet Explorer 4 y Netscape Navigator 4.
La diferencia más notable entre los dos modos es el tratamiento del "box model", lo que puede afectar gravemente al diseño de las páginas HTML.
- DOCTYPE anterior a HTML 4.0 (<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 3.2 Final//EN">)
- DOCTYPE de HTML 4.01 sin URL (<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">)

