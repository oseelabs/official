<script>
    import { onMount } from 'svelte';
    import { API_URL } from "@app/constants";
  
    let title = 'Registered Users';
    let users = [];
    let message = '';
  
    // Function to fetch users and update the data
    async function fetchUsers() {
      try {
        const response = await fetch(`${API_URL}/users`);
        if (!response.ok) {
          throw new Error('Failed to fetch users.');
        }
        const result = await response.json();
        users = result.users || [];
        message = result.message || '';
      } catch (error) {
        console.error(error);
        message = 'Unable to load users. Please try again later.';
      }
    }
  
    // Fetch users on component mount
    onMount(fetchUsers);
  </script>
  
  <!-- <style>
    .sub {
      margin-bottom: 20px;
    }
  
    .error-message {
      color: red;
      margin-top: 10px;
    }
  
    table {
      width: 100%;
      border-collapse: collapse;
    }
  
    th, td {
      padding: 8px;
      border: 1px solid #ddd;
      text-align: left;
    }
  
    th {
      background-color: #f2f2f2;
    }
  
    button {
      padding: 8px 16px;
      background-color: #080373;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
  
    button:hover {
      background-color: #060258;
    }
  </style> -->
  
  <div class="container">
    <h1>{title}</h1>
  
    <div class="sub">
      <a href="/admin">Back to Admin</a>
      {#if message}
        <p class="error-message">{message}</p>
      {/if}
      <button on:click={fetchUsers}>Load Users</button>
    </div>
  
    <table>
      <thead>
        <tr>
          <th align="left">#</th>
          <th align="left">Username</th>
          <th align="left">Full Name</th>
          <th align="left" style="width: 35%;">Bio</th>
          <th align="left">Email</th>
        </tr>
      </thead>
      <tbody>
        {#if users.length > 0}
          {#each users as user, i}
            <tr>
              <td align="left">{i + 1}</td>
              <td align="left"><b>{user.username}</b></td>
              <td align="left">{user.fullname}</td>
              <td align="left">{user.profile?.bio || 'N/A'}</td>
              <td align="left">{user.email}</td>
            </tr>
          {/each}
        {:else}
          <tr>
            <td colspan="5" align="center">No users found.</td>
          </tr>
        {/if}
      </tbody>
    </table>
  </div>
  