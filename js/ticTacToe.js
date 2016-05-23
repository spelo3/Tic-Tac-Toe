img1 = new Image();
img1.src = "FootballField.png";

$(window).load(function() {

  var player1 = prompt("Player 1, enter your name!").toUpperCase();
  var player2 = prompt("Player 2, enter your name!").toUpperCase();

  if (player1 !== null && player1.length !== 0) {
        $("#player1").html(player1);
  }
  else {
    $("#player1").text("PLAYER 1");
  }

  if (player2 !== null && player2.length !== 0) {
        $("#player2").html(player2);
  }
  else {
    $("#player2").text("PLAYER 2");
  }

  var myRandomNum = (Math.floor((Math.random() * 10)+1) % 2);
  var turn = myRandomNum;
    if (turn === 0) {
      turn = 'X';
      $("#frame2").css("border", "hidden");
      $("#frame1").css("border", "black solid 20px");
        alert("Player 1 starts the game!");

    }
      else {
      turn = 'O';
      $("#frame1").css("border", "hidden");
      $("#frame2").css("border", "black solid 20px");
        alert("Player 2 starts the game!");
    }


  var playGame = function(){
    if ($(this).text() === 'X') {
      alert("This box is full");
    }

    else if ($(this).text() === 'O') {
      alert("Seats' taken!");
    }

    else {
      $(this).text(turn);

      if (turn === 'X') {
        turn = 'O';
        $("#frame1").css("border", "hidden");
        $("#frame2").css("border", "black solid 20px");
      }

      else {
        turn = 'X';
        $("#frame2").css("border", "hidden");
        $("#frame1").css("border", "black solid 20px");
      }


      // Find the number of picecs on the board

      var pieceCounter = 0;
      $(".box").each(function() {
        if ($(this).text().length > 0) {
          // we have a piece, the position is not empty
          pieceCounter++;
        }
      });
    }
    // row 1 across
    if (($("#f0").text() === "X" ||
        $("#f0").text() === "O") &&
        $("#f0").text() === $("#f1").text() &&
        $("#f0").text() === $("#f2").text())
    {
          alert("Winner is " + $("#f0").text());
          $(".box").unbind('click');
    }

    // row 2 across
    else if (($("#f3").text() === "X" ||
        $("#f3").text() === "O") &&
        $("#f3").text() === $("#f4").text() &&
        $("#f3").text() === $("#f5").text())
    {
          alert("Winner is " + $("#f3").text());
          $(".box").unbind('click');
    }
    // row 3 across
    else if (($("#f6").text() === "X" ||
        $("#f6").text() === "O") &&
        $("#f6").text() === $("#f7").text() &&
        $("#f6").text() === $("#f8").text())
    {
          alert("Winner is " + $("#f6").text());
          $(".box").unbind('click');
    }
    // col 1 down
    else if (($("#f0").text() === "X" ||
        $("#f0").text() === "O") &&
        $("#f0").text() === $("#f3").text() &&
        $("#f0").text() === $("#f6").text())
    {
          alert("Winner is " + $("#f0").text());
          $(".box").unbind('click');
    }
    // col 2 down
    else if (($("#f1").text() === "X" ||
        $("#f1").text() === "O") &&
        $("#f1").text() === $("#f4").text() &&
        $("#f1").text() === $("#f7").text())
    {
          alert("Winner is " + $("#f1").text());
          $(".box").unbind('click');
    }
    // col 3 down
    else if (($("#f2").text() === "X" ||
        $("#f2").text() === "O") &&
        $("#f2").text() === $("#f5").text() &&
        $("#f2").text() === $("#f8").text())
    {
          alert("Winner is " + $("#f2").text());
          $(".box").unbind('click');
    }
    // diagonal down to the right
    else if (($("#f0").text() === "X" ||
        $("#f0").text() === "O") &&
        $("#f0").text() === $("#f4").text() &&
        $("#f0").text() === $("#f8").text())
    {
          alert("Winner is " + $("#f0").text());
          $(".box").unbind('click');

    }
    // diagonal down to the left
    else if (($("#f2").text() === "X" ||
        $("#f2").text() === "O") &&
        $("#f2").text() === $("#f4").text() &&
        $("#f2").text() === $("#f6").text())
    {
          alert("Winner is " + $("#f2").text());
          $(".box").unbind('click');
    }
    else if (pieceCounter === 9){
      alert("Tie Game!");
      $(".box").unbind('click');
    }


  } // end playGame run

  $("button").click(function(){
    $(".box").empty();
    $(".box").click(playGame);

  });

  // when I click on the box...run this function:
  $(".box").click(playGame);


}); // top-level
