// GESTION DES ACTIVITES DANS LA SECTION "ACTIVITIES"

const pathUrl = "Models/activities.data.json";

async function callApi(url) {
  try {
    const response = await fetch(url);

    if (!response.ok) throw Error(response.status);
    const data = await response.json();
    createCardActiviy(data);
  } catch (error) {
    console.log(error.message);
  }
}

function createCardActiviy(data) {
  const containerActivities = document.querySelector(".container-activities");

  data.forEach((data) => {
    const activityCard = document.createElement("div");
    activityCard.classList = "activity-card";
    activityCard.innerHTML = `
    <div class="container-img-activity">
            <img src="" alt="" />
      </div>
      <div class="info-text-activity">
            <h2 class="title-activity"></h2>
            <p class="text-activity"></p>
      </div>
                      `;

    activityCard.querySelector("img").src = data.activityImgSrc;
    activityCard.querySelector(".title-activity").textContent =
      data.activityName;
    activityCard.querySelector(".text-activity").textContent =
      data.activityDescription;

    containerActivities.appendChild(activityCard);
  });
}

callApi(pathUrl);
