img1 = new Image();
img1.src = "FootballField.png";

$(window).load(function() {
    // Ask for Player names
    var player1 = prompt("Player 1, enter your name!").toUpperCase();
    var player2 = prompt("Player 2, enter your name!").toUpperCase();

    // Insert Player 1 name to game board
    if (player1 !== null && player1.length !== 0) {
        $("#player1").html(player1);
    }
    else {
        $("#player1").text("PLAYER 1");
    }

    // Insert Player 2 name to game board
    if (player2 !== null && player2.length !== 0) {
        $("#player2").html(player2);
    }
    else {
        $("#player2").text("PLAYER 2");
    }

    // Get random numbere, assign to 'turn' variable (1 or 0)
    var myRandomNum = (Math.floor((Math.random() * 10)+1) % 2);
    var turn = myRandomNum;

    // If random number is 0, O goes first
    if (turn === 0) {
        turn = 'O';
        $("#frame1").css("border", "black solid 20px");
        $("#frame2").css("border", "hidden");
        alert("Player 1 starts the game!");
    }
    else { // If random number is 1, X goes first
        turn = 'X';
        $("#frame1").css("border", "hidden");
        $("#frame2").css("border", "black solid 20px");
        alert("Player 2 starts the game!");
    }

    // Function to play Tic-Tac-Toe
    var playGame = function() {
        // Box already taken by X
        if ($(this).text() === 'X') {
            alert("This box is already full");
        }
        // Box already taken by O
        else if ($(this).text() === 'O') {
            alert("Seat's taken by O!");
        }
        // Allow move if box hasn't been chosen yet
        else {
            $(this).text(turn);
            if (turn === 'X') {
                turn = 'O';
                $("#frame1").css("border", "hidden");
                $("#frame2").css("border", "black solid 20px");
            }
            else {
                turn = 'X';
                $("#frame1").css("border", "black solid 20px");
                $("#frame2").css("border", "hidden");
            }
            // Find  total number of moves taken
            var pieceCounter = 0;
            $(".box").each(function() {
                if ($(this).text().length > 0) {
                    pieceCounter++;
                }
            });
        }

        // Check for a winner
        // Row 1 across
        if (($("#f0").text() === "X" || $("#f0").text() === "O")
        && $("#f0").text() === $("#f1").text()
        && $("#f0").text() === $("#f2").text()) {
            alert("Winner is " + $("#f0").text());
            $(".box").unbind('click');
        }

        // Row 2 across
        else if (($("#f3").text() === "X" || $("#f3").text() === "O")
        && $("#f3").text() === $("#f4").text()
        && $("#f3").text() === $("#f5").text()) {
            alert("Winner is " + $("#f3").text());
            $(".box").unbind('click');
        }

        // Row 3 across
        else if (($("#f6").text() === "X" || $("#f6").text() === "O")
        && $("#f6").text() === $("#f7").text()
        && $("#f6").text() === $("#f8").text()) {
            alert("Winner is " + $("#f6").text());
            $(".box").unbind('click');
        }

        // Col 1 down
        else if (($("#f0").text() === "X" || $("#f0").text() === "O")
        && $("#f0").text() === $("#f3").text()
        && $("#f0").text() === $("#f6").text()) {
            alert("Winner is " + $("#f0").text());
            $(".box").unbind('click');
        }

        // Col 2 down
        else if (($("#f1").text() === "X" || $("#f1").text() === "O")
        && $("#f1").text() === $("#f4").text()
        && $("#f1").text() === $("#f7").text()) {
            alert("Winner is " + $("#f1").text());
            $(".box").unbind('click');
        }

        // Col 3 down
        else if (($("#f2").text() === "X" || $("#f2").text() === "O")
        && $("#f2").text() === $("#f5").text()
        && $("#f2").text() === $("#f8").text()) {
            alert("Winner is " + $("#f2").text());
            $(".box").unbind('click');
        }

        // Diagonal down right
        else if (($("#f0").text() === "X" || $("#f0").text() === "O")
        && $("#f0").text() === $("#f4").text()
        && $("#f0").text() === $("#f8").text()) {
            alert("Winner is " + $("#f0").text());
            $(".box").unbind('click');
        }

        // Diagonal down left
        else if (($("#f2").text() === "X" || $("#f2").text() === "O")
        && $("#f2").text() === $("#f4").text()
        && $("#f2").text() === $("#f6").text()) {
            alert("Winner is " + $("#f2").text());
            $(".box").unbind('click');
        }

        // Tie Game
        else if (pieceCounter === 9) {
            alert("Tie Game!");
            $(".box").unbind('click');
        }

    } // End function(playGame)

    // Reset game
    $("button").click(function() {
        $(".box").empty();
        $(".box").click(playGame);
    });

    // Run function(playGame) when box is clicked
    $(".box").click(playGame);

}); // End window load function
