// ESERCIZIO 1

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
