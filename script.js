let count = 1;
let gameOver = false;

const winningCombinations = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
];

function checkWinner() {
    for (let combo of winningCombinations) {
        const [a, b, c] = combo;
        const cellA = document.getElementById(`cell${a}`).innerHTML;
        const cellB = document.getElementById(`cell${b}`).innerHTML;
        const cellC = document.getElementById(`cell${c}`).innerHTML;

        if (cellA && cellA === cellB && cellA === cellC) {
            setTimeout(5000);
            alert(`${cellA} wins!`);
            gameOver = true;
            return;
        }
    }

    if (count > 9 && !gameOver) {
        alert("It's a draw!");
    }
}

function resetGame() {
    for (let i = 1; i <= 9; i++) {
        document.getElementById(`cell${i}`).innerHTML = "";
    }
    count = 1;
    gameOver = false;
}

for (let i = 1; i <= 9; i++) {
    let btn = document.getElementById(`cell${i}`);
    btn.addEventListener("click", function () {
        if (!gameOver && btn.innerHTML === "") {
            btn.innerHTML = count % 2 !== 0 ? "X" : "O";
            count++;
            checkWinner();
        }
    });
}

document.getElementById("reset").addEventListener("click", resetGame);