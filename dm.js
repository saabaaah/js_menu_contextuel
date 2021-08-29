
// générer aleatoirement une couleur
function couleurAleatoire() {

	// dans les composant couleurs, une couleurs pourra avoir les chiffres de 0 à F
	let composant_couleur = '0123456789ABCDEF';
	// couleur est de forme #123456, on ajoute # et on prend aléatoirement 6 element de la table composant_couleur
	var couleur_resultat = '#'; 
		for (var i = 0; i < 6; i++) {
		couleur_resultat += composant_couleur[Math.floor(Math.random() * composant_couleur.length)];
	}
	return couleur_resultat;
}
// decplacer la personne vers developpement
function specialite_dev( id){
	let div = document.getElementById(id);
	// enlever la personne de sa position et le mettre dans dev
	div.parentNode.removeChild(div);
	document.getElementById('dev').appendChild(div);
}
// decplacer la personne vers design
function specialite_design( id){
	let div = document.getElementById(id);
	// enlever la personne de sa position et le mettre dans design
	div.parentNode.removeChild(div);
	document.getElementById('design').appendChild(div);
}
// decplacer la personne vers markeint
function specialite_mkt( id){
	let div = document.getElementById(id);
	// enlever la personne de sa position et le mettre dans mkt
	div.parentNode.removeChild(div);
	document.getElementById('mkt').appendChild(div);
}


function creer_menu(id){
	// menu contextuel 
	let menu = document.createElement('menu');
	menu.setAttribute('type', 'context');
	menu.setAttribute('id', 'menu_person_'+id);

	// choix de menu --> Sélectionnez
	let menu_selection = document.createElement('menu');
	menu_selection.setAttribute('label', "Séléctionnez");

	// choix de menu --> développement
	let menu_item_dev = document.createElement('menuitem');
	menu_item_dev.setAttribute('label', "Développement");
	menu_item_dev.onclick = function() { specialite_dev(id); };	
	menu_selection.appendChild(menu_item_dev);

	// choix de menu --> design
	let menu_item_design = document.createElement('menuitem');
	menu_item_design.setAttribute('label', "Design");
	menu_item_design.onclick = function() { specialite_design(id); };
	menu_selection.appendChild(menu_item_design);

	// choix de menu --> marketing
	let menu_item_mkt = document.createElement('menuitem');
	menu_item_mkt.setAttribute('label', "Marketing");
	menu_item_mkt.onclick = function() { specialite_mkt(id); };
	menu_selection.appendChild(menu_item_mkt);

	// organiser les element du menu //
	menu.appendChild(menu_selection);
	document.body.appendChild(menu);
}

// création des 30 personnes 
for (let i = 0; i < 30; i++) {
	console.log("creating person : "+i);
	// créer un bloc personne (div [img])
	let div = document.createElement('div');
	div.setAttribute('class', 'person'); // classe person (pour design)
	div.setAttribute('id', i); // id de la personne 
	div.setAttribute('contextmenu', 'menu_person_'+i); // ajouter menu de choix 
	// créer menu
	creer_menu(i);
	// colorer 
	div.style.backgroundColor = couleurAleatoire();

	// ajout du menu 
	if (div.addEventListener) {
		// le navigateur av-ccepte l'EventListener
		  div.addEventListener('contextmenu', function(e) {
		    console.log("You've tried to open context menu"); //here you draw your own menu
		    //e.preventDefault();
		  }, false);
		} else {
			// utiliser un attachEvent au lieu de EventListener
			div.attachEvent('oncontextmenu', function() {
			console.log("You've tried to open context menu");
			window.event.returnValue = false;
			});
		}

	// --> créer image 
	let img = document.createElement('img'); 
    img.src =  'person.png';
    // ajout image dans div 
    div.appendChild(img);
	document.getElementById('people').appendChild(div);
}

