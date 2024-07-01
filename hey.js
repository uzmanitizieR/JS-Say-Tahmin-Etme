let number = document.getElementById('number');
        let tahminbtn = document.getElementById('btnGuess');
        let result = document.getElementById('result');

        var falseSound = new Audio('dogru.mp3');

        let rmd = Math.floor(Math.random() * 10) + 1; // 1 ile 10 arasında rastgele bir sayı
        console.log(rmd);

        tahminbtn.addEventListener('click', () => {
            var txt = number.value;

            if (txt === "") {
                result.innerText = "Bir değer girin";
                result.style.fontSize = "25px";
                result.style.background = "red";
            } else if (txt > rmd) {
                result.innerText = "Daha küçük değer girin";
                result.style.fontSize = "25px";
                result.style.background = "yellow";
            } else if (txt < rmd) {
                result.innerText = "Daha büyük değer girin";
                result.style.fontSize = "25px";
                result.style.background = "orange";
            } else {
                result.innerText = "Doğru!";
                result.style.fontSize = "25px";
                result.style.background = "blue";
                falseSound.play(); // Doğru tahmin sesi
            }
        });