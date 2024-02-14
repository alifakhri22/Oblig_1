document.addEventListener('DOMContentLoaded', function () {
    const ticketForm = document.getElementById('ticketForm');
    const ticketList = document.getElementById('ticketList');
    const ticketCategories = document.getElementById('ticketCategories');
    const deleteAllBtn = document.getElementById('deleteAll');

    const tickets = [];

    ticketForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const film = document.getElementById('film').value;
        const quantity = document.getElementById('quantity').value;
        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const phone = document.getElementById('phone').value;
        const email = document.getElementById('email').value;

        if (film && quantity && firstName && lastName && phone && email) {
            const ticket = {
                film: film,
                quantity: quantity,
                firstName: firstName,
                lastName: lastName,
                phone: phone,
                email: email
            };

            tickets.push(ticket);
            displayTickets();
            ticketForm.reset();

            if (tickets.length === 1) {
                ticketCategories.style.display = 'block';
            }
        } else {
            alert('Vennligst fyll ut alle feltene.');
        }
    });

    deleteAllBtn.addEventListener('click', function () {
        tickets.length = 0;
        displayTickets();
        ticketCategories.style.display = 'none';
    });

    function displayTickets() {
        ticketList.innerHTML = '';
        tickets.forEach(function (ticket) {
            const li = document.createElement('li');
            li.textContent = `Film: ${ticket.film}, Antall: ${ticket.quantity}, Navn: ${ticket.firstName} ${ticket.lastName}, Telefon: ${ticket.phone}, E-post: ${ticket.email}`;
            ticketList.appendChild(li);
        });
    }
});
