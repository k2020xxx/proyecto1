
let habilidadesArreglo = [
    { nombre: "JavaScript", nivel: "Intermedio", imagen: "auto1" },
    { nombre: "HTML", nivel: "Intermedio", imagen: "auto1", },
    { nombre: "CSS", nivel: "Intermedio", imagen: "auto1" },
    { nombre: "BOOSTRAP", nivel: "Intermedio", imagen: "auto1" },
    { nombre: "REACT", nivel: "Básico", imagen: "auto1" },
    { nombre: "MySQL", nivel: "Básico", imagen: "auto1" },
    { nombre: "INGLÉS", nivel: "Básico", imagen: "auto1", }

]

let habilidadesBlandas = [
    { nombre: "Comunicación", imagen: "auto2" },
    { nombre: "Trabajao en Equipo", imagen: "auto2" },
    { nombre: "Paciencia", imagen: "auto2" },
    { nombre: "Iniciativa", imagen: "auto2" },
    { nombre: "Responsabilidad", imagen: "auto2" },
    { nombre: "Ganas de Aprender", imagen: "auto2" },


]
//console.log(habilidadesArreglo)

let contenedorHabilidadesBlandas = document.getElementById("habilidadesBlnadas")

function llenarHabilidadesBlandas(array, destino) {
    let columna = "<div class='row row-cols-1 row-cols-md-3 g-4'>"
    for (let i = 0; i < array.length; i++) {
        columna += "<div class='col'>"
        columna += "<div class='card'>"
        columna += "<h5 class='card-title'>" + array[i].nombre + "</h5>"
        columna += "<div class='card-body'>"
        columna += "<img src='img/" + array[i].imagen + ".jpg' class='card-img-top' alt=' " + array[i].nombre + " ' title='" + array[i].nombre + "'>"

        columna += "</div></div></div>"
        destino.innerHTML = columna
    }
    return columna
}
//llenarHabilidades(habilidadesArreglo, contenedorHabilidades)
llenarHabilidadesBlandas(habilidadesBlandas, contenedorHabilidadesBlandas)


let cajasProyectos = document.querySelectorAll("#proyectos .conteneddor-proyectos");


for (let i = 0; i < cajasProyectos.length; i++) {
    cajasProyectos[i].addEventListener("mouseenter", function () {
        let crearDescripcion = document.createElement("div")
        crearDescripcion.setAttribute("class", "descripcion")
        crearDescripcion.setAttribute("id", i)
        let idDescripcion = Number(crearDescripcion.getAttribute("id"))

        let tituloDescripcion = document.createElement("h1")
        crearDescripcion.append(tituloDescripcion)

        let textoDescripcion = document.createElement("p")
        crearDescripcion.append(textoDescripcion)

        let contenedorIconos = document.createElement("div")
        contenedorIconos.setAttribute("id", "contenedor-iconos")
        crearDescripcion.appendChild(contenedorIconos)

        let cajaIcono1 = document.createElement("div")
        cajaIcono1.setAttribute("class", "iconos")
        contenedorIconos.append(cajaIcono1)

        let cajaIcono2 = document.createElement("div")
        cajaIcono2.setAttribute("class", "iconos")
        contenedorIconos.append(cajaIcono2)


        switch (idDescripcion) {
            case 0:
                tituloDescripcion.innerText = "TITULO" + i
                textoDescripcion.innerText = "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam molestias, provident veritatis sed id omnis nam magnam accusantium, nihil mollitia doloremque vero praesentium corrupti pariatur impedit temporibus dolorem! Consectetur, eius!"
                cajaIcono1.innerHTML = "<a href='' target='_blank' title='Ver Código'>" + "<i class='bi bi-github'>" + "</i>" + "</a>"
                cajaIcono2.innerHTML = "<a href=''  target='_blank' title='Ver Página'>" + "<i class='bi bi-globe'>" + "</i>" + "  </a>"
                break;

            case 1:
                tituloDescripcion.innerText = "TITULO" + i
                textoDescripcion.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam molestias, provident veritatis sed id omnis nam magnam accusantium, nihil mollitia doloremque vero praesentium corrupti pariatur impedit temporibus dolorem! Consectetur, eius!"
                cajaIcono1.innerHTML = "<a href='' target='_blank' title='Ver Código'>" + "<i class='bi bi-github'>" + "</i>" + "</a>"
                cajaIcono2.innerHTML = "<a href=''  target='_blank' title='Ver Página'>" + "<i class='bi bi-globe'>" + "</i>" + "  </a>"
                break;

            case 2:
                tituloDescripcion.innerText = "TITULO" + i
                textoDescripcion.innerText = " Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam molestias, provident veritatis sed id omnis nam magnam accusantium, nihil mollitia doloremque vero praesentium corrupti pariatur impedit temporibus dolorem! Consectetur, eius!"
                cajaIcono1.innerHTML = "<a href='' target='_blank' title='Ver Código'>" + "<i class='bi bi-github'>" + "</i>" + "</a>"
                cajaIcono2.innerHTML = "<a href=''  target='_blank' title='Ver Página'>" + "<i class='bi bi-globe'>" + "</i>" + "  </a>"
                break;

            case 3:
                tituloDescripcion.innerText = "TITULO" + i
                textoDescripcion.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam molestias, provident veritatis sed id omnis nam magnam accusantium, nihil mollitia doloremque vero praesentium corrupti pariatur impedit temporibus dolorem! Consectetur, eius!"
                cajaIcono1.innerHTML = "<a href='' target='_blank' title='Ver Código'>" + "<i class='bi bi-github'>" + "</i>" + "</a>"
                cajaIcono2.innerHTML = "<a href=''  target='_blank' title='Ver Página'>" + "<i class='bi bi-globe'>" + "</i>" + "  </a>"
                break;
        }

        cajasProyectos[i].appendChild(crearDescripcion)
    })
    cajasProyectos[i].addEventListener("mouseleave", function () {
        let cajasDescriptivas = document.querySelectorAll(".descripcion");
        cajasDescriptivas.forEach(element => {
            element.remove()

        });


    })


}

let contenedorVueltas = document.getElementsByClassName("contenedor-vuletas");
let cajasVueltas = document.querySelectorAll(".caja-vueltas");


for (let i = 0; i < cajasVueltas.length; i++) {

    let img
    img = "<img src=' img/" + habilidadesArreglo[i].imagen + ".jpg' alt='' >"

    let front = document.createElement("div")
    front.classList.add("front")
    front.innerHTML = img
    cajasVueltas[i].append(front)

    let back = document.createElement("div")
    back.classList.add("back")

    let contenidoBack = document.createElement("div")
    contenidoBack.classList.add("contenido-back")
    let descripcion = "<h1>" + habilidadesArreglo[i].nombre + "</h1>"
    descripcion += "<h4> Nivel: " + habilidadesArreglo[i].nivel + "<h4>"
    contenidoBack.innerHTML = descripcion

    back.appendChild(contenidoBack)
    cajasVueltas[i].append(back)

    cajasVueltas[i].addEventListener("mouseenter", function () {
        cajasVueltas[i].style.transform = "rotateY(180deg)"
        back.style.display = "block"
        front.style.display = "none"

    })

    cajasVueltas[i].addEventListener("mouseleave", function () {
        cajasVueltas[i].style.transform = "rotateY(0deg)"
        back.style.display = "none"
        front.style.display = "block"

    })






}