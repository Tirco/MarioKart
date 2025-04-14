let players = JSON.parse(localStorage.getItem("players") || "[]");
let scores = JSON.parse(localStorage.getItem("scores") || "{}");

let tracks = [
{ name: "Mario Kart Stadium", cup: "Mushroom Cup", system: "Wii U", image: "1-1.jpg"},
{ name: "Water Park", cup: "Mushroom Cup", system: "Wii U", image: "1-2.jpg" },
{ name: "Sweet Sweet Canyon", cup: "Mushroom Cup", system: "Wii U" , image: "1-3.jpg"},
{ name: "Thwomp Ruins", cup: "Mushroom Cup", system: "Wii U" , image: "1-4.jpg"},

{ name: "Mario Circuit", cup: "Flower Cup", system: "Wii U" , image: "2-1.jpg"},
{ name: "Toad Harbor", cup: "Flower Cup", system: "Wii U" , image: "2-2.jpg"},
{ name: "Twisted Mansion", cup: "Flower Cup", system: "Wii U" , image: "2-3.jpg"},
{ name: "Shy Guy Falls", cup: "Flower Cup", system: "Wii U" , image: "2-4.jpg"},

{ name: "Sunshine Airport", cup: "Star Cup", system: "Wii U" , image: "3-1.jpg"},
{ name: "Dolphin Shoals", cup: "Star Cup", system: "Wii U" , image: "3-2.jpg"},
{ name: "Electrodrome", cup: "Star Cup", system: "Wii U" , image: "3-3.jpg"},
{ name: "Mount Wario", cup: "Star Cup", system: "Wii U" , image: "3-4.jpg"},

{ name: "Cloudtop Cruise", cup: "Special Cup", system: "Wii U" , image: "4-1.jpg"},
{ name: "Bone-Dry Dunes", cup: "Special Cup", system: "Wii U" , image: "4-2.jpg"},
{ name: "Bowser's Castle", cup: "Special Cup", system: "Wii U" , image: "4-3.jpg"},
{ name: "Rainbow Road", cup: "Special Cup", system: "Wii U" , image: "4-4.jpg"},

{ name: "Moo Moo Meadows", cup: "Shell Cup", system: "Wii" , image: "5-1.jpg"},
{ name: "Mario Circuit", cup: "Shell Cup", system: "GBA" , image: "5-2.jpg"},
{ name: "Cheep Cheep Beach", cup: "Shell Cup", system: "DS" , image: "5-3.jpg"},
{ name: "Toad's Turnpike", cup: "Shell Cup", system: "N64" , image: "5-4.jpg"},

{ name: "Dry Dry Desert", cup: "Banana Cup", system: "GCN" , image: "6-1.jpg"},
{ name: "Donut Plains 3", cup: "Banana Cup", system: "SNES", image: "6-2.jpg" },
{ name: "Royal Raceway", cup: "Banana Cup", system: "N64", image: "6-3.jpg" },
{ name: "DK Jungle", cup: "Banana Cup", system: "3DS", image: "6-4.jpg" },

{ name: "Wario Stadium", cup: "Leaf Cup", system: "DS", image: "7-1.jpg" },
{ name: "Sherbet Land", cup: "Leaf Cup", system: "GCN", image: "7-2.jpg"  },
{ name: "Music Park", cup: "Leaf Cup", system: "3DS", image: "7-3.jpg"  },
{ name: "Yoshi Valley", cup: "Leaf Cup", system: "N64", image: "7-4.jpg"  },

{ name: "Tick-Tock Clock", cup: "Lightning Cup", system: "DS", image: "8-1.jpg"  },
{ name: "Piranha Plant Slide", cup: "Lightning Cup", system: "3DS", image: "8-2.jpg"   },
{ name: "Grumble Volcano", cup: "Lightning Cup", system: "Wii", image: "8-3.jpg"   },
{ name: "Rainbow Road", cup: "Lightning Cup", system: "N64", image: "8-4.jpg"   },

{ name: "Yoshi Circuit", cup: "Egg Cup", system: "GCN", image: "9-1.jpg"},
{ name: "Excitebike Arena", cup: "Egg Cup", system: "Original", image: "9-2.jpg" },
{ name: "Dragon Driftway", cup: "Egg Cup", system: "Original", image: "9-3.jpg" },
{ name: "Mute City", cup: "Egg Cup", system: "F-Zero", image: "9-4.jpg" },

{ name: "Wario's Gold Mine", cup: "Triforce Cup", system: "Wii", image: "10-1.jpg" },
{ name: "Rainbow Road", cup: "Triforce Cup", system: "SNES", image: "10-2.jpg"  },
{ name: "Ice Ice Outpost", cup: "Triforce Cup", system: "Original", image: "10-3.jpg"  },
{ name: "Hyrule Circuit", cup: "Triforce Cup", system: "Zelda", image: "10-4.jpg"  },

{ name: "Baby Park", cup: "Crossing Cup", system: "GCN", image: "11-1.jpg"  },
{ name: "Cheese Land", cup: "Crossing Cup", system: "GBA", image: "11-2.jpg"   },
{ name: "Wild Woods", cup: "Crossing Cup", system: "Original", image: "11-3.jpg"   },
{ name: "Animal Crossing", cup: "Crossing Cup", system: "Animal Crossing", image: "11-4.jpg"   },

{ name: "Neo Bowser City", cup: "Bell Cup", system: "3DS", image: "12-1.jpg"},
{ name: "Ribbon Road", cup: "Bell Cup", system: "GBA", image: "12-2.jpg" },
{ name: "Super Bell Subway", cup: "Bell Cup", system: "Original", image: "12-3.jpg" },
{ name: "Big Blue", cup: "Bell Cup", system: "F-Zero", image: "12-4.jpg" },

{ name: "Paris Promenade", cup: "Golden Dash Cup", system: "Tour", image: "13-1.jpg" },
{ name: "Toad Circuit", cup: "Golden Dash Cup", system: "3DS", image: "13-2.jpg" },
{ name: "Choco Mountain", cup: "Golden Dash Cup", system: "N64", image: "13-3.jpg" },
{ name: "Coconut Mall", cup: "Golden Dash Cup", system: "Wii", image: "13-4.jpg" },

{ name: "Tokyo Blur", cup: "Lucky Cat Cup", system: "Tour", image: "14-1.jpg" },
{ name: "Shroom Ridge", cup: "Lucky Cat Cup", system: "DS", image: "14-2.jpg" },
{ name: "Sky Garden", cup: "Lucky Cat Cup", system: "GBA", image: "14-3.jpg" },
{ name: "Ninja Hideaway", cup: "Lucky Cat Cup", system: "Tour", image: "14-4.jpg" },

{ name: "New York Minute", cup: "Turnip Cup", system: "Tour", image: "15-1.jpg" },
{ name: "Mario Circuit 3", cup: "Turnip Cup", system: "SNES", image: "15-2.jpg" },
{ name: "Kalimari Desert", cup: "Turnip Cup", system: "N64", image: "15-3.jpg" },
{ name: "Waluigi Pinball", cup: "Turnip Cup", system: "DS", image: "15-4.jpg" },

{ name: "Sydney Sprint", cup: "Propeller Cup", system: "Tour", image: "16-1.jpg" },
{ name: "Snow Land", cup: "Propeller Cup", system: "GBA", image: "16-2.jpg" },
{ name: "Mushroom Gorge", cup: "Propeller Cup", system: "Wii", image: "16-3.jpg" },
{ name: "Sky-High Sundae", cup: "Propeller Cup", system: "Original", image: "16-4.jpg" },

{ name: "London Loop", cup: "Rock Cup", system: "Tour", image: "17-1.jpg" },
{ name: "Boo Lake", cup: "Rock Cup", system: "GBA", image: "17-2.jpg" },
{ name: "Rock Rock Mountain", cup: "Rock Cup", system: "3DS", image: "17-3.jpg" },
{ name: "Maple Treeway", cup: "Rock Cup", system: "Wii", image: "17-4.jpg" },

{ name: "Berlin Byways", cup: "Moon Cup", system: "Tour", image: "18-1.jpg" },
{ name: "Peach Gardens", cup: "Moon Cup", system: "DS", image: "18-2.jpg" },
{ name: "Merry Mountain", cup: "Moon Cup", system: "Tour", image: "18-3.jpg" },
{ name: "Rainbow Road", cup: "Moon Cup", system: "3DS", image: "18-4.jpg" },

{ name: "Amsterdam Drift", cup: "Fruit Cup", system: "Tour", image: "19-1.jpg" },
{ name: "Riverside Park", cup: "Fruit Cup", system: "GBA", image: "19-2.jpg" },
{ name: "DK Summit", cup: "Fruit Cup", system: "Wii", image: "19-3.jpg" },
{ name: "Yoshis Island", cup: "Fruit Cup", system: "Original", image: "19-4.jpg" },

{ name: "Bangkok Rush", cup: "Boomerang Cup", system: "Tour", image: "20-1.jpg" },
{ name: "Mario Circuit", cup: "Boomerang Cup", system: "DS", image: "20-2.jpg" },
{ name: "Waluigi Stadium", cup: "Boomerang Cup", system: "GCN", image: "20-3.jpg" },
{ name: "Singapore Speedway", cup: "Boomerang Cup", system: "Tour", image: "20-4.jpg" },

{ name: "Athens Dash", cup: "Feather Cup", system: "Tour", image: "21-1.jpg" },
{ name: "Daisy Cruiser", cup: "Feather Cup", system: "GCN", image: "21-2.jpg" },
{ name: "Moonview Highway", cup: "Feather Cup", system: "Wii", image: "21-3.jpg" },
{ name: "Squeaky Clean Sprint", cup: "Feather Cup", system: "Original", image: "21-4.jpg" },

{ name: "Los Angeles Laps", cup: "Cherry Cup", system: "Tour", image: "22-1.jpg" },
{ name: "Sunset Wilds", cup: "Cherry Cup", system: "GBA", image: "22-2.jpg" },
{ name: "Koopa Cape", cup: "Cherry Cup", system: "Wii", image: "22-3.jpg" },
{ name: "Vancouver Velocity", cup: "Cherry Cup", system: "Tour", image: "22-4.jpg" },

{ name: "Rome Avanti", cup: "Acorn Cup", system: "Tour", image: "23-1.jpg" },
{ name: "DK Mountain", cup: "Acorn Cup", system: "GCN", image: "23-2.jpg" },
{ name: "Daisy Circuit", cup: "Acorn Cup", system: "Wii", image: "23-3.jpg" },
{ name: "Piranha Plant Cove", cup: "Acorn Cup", system: "Original", image: "23-4.jpg" },

{ name: "Madrid Drive", cup: "Spiny Cup", system: "Tour", image: "24-1.jpg" },
{ name: "Rosalina's Ice World", cup: "Spiny Cup", system: "3DS", image: "24-2.jpg" },
{ name: "Bowser Castle 3", cup: "Spiny Cup", system: "SNES", image: "24-3.jpg" },
{ name: "Rainbow Road", cup: "Spiny Cup", system: "Wii", image: "24-4.jpg" }
];

