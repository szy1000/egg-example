function login() {
  fetch('http://127.0.0.1:7001/api/v1/user/login', {
    // method: 'POST', // *GET, POST, PUT, DELETE, etc.
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      name: 'shenzhiyong',
    }),
  }).then(res => {
    if (res.ok) {
      window.location.reload();
    }
  });
}

function logout() {
  fetch('http://127.0.0.1:7001/api/v1/user/logout', {
    // method: 'POST', // *GET, POST, PUT, DELETE, etc.
    method: 'POST',
  }).then(res => {
    if (res.ok) {
      window.location.reload();
    }
  });
}
