var score = 0;
var varBtn = document.getElementById('var-btn');
var letBtn = document.getElementById('let-btn');
var result = document.getElementById('result');

varBtn.addEventListener('click', function() {
  for (var i = 0; i < 5; i++) {
    setTimeout(function() {
      score++;
      document.getElementById('score').innerHTML = 'Score: ' + score;
    }, 1000);
  }
  result.innerHTML = 'Var creates a function-scoped variable, so the value of i is retained after the loop ends.';
});

letBtn.addEventListener('click', function() {
  for (let i = 0; i < 5; i++) {
    setTimeout(function() {
      score++;
      document.getElementById('score').innerHTML = 'Score: ' + score;
    }, 1000);
  }
  result.innerHTML = 'Let creates a block-scoped variable, so the value of i is not retained after the loop ends.';
});
