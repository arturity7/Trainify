function openDay(day) {
    window.location.href = `dia.html?dia=${day}`;
}

const params = new URLSearchParams(window.location.search);
const day = params.get('dia');

const workouts = {
    segunda: {
        title: "Segunda-feira",
        focus: "Peito & Tríceps",
        exercises: [
            {
                name: "Supino reto",
                img: "gifs/supino.gif",
                series: "4 séries",
                reps: "8–12 repetições"
            },
            {
                name: "Crucifixo",
                img: "gifs/crucifixo.gif",
                series: "3 séries",
                reps: "10–12 repetições"
            }
        ]
    }
}

const data = workouts[day];

document.getElementById("dayTitle").textContent = data.title;
document.getElementById("dayFocus").textContent = data.focus;

const list = document.getElementById("exerciseList");

list.innerHTML = ""; // limpeza de segurança

data.exercises.forEach(ex => {
    list.innerHTML += `
        <div class="exercise-card">
            <img src="${ex.img}" class="exercise-gif">

            <div class="exercise-info">
                <h3>${ex.name}</h3>
                <p class="exercise-meta">${ex.series} • ${ex.reps}</p>
            </div>
        </div>
    `;
});
