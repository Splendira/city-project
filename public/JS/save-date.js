// SAVE DATE MENU
const containerCardEvent = document.querySelector(".container-card-event");

const url = "Models/date.data.json";

async function callModelJson(url) {
  try {
    const response = await fetch(url);

    if (!response.ok) throw Error(`Error : ${response.status}`);
    const data = await response.json();

    const filteredData = checkDateArray(data);

    createCard(filteredData);
  } catch (error) {
    const createErrorP = document.createElement("p");
    createErrorP.className = "error-message-save-date";
    createErrorP.textContent = error.message;
    saveDateContainerBox.appendChild(createErrorP);
  }
}

function createCard(data) {
  if (data.length === 0) {
    const saveDataTitle = document.querySelector(".save-date-title");
    saveDataTitle.textContent = "Aucun évènements à venir";
  } else {
    data.forEach((elementDate) => {
      const card = document.createElement("div");
      card.className = "card-event";
      card.innerHTML = `
      <div class="date"></div>
        <div class="info-event">
          <h2 class="title-event"></h2>
        </div>
    
          `;

      card.querySelector(".date").textContent = new Date(
        elementDate.date
      ).toLocaleDateString("fr-FR");
      card.querySelector(".title-event").textContent = elementDate.title;

      containerCardEvent.appendChild(card);
    });
  }
}

// GESTION DES DATES DANS LE SAVE-DATE-BOT
const currentDate = new Date().getTime();

function checkDateArray(data) {
  const filteredData = data.filter((e) => {
    const eventDate = new Date(e.date).getTime();

    return eventDate > currentDate;
  });

  return filteredData;
}

callModelJson(url);
