function theBeatlesPlay(musicians, instruments){
  var arraY=[];
  for(var i=0;i<musicians.length;i++){
    arraY[i] = `${musicians[i]} plays the ${instruments[i]}`;
  }
  return arraY
}