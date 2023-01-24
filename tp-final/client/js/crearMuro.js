'use strict';


let tipoMateriales = [];
let divMateriales = document.querySelector("#panelContenido");
let btnGenerar = document.createElement("button");
let crearMuroUsuario = document.querySelector("#crearMuro");
let url;

crearMuroUsuario.addEventListener("click", () => {

    async function crearCardsMateriales() {

        let divRowPanel = document.createElement("div");
        divRowPanel.classList.add("row");
        divRowPanel.id = "divRowPanel"

        let divColContenido = document.createElement("div");
        divColContenido.classList.add("col-10")
        divColContenido.classList.add("text-center");
        divColContenido.id = "divColContenido"

        let divColNombre = document.createElement("div");
        divColNombre.classList.add("col-2")
        divColNombre.classList.add("text-center");
        divColNombre.id = "divColNombre";
        let parrafoNombre = document.createElement("p");
        parrafoNombre.innerText = "Nombre Muro";
        let inputNombre = document.createElement("input");
        inputNombre.id = "inputNombre";
        inputNombre.style.width = "120px";
        inputNombre.type = "text";


        let divRow = document.createElement("div");
        divRow.classList.add("row");

        //PREVISUALIZACION DE IMAGEN
        let divDrag = document.createElement("div");
        divDrag.classList.add("drag-area");

        let divIcon = document.createElement("div");
        divIcon.classList.add("icon");

        let icon = document.createElement("i");
        icon.classList.add("fas");
        icon.classList.add("fa-cloud-upload-alt");

        let header = document.createElement("header");
        header.id = "header"
        header.innerText = "Arrastrar y soltar para cargar archivo";

        let span = document.createElement("span");
        span.id = "span";
        span.innerText = "O"

        let btnBrowse = document.createElement("button");
        btnBrowse.innerText = "Buscar Archivo";

        let inputFile = document.createElement("input");
        inputFile.id = "input"
        inputFile.type = "file";
        inputFile.hidden = true;

        //divIcon.appendChild(icon);
        //divDrag.appendChild(divIcon);
        divDrag.appendChild(header);
        divDrag.appendChild(span);
        divDrag.appendChild(btnBrowse);
        divDrag.appendChild(inputFile);

        // let divImg = document.createElement("div");
        // divImg.style.height = "200px";
        // divImg.style.border = "2px solid black";
        // divImg.innerText = "ACA DEBERIA PODER SUBIR UNA IMG";

        let divNombre = document.createElement("div");
        divNombre.classList.add("col");


        divMateriales.appendChild(divDrag);



        let divMaterial = document.createElement("div");
        divMaterial.classList.add("col-md-2");
        let parrafoMateriales = document.createElement("p");
        parrafoMateriales.innerText = "Materiales";

        let divIndiceE = document.createElement("div");
        divIndiceE.classList.add("col-md-2");
        let parrafoIndiceE = document.createElement("p");
        parrafoIndiceE.innerText = "Indice E";

        let divIndiceLambda = document.createElement("div");
        divIndiceLambda.classList.add("col-md-2");
        let parrafoLambda = document.createElement("p");
        parrafoLambda.innerText = "Indice Lambda";

        let divIndiceR = document.createElement("div");
        divIndiceR.classList.add("col-md-2");
        let parrafoIndiceR = document.createElement("p");
        parrafoIndiceR.innerText = "Indice R";

        let divCantidad = document.createElement("div");
        divCantidad.classList.add("col-md-2");
        divCantidad.classList.add("divCantidad");
        let parrafoCantidad = document.createElement("p");
        parrafoCantidad.innerText = "Cantidad"

        let divPrecio = document.createElement("div");
        divPrecio.classList.add("col-md-2");
        divPrecio.classList.add("divPrecio");
        let parrafoPrecio = document.createElement("p");
        parrafoPrecio.innerHTML = "Precio";

        divColNombre.appendChild(parrafoNombre)
        divColNombre.appendChild(inputNombre);
        divMaterial.appendChild(parrafoMateriales)
        divIndiceE.appendChild(parrafoIndiceE);
        divIndiceLambda.appendChild(parrafoLambda);
        divIndiceR.appendChild(parrafoIndiceR);
        divCantidad.appendChild(parrafoCantidad);
        divPrecio.appendChild(parrafoPrecio);
        // divNombre.appendChild(parrafoNombre)
        // divNombre.appendChild(inputNombre);

        divRow.appendChild(divMaterial)
        divRow.appendChild(divIndiceE);
        divRow.appendChild(divIndiceLambda);
        divRow.appendChild(divIndiceR);
        divRow.appendChild(divCantidad);
        divRow.appendChild(divPrecio);
        divColContenido.appendChild(divRow)
        divRowPanel.appendChild(divColNombre);
        divRowPanel.appendChild(divColContenido);
        divMateriales.appendChild(divRowPanel)

        for (let i = 1; i < tipoMateriales.length; i++) {
            let divRow = document.createElement("div");
            divRow.classList.add("row");

            let divIndiceE = document.createElement("div");
            divIndiceE.classList.add("col-md-2");
            let parrafoIndiceE = document.createElement("p");
            parrafoIndiceE.innerText = "0";
            let divIndiceLambda = document.createElement("div");
            divIndiceLambda.classList.add("col-md-2");
            let parrafoLambda = document.createElement("p");
            parrafoLambda.innerText = "0";

            let divIndiceR = document.createElement("div");
            divIndiceR.classList.add("col-md-2");
            let parrafoIndiceR = document.createElement("p");
            parrafoIndiceR.innerText = "0";

            let divCantidad = document.createElement("div");
            divCantidad.classList.add("col-md-2");
            divCantidad.classList.add("cantidad");
            let inputCantidad = document.createElement("input");
            inputCantidad.style.width = "100px"

            let divPrecio = document.createElement("div");
            divPrecio.classList.add("col-md-2");
            divPrecio.classList.add("precio");
            let parrafoPrecio = document.createElement("p");
            parrafoPrecio.innerHTML = "$ 0";
            // VER COMO HACER UNA FUNCION PARA CREAR LOS DROPDOWNS(SELECTS)
            let divSection = document.createElement("div");
            divSection.classList.add("col-md-2");
            let selectMateriales = document.createElement("select");
            selectMateriales.classList.add("selects");
            selectMateriales.id = `selectMateriales_${i}`
            selectMateriales.style.width = "120px";
            selectMateriales.style.height = "30px";
            selectMateriales.innerHTML = "";
            let optionNone = document.createElement("option");
            optionNone.innerHTML = "None";
            selectMateriales.appendChild(optionNone);

            crearOptions(i, selectMateriales, parrafoIndiceE, parrafoLambda, parrafoIndiceR, inputCantidad, parrafoPrecio, optionNone);


            divSection.appendChild(selectMateriales)
            divIndiceE.appendChild(parrafoIndiceE);
            divIndiceLambda.appendChild(parrafoLambda);
            divIndiceR.appendChild(parrafoIndiceR);
            divCantidad.appendChild(inputCantidad);
            divPrecio.appendChild(parrafoPrecio);

            divRow.appendChild(divSection);
            divRow.appendChild(divIndiceE);
            divRow.appendChild(divIndiceLambda);
            divRow.appendChild(divIndiceR);
            divRow.appendChild(divCantidad);
            divRow.appendChild(divPrecio);
            divColContenido.appendChild(divRow)
            divRowPanel.appendChild(divColNombre);
            divRowPanel.appendChild(divColContenido);
            divMateriales.appendChild(divRowPanel)
        }

        let divDescripcion = document.createElement("div");
        divDescripcion.classList.add("row");
        divDescripcion.style.alignItems = "center"
        let divColParrafo = document.createElement("div");
        divColParrafo.classList.add("col-2");
        let divColTextArea = document.createElement("div");
        divColTextArea.classList.add("col-10");

        let parrafoDescripcion = document.createElement("p");
        parrafoDescripcion.innerText = "Descripcion";

        let textArea = document.createElement("textarea");
        textArea.style.resize = "none";
        textArea.style.width = "100%";
        textArea.style.height = "200px";

        divColParrafo.appendChild(parrafoDescripcion);
        divColTextArea.appendChild(textArea);
        divDescripcion.appendChild(divColParrafo);
        divDescripcion.appendChild(divColTextArea);

        let divContainerBtn = document.createElement("div");
        divContainerBtn.classList.add("container");
        divContainerBtn.style.display = "flex";
        divContainerBtn.style.justifyContent = "flex-end"
        divContainerBtn.setAttribute("role", "group");
        divContainerBtn.setAttribute("aria-label", "Basic outlined example");


        btnGenerar.type = "button";
        btnGenerar.classList.add("btn");
        btnGenerar.classList.add("btn-outline-dark");

        btnGenerar.setAttribute("id", "btnGenerar");
        btnGenerar.innerText = "Generar";
        divContainerBtn.appendChild(btnGenerar);

        divMateriales.appendChild(divDescripcion);
        divMateriales.appendChild(divContainerBtn);
        cargarImagen();

    }


    async function crearOptions(id, selectMateriales, parrafoIndiceE, parrafoLambda, parrafoIndiceR, inputCantidad, parrafoPrecio, optionNone) {

        let respuesta = await fetch(`material/tipo-material/${id}`, {
            headers: {
                "Authorization": "Bearer " + window.sessionStorage.getItem("token")
            }
        });
        if (respuesta.ok) {
            let materiales = await respuesta.json();

            if(materiales) {
                for (let i = 0; i < materiales.length; i++) {
                    if (materiales[i] != undefined) {
                        let material = materiales[i];
                        let option = document.createElement("option");
                        option.innerHTML = material.nombre;
                        option.id = `optionMaterial_${material.idMaterial}`;
                        option.value = material.idMaterial;
                        selectMateriales.appendChild(option);
    
                        selectMateriales.addEventListener("change", () => {
                            if (option.selected) {
                                parrafoIndiceE.innerText = material.conductividadTermica;
                                parrafoLambda.innerText = material.espesor;
                                parrafoIndiceR.innerText = material.resistenciaTermica;
                                inputCantidad.value = material.cantidad;
                                parrafoPrecio.innerText = material.precio;
                            }
                            else if (optionNone.selected) {
                                parrafoIndiceE.innerText = "0";
                                parrafoLambda.innerText = "0";
                                parrafoIndiceR.innerText = "0";
                                inputCantidad.innerText = "0";
                                parrafoPrecio.innerText = "$ 0";
                            }
                        })
                    }
                }
            }


        }

    }

    btnGenerar.addEventListener("click", async () => {
        let nombreMuro = document.querySelector("#inputNombre"); // HACER INPUT PARA AGARRAR EL NOMBRE DESDE LA TABLA DE CREACION DE MUROS
        if (nombreMuro) {

            let idsMateriales = [];
            let selects = document.querySelectorAll(".selects");
            let inputsCantidades = document.querySelectorAll(".cantidad");
            let parrafosPrecios = document.querySelectorAll(".precio");
            let img = document.querySelector("#imgTag");
            let descripcionText = document.querySelector("textarea").value
            let total = 0;


            //AGARRAR TODOS LOS MATERIALES(ya los id de los materiales en los id del option , probar agarrar todos los selects y hacer una matriz), 
            //GENERAR MURO , COMPARAR TRANSMITANCIA TERMICA CON UNA CONSTANTE(INVENTADA) 

            for (let i = 0; i < selects.length; i++) {

                for (let j = 0; j < selects[i].children.length; j++) {
                    if (selects[i].children[j].selected && selects[i].children[j].value != "None") {
                        console.log(inputsCantidades[i].children[0].value)
                        console.log(parrafosPrecios[i].children[0].innerText)
                        total += Number(inputsCantidades[i].children[0].value * parrafosPrecios[i].children[0].innerText)
                        idsMateriales.push(Number(selects[i].children[j].value));
                    }

                }
                // for (let k = 0; k < selects[0].children.length; k++) {
                //     if (selects[0].children[k].selected && selects[0].children[k].value != "None") {
                //         nombreMuro = selects[0].children[k].innerText;
                //     }
                // }
            }
            //let imgDesencriptada = window.atob(img.src); //ATOM ES UNA FUNCION DE JS PARA DESENCRIPTAR BASE64
            let muro = {
                "nombre": `${nombreMuro.value}`,
                "precio": total,
                "stock": 1,
                "imagen": url,
                "descripcion": descripcionText,
                "usuarioIdUsuario": Number(window.sessionStorage.idUsuario),
                "idsMateriales": idsMateriales
            }
            console.log(muro)
            let respuesta = await fetch('/muro', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(muro)
            })
            if(respuesta.ok) {
                swal("Muro creado con exito","","success");
            }

        }
        else {
            swal("El Nombre del muro no puede estar vacio", "", "error");
        }

    })

    function cargarImagen() {
        const dropArea = document.querySelector(".drag-area");
        let dragText = dropArea.querySelector("header");
        let button = dropArea.querySelector("button");
        let input = dropArea.querySelector("input");
        let file;

        button.onclick = () => {
            input.click();
        }
        console.log(input)
        input.addEventListener("change", function () {
            file = this.files[0];
            dropArea.classList.add("active");
            showFile(file, dropArea);
        })

        dropArea.addEventListener("dragover", (event) => {
            event.preventDefault();
            dropArea.classList.add("active");
            dragText.textContent = "Soltar para cargar archivo";
        })

        dropArea.addEventListener("dragleave", () => {
            dropArea.classList.remove("active");
            dragText.textContent = "Arrastrar y soltar para cargar archivo";
        })

        dropArea.addEventListener("drop", (event) => {
            event.preventDefault();
            file = event.dataTransfer.files[0];
            showFile(file, dropArea);
        })

        // dropArea.addEventListener("drop", (event) => {
        //     event.preventDefault();

        //     file = event.dataTransfer.files[0];
        //     showFile();
        // })

    }

    //let cloudinary = new cloudinary.Cloudinary({cloud_name: "djj3tt8x9", secure: true});

    // const cld = new Cloudinary({
    //     cloud : {
    //       cloudName : 'djj3tt8x9'
    //    }
    //  });

    // const api_key = "683354734239633";
    // const cloud_name = "djj3tt8x9";


    const CLOUDINARY_URL = "https://api.cloudinary.com/v1_1/djj3tt8x9/upload";
    const CLOUDINARY_UPLOAD_PRESET = `frolihkd`;

    async function showFile(file, dropArea) {
        let fileType = file.type;
        let validExtensions = ["image/jpeg", "image/jpg", "image/png"];
        if (validExtensions.includes(fileType)) {
            let fileReader = new FileReader();

            fileReader.onload = () => {
                let fileUrl = fileReader.result;
                //console.log(fileReader.result)
                let imgTag = `<img src="${fileUrl}" alt="" id= "imgTag">`;
                dropArea.innerHTML = imgTag;
            }
            fileReader.readAsDataURL(file);

            const formData = new FormData();
            formData.append('file', file);
            formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);

            const res = await axios.post(CLOUDINARY_URL, formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    },
                });
            // let imagen = cld.image(res.data.public_id);
            // //RENDERIZO LA IMAGEN
            // imagen
            // .resize(thumbnail().width(300).height(175).gravity(focusOn(FocusOn.face())))

            url = res.data.secure_url;
            
        }
        else {
            alert("Esto no es un archivo de imagen");
            dropArea.classList.remove("active");
            dragText.textContent = "Arrastrar y soltar para cargar archivo";
        }
    }
    // async function borrarMuroGenerado(clase) {
    //     let btns = document.querySelectorAll(clase);

    //     for (let i = 0; i < btns.length; i++) {
    //         btns[i].addEventListener("click", async () => {
    //             let response = await fetch(`/muro/${btns[i].value}`, {
    //                 method: 'DELETE',
    //                 headers: { 'Content-Type': 'application/json' },
    //             })
    //             if (response.ok) {

    //                 let divPadre = document.querySelector("#muroGenerado");
    //                 let items = document.querySelectorAll(".items");
    //                 divPadre.removeChild(items[i]);
    //                 console.log("muro borrado");

    //             }
    //             else {
    //                 console.log("error en el response");
    //             }
    //         })
    //     }
    // }
    async function loadTipoMateriales() {
        let respuesta = await fetch("/tipo-material");
        if (respuesta.ok) {
            let json = await respuesta.json();
            tipoMateriales = json;
        }
        crearCardsMateriales();
    }
    loadTipoMateriales();


    let container = document.querySelector("#panelContenido");
    container.style.display = "";

})


