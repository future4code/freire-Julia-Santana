const pessoa ={ 
    nome: ("julia"),
 idade : 19,
 musicaPreferida:("sertanejo") }

console.log(`A ${pessoa.nome}, têm ${pessoa.idade} anos, e curte ${pessoa.musicaPreferida}`)

const outraPessoa{
    ...pessoa,
    nome:"amanda"
}

console.log(outraPessoa);
