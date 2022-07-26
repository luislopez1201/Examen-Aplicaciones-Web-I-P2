productos.forEach((productos)=>{
    productos.addEventListener('click', (Descripcion)=>{
        let id=Descripcion.target.getAttribute('produ-id');
        bd.forEach((productos)=>{
            if(id == productos.Id){
                const verDetalle=Descripcion.target.parentElement.lastElementChild;
                verDetalle.innerHTML=`
                                    <div class="lista productos"
                                        <h2>Datos del productos:</h2>
                                        <p>${productos.Descripcion}</p>
                                        <p>${productos.Unidad}</p>
                                        <p>${productos.Cantidad}</p>
                                        <p>${productos.Proveedor}</p>
                                    </div>`

            }
        })
    })
})