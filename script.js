const przyciskCiekawostki = document.querySelector("#przycisk-ciekawostka");
const ciekawostka = document.querySelector("#ciekawostka");

if (przyciskCiekawostki && ciekawostka)
{
    przyciskCiekawostki.addEventListener("click", function () {
        ciekawostka.textContent = "...tylko tyle, ile potrzeba do szczęścia";
        
    });
}