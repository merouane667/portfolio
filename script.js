
let theme = localStorage.getItem('theme')

if(theme == null){
	setTheme('light')
}else{
	setTheme(theme)
}

let themeDots = document.getElementsByClassName('theme-dot')


for (var i=0; themeDots.length > i; i++){
	themeDots[i].addEventListener('click', function(){
		let mode = this.dataset.mode
		console.log('Option clicked:', mode)
		setTheme(mode)
	})
}

function setTheme(mode){
	if(mode == 'light'){
		document.getElementById('theme-style').href = 'default.css'
	}

	if(mode == 'blue'){
		document.getElementById('theme-style').href = 'blue.css'
	}

	if(mode == 'green'){
		document.getElementById('theme-style').href = 'green.css'
	}

	if(mode == 'purple'){
		document.getElementById('theme-style').href = 'purple.css'
	}

	localStorage.setItem('theme', mode)
}




//form verification


function find(query){
	return document.querySelector(query)
}

find('#submit-btn').addEventListener('click',(e)=>{
	e.preventDefault();

	let tab_elements = [find('#name'),find('#subject'),find('#email'),find('#message')]
	
	for (let i = 0; i < tab_elements.length; i++) {


		if (i === 2) { continue; }
		if (tab_elements[i].value=='' && tab_elements[i].style.border!='1px solid red' && !document.getElementById(`paragraphe ${i+1}`) ) {
			tab_elements[i].style.border='1px solid red';

			let p = document.createElement('p');
			p.textContent=`le champ ${tab_elements[i].id} est obligatoire`;
			p.style.color='red';
			p.style.fontSize='0.7rem';
			p.id=`paragraphe ${i+1}`
			find('.input-field').parentNode.insertBefore(p,tab_elements[i].nextSibling)
		
		}else if(tab_elements[i].value!='' && document.getElementById(`paragraphe ${i+1}`)  ){
			tab_elements[i].style.border='1px solid black';
			document.getElementById(`paragraphe ${i+1}`).style.display='none';
		}else if(tab_elements[i].value=='' && tab_elements[i].style.border=='1px solid black' && document.getElementById(`paragraphe ${i+1}`).style.display=='none' ){
			document.getElementById(`paragraphe ${i+1}`).style.display='block';
			tab_elements[i].style.border='1px solid red';
		}

		
		function validateEmail(email){
			var emailReg = new RegExp(/^([\w-\.]+)@((?:[\w]+\.)+)([a-zA-Z]{2,4})/i);
			var valid = emailReg.test(email);
			if(!valid) {
				return false;
			} else {
				return true;
			}
		}


	
	}

	if(tab_elements[2].value==''){
		if( document.getElementById(`paragraphe mail nv`) == null){
		tab_elements[2].style.border='1px solid red';
		let p = document.createElement('p');
		p.textContent=`le champ email est obligatoire`;	
		p.style.color='red';
		p.style.fontSize='0.7rem';
		p.id=`paragraphe mail nv`;
		console.log(p);
		find('.input-field').parentNode.insertBefore(p,tab_elements[2].nextSibling)
		}


	}else if(tab_elements[2].value!='' && validateEmail(tab_elements[2].value)==false  ){
		if( document.getElementById(`paragraphe mail nv`) == null){
				tab_elements[2].style.border='1px solid red';
				let p = document.createElement('p');
				p.textContent=`le mail n'est pas valide`;
				p.style.color='red';
				p.style.fontSize='0.7rem';
				p.id=`paragraphe mail nv`
				find('.input-field').parentNode.insertBefore(p,tab_elements[2].nextSibling)

			

		}
		

		
	}else if(validateEmail(tab_elements[2].value)==true){
		tab_elements[2].style.border='1px solid black';
		if(document.getElementById(`paragraphe mail nv`)){
			document.getElementById(`paragraphe mail nv`).remove();	
		}
		
	}



	
	//voir si on peut envoyer le formulaire
    let count = 0;
	for (let i = 0; i < tab_elements.length; i++) {
		if(tab_elements[i].style.border != '1px solid red'){
			count++
		}
		
	}
	if(count === 4){
		console.log('can send');
		alert('email sent ! ')
		localStorage.clear();

		
	}else{

		console.log('can not send');

		
		window.localStorage.setItem('name',document.getElementById('name').value)
		window.localStorage.setItem('subject',document.getElementById('subject').value)
		window.localStorage.setItem('email',document.getElementById('email').value)
		window.localStorage.setItem('message',document.getElementById('message').value)

	}


	
})




	document.getElementById('name').value = localStorage.getItem('name')
	
	document.getElementById('subject').value = localStorage.getItem('subject')
	
	document.getElementById('email').value = localStorage.getItem('email')
	
	document.getElementById('message').value = localStorage.getItem('message')
