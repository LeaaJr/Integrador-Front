function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  function filterFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById( "myInput" );
    filter = input.value.toUpperCase ( );
    div = document.getElementById ( "myDropdown" );
    a = div.getElementsByTagName ( "a" );
    for ( i = 0; i < a.length; i++ ) {
      txtValue = a[i].textContent || a[i].innerText;
      if ( txtValue.toUpperCase( ).indexOf( filter ) > -1 ) {
        a[ i ].style.display = "";
      } else {
        a[ i ].style.display = "none";
      }
    }

    
  }

  document.getElementById('boton1').onclick = function(){
    alert('Muchas gracias!, te responderemos en breve');
}


  let User = document.getElementById('logIn')
   
  let MyInfo = localStorage.getItem("MyInfo")

  if ( MyInfo == null ){
    
    console.log(MyInfo)

  }

  const mosTrarUser = document.createElement ("h2")
      mosTrarUser.textContent = MyInfo.nombre

  
  User.appendChild(mosTrarUser)