let disabledTracks = new Set(JSON.parse(localStorage.getItem("disabledTracks") || "[]"));

function saveState() {
  localStorage.setItem("players", JSON.stringify(players));
  localStorage.setItem("scores", JSON.stringify(scores));
  localStorage.setItem("disabledTracks", JSON.stringify(Array.from(disabledTracks)));
}

function addPlayer() {
  const name = document.getElementById("playerName").value.trim();
  if (name.length < 3) {
    alert("The name must consist of at least 3 characters.");
    return;
  }
  if (name && !players.includes(name)) {
    players.push(name);
    scores[name] = { total: 0, rounds: 0 };
    updatePlayerList();
    updateLeaderboard();
    saveState();
    document.getElementById("playerName").value = "";
  }
};

let playerIcons = JSON.parse(localStorage.getItem("playerIcons") || "{}");

function getCharacterImage(num) {
  num = Math.max(1, Math.min(80, num));
  return `images/characters/${num}.png`;
}

function updatePlayerList() {
  const list = document.getElementById("playerList");

  players.forEach(name => {
    if (!playerIcons[name]) {
      const randomIndex = Math.floor(Math.random() * 80) + 1;
      playerIcons[name] = randomIndex;
    }
  });
  localStorage.setItem("playerIcons", JSON.stringify(playerIcons));
  list.innerHTML = `<strong>Players:</strong><br><ul style="list-style: none; padding: 0;">` + 
    players.map(name => `
      <li class="player-item" onclick="confirmRemovePlayer('${name}')">
      <img src="${getCharacterImage(playerIcons[name])}" width="50" height="50" style="margin-right: 4px; border-radius: 4px; object-fit: cover; image-rendering: pixelated; clip-path: inset(1px);">
      ${name}</li>
    `).join("") + `</ul>`;
}

