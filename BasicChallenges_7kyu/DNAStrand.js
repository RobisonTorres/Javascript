console.log("From Code Wars")
console.log()

function DNAStrand(dna){

    // This function replaces letters of dna.
    const letters_DNA = {A: "T", G: "C", T: "A", C: "G"};
    return dna.split('')
    .map(letter => letters_DNA[letter])
    .join('');
}

console.log(DNAStrand("ATGC"))  // Outputs - TACG
