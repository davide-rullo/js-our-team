
/* MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.*/

const teamMembers = [
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        picture: './assets/img/wayne-barnett-founder-ceo.jpg'
    },

    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        picture: './assets/img/angela-caroll-chief-editor.jpg'
    },

    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        picture: './assets/img/walter-gordon-office-manager.jpg'
    },

    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        picture: './assets/img/angela-lopez-social-media-manager.jpg'
    },

    {
        name: 'Scott Estrada',
        role: 'Developer',
        picture: './assets/img/scott-estrada-developer.jpg'
    },

    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        picture: './assets/img/barbara-ramos-graphic-designer.jpg'
    }
]


/* MILESTONE 1:
Stampare su console, per ogni membro del team, 
le informazioni di nome, ruolo e la stringa della foto*/


// for (const key in teamMembers) {
//     console.log(teamMembers[key]);
//     console.log(teamMembers[key].name)
//     console.log(teamMembers[key].role)
//     console.log(teamMembers[key].picture)
// }


/* MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe*/

const rowEL = document.querySelector(".row")

for (const key in teamMembers) {

    rowEL.innerHTML += `<div class="col-12 col-md-4 mt-2 mb-2">
<div class="card">
    <div class="card-img"><img src="${teamMembers[key].picture}" alt></div>
    <div class="card-footer text-center"> <h3>${teamMembers[key].name}</h3> <p>${teamMembers[key].role}</p></div>
</div>
</div>`
}

//bonus

const formEL = document.getElementById('add-member');

formEL.addEventListener('submit', function (e) {
    e.preventDefault();
    let userName = document.getElementById("username").value;
    let userRole = document.getElementById("role").value;
    console.log(userName);
    console.log(userRole);
    rowEL.innerHTML += `<div class="col-12 col-md-4 mt-2 mb-2">
    <div class="card">
        <div class="card-img"><img src="https://picsum.photos/200/300" alt></div>
        <div class="card-footer text-center"> <h3>${userName}</h3> <p>${userRole}</p></div>
    </div>
    </div>`
})