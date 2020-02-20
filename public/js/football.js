const getTeam = async (num) =>
{
    const res = await fetch(`/team?num=${num}`)
    const data = await res.json()
    return data
}

const fn = async () =>
{
    try
    {
        const team1 = await getTeam(1)
        const team2 = await getTeam(2)

        document.querySelector("#TEAM 1 GK").innerHTML = team1.GK;
        document.querySelector("#TEAM 1 LB").innerHTML = team1.LB;
        document.querySelector("#TEAM 1 CB1").innerHTML = team1.CB1;
        document.querySelector("#TEAM 1 CB2").innerHTML = team1.CB2;
        document.querySelector("#TEAM 1 RB").innerHTML = team1.RB;
        document.querySelector("#TEAM 1 LM").innerHTML = team1.LM;
        document.querySelector("#TEAM 1 CM").innerHTML = team1.CM;
        document.querySelector("#TEAM 1 RM").innerHTML = team1.RM;
        document.querySelector("#TEAM 1 LW").innerHTML = team1.LW;
        document.querySelector("#TEAM 1 CF").innerHTML = team1.CF;
        document.querySelector("#TEAM 1 RW").innerHTML = team1.RW;

        document.querySelector("#TEAM 2 GK").innerHTML = team2.GK;
        document.querySelector("#TEAM 2 LB").innerHTML = team2.LB;
        document.querySelector("#TEAM 2 CB1").innerHTML = team2.CB1;
        document.querySelector("#TEAM 2 CB2").innerHTML = team2.CB2;
        document.querySelector("#TEAM 2 RB").innerHTML = team2.RB;
        document.querySelector("#TEAM 2 LM").innerHTML = team2.LM;
        document.querySelector("#TEAM 2 CM").innerHTML = team2.CM;
        document.querySelector("#TEAM 2 RM").innerHTML = team2.RM;
        document.querySelector("#TEAM 2 LW").innerHTML = team2.LW;
        document.querySelector("#TEAM 2 CF").innerHTML = team2.CF;
        document.querySelector("#TEAM 2 RW").innerHTML = team2.RW;
    } catch (e) {console.log(e)}

    
}
fn()