function confirmRemovePlayer(name) {
  if (confirm(`Are you sure you want to remove ${name} from the game?`)) {
    removePlayer(name);
  }
}

function removePlayer(name) {
  players = players.filter(p => p !== name);
  delete scores[name];
  updatePlayerList();
  updateLeaderboard();
  saveState();
}

function resetTournament() {
  if (confirm("Are you sure you want to delete everything?")) {
    players = [];
    scores = {};
    disabledTracks = new Set();
    localStorage.clear();
    updatePlayerList();
    updateLeaderboard();
    renderTrackList();
    document.getElementById("groups").innerHTML = "";
    document.getElementById("scoreInput").innerHTML = "";
  }
}

function shuffle(arr) {
  return [...arr].sort(() => Math.random() - 0.5);
}

// Trekke-metodevalg
let drawMode = localStorage.getItem("drawMode") || "singular";

function setDrawMode(mode) {
  drawMode = mode;
  localStorage.setItem("drawMode", mode);
}

function getRandomTrack() {
  const available = tracks.filter(track => {
    const trackId = `${track.name}::${track.cup}`;
    return !disabledTracks.has(trackId);
  });

  if (available.length === 0) {
    return {
      name: "No course available",
      cup: "None",
      system: "-",
      image: "characters/80.png"
    };
  }

  if (drawMode === "cup") {
    const chosen = available[Math.floor(Math.random() * available.length)];
    return {
      name: chosen.cup + " - Full Cup",
      cup: chosen.cup,
      system: "Misc.",
      image: `${chosen.cup.toLowerCase().replace(/ /g, '-')}.png`
    };
  } else if (drawMode === "4maps") {
    const shuffled = shuffle(available).slice(0, 4);
    return {
      name: "Multiple Tracks",
      cup: "Various Cups",
      system: "Multiple",
      image: "characters/80.png",
      multiple: shuffled
    };
  } else {
    return available[Math.floor(Math.random() * available.length)];
  }
}


