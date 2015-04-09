var scrabble = function(input) {
    var points = {
        a: 1, e:1, i:1, o:1, u:1, l:1, n:1, r:1, s:1, t:1,
        d: 2, g:2,
        b: 3, c:3, m:3, p:3,
        f: 4, h:4, v:4, w:4, y:4
    };
    var score = 0;
    var split_input = input.toLowerCase().split('');

    split_input.forEach(function(letter) {
        score += points[letter];


    });
    return score;
}
