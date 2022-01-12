
function creaDom(ilMioArray,contenitore){
    for (let i = 0; i < ilMioArray.length; i++) {
        contenitore.innerHTML+=` 
        <div class="icona d-flex flex-column justify-content-center align-items-center col-2 m-3">
           <i class="${ilMioArray[i].family} ${ilMioArray[i].prefix}${ilMioArray[i].name} ${ilMioArray[i].type}" 
              style="color:${ilMioArray[i].color}"></i>
            <div>
                ${ilMioArray[i].name}
            </div>
        </div>`;
    }

};

function cambio(){
    document.getElementById("tipologia").addEventListener("change",function(){
        let tipo = this.value;
    
        if (tipo == "all") {
            contenitore.innerHTML = "";
            creaDom(mioArray,contenitore);
        } else {
            switch(tipo){
                case "animal": 
                    let arrayAnimali = mioArray.filter((elemento) => {
                        if(elemento.type == "animal"){
                            return true
                        } else{
                            return false;
                        }
                    } );
                    console.log(arrayAnimali);
                    contenitore.innerHTML = "";
                    creaDom(arrayAnimali,contenitore);
                    break;
                
                case "vegetable" :
                    let arrayVegetali = mioArray.filter((elemento) => {
                        if(elemento.type == "vegetable"){
                            return true
                        } else{
                            return false;
                        }
                    } );
                    console.log(arrayVegetali);
                    contenitore.innerHTML = "";
                    creaDom(arrayVegetali,contenitore);
                    break;
    
                case "user" :
                    let arrayUser = mioArray.filter((elemento) => {
                        if(elemento.type == "user"){
                            return true
                        } else{
                            return false;
                        }
                    } );
                    console.log(arrayUser);
                    contenitore.innerHTML = "";
                    creaDom(arrayUser,contenitore);
                    break;
    
            }
    
    
    
    
        }
    
    });
}

let mioArray = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];

let contenitore = document.getElementById("contenitore");

creaDom(mioArray,contenitore);
cambio();


