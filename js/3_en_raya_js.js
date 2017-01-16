
var vBotonesPulsados = new Array();

var turno = "x";

var bMarcadorX;
var bMarcadorO;

var marcadorX = 0;
var marcadorO = 0;

var msg;


window.onload = function()
{	
	// referencia a los botones-marcadores
	bMarcadorX = document.getElementById("bX");
	bMarcadorO = document.getElementById("bO");

	bMarcadorX.style.borderBottom = "thick solid #008CBA";

	// referencia al mensaje de victoria
	msg = document.getElementById("mensaje");


	// addEventListener boton de reinicio de partida
	document.getElementById("reiniciar").addEventListener("click", limpiarBotones, false);

	// addEventListener a los botones que forman el juego del 3 en raya

	for(var i = 0; i<9; i++)
		document.getElementById("b" + i).addEventListener("click", dibujarXO, false);

}

// borra esto
function comenzarPartida()
{
	var msg = document.getElementById("mensaje");


	if(this.value == "Jugador VS Jugador")
	{
		msg.innerHTML = "Turno de <strong>" +turno.toUpperCase()+ "</strong>";
		limpiarBotones();
	}

	else
	{
		msg.innerHTML = "";
		limpiarBotones();
	}
}



    /////////////////////////////////////////////////////////
   /////////////////////////////////////////////////////////
  //////////////////  3 en raya ///////////////////////////
 /////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////

// dibuja una X o O segun el turno
function dibujarXO()
{
	ganador();

	if(!botonPulsado(this.id))
	{
		vBotonesPulsados.push(this.id);

		if(turno=="x")
		{
			
			this.style.backgroundImage = "url('img/x80.png')";
			this.style.backgroundRepeat = "no-repeat";
			this.style.backgroundPosition = "center";
			this.style.backgroundSize = "60px 60px";

			turnoX();
		}

		else
		{
			
			this.style.backgroundImage = "url('img/o80.png')";
			this.style.backgroundRepeat = "no-repeat";
			this.style.backgroundPosition = "center";
			this.style.backgroundSize = "60px 60px";

			turnoO();
		}
		ganador();
	}
}



/*
v :: array donde se comprueba las jugadas ganadoras
return :: TRUE si se encuentra jugada ganadora, FALSE en caso contrario
*/
function hayGanador(v)
{
	// posibilidad de victoria 1
	var p1 = ["b0", "b1", "b2"];
	if(v.indexOf(p1[0])>-1)
	{
		if(v.indexOf(p1[1])>-1)
		{
			if(v.indexOf(p1[2])>-1)
			{
				return true;
			}

		}
	}	

	// posibilidad de victoria 2
	var p1 = ["b0", "b4", "b8"];
	if(v.indexOf(p1[0])>-1)
	{
		if(v.indexOf(p1[1])>-1)
		{
			if(v.indexOf(p1[2])>-1)
			{
				return true;
			}

		}
	}

	// posibilidad de victoria 3
	var p1 = ["b0", "b3", "b6"];
	if(v.indexOf(p1[0])>-1)
	{
		if(v.indexOf(p1[1])>-1)
		{
			if(v.indexOf(p1[2])>-1)
			{
				return true;
			}

		}
	}

	// posibilidad de victoria 4
	var p1 = ["b1", "b4", "b7"];
	if(v.indexOf(p1[0])>-1)
	{
		if(v.indexOf(p1[1])>-1)
		{
			if(v.indexOf(p1[2])>-1)
			{
				return true;
			}

		}
	}

	// posibilidad de victoria 5
	var p1 = ["b2", "b4", "b6"];
	if(v.indexOf(p1[0])>-1)
	{
		if(v.indexOf(p1[1])>-1)
		{
			if(v.indexOf(p1[2])>-1)
			{
				return true;
			}

		}
	}

	// posibilidad de victoria 6
	var p1 = ["b2", "b5", "b8"];
	if(v.indexOf(p1[0])>-1)
	{
		if(v.indexOf(p1[1])>-1)
		{
			if(v.indexOf(p1[2])>-1)
			{
				return true;
			}

		}
	}

	// posibilidad de victoria 7
	var p1 = ["b3", "b4", "b5"];
	if(v.indexOf(p1[0])>-1)
	{
		if(v.indexOf(p1[1])>-1)
		{
			if(v.indexOf(p1[2])>-1)
			{
				return true;
			}

		}
	}

	// posibilidad de victoria 8
	var p1 = ["b6", "b7", "b8"];
	if(v.indexOf(p1[0])>-1)
	{
		if(v.indexOf(p1[1])>-1)
		{
			if(v.indexOf(p1[2])>-1)
			{
				return true;
			}

		}
	}


	return false;
}



// comprueba si hay ganador
function ganador()
{

	if(turno=="x") // compruebo O
	{
		var vO = new Array();

		for(var i = 1; i<vBotonesPulsados.length; i = i + 2)
			vO.push(vBotonesPulsados[i]);

		if(hayGanador(vO))
		{
			marcadorO++;
			bMarcadorO.innerText = marcadorO;
			limpiarBotones();
			quitarBotones();
			mostrarBotones();
		}	
	}	
	
	else // compruebo X
	{
		var vX = new Array();

		for(var i = 0; i<vBotonesPulsados.length; i = i + 2)
			vX.push(vBotonesPulsados[i]);

		if(hayGanador(vX))
		{
			marcadorX++;
			bMarcadorX.innerText = marcadorX;
			limpiarBotones();
			quitarBotones();
			mostrarBotones();
		}
	}
}

// devuelve si un boton ha sido pulsado ya o no
function botonPulsado(id)
{
	return (vBotonesPulsados.indexOf(id)>=0 ? true : false);
}

function limpiarBotones()
{
	for(var i = 0; i<9; i++)
		document.getElementById("b" + i).style.backgroundImage = "none";

	vBotonesPulsados = new Array();

	turnoO();
}

function turnoX()
{
	bMarcadorO.style.borderBottom = "thick solid #008CBA";
	bMarcadorX.style.borderBottom = "none";
	turno = "o";
	msg.innerHTML = "Turno de <strong>" +turno.toUpperCase()+ "</strong>";
}

function turnoO()
{
	bMarcadorO.style.borderBottom = "none";
	bMarcadorX.style.borderBottom = "thick solid #008CBA";
	turno = "x";
	msg.innerHTML = "Turno de <strong>" +turno.toUpperCase()+ "</strong>";
}

// quitar botones
function quitarBotones()
{
	for(var i = 0; i<9; i++)
		document.getElementById("b" + i).style.display = "none";
}

// mostrar botones
function mostrarBotones()
{
	for(var i = 0; i<9; i++)
		document.getElementById("b" + i).style.display = "initial";
}