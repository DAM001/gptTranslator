function createHistoryBlock(from, to, language) {
    const historyDiv = document.createElement('div');
    historyDiv.className = 'history';

    const h3 = document.createElement('h3');
    h3.textContent = getDate() + ' - ' + language;

    const containerDiv = document.createElement('div');
    containerDiv.className = 'container';

    const p1 = document.createElement('p');
    p1.textContent = from;

    const p2 = document.createElement('p');
    p2.className = 'line';
    p2.textContent = '-';

    const p3 = document.createElement('p');
    p3.textContent = to;

    historyDiv.appendChild(h3);
    historyDiv.appendChild(containerDiv);

    containerDiv.appendChild(p1);
    containerDiv.appendChild(p2);
    containerDiv.appendChild(p3);

    document.getElementById("history").appendChild(historyDiv);
}

function getDate() {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Month is 0-indexed; add 1
    const day = String(currentDate.getDate()).padStart(2, '0');
    const hours = String(currentDate.getHours()).padStart(2, '0');
    const minutes = String(currentDate.getMinutes()).padStart(2, '0');

    return `${year}. ${month}. ${day}. ${hours}:${minutes}`;
}