<script>
    import { onMount } from 'svelte';
    import { API_URL } from "@app/constants";
  
    let message = '';
    let messageClass = '';
    let formData = {
      username: '',
      fullname: '',
      bio: '',
      email: '',
      password: ''
    };
  
    async function handleSubmit(event) {
      event.preventDefault();
  
      try {
        const response = await fetch(`${API_URL}/user`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
  
        if (response.ok) {
          message = 'Registration successful!';
          messageClass = 'success';
          resetForm();
        } else {
          const error = await response.json();
          throw new Error(error.message || 'An error occurred');
        }
      } catch (error) {
        message = error.message;
        messageClass = 'error';
      }
    }
  
    function resetForm() {
      formData = {
        username: '',
        fullname: '',
        bio: '',
        email: '',
        password: ''
      };
    }
  </script>
  
  <style>
    .container {
      max-width: 500px;
      margin: auto;
      padding: 20px;
      border: 1px solid #ddd;
      border-radius: 8px;
      background-color: #f9f9f9;
    }
  
    form div {
      margin-bottom: 15px;
    }
  
    label {
      display: block;
      margin-bottom: 5px;
      font-weight: bold;
    }
  
    input {
      width: 100%;
      padding: 8px;
      border: 1px solid #ddd;
      border-radius: 4px;
    }
  
    button {
      background: #080373;
      color: #fff;
      padding: 10px 15px;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
  
    button:hover {
      background: #060258;
    }
  
    .message {
      margin-top: 15px;
      padding: 10px;
      border-radius: 4px;
    }
  
    .success {
      background: #d4edda;
      color: #155724;
    }
  
    .error {
      background: #f8d7da;
      color: #721c24;
    }
  </style>
  
  <div class="container">
    <h1>Register</h1>
    <form on:submit|preventDefault={handleSubmit}>
      <div>
        <label for="username">Username</label>
        <input id="username" type="text" bind:value={formData.username} required />
      </div>
      <div>
        <label for="fullname">Fullname</label>
        <input id="fullname" type="text" bind:value={formData.fullname} required />
      </div>
      <div>
        <label for="bio">Bio</label>
        <input id="bio" type="text" bind:value={formData.bio} required />
      </div>
      <div>
        <label for="email">Email</label>
        <input id="email" type="email" bind:value={formData.email} required />
      </div>
      <div>
        <label for="password">Password</label>
        <input id="password" type="password" bind:value={formData.password} required />
      </div>
      <button type="submit">Register</button>
    </form>
    {#if message}
      <div class={`message ${messageClass}`}>{message}</div>
    {/if}
  </div>
  