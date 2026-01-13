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
            { name: "Supino reto", img: "img/supino.png" },
            { name: "Crucifixo", img: "img/crucifixo.png" }
        ]
    },
    terca: {
        title: "Terça-feira",
        focus: "Costas & Bíceps",
        exercises: [
            { name: "Puxada frontal", img: "img/puxada.png" }
        ]
    }
};

const data = workouts[day];

document.getElementById("dayTitle").textContent = data.title;
document.getElementById("dayFocus").textContent = data.focus;

const list = document.getElementById("exerciseList");

data.exercises.forEach(ex => {
    list.innerHTML += `
        <div class="exercise-card">
            <img src="${ex.img}">
            <div class="exercise-info">
                <h3>${ex.name}</h3>
            </div>
        </div>
    `;
});