function getCupImage(name) {
  if(name == name) {
    return "images/acorn-cup.png"
  }
   else {
    return"images/characters/80.png"
   }
}

function generateGroups() {
  const consoles = parseInt(document.getElementById("consoleCount").value);
  const groupCount = Math.max(1, consoles);
  const totalPlayers = players.length;
  const playersPerGroup = 4;
  const minPlayersPerGroup = 2;
  const neededPlayers = groupCount * minPlayersPerGroup;

  if (totalPlayers < neededPlayers) {
    alert(`You need at least ${neededPlayers} players for ${groupCount} consoles.`);
    return;
  }

  const available = [...players].sort((a, b) => {
    const roundsDiff = (scores[a]?.rounds || 0) - (scores[b]?.rounds || 0);
    return roundsDiff !== 0 ? roundsDiff : Math.random() - 0.5;
  });

  const groups = [];
  const taken = new Set();

  for (let g = 0; g < groupCount; g++) {
    const remainingPlayers = available.filter(p => !taken.has(p));
    if (remainingPlayers.length < minPlayersPerGroup) break;

    const group = [];
    for (let i = 0; i < playersPerGroup && remainingPlayers.length > 0; i++) {
      const next = remainingPlayers.shift();
      if (next) {
        group.push(next);
        taken.add(next);
      }
    }

    if (group.length >= minPlayersPerGroup) {
      groups.push(group);
    }
  }

  const tracksChosen = Array.from({ length: groups.length }, () => getRandomTrack());

  const groupHTML = groups.map((group, idx) => {
    const track = tracksChosen[idx];

    const scoreInputs = group.map((name, i) => `
      <div class="player-token  p${i + 1}" style="display: flex; flex-direction: column; align-items: flex-start; gap: 2px; margin-bottom: 8px;">
        <div style="display: flex; align-items: center; gap: 5px;">
          <img src="${getCharacterImage(playerIcons[name])}" width="20" height="20" style="border-radius: 4px; object-fit: cover;">
          Player ${i + 1}: ${name}
        </div>
        <input type="number" min="0" id="inline-score-${idx}-${name}" placeholder="Score for ${name}" style="width: 150px;" />
      </div>`).join("");

    let trackDisplay = "";
    if (drawMode === "4maps" && track.multiple) {
      trackDisplay = `
        <div class="multi-track-grid">
          ${track.multiple.map(t => `
            <div class="group-track-card">
              <div style="position: relative;">
                <img src="images/${t.cup.toLowerCase().replace(/ /g, '-').replace(/[^a-z0-9\-]/g, '')}.png" alt="${t.cup}" class="mini-cup-icon" />
                <img class="track-image" src="images/${t.image}" alt="${t.name}" />
              </div>
              <div class="track-name">(${t.cup}) [${t.system}] - ${t.name} </div>
            </div>`).join("")}
        </div>`;
    } else if(drawMode === "cup"){
      trackDisplay = `
        <strong>Tracks:</strong> ${track.name}<br/>
        <img class="cup-image" src="images/${track.image}" alt="${track.name}" />`;
    } else {
      trackDisplay = `
        <strong>Course:</strong> ${track.system} - ${track.name}<br/>
        <img class="track-image" src="images/${track.image}" alt="${track.name}" />`;
    }

    const cupImage = (drawMode !== "4maps") 
      ? `<img src="images/${track.cup.toLowerCase().replace(/ /g, '-').replace(/[^a-z0-9\-]/g, '')}.png" alt="${track.cup}" class="group-cup-icon">`
      : "";

    return `
      <div class="group">
        <h3>Group ${idx + 1}</h3>
        ${cupImage}
        ${scoreInputs}
        ${trackDisplay}
        <button onclick="submitGroupScores(${idx}, ${JSON.stringify(group).replace(/"/g, '&quot;')})">Save Group</button>
      </div>`;
  }).join("");

  document.getElementById("groups").innerHTML = `<div class="group-container">${groupHTML}</div>`;
}

