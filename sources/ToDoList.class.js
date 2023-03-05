class ToDoList {
  #id;
  #content;
  #userId
  constructor(content, userId) {
    this.#content = content;
    this.#userId = userId
  }

  getId() {
    return this.#id;
  }

  setId(id = 0) {
    id++;

    this.#id = id;
  }

  getUserId(){
    return this.#userId
  }

  getContent() {
    return this.#content;
  }

  isValid() {
    this.setId();

    return (
      this.getId() > -1 &&
      this.isNull(this.#content) &&
      this.validStr(this.content) &&
      this.getUserId()
    );
  }

  createToDoList() {
    let list = this.loadList();
    let newList = null;

    console.log(list);

    if (this.isValid()) {
      if (!list) {
        this.setId()
        list = []
        list.push({
          id: this.getId(),
          content: this.getContent(),
          created_at: new Date(),
          user_id: this.getUserId()
        });
      } else {
        this.setId(list.length);
        console.log(this.getId());
        newList = {
          id: this.getId(),
          content: this.getContent(),
          created_at: new Date(),
          user_id: this.getUserId()
        };
        list.push(newList);
      }

      localStorage.setItem("list", JSON.stringify(list));
      return true;
    }

    return false
    
  }

  loadList() {
    let listJSON = localStorage.getItem("list");

    if (listJSON != "undefined") return JSON.parse(listJSON);
  }

  isNull(str) {
    if (str.replace(/\s+/, "").length) return true;

    return false;
  }

  validStr(str) {
    const regString = /^[a-zA-Z0-9\s,'-]*$/;

    return regString.test(str);
  }
}
