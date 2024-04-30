<template>
    <div class="container">
        <div class="top-half">
            <h1>Fitt.0</h1>
        </div>
        <div class="bottom-half">
            <form @submit.prevent="login" class="form">
                <div>
                    <label for="email">Email</label>
                    <input type="text" id="email" v-model="formData.email">
                </div>
                <div>
                    <label for="password">Password</label>
                    <input type="password" id="password" v-model="formData.password">
                </div>
                <button>Login</button>
            </form>
        </div>
    </div>
</template>

<script> 
import axios from 'axios'
export default {
    name: "UserLogin",
    data() {
        return {
            formData :{
                email: '',
                password: '',
            },
        }
    },
    methods: {
        login() {
            axios.post('http://localhost:5000/login', this.formData)
            .then(response => {
                if (response.status === 201) {
                    this.$router.push('/home');
                }
            })
        },
    }
}
</script>

<style>
.container {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.top-half {
  flex: 1;
  display: flex;
  justify-content: center;
  background-color: #199c6c;
  align-items: center;
}

.top-half h1 {
  font-size: 8em; /* Adjust font size as needed */
  text-align: center; /* Center text horizontally */
  color: #fff; /* Text color */
}

.bottom-half {
  flex: 1;
  display: flex;
  justify-content: center; /* Center horizontally */
  align-items: center; /* Center vertically */
}

.form {
  width: 300px; /* Adjust width as needed */
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* Optional: Add shadow for better appearance */
}

.form div {
  margin-bottom: 10px;
}

.form label {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  display: block;
  margin-bottom: 5px;
}

.form input {
  width: 90%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 3px;
}

.form button {
  width: 100%;
  padding: 10px;
  background-color: #199c6c;
  color: #fff;
  border: none;
  border-radius: 3px;
  cursor: pointer;
}

.form button:hover {
  background-color: #0f6f47;
}
</style>