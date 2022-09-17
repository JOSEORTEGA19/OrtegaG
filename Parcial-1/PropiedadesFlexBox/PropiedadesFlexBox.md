## ELEMENTOS DE UN FLEBOX ##

| ELEMENTO | DESCRIPCION |
| ---------- | ------------- |
| Contenedor |Es el elemento padre que tendrá en su interior cada uno de los ítems flexibles. Observa que al contrario que muchas otras estructuras CSS, por norma general, en Flex establecemos las propiedades al elemento padre.|
| Eje Principal | Los contenedores flexibles tendrán una orientación principal específica. Por defecto, el eje principal del contenedor flexbox es en horizontal (en fila). |
| Eje Secundario | De la misma forma, los contenedores flexibles tendrán una orientación secundaria, perpendicular a la principal. Si la principal es en horizontal, la secundaria será en vertical (y viceversa). |
| Item | Cada uno de los hijos que tendrá el contenedor en su interior. |

*Propiedades del eje Principal*
- El eje principal está definido por flex-direction, que posee cuatro posibles valores:
  - row
  - row-reverse ***[Si elegimos row o row-reverse, el eje principal correrá a lo largo de la fila según la dirección de la línea .]***
  - column
  - column-reverse ***[Al elegir column o column-reverse el eje principal correrá desde el borde superior de la página hasta el final — según la dirección del bloque.]***

  *Propiedades del eje Secundario*
  - El eje cruzado va perpendicular al eje principal, y por lo tanto si flex-direction (del eje principal) es row o row-reverse el eje cruzado irá por las columnas.
  - Si el eje principal es column o column-reverse entonces el eje cruzado corre a lo largo de las filas.

  ## CONTENEDOR FLEX ##
  - Un área del documento que contiene un flexbox es llamada contendedor flex. Para crear un contenedor flex, establecemos la propiedad del área del contenedor display como flex o inline-flex. Tan pronto como hacemos esto, los hijos directos de este contenedor se vuelven ítems flex. 
  - ***Flex-Direction*** en el contenedor flex nos permite cambiar la dirección de cómo los ítems son desplegados. Colocando flex-direction: row-reverse se mantendrá el despliegue a lo largo de la fila, sin embargo el inicio y final quedarán al revés del original.
  - ***Flex-Direction: Column*** el eje principal se cambiará y los ítems aparecerán en una columna. Colocando column-reverse las líneas de inicio y fin serán nuevamente puestas al revés.
  - ***Flex-Wrap*** La propiedad flex-wrap de CSS especifica si los elementos "hijos" son obligados a permanecer en una misma línea o pueden fluir en varias líneas. 

  ## CONTENEDORES ITEMS O HIJOS DE UN FLEXBOX ##
  - ***flex-grow*** Con la propiedad flex-grow definida como un entero positivo, los ítems flex pueden crecer en el eje principal a partir de flex-basis. Esto hará que el ítem se ajuste y tome todo el espacio disponible del eje, o una proporción del espacio disponible si otro ítem también puede crecer.
  - ***flex-shrink*** la propiedad flex-shrink controla como se contrae. Si no contamos con suficiente espacio en el contenedor para colocar los ítems y flex-shrink posee un valor entero positivo, el ítem puede contraerse a partir de flex-basis. Así como podemos asignar diferentes valores de flex-grow con el fin que un ítem se expanda más rápido que otros — un ítem con un valor más alto de flex-shrink se contraerá más rápido que sus hermanos que poseen valores menores.
  - ***flex-basis*** se define el tamaño de un ítem en términos del espacio que deja como espacio disponible. El valor inicial de esta propiedad es auto — en este caso el navegador revisa si los ítems definen un tamaño.
  - La propiedad ***align-items*** alineará los ítems sobre el eje cruzado.
  -----------------------------------------------------------------------------------
 + stretch : los ítems se ajustan por defecto a la altura de aquel más alto.
 + flex-start : para que los ítems se alineen al comienzo del contenedor flex.
 + flex-end : para alinearlos al final.
 + center :  para alinearlos al centro.
 + space-around :  para crear un espacio equitativo a la derecha e izquierda de cada ítem.
 + space-between : También podemos usar space-between para tomar todo el espacio sobrante después de que los ítems hayan sido colocados, y distribuir de forma pareja los ítems para que haya un espacio equitativo entre cada ítem.