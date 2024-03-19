// ESERCIZIO 1:

//nome del tavolo: “Tavolo Vip”
//lista degli invitati in ordine di posto:
//[ 'Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni', 'Fedez', 'George Clooney', 'Amal Clooney', 'Maneskin']
/*dobbiamo fare in modo che ogni ospite sia un oggetto javascript che ha come attributi:
nome del tavolo,
nome dell’ospite,
posto occupato.*/
//Generiamo e stampiamo in console la lista per i segnaposto.

//dichiariamo array iniziale invitati

const invitati = [ 'Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni', 'Fedez', 'George Clooney', 'Amal Clooney', 'Maneskin']
console.log(invitati);

//dichiariamo array segnaposto:
//prendendo l'array originale, passiamo ogni elemento e ritorniamo
//oggetto con nome tavolo, stringa elemento come nome, e indice +1 come posto assegnato

const segnaposto = invitati.map((el, i) => {
    return {
        nomeTavolo: 'Tavolo VIP',
        nomeOspite: el,
        posto: (i+1)
    }
})

console.log(segnaposto);


//ESERCIZIO 2:

//dobbiamo stampare le targhe col nome degli studenti: 
//1. creare una lista contenente il loro nome tutto in maiuscolo
//ES (Marco della Rovere => MARCO DELLA ROVERE);

/*Id   Name                  Grades
213  Marco della Rovere      78
110  Paola Cortellessa       96
250  Andrea Mantegna 	      48
145  Gaia Borromini          74
196  Luigi Grimaldello 	  68
102  Piero della Francesca   50
120  Francesca da Polenta    84*/


//dichiarare un array di oggetti con gli attributi specificati

const studenti = [
    {
        id: 213,
        name: "Marco della Rovere",
        grades: 78
    },
    {
        id: 110,
        name: "Paola Cortellessa",
        grades: 96
    },
    {
        id: 250,
        name: "Andrea Mantegna",
        grades: 48
    },
    {
        id: 145,
        name: "Gaia Borromini",
        grades: 74
    },
    {
        id: 196,
        name: "Luigi Grimaldello",
        grades: 68
    },
    {
        id: 102,
        name: "Piero della Francesca",
        grades: 50
    },
    {
        id: 120,
        name: "Francesca da Polenta",
        grades: 84
    },
];

console.log(studenti);

//dichiarare nuovo array che per ogni elemento ritorna 
//id e grades uguali ma name è maiuscolo

const targheStudenti = studenti.map((el) => {
    return {
        id: el.id,
        name: el.name.toUpperCase(),
        grades: el.grades
    }
});

console.log(targheStudenti);

//2. Dobbiamo creare una lista di tutti gli studenti che
//hanno un totale di voti superiore a 70

//dichiarare nuovo array che passa ogni elemento:

const targheVotiAlti = targheStudenti.filter((el) => {
    //SE grades di elemento è superiore a 70, ritorna true
    if(el.grades > 70) {
        return true;
    } 
    //ALTRIMENTI ritorna false
    else {
        return false;
    }
});

console.log(targheVotiAlti);

//3. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70 e id superiore a 120

//dichiarare nuovo array che passa ogni elemento:

const targheVotiAltiIdAlti = targheVotiAlti.filter((el) => {
    //SE grades è superiore a 70 e id è superiore a 120, ritorna true
    if(el.id > 120) {
        return true;
    }
    //ALTRIMENTI ritorna false
    else {
        return false;
    }
});

console.log(targheVotiAltiIdAlti);



