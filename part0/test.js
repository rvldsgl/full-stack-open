const testDiv = document.getElementById("test");
fetch("https://apis.scrimba.com/bored/api/activity")
  .then(res => res.json())
  .then(data => testDiv.innerHTML = `
      <p>${data.activity}</p>
    `)
  .catch(err => console.error(err));