function redrawGroup(groupIndex) {
  const playersPerGroup = 4;
  const minPlayersPerGroup = 2;

  const allGroupEls = document.querySelectorAll(".group");
  const currentPlayers = new Set();
  allGroupEls.forEach((el, idx) => {
    if (idx !== groupIndex && !el.classList.contains("submitted")) {
      const inputs = el.querySelectorAll("input[id^='inline-score-']");
      inputs.forEach(input => {
        const name = input.id.split(`inline-score-${idx}-`)[1];
        if (name) currentPlayers.add(name);
      });
    }
  });

  const groupEl = allGroupEls[groupIndex];
  const oldInputs = groupEl.querySelectorAll("input[id^='inline-score-']");
  oldInputs.forEach(input => {
    const name = input.id.split(`inline-score-${groupIndex}-`)[1];
    currentPlayers.delete(name);
  });

  const available = [...players].sort((a, b) => {
    const roundsDiff = (scores[a]?.rounds || 0) - (scores[b]?.rounds || 0);
    return roundsDiff !== 0 ? roundsDiff : Math.random() - 0.5;
  }).filter(p => !currentPlayers.has(p));

  const newGroup = [];
  for (let i = 0; i < playersPerGroup && available.length > 0; i++) {
    const next = available.shift();
    if (next) newGroup.push(next);
  }

  if (newGroup.length < minPlayersPerGroup) {
    alert("Not enough available players to draw a new group.");
    return;
  }

  const newTrack = getRandomTrack();
  const scoreInputs = newGroup.map((name, i) => `
    <div class="player-token p${i + 1}" style="display: flex; flex-direction: column; align-items: flex-start; gap: 2px; margin-bottom: 8px;">
      <div style="display: flex; align-items: center; gap: 5px;">
        <img src="${getCharacterImage(playerIcons[name])}" width="20" height="20" style="border-radius: 4px; object-fit: cover;">
        Player ${i + 1}: ${name}
      </div>
      <input type="number" min="0" id="inline-score-${groupIndex}-${name}" placeholder="Score for ${name}" style="width: 80px;" />
    </div>`).join("");

  let trackDisplay = "";
  if (drawMode === "4maps" && newTrack.multiple) {
    trackDisplay = `
      <div class="multi-track-grid">
        ${newTrack.multiple.map(t => `
          <div class="group-track-card">
            <div style="position: relative;">
              <img src="images/${t.cup.toLowerCase().replace(/ /g, '-').replace(/[^a-z0-9\-]/g, '')}.png" alt="${t.cup}" class="mini-cup-icon" />
              <img class="track-image" src="images/${t.image}" alt="${t.name}" />
            </div>
            <div class="track-name">(${t.cup}) [${t.system}] - ${t.name}</div>
          </div>`).join("")}
      </div>`;
  } else if(drawMode === "cup"){
    trackDisplay = `
      <strong>Tracks:</strong> ${newTrack.name}<br/>
      <img class="cup-image" src="images/${newTrack.image}" alt="${newTrack.name}" />`;
  } else {
    trackDisplay = `
      <strong>Course:</strong> ${newTrack.system} - ${newTrack.name}<br/>
      <img class="track-image" src="images/${newTrack.image}" alt="${newTrack.name}" />`;
  }

  const cupImage = (drawMode !== "4maps") 
    ? `<img src="images/${newTrack.cup.toLowerCase().replace(/ /g, '-').replace(/[^a-z0-9\-]/g, '')}.png" alt="${newTrack.cup}" class="group-cup-icon">`
    : "";

  groupEl.classList.remove("submitted");
  groupEl.innerHTML = `
    <h3>Group ${groupIndex + 1}</h3>
    ${cupImage}
    ${scoreInputs}
    ${trackDisplay}
    <button onclick="submitGroupScores(${groupIndex}, ${JSON.stringify(newGroup).replace(/"/g, '&quot;')})">Save Group</button>
  `;
}


