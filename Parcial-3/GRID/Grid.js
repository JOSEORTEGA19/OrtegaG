// $(document).ready=(function(){
// // var clients = [
// //     { "Name": "Otto Clay", "Age": 25, "Country": 1, "Address": "Ap #897-1459 Quam Avenue", "Married": false },
// //     { "Name": "Connor Johnston", "Age": 45, "Country": 2, "Address": "Ap #370-4647 Dis Av.", "Married": true },
// //     { "Name": "Lacey Hess", "Age": 29, "Country": 3, "Address": "Ap #365-8835 Integer St.", "Married": false },
// //     { "Name": "Timothy Henson", "Age": 56, "Country": 1, "Address": "911-5143 Luctus Ave", "Married": true },
// //     { "Name": "Ramona Benton", "Age": 32, "Country": 3, "Address": "Ap #614-689 Vehicula Street", "Married": false }
// // ];

// // var countries = [
// //     { Name: "", Id: 0 },
// //     { Name: "United States", Id: 1 },
// //     { Name: "Canada", Id: 2 },
// //     { Name: "United Kingdom", Id: 3 }
// // ];
// var juegos= [];
// Peticion();
// async function Peticion()
//  {
//     let respuesta = await fetch("ConexionGrid.php")
//     let dato = await respuesta.json();
//     juegos = dato;
//     $("#jsGrid").jsGrid({
//         width: "100%",
//         height: "400px",
    
//         inserting: true,
//         editing: true,
//         sorting: true,
//         paging: true,
    
//         data: juegos,
    
//         fields: [
//             { name: "ID", type: "number", width: 50, validate: "required" },
//             { name: "Lanzamiento", type: "number", width: 50 },
//             { name: "Nombre", type: "text", width: 100 },
//             { name: "Consola", type: "text", width:50 },
//             { name: "Precio", type: "number",width:50 },
//             { name: "Estado", type: "text", width:50 },
//             { name: "Crossplay", type: "text",width:50 },
//             { name: "Premios", type: "text", width:50 },
//             { name: "Soporte", type: "text", width:50 },
//             { type: "control" }
//         ]
//     })
//     }});

