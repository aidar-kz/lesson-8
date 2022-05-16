<script>
import { DateTime } from "luxon";
import validator from "validator";

export default {
  data() {
    return {
      firstname: "",
      lastname: "",
      birthday: "",
      email: "",
      isFormVisible: true,
    };
  },
  computed: {
    btnDisabled() {
      const regexp = /^[a-zа-яәіңғүұқөһ]+$/i;
      const isFirstnameValid = regexp.test(this.firstname);
      const isLastnameValid = regexp.test(this.lastname);

      const birth = DateTime.fromISO(this.birthday);
      const today = DateTime.now();
      const years = today.diff(birth, "years").years;
      const isBirthdayValid = years > 18;

      const isEmailValid = validator.isEmail(this.email);

      return !(
        isFirstnameValid &&
        isLastnameValid &&
        isBirthdayValid &&
        isEmailValid
      );
    },
  },
  methods: {
    onSubmit() {
      this.isFormVisible = false;
    },
    reset() {
      this.firstname = ''
      this.lastname = ''
      this.birthday = ''
      this.email = ''
      this.isFormVisible = true
    }
  },
};
</script>

<template>
  <div class="col col-md-4 mx-auto">
    <form @submit.prevent="onSubmit" v-if="isFormVisible">
      <div class="mb-3">
        <label for="firstname" class="form-label">Имя</label>
        <input type="text" class="form-control" v-model="firstname" />
      </div>

      <div class="mb-3">
        <label for="lastname" class="form-label">Фамилия</label>
        <input type="text" class="form-control" v-model="lastname" />
      </div>

      <div class="mb-3">
        <label for="birthday" class="form-label">Дата рождения</label>
        <input type="date" class="form-control" v-model="birthday" />
      </div>

      <div class="mb-3">
        <label for="email" class="form-label">Email</label>
        <input type="email" class="form-control" v-model="email" />
      </div>

      <div class="mb-3">
        <button type="submit" class="btn btn-primary" :disabled="btnDisabled">
          Зарегистрироваться
        </button>
      </div>
    </form>

    <div v-else class="card">
      <div class="card-body">
        <h5 class="card-title text-primary">{{ firstname }} {{ lastname }}</h5>
      </div>
      <p class="card-text">
        <ul class="list-group">
          <li class="list-group-item">Дата рождения: {{ birthday }}</li>
          <li class="list-group-item">Email: {{ email }}</li>
        </ul>
      </p>
      <button @click='reset' class="btn btn-primary">Еще раз</button>
    </div>
  </div>
</template>
