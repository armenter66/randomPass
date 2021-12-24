function Generator() {
    this.passwordEL = document.querySelector(".main__block__input");
    this.generateBtn = document.querySelector('.main__block__generate');
    this.copyBtn = document.querySelector('.main__block__copy');

    this.render();
}

Generator.prototype.createRandomString = function() {
        const chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const passwordLength = 15;
        let passwordString = "";

        for (let i = 0; i <= passwordLength; i++) {
            let randomNumber = chars[Math.floor(Math.random() * chars.length)];
            passwordString += randomNumber;
        }

        this.passwordEL.value = passwordString;
}

Generator.prototype.copyPassword = function() {
    this.passwordEL.select();
    this.passwordEL.setSelectionRange(0, 999);
    document.execCommand("copy");
}

Generator.prototype.render = function () {
    this.generateBtn.addEventListener('click', e=> {
      this.createRandomString();
    });

    this.copyBtn.addEventListener('click', e => {
      this.copyPassword();
    })
}

const randomPassword = new Generator();