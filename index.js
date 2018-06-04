function theBeatlesPlay(musicians, instruments){
  var arraY=[];
  for(var i=0;i<musicians.length;i++){
    arraY[i] = `${musicians[i]} plays ${instruments[i]}`;
  }
  return arraY;
}

function johnLennonFacts(facts){
  const newFacts = [];
  for(var i=0;i<facts.length;i++){
    newFacts[i]=facts[i]+"!!!";
  }
  return newFacts;
}