function submitGroupScores(groupIndex, group) {
  const groupEl = document.querySelectorAll(".group")[groupIndex];
  let anyScoreAdded = false;

  group.forEach(player => {
    const input = document.getElementById(`inline-score-${groupIndex}-${player}`);
    const score = parseInt(input.value);

    if (!isNaN(score)) {
      if (!scores[player]) {
        scores[player] = { total: 0, rounds: 0, history: [] };
      }
      if (!Array.isArray(scores[player].history)) {
        scores[player].history = [];
      }

      scores[player].total += score;
      scores[player].rounds += 1;
      scores[player].history.push(score);
      anyScoreAdded = true;
    }
  });

  if (anyScoreAdded) {
    saveState();
    updateLeaderboard();

    groupEl.classList.add("submitted");
    const submitBtn = groupEl.querySelector("button");
    submitBtn.textContent = "Draw New Group";
    submitBtn.onclick = () => redrawGroup(groupIndex);
  }
}

function updateLeaderboard() {
  const board = document.getElementById("leaderboard");
  const sorted = Object.entries(scores).sort((a, b) => b[1].total - a[1].total);

  const maxRounds = Math.max(...sorted.map(([_, data]) => data.history?.length || 0));

  let html = `<h2>Leaderboard</h2><table><tr><th>Player</th>`;
  for (let i = 1; i <= maxRounds; i++) {
    html += `<th>R${i}</th>`;
  }
  html += `<th>Total</th></tr>`;

  html += sorted.map(([name, data]) => {
    const rounds = data.history || [];
    let row = `<tr><td style="display: flex; align-items: center; gap: 5px;">
      <img src="${getCharacterImage(playerIcons[name])}" width="20" height="20" style="border-radius: 4px; object-fit: cover; image-rendering: pixelated; clip-path: inset(1px);">
      ${name}</td>`;

    for (let i = 0; i < maxRounds; i++) {
      const score = rounds[i] !== undefined ? rounds[i] : "";
      row += `<td><input type="number" class="editable-score" data-player="${name}" data-round="${i}" value="${score}" /></td>`;
    }

    row += `<td>${data.total}</td></tr>`;
    return row;
  }).join("");

  html += `</table>`;
  board.innerHTML = html;

  document.querySelectorAll(".editable-score").forEach(input => {
    input.addEventListener("change", () => {
      const name = input.dataset.player;
      const round = parseInt(input.dataset.round);
      const newScore = parseInt(input.value);
      if (!isNaN(newScore) && scores[name]) {
        const oldScore = scores[name].history[round] || 0;
        scores[name].history[round] = newScore;
        scores[name].total += newScore - oldScore;
        saveState();
        updateLeaderboard();
      }
    });
  });
}

