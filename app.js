// Mon fichier Js
function objectJsPartie2(){
	// Noeud DOM
	var maDivDOM = document.getElementById('maDiv'); // Vanilla Js
	// console.log(maDivDOM.innerHTML);

	// Objet Jquery : avec des pouvoirs jquery
	var maDivJq = $('#maDiv');
	// console.log(maDivJq.html());

	var maDivDOMpuisJq = $(maDivDOM);
	// console.log(maDivDOMpuisJq.html());

	var buttons = $('button'); 
	// 'tableau Jquery' qui contient des noeuds classiques DOM
	
	console.log(buttons);

	console.log(buttons[2]);
	var btn2 = $(buttons[2]);
	console.log(btn2);

	 // tableau
	$('button').click(callback);

	function callback(){
		var btnDOM = this;
		var btnJq = $(btnDOM);
		console.log(btnJq.css('border'));

		var html = $(this).html();
		var val = $(this).val();
	}
}

objectJsPartie2();





















function objetJs(){
	console.log('Bienvenue.', 'ObjetJs');

	function roulerJeunesse(){
		console.log('rouler jeunesse');
	}

	var variableJaune = "jaune";
	

	var voiture = {
		// Propriété = (key : valeur)
		couleur : variableJaune, // "jaune",
		vitesse : 0,
		pneus : {
			nombre : {
				quantite : 4,
				metadata : {
					point : 3
				}
			},
			user : function(){
				console.log("On use les pneus");
			},

		},
		rouler : function (){
			console.log("vroom vroom");
			this.vitesse++;
			console.log("Vitesse: ", this.vitesse);
		},
		getMetadata: function(){
			return this.pneus.nombre.metadata;
		}
	};


	console.log("Voiture ==> ", voiture);
	console.log("Pneus: ", voiture.pneus.nombre.metadata);
	console.log("Metadata: ", voiture.metadata);
	console.log("Get Metadata: ", voiture.getMetadata());

	
	// console.log("Couleur ==> ", voiture.couleur);
	// console.log("Couleur bis ==> ", voiture["couleur"]);
}
























function scope(){
	var philippe;// undefined
	console.log('Bienvenue.', 'Ca va ?');
	
	// Hoisting	
	var batiment = "Immeuble 01";
	

	
	console.log('fonction freiner PRINCIPALE');
	console.log(philippe);// philippe = undefined
	philippe = "Philippe Maurice";// "Philippe Maurice"
	console.log('fonction freiner PRINCIPALE');
	console.log(philippe);;// philippe = "Philippe Maurice"





	function rouler(){
		console.log('fonction rouler');

		var voiture = "vroom vroom";
		console.log("Voiture: ", voiture);

		function bouger(){
			console.log('fonction bouger');
		}

		function freiner(){
			console.log('fonction freiner ==> SECONDAIRE');
		}

		// bouger();// Appelle et exécute la fonction bouger

		// freiner();

		var batiment = "3";
		console.log("Batiment 2: ", batiment);
		console.log("Batiment 3: ", batiment);

		
		/* Scope rouler:
			bouger, voiture, freiner
			batiment, rouler, freiner
		*/
	}

	rouler();
	// freiner();
	// Scope : batiment , rouler, freiner
}
