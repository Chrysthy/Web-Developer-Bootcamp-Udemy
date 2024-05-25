//É uma função aninhada ou interna e tem acesso às mesmas coisas que a função pai ou avô iu quantos níveis mais acima


function bankRobbery() {

    const heros = ['Spiderman', 'Wolverine', 'Black Panther', 'Batwoman']

    function cryForHelp() {

        for (let hero of heros) {

            console.log(`Please, help us, ${hero.toUpperCase()}`);

        }

    }

    cryForHelp()
}