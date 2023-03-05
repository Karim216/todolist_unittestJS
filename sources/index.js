document.addEventListener("DOMContentLoaded", function () {
  let btn_register_new_user = document.querySelector(".btn-register-new-user");
  let btn_register_new_list = document.querySelector(".btn-register-new-list");

  let register_form = document.querySelector(".register-form");
  let new_list_form = document.querySelector(".new-list-form");

  let btn_add_user = document.querySelector(".btn-add-user");
  let btn_add_list = document.querySelector(".btn-add-list");

  /**
   * Register add user data
   */

  let lastname = document.getElementById("lastname")
  let firstname = document.getElementById("firstname")
  let email = document.getElementById("email")
  let day = document.getElementById("day")
  let month = document.getElementById("month")
  let year = document.getElementById("year")
  let password = document.getElementById("password")

  /**
   * Data in list champ
   */
  let user_add_list = document.getElementById("userAddList");
  let champ = document.getElementById('champ')

  // sessionStorage.removeItem('users')
  let event = new Event();
  btn_register_new_user.addEventListener("click", function () {
    event.showFormUser(
      btn_register_new_list,
      btn_register_new_user,
      register_form,
      new_list_form
    );
  });

  btn_register_new_list.addEventListener("click", function () {

    event.showFormList(
      btn_register_new_list,
      btn_register_new_user,
      register_form,
      new_list_form
    );
  });

  btn_add_list.addEventListener("click", function (e) {
    e.preventDefault();

    console.log(champ.value);

    let list1 = new ToDoList(champ.value, parseInt(user_add_list.value));

    list1.createToDoList();
  });

  btn_add_user.addEventListener("click", function (e) {
    e.preventDefault();

    let user1 = new User(
      lastname.value,
      firstname.value,
      email.value,
      `${day.value}-${month.value}-${year.value}`,
      password.value
      
    );

    user1.createUser();
  });

  // toDoList.testIsValid()
});
