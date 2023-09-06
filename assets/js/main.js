
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


for (const key in teamMembers) {
    console.log(teamMembers[key]);
    console.log(teamMembers[key].name)
    console.log(teamMembers[key].role)
    console.log(teamMembers[key].picture)
}


/* MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe*/


