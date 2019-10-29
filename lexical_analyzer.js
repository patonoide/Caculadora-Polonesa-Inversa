var operacao = "2 2 + 3 /";
document.getElementById('button').onclick = function() {analyzer(operacao)};
function analyzer (operacao) {
   var vetor_operacoes = operacao.split("");
   var vetor_tokens = [];
   var length = vetor_operacoes.length;

   function token(c){
     //console.log("C: " + c);
     if(c === '0' | c === '1' | c === '2' | c === '3' | c === '4' | c === '5' | c === '6' | c === '7' | c === '8' | c === '9'){
       vetor_tokens.push("N");
     }else if(c === "+" | c === "-" | c === "*" | c === "/"){
       vetor_tokens.push("C");
     }else if(c === ' '){
       console.log("Espaço!");
     }else{
       console.log("Erro!");
     }
     vetor_operacoes.shift();
   }

   for (var i = 0; i < length; i++) {
     token(vetor_operacoes[0]);
   }
   console.log("Vetor tokens: " + vetor_tokens);
}
