class User {
  #id;
  #lastname;
  #firstname;
  #email;
  #age;
  #password;

  constructor(lastname, firstname, email, age, password) {
    this.#age = age;
    this.#lastname = lastname;
    this.#firstname = firstname;
    this.#email = email;
    this.#password = password;
  }

  getId() {
    return this.#id;
  }

  setId(id = 0) {
    id++;

    this.#id = id;
  }

  getEmail() {
    return this.#email;
  }

  setEmail(email) {
    this.#email = email;
  }

  getAge() {
    return this.#age;
  }

  setAge(age) {
    this.#age = age;
  }

  getFirstname() {
    return this.#firstname;
  }

  getLastname() {
    return this.#lastname;
  }

  getPassword() {
    return this.#password;
  }

  isValid() {
    this.setId();
    console.log();

    return (
      this.getId() > -1 &&
      this.isNull(this.#age+'') &&
      this.validAge(this.#age) &&
      this.isNull(this.#firstname) &&
      this.validStr(this.firstname) &&
      this.isNull(this.#lastname) &&
      this.validStr(this.#lastname) &&
      this.isNull(this.#email) &&
      this.validEmail(this.#email) &&
      this.isNull(this.#password) &&
      this.#password.length > 7 &&
      this.#password.length < 41
    );
  }

  createUser() {
    console.log(this.isValid())
    let users = this.loadUsers();
    let newUser = null;

    console.log(users);

    if (this.isValid()) {
      
      if (!users) {
        this.setId()
        users = []
        users.push({
          id: this.getId(),
          firsname: this.getFirstname(),
          lastname: this.getLastname(),
          email: this.getEmail(),
          age: this.getAge(),
          pwd: this.getPassword()
        });
      } else {
        this.setId(users.length)
        console.log(this.getId())
        newUser = {
          id: this.getId(),
          firsname: this.getFirstname(),
          lastname: this.getLastname(),
          email: this.getEmail(),
          age: this.getAge(),
          pwd: this.getPassword()
        }
        users.push(newUser);
      }

      localStorage.setItem("users", JSON.stringify(users));

      return true;
    }

    return false;
  }

  loadUsers() {
    let userJSON = localStorage.getItem("users");

    if (userJSON != "undefined") return JSON.parse(userJSON);
  }

  isNull(str) {
    if (str.replace(/\s+/, "").length) return true;

    return false;
  }

  validAge(naissance) {
    // Définir la date de naissance
    let dateDeNaissance = new Date(naissance);

    // Obtenir la date actuelle
    let dateActuelle = new Date();

    // Calculer la différence entre les deux dates en millisecondes
    let differenceEnMillisecondes = dateActuelle - dateDeNaissance;

    // Convertir la différence en millisecondes en années
    let age = Math.floor(differenceEnMillisecondes / 31536000000);

    this.setAge(age);

    return age > 12;
  }

  validStr(str) {
    const regString = /^[a-zA-Z0-9\s,'-]*$/;

    return regString.test(str);
  }

  validEmail(email) {
    const regEmail = /\S+@\S+\.\S+/;

    return regEmail.test(email);
  }
}

module.exports = User;