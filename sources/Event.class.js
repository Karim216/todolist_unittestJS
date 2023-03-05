class Event {
  constructor() {}

  showFormUser(btn_list, btn_user, register_form, new_list_form) {
    btn_list.classList.remove("active");
    new_list_form.classList.add("none");

    btn_user.classList.add("active");
    register_form.classList.remove("none");

    return true;
  }

  showFormList(btn_list, btn_user, register_form, new_list_form) {
    btn_user.classList.remove("active");
    register_form.classList.add("none");

    btn_list.classList.add("active");
    new_list_form.classList.remove("none");

    return true;
  }
}
