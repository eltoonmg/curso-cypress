it('sem testes, ainda', () => {})

//const getSomething = () => 10;
//
//const system = () =>{ 
//    console.log('init');
//    const something = getSomething();
//    console.log('Something is ${something}');
//    console.log('Something is ' + something);
//    console.log('end')
//}

//Forma de executar esperando uma resposta de outro método sem atropelar e mandar qualquer coisa
//const getSomething = Callback => {
//    setTimeout(() => {
//        Callback(12);
//    }, 1000)
//}
//
//const system = () =>{ 
//    console.log('init');
//    getSomething(some => console.log( 'Something is ' + some));
//    console.log('end')
//}

//Utilizando promisses
const getSomething =() => {
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            resolve(12);
    }, 1000)
    })
}

const system = () =>{ 
    console.log('init');
    getSomething().then(some =>{
        console.log( 'Something is ' + some)
    })
    console.log('end')
}

//Utilizando async await, cypress não utiliza essa forma
const system2 = async() =>{ 
    console.log('init');
    const some = await getSomething()
    console.log( 'Something is ' + some)
    console.log('end')
}

system();
system2();