addEventListener("DOMContentLoaded", ()=>{
  const firebaseConfig = {
    apiKey: "AIzaSyCBK2PkI947few4cfo4L7QTmWQgukqdheg",
    authDomain: "primeravez-a3634.firebaseapp.com",
    databaseURL: "https://primeravez-a3634-default-rtdb.firebaseio.com",
    projectId: "primeravez-a3634",
    storageBucket: "primeravez-a3634.appspot.com",
    messagingSenderId: "288744423943",
    appId: "1:288744423943:web:2d7f56b782cb602d76e0a2"
  };
  firebase.initializeApp(firebaseConfig);
  //Vigilar cambios
  // firebase.database().ref('lista').on("value", (e)=>{
  //     console.log(e.val());
  // })
  
  //Guardar y actualizar datos
  let obj = {
      id: 777
  };
  firebase.database().ref('pagina').set(obj);

  //Eliminar paquetes
  // firebase.database().ref('pagina').remove();

  // let buscar = async(id)=>{
  //     let busqueda = await firebase.database().ref(`lista/${id}`).get();
  //     let json = await busqueda.val();
  //     console.log(json);
  // }
  // buscar(123)

  //Eliminar Datos
  // let Eliminar = async(id)=>{
  //     firebase.database().ref(`lista/${id}`).remove();
  // }
  // Eliminar(888)

  //Agregar en listas
  // let insertar = async(data)=>{
  //     let busqueda = await firebase.database().ref(`lista`).get();
  //     let json = await busqueda.val();
  //     firebase.database().ref(`lista/${json.length}`).update(data);
  // }
  // insertar({nombre: "dff"})

  //Agregar en listas sin duplicar
  // let insertarSinDuplicar = async(data)=>{
  //     let busqueda = await firebase.database().ref(`lista`).get();
  //     let json = await busqueda.val();
  //     let personasMap = json.map(item=>{
  //         return [item.nombre,item]
  //     });
  //     var personasMapArr = new Map(personasMap);
  //     let unicos = [...personasMapArr.values()];
  //     firebase.database().ref(`lista`).remove();
  //     firebase.database().ref(`lista`).set(unicos);
  // }
  // insertarSinDuplicar({nombre: "dff"})
  
})