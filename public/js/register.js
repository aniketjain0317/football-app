function postRequest(url, data) {
    return fetch(url, {
      credentials: 'same-origin', // 'include', default: 'omit'
      method: 'POST', // 'GET', 'PUT', 'DELETE', etc.
      body: JSON.stringify(data), // Coordinate the body type with 'Content-Type'
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
    }).then(response => response.json())
  }

const submit = document.querySelector('#submit')
submit.addEventListener("click", async (event) => {
    event.preventDefault()
    var name = document.getElementById("TEAM 1").value;
    var num = document.getElementById("TEAM NUMBER").value;
    var GK = document.getElementById("TEAM 1 GK").value;
    var LB = document.getElementById("TEAM 1 LB").value;
    var CB1 = document.getElementById("TEAM 1 CB1").value;
    var CB2 = document.getElementById("TEAM 1 CB2").value;
    var RB = document.getElementById("TEAM 1 RB").value;
    var LM = document.getElementById("TEAM 1 LM").value;
    var CM = document.getElementById("TEAM 1 CM").value;
    var RM = document.getElementById("TEAM 1 RM").value;
    var LW = document.getElementById("TEAM 1 LW").value;
    var CF = document.getElementById("TEAM 1 CF").value;
    var RW = document.getElementById("TEAM 1 RW").value;
    num = parseInt(num)
    var team  = {name,num,GK,LB,CB1,CB2,RB,LM,CM,RM,LW,CF,RW}
    console.log(team)
    try
    {
        const data = await postRequest('/team', team)
        console.log(data)
    } catch(e) {console.log(e)}
})