function renderTrackList() {
  const header = document.getElementById("trackHeader");
  const container = document.getElementById("trackList");

  // Lagre åpne/lukkede cups før vi tømmer containeren
  const previousState = {};
  container.querySelectorAll("details").forEach(detail => {
    const title = detail.querySelector("summary span span")?.textContent?.split(" (")[0];
    if (title) previousState[title] = detail.open;
  });

  const grouped = {};
  tracks.forEach(track => {
    if (!grouped[track.cup]) grouped[track.cup] = [];
    grouped[track.cup].push(track);
  });

  const selectAll = document.createElement("button");
  selectAll.textContent = "Select All";
  selectAll.onclick = () => {
    tracks.forEach(t => disabledTracks.delete(`${t.name}::${t.cup}`));
    saveState();
    renderTrackList();
  };

  const deselectAll = document.createElement("button");
  deselectAll.textContent = "Remove All";
  deselectAll.onclick = () => {
    tracks.forEach(t => disabledTracks.add(`${t.name}::${t.cup}`));
    saveState();
    renderTrackList();
  };

  const totalTracks = tracks.length;
  const activeTracks = tracks.filter(t => !disabledTracks.has(`${t.name}::${t.cup}`)).length;
  header.textContent = `Available Courses (${activeTracks}/${totalTracks})`;

  container.innerHTML = "";
  container.appendChild(selectAll);
  container.appendChild(deselectAll);

  Object.entries(grouped).forEach(([cup, cupTracks]) => {
    const details = document.createElement("details");
    details.open = previousState[cup] !== false;

    const activeCount = cupTracks.filter(t => !disabledTracks.has(`${t.name}::${t.cup}`)).length;

    const summary = document.createElement("summary");
    summary.innerHTML = `
      <span class="cup-label">
        <img src="images/${cup.toLowerCase().replace(/ /g, '-').replace(/[^a-z0-9\\-]/g, '')}.png" alt="${cup}" class="cup-icon">
        <span>${cup} (${activeCount}/${cupTracks.length})</span>
      </span>
    `;
    summary.className = "cupHeader";

    const buttonContainer = document.createElement("div");
    buttonContainer.className = "cup-buttons";

    const addAllBtn = document.createElement("button");
    addAllBtn.textContent = "Add All";
    addAllBtn.onclick = () => {
      cupTracks.forEach(t => disabledTracks.delete(`${t.name}::${t.cup}`));
      saveState();
      renderTrackList();
    };

    const removeAllBtn = document.createElement("button");
    removeAllBtn.textContent = "Remove All";
    removeAllBtn.onclick = () => {
      cupTracks.forEach(t => disabledTracks.add(`${t.name}::${t.cup}`));
      saveState();
      renderTrackList();
    };

    buttonContainer.appendChild(addAllBtn);
    buttonContainer.appendChild(removeAllBtn);
    summary.appendChild(buttonContainer);
    details.appendChild(summary);

    const groupContainer = document.createElement("div");
    groupContainer.className = "group-container";

    cupTracks.forEach(track => {
      const trackId = `${track.name}::${track.cup}`;
      const active = !disabledTracks.has(trackId);

      const label = document.createElement("label");
      label.className = `track-card ${active ? 'active' : 'inactive'}`;
      label.style.backgroundImage = `url('images/${track.image}')`;

      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.checked = active;
      checkbox.onchange = () => toggleTrack(trackId);
      label.appendChild(checkbox);

      const text = document.createElement("div");
      text.innerHTML = `${track.name}<br><small>${track.system}</small>`;
      text.className = "track-card-text";
      label.appendChild(text);

      label.onclick = (e) => {
        e.preventDefault();
        if (disabledTracks.has(trackId)) {
          disabledTracks.delete(trackId);
        } else {
          disabledTracks.add(trackId);
        }
        saveState();
        renderTrackList();
      };

      groupContainer.appendChild(label);
    });

    details.appendChild(groupContainer);
    container.appendChild(details);
  });
}

function renderDrawModeSelector() {
  const container = document.getElementById("drawModeSelector");
  container.innerHTML = `
    <label for="drawSelect">Draw Method:</label>
    <select id="drawSelect">
      <option value="singular">Singular Map</option>
      <option value="cup">Cup</option>
      <option value="4maps">4 Maps</option>
    </select>
  `;

  container.querySelector("select").value = drawMode;
  container.querySelector("select").onchange = (e) => {
    setDrawMode(e.target.value);
  };
}

renderDrawModeSelector();


function toggleTrack(track) {
  if (disabledTracks.has(track)) {
    disabledTracks.delete(track);
  } else {
    disabledTracks.add(track);
  }
  saveState();
}

// Init
updatePlayerList();
updateLeaderboard();
renderTrackList();