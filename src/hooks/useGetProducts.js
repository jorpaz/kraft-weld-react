const products = [
    {
        "id":1,
        "title": "Cepillo de Alambre de Acero",
        "price": 25,
        "description": "Mueble de Madera, Protección del Medio Ambiente, Maquinaria, Impresión Textil y Teñido, Eléctrica y Electrónica, Alimento y Bebidas",
        "images":"src/assets/products/cepillo-pulir-1.webp"
    },
    {
        "id":2,
        "title": "Cepillo de Alambre de Acero",
        "price": 25,
        "description": "Mueble de Madera, Protección del Medio Ambiente, Maquinaria, Impresión Textil y Teñido, Eléctrica y Electrónica, Alimento y Bebidas",
        "images":"src/assets/products/cepillo-pulir-2.webp"
    },
    {
        "id":3,
        "title": "Cepillo de Alambre de Acero",
        "price": 25,
        "description": "Mueble de Madera, Protección del Medio Ambiente, Maquinaria, Impresión Textil y Teñido, Eléctrica y Electrónica, Alimento y Bebidas",
        "images":"src/assets/products/cepillo-pulir-1.webp"
    },
    {
        "id":4,
        "title": "Disco de Pulir Universales",
        "price": 50,
        "description": "Ideales para desbaste pesado, biselado, achaflanado, y remoción de material en sustratos como acero inoxidable, acero al carbono y otros metales",
        "images":"https://m.media-amazon.com/images/I/817jAiP4bqL._AC_SL1500_.jpg"
    },
    {
        "id":5,
        "title": "Disco de Pulir Universales",
        "price": 50,
        "description": "Ideales para desbaste pesado, biselado, achaflanado, y remoción de material en sustratos como acero inoxidable, acero al carbono y otros metales",
        "images":"https://m.media-amazon.com/images/I/817jAiP4bqL._AC_SL1500_.jpg"
    },
    {
        "id":6,
        "title": "Disco de Pulir Universales",
        "price": 50,
        "description": "Ideales para desbaste pesado, biselado, achaflanado, y remoción de material en sustratos como acero inoxidable, acero al carbono y otros metales",
        "images":"https://m.media-amazon.com/images/I/817jAiP4bqL._AC_SL1500_.jpg"
    },
    {
        "id":7,
        "title": "Pulidora",
        "price": 300,
        "description": "El diseño liviano, compacto y portátil de solo 2.8KG lo hace fácil de transportar y almacenar. El dial de velocidad variable de 6 niveles permite a los usuarios controlar la velocidad de 600 a 3000 RPM de acuerdo con varias tareas o materiales y mejorar la eficiencia del trabajo",
        "images":"https://http2.mlstatic.com/D_NQ_NP_803109-MLA48655070664_122021-W.jpg"
    },
    {
        "id":8,
        "title": "Pulidora",
        "price": 300,
        "description": "El diseño liviano, compacto y portátil de solo 2.8KG lo hace fácil de transportar y almacenar. El dial de velocidad variable de 6 niveles permite a los usuarios controlar la velocidad de 600 a 3000 RPM de acuerdo con varias tareas o materiales y mejorar la eficiencia del trabajo",
        "images":"https://m.media-amazon.com/images/I/81WWuJ84o4L._AC_SL1500_.jpg"
    },
    {
        "id":9,
        "title": "Pulidora",
        "price": 300,
        "description": "El diseño liviano, compacto y portátil de solo 2.8KG lo hace fácil de transportar y almacenar. El dial de velocidad variable de 6 niveles permite a los usuarios controlar la velocidad de 600 a 3000 RPM de acuerdo con varias tareas o materiales y mejorar la eficiencia del trabajo",
        "images":"https://m.media-amazon.com/images/I/71dYvlqpiCL._AC_SL1500_.jpg"
    },
    {
        "id":10,
        "title": "Disco de Corte Para Metal",
        "price": 30,
        "description": "Estos discos de corte de metal nunca deben utilizarse para moler y siempre deben presentarse a la pieza de trabajo en un ángulo de 90 grados. Es importante elegir entre un disco de corte de metal o piedra de acuerdo con el material que se está cortando, y para garantizar que la rueda correcta esté montada correctamente. Tamaño: 4.921 x 0.126 x 0.866 in.",
        "images":"https://m.media-amazon.com/images/I/81rXk-EKjYL._AC_SL1500_.jpg"
    },
    {
        "id":11,
        "title": "Disco de Corte Para Metal",
        "price": 30,
        "description": "Estos discos de corte de metal nunca deben utilizarse para moler y siempre deben presentarse a la pieza de trabajo en un ángulo de 90 grados. Es importante elegir entre un disco de corte de metal o piedra de acuerdo con el material que se está cortando, y para garantizar que la rueda correcta esté montada correctamente. Tamaño: 4.921 x 0.126 x 0.866 in.",
        "images":"https://m.media-amazon.com/images/I/81rXk-EKjYL._AC_SL1500_.jpg"
    },
    {
        "id":12,
        "title": "Disco de Corte Para Metal",
        "price": 30,
        "description": "Estos discos de corte de metal nunca deben utilizarse para moler y siempre deben presentarse a la pieza de trabajo en un ángulo de 90 grados. Es importante elegir entre un disco de corte de metal o piedra de acuerdo con el material que se está cortando, y para garantizar que la rueda correcta esté montada correctamente. Tamaño: 4.921 x 0.126 x 0.866 in.",
        "images":"https://m.media-amazon.com/images/I/81rXk-EKjYL._AC_SL1500_.jpg"
    },
    {
        "id":13,
        "title": "Discos de Pulir",
        "price": 80,
        "description": "Alta calidad: molienda autoafilada, la fibra se pierde continuamente durante el proceso de molienda, el nuevo mineral de molienda se forma de forma natural, proporcionando una calidad de procesamiento consistente y consistente para la pieza de trabajo, tiene las funciones de tratamiento uniforme de la superficie, suavidad, aspecto hermoso, larga vida útil, etc.",
        "images":"https://m.media-amazon.com/images/I/71qgk7GkcVL._SL1000_.jpg"
    },
    {
        "id":14,
        "title": "Discos de Pulir",
        "price": 80,
        "description": "Alta calidad: molienda autoafilada, la fibra se pierde continuamente durante el proceso de molienda, el nuevo mineral de molienda se forma de forma natural, proporcionando una calidad de procesamiento consistente y consistente para la pieza de trabajo, tiene las funciones de tratamiento uniforme de la superficie, suavidad, aspecto hermoso, larga vida útil, etc.",
        "images":"https://m.media-amazon.com/images/I/71WFGFHnUEL._SL1000_.jpg"
    },
    {
        "id":15,
        "title": "Discos de Pulir",
        "price": 80,
        "description": "Alta calidad: molienda autoafilada, la fibra se pierde continuamente durante el proceso de molienda, el nuevo mineral de molienda se forma de forma natural, proporcionando una calidad de procesamiento consistente y consistente para la pieza de trabajo, tiene las funciones de tratamiento uniforme de la superficie, suavidad, aspecto hermoso, larga vida útil, etc.",
        "images":"https://m.media-amazon.com/images/I/612kDKV2+XL._SL1000_.jpg"
    },
    {
        "id":16,
        "title": "Tijeras",
        "price": 25,
        "description": "Cuchillas ultra afiladas: las cuchillas de borde de cuchillo cortan hasta la punta, deslizándose fácilmente a través de múltiples capas de tela y cuero. Cuchillo de corte de larga duración, corta fácilmente varias capas.",
        "images":"https://m.media-amazon.com/images/I/51msP5Rg-wS._AC_SL1500_.jpg"
    },
    {
        "id":17,
        "title": "Tijeras",
        "price": 25,
        "description": "Cuchillas ultra afiladas: las cuchillas de borde de cuchillo cortan hasta la punta, deslizándose fácilmente a través de múltiples capas de tela y cuero. Cuchillo de corte de larga duración, corta fácilmente varias capas.",
        "images":"https://m.media-amazon.com/images/I/51msP5Rg-wS._AC_SL1500_.jpg"
    },
    {
        "id":18,
        "title": "Tijeras",
        "price": 25,
        "description": "Cuchillas ultra afiladas: las cuchillas de borde de cuchillo cortan hasta la punta, deslizándose fácilmente a través de múltiples capas de tela y cuero. Cuchillo de corte de larga duración, corta fácilmente varias capas.",
        "images":"https://m.media-amazon.com/images/I/51msP5Rg-wS._AC_SL1500_.jpg"
    },
    {
        "id":19,
        "title": "Metro",
        "price": 65,
        "description": "Grado industrial de alta calidad cinta métrica. Goma over-mould para resistencia al impacto. Sensación de comodidad sujetando y resistente al impacto. Con lecturas métricas e imperiales. Longitud de la hoja: 10 metros o 33 pies.",
        "images":"https://m.media-amazon.com/images/I/6149BafZjYL._AC_SL1024_.jpg"
    },
    {
        "id":20,
        "title": "Metro",
        "price": 65,
        "description": "Grado industrial de alta calidad cinta métrica. Goma over-mould para resistencia al impacto. Sensación de comodidad sujetando y resistente al impacto. Con lecturas métricas e imperiales. Longitud de la hoja: 10 metros o 33 pies.",
        "images":"https://m.media-amazon.com/images/I/61e8zM8V7WL._AC_SL1024_.jpg"
    },
    {
        "id":21,
        "title": "Metro",
        "price": 65,
        "description": "Grado industrial de alta calidad cinta métrica. Goma over-mould para resistencia al impacto. Sensación de comodidad sujetando y resistente al impacto. Con lecturas métricas e imperiales. Longitud de la hoja: 10 metros o 33 pies.",
        "images":"https://m.media-amazon.com/images/I/61dFSadEmqL._AC_SL1024_.jpg"
    },
    
];

const useGetProducts = () => {
    return products
}

export default useGetProducts;
