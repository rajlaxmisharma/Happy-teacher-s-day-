async function findTeacher() {
    const input = document.getElementById("nameInput");
    const invitation = document.getElementById("invitation");

    const enteredName = input.value.trim().toLowerCase();

    if (enteredName === "") {
        invitation.innerHTML =
            '<p class="error">Please enter your name.</p>';
        return;
    }

    try {
        const response = await fetch("database.json");
        const teachers = await response.json();

        const teacher = teachers.find(person =>
            person.searchName === enteredName
        );

        if (teacher) {
            invitation.innerHTML = `
                <div class="invitation-card">
                    <h2>🎪 You're Invited! 🎪</h2>

                    <p>Dear</p>

                    <p class="teacher-name">
                        ${teacher.name}
                    </p>

                    <p class="details">
                        You are warmly invited to our<br>
                        <strong>Teacher's Day Carnival</strong> 🎠🎈
                        <br><br>

                        📅 <strong>5 September</strong><br>
                        ⏰ <strong>11:40 AM</strong><br>
                        📍 <strong>Ambuja Vidya Niketan, Upparwahi</strong>
                    </p>

                    <br>

                    <p>
                        🎉 Let's celebrate this special day
                        together! 🎉
                    </p>
                </div>
            `;
        } else {
            invitation.innerHTML = `
                <p class="error">
                    Sorry, this name is not on the invitation list.
                    Please check the spelling and try again.
                </p>
            `;
        }

    } catch (error) {
        invitation.innerHTML = `
            <p class="error">
                Something went wrong while loading the database.
                Please try again.
            </p>
        `;

        console.error(error);
    }
}
