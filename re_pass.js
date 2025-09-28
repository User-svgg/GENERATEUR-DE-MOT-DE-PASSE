let mdp = ""
const length = document.getElementById("inp_len")
const msg = document.getElementById("result")


function gen_chr () {
const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*";

const randomIndex = Math.floor(Math.random() * chars.length);
const randomChar = chars[randomIndex];

return randomChar

}
function generate() {
    const length_val = parseInt(length.value)

 if (isNaN(length_val) || length_val < 2 || length_val > 20) {
        alert("Entre une valeur entre 2 et 20 !");
        return;
    }

    mdp = ""
    let i = 0


    while (i < length_val){ 
        let chr = gen_chr()
        mdp += chr
        i += 1
        
    } 
   msg.textContent = 'Votre Mdp est : "'+mdp+'"'

}
function copier() {
    if (mdp === "") {
        alert("Génère d'abord un mot de passe poto 😅")
        return
    }
    navigator.clipboard.writeText(mdp).then(() => {
        alert("Mot de passe copié ! ✅")
    })
}