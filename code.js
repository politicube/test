setScreen("welcomeScreen");
var num = 0;
var ans = [];
var depth = 10;
var pfps = [];
var xValue = 0;
var xPosition = 0;
var xCoord = 0;
var yValue = 0;
var yPosition = 0;
var yCoord = 0;
var zValue = 0;
var zPosition = 0;
var zCoord = 0;
var distance;
var distances = [];
var maxDistance;
var maxIndex;
var sortedDistances = [];
var usernames = ["teen.politics.official","charlemagnes_corner","rightwingism","leftistbaby","progressive.politico","feldsteinphilosophy","southern_leftist","tread.not","teen.politics.official","social_liberals","max_stirner_fanpage","makeliberalismclassicalagain","deafpatriot","angryamericans","libertylover2","refoundingfather","anarchist.punk","broken.bones.and.civilizations","kiwimutualist","anpacball","individualist.libertarian","virginiaforbiden","right_wing_imperial","anarchistunity","texansocialdem","liberallibertarian","visionary.arabia","social.dem.official","palmetto_state_bluedog","hoppean_knight","lippie.liberty","massachusite","lib_confederalism","soc.leftist","2038_movement","american.edgelord.v2","american_leoism","soc.leftist","anarcho.garfieldism","anarchy.is.liberty","ancap_or_death","ancap_society","the.eco.socialist","biblicalamericanpolitics","campus_conservative_","cristero.mexico","cuban.progressive","demsocialistcolony","identityeurope","libertarian.unity","libertiansocialist.sf","major_tomrade","marxist_luxemburgist","mexicanlibertarian","mister.american","neoreactionism","not_a_domestic_terrorist","refoundingfather","sonofgotaland","the.geopolitical.forecaster","anarquistamexicano","toronto_socialist","trotskium","wokerevolution","realisticleftist","leftistcommentary","mass_liberty","american_nationalist.party","new.libertarianism","missourian_ancaps","art.n.politics","the.driptator","soviet.chronicles_","politicrab","leftistperspective","cyberjeetism","therightstats"];
var sortedUsernames = [];
var pfpXCoord = 0;
var pfpYCoord = 0;
var pfpZCoord = 0;
var newX;
var newY;
var viability = 1;
var xCoords = [1.5,0.5,1.1,-10,-2.88,2.5,-3.88,8.88,-4,-2.88,-9,4.17,6.4,7.5,8.6,4.42,-10,-9,-4.13,-0.2,-0.25,-0.38,-0.13,4,-4.58,1.88,8.13,-3,3,10,-3.75,-4.63,-2.9,-10,-1.58,2.25,1.17,2.5,-4.33,7.8,9,5.17,-9.67,0.67,4.83,-2.17,-3.17,-6.17,3,-4.5,-9,-9.75,-9.83,6.5,5.33,10,5.42,7.33,-0.08,-2.92,-10,-9,-10,-2.92,-5.75,-9,5,6,5.2,6.75,-9,1.5,-7,-4.83,-8.75,-0.67,-0.83];
//             0   1   2    3   4    5    6    7     8  9    10 11   12  13  14  15   16 17 18     19   20    21    22  23 24    25   26   27 28 29 30  31     32   33
var yCoords = [-8.38,7.6,7.0,0,-0.63,1.13,-1.38,-2.50,-3.2,-5.13,-7.75,0.3,-7.2,-8.13,-8.13,-1,-10,-8.38,-8.6,-9.1,-10,2,4.13,-9,-2,-7.75,7.88,-3,-1.25,-10,-8.7,3.5,-7,4,-3.5,-9.8,1.8,2.8,-8.4,-10,-10,-7.7,-7.9,-2.8,-3.4,5.3,-1.6,-1.1,5.4,-8,-8.2,-8.2,-1,-9.3,-7.25,6.2,-6.2,-1,5.2,-3.5,-10,-4,-1.88,-1.5,-3.6,-5.88,-7,-0.88,-10,-10,-2,-6,4,-3.2,-6.25,7.3,5.9];
//             0     1   2   3  4    5     6     7     8    9     10    11    13   14   14  15 16  17   18    19   20 21 22  23  24 25   26    27  28   29 30   31  32 33
var zCoords = [-9,9.5,9,-10,-8,0.25,-3.63,4.5,-8,-8,-10,7.1,-4.63,-6,4,-3.7,-10,-10,-9,-9,0,-5.25,8.5,0,-8,-7,7.63,-5,-0.38,-1.2,-9,0.13,-7.1,-9.63,-5.8,-0.1,3.6,4,-6.2,0,0,-1.9,-9.3,2.4,3.2,5.9,-3.9,-7.6,5.7,-3,-9,-9.2,-9.5,3.1,1.9,7.4,-3.8,5,7.6,-0.6,-5,-9.6,-2.5,-7.4,-4.5,-10,4,4,0,-6.5,-10,-2,0,-6.6,-9,1.8,9];
//              0 1   2  3   4  5    6    7    8  9  10 11   12   13 14 15  16  17  18 1920 21   22  23 24 25 26  27  28   29 30 31    32   33    34  35   36  37    38   3940 41   42  43  44  45  46    47  48  49  50 51  52   53  54  55  56  57   58 59  60  61 62   63    64   65  66  676869 70  71 72
var canXCoords = [1.8,-0.6,-4,2,2,1.3,0.9,-2.2,-0.1,0.8,-1.1,3.4];
var canYCoords = [1.1,-0.5,-2.6,3.5,2.2,2.7,-0.3,0.7,1.5,1,3.7];
var canZCoords = [-1.5,-4,-8,0.25,-3,-3,-7.6,-2,-3,-6.9,7];
var canNames = ["Amy Klobuchar","Tulsi Gabbard","Mike Gravel","Joe Biden","Cory Brooker","Kamala Harris","Bernie Sanders","Andrew Yang","Pete Butigieg","Elizabeth Warren","Donald Trump"];                            
var sortedCanNames = [];
var canDistances = [];
var sortedCanDistances = [];
var candidateXCoord = 0;
var candidateYCoord = 0;
var candidateZCoord = 0;
var canDistance;
var maxCanDistance;
var maxCanIndex;
var count = -1;
function calculatePfpDistances(){
  for (var i = 0; i < 75; i++) {
    pfpXCoord =xCoords[i];
    pfpYCoord =yCoords[i];
    pfpZCoord =zCoords[i];
    distance =Math.pow((Math.pow((xCoord-pfpXCoord),2)+Math.pow((yCoord-pfpYCoord),2) + Math.pow((zCoord-zCoords[i]),2)),0.5);
    appendItem(distances,distance);
  }
  for (var k = 0; k < 75; k++) {
    console.log(distances);
    maxDistance = distances[0];
    for (var j = 1; j < distances.length; j++) {
      if(maxDistance < distances[j]){
        maxDistance = distances[j];
        maxIndex = j;
      }
    }
    if(maxDistance == distances[0]){
      maxIndex = 0;
    }
    console.log("maxIndex: " + maxIndex);
    insertItem(sortedDistances,0,maxDistance);
    insertItem(sortedUsernames,0,usernames[maxIndex]);
    removeItem(distances,maxIndex);
    removeItem(usernames,maxIndex);
  }
}
function displayPfpMatches(){
  for (var l = 0; l < 10; l++) {
   setText("percent" + l,Math.round(100-(2.88675134595*sortedDistances[l])) + "%");
   setText("username" + l,sortedUsernames[l]);
   setProperty("percent" + l,"text-color",rgb(sortedDistances[l]*10,(1/sortedDistances[l])*255,0));
   /* showElement("lpfp"+l);
   setPosition("lpfp"+l,160,50+(l*40)); */
   console.log(sortedDistances);
   console.log(sortedUsernames);
  }
}
function calculateCandidateDistances(){
  for (var i = 0; i < 11; i++) {
    candidateXCoord = canXCoords[i];
    candidateYCoord = canYCoords[i];
    candidateZCoord = canZCoords[i];
    canDistance = Math.pow((Math.pow((xCoord-candidateXCoord),2)+Math.pow((yCoord-candidateYCoord),2) + Math.pow((zCoord-candidateZCoord),2)),0.5);
    appendItem(canDistances,canDistance);
  }
  for (var k = 0; k < 11; k++) {
    maxCanDistance = canDistances[0];
    for (var j = 1; j < canDistances.length; j++) {
      if(maxCanDistance < canDistances[j]){
        maxCanDistance = canDistances[j];
        maxCanIndex = j;
      }
    }
    if(maxCanDistance == canDistances[0]){
      maxCanIndex = 0;
    }
    console.log("maxCanIndex: " + maxCanIndex);
    insertItem(sortedCanDistances,0,maxCanDistance);
    insertItem(sortedCanNames,0,canNames[maxCanIndex]);
    removeItem(canDistances,maxCanIndex);
    removeItem(canNames,maxCanIndex);
  }
}
function displayCandidateMatches(){
  for (var l = 0; l < 10; l++) {
   setText("percent" + l,Math.round(100-(2.88675134595*sortedCanDistances[l])) + "%");
   setText("username" + l,sortedCanNames[l]);
   setProperty("percent" + l,"text-color",rgb(sortedCanDistances[l]*10,(1/sortedCanDistances[l])*255,0));
   /* showElement("lpfp"+l);
   setPosition("lpfp"+l,160,50+(l*40)); */
  }
}
function endTest(){
  calculatePlacement("x");
  calculatePlacement("y");
  calculatePlacement("z");
  plotResults();
}
function calculatePlacement(variable){
  if (variable === "x"){
  xValue = (ans[0] + ans[1] + ans[2]+ ans[3]+ ans[4]+ ans[5]+ ans[6]+ ans[7]+ ans[8]+ ans[9]+ ans[10] + ans[11] - ans[12] - ans[13] - ans[14] - ans[15] - ans[16] - ans[17] - ans[18] - ans[19] - ans[20] - ans[21] - ans[22] - ans[23])/12;
  xPosition = xValue*16+155;
  xCoord = (xValue).toFixed(2);
  }
  if (variable === "y"){
  yValue = (ans[24] + ans[25] + ans[26] + ans[27] + ans[28] + ans[29] + ans[30] + ans[31] + ans[32] + ans[33] - ans[34] - ans[35] - ans[36] - ans[37] - ans[38] - ans[39] - ans[40] - ans[41] - ans[42] - ans[43])/10;
  yPosition = yValue*16+195;
  yCoord = (-(yValue)).toFixed(2);
  }
  if (variable === "z"){
  zValue = (ans[44] + ans[45] + ans[46] + ans[47] + ans[48] + ans[49] + ans[50] + ans[51] + ans[52] + ans[53] - ans[54] - ans[55] - ans[56] - ans[57] - ans[58] - ans[59] - ans[60] - ans[61] - ans[62] - ans[63])/10;
  zPosition = zValue*16+160;
  zCoord = (zValue).toFixed(2); 
  }
}
function plotResults(){
  write("Your results: (" + xCoord + "," + yCoord + "," + zCoord+")");
  setPosition("dot",xPosition,yPosition);
  setPosition("bar",zPosition,364);
}
function nextQuestion(){
  num = num + 1;
  var num1 = num - 1;
  var previousSlider = "slider" + num1;
  var previousQuest = "text_area" + num1;
  var currentSlider = "slider" + num;
  var currentQuest = "text_area" + num;
  if(num > 1){
  hideElement(previousSlider);
  hideElement(previousQuest);
  }
  console.log(currentSlider);
  showElement(currentSlider);
  console.log(currentQuest);
  showElement(currentQuest);
}
function previousQuestion(){
  if(num > 1){
  num = num - 1;
  var num2 = num + 1;
  var previousSlider = "slider" + num2;
  var previousQuest = "text_area" + num2;
  var currentSlider = "slider" + num;
  var currentQuest = "text_area" + num;
    hideElement(previousSlider);
    hideElement(previousQuest);
    console.log(currentSlider);
    showElement(currentSlider);
    console.log(currentQuest);
    showElement(currentQuest);
  }
}
function hidePfps(){
  for (var z = 0; z < zCoords.length; z++) {
    hideElement("pfp"+z);
  }
}
function showPfps(){
  for (var q = 0; q < zCoords.length; q++) {
    showElement("pfp"+q);
  }
}
function calculatePfpPlacement(){
  for(var o = 0; o < 75; o++){
    newX = (xCoords[o]*16)+148;
    if(newX <= 0){
      newX = newX + (0 - newX);
    }
    if(newX >= 295){
      newX = newX - (newX - 295);
    }
    newY = (-(yCoords[o]*16))+188;
    if(newY <= 40){
      newY = newY + (40 - newY);
    }
    if(newY >= 335){
      newY = newY - (newY - 335);
    }
    setPosition("pfp" + o,newX,newY);
  } 
}
function createList(){
  for(var d = 75; d > -1; d--){
    insertItem(pfps,0,"pfp"+d);
  }
}
function sort(){
  for(var f = 0; f < 76; f++){
    if(pfps.indexOf("pfp" + f) == -1){
      showElement("pfp" + f);
    } else {
      hideElement("pfp" + f);
    }
    // setStyle("pfp" + f,"z-index: " + (pfps.indexOf("pfp" + f)+10));
  }
}
function order(){
  for(var h = 0; h < 76; h++){
    setStyle("pfp" + h,"z-index: " + (pfps.indexOf("pfp" + h)+10));
  }
}
function checkViability(){
  for (var k = 1; k < 13; k++) {
    var x = getNumber("xInput" + k);
    if((x.length > 4)||(x > 10)||(x < -10)){
      setProperty("xInput" + k,"text-color","red");
      viability = 0;
    }
  }
  for (var j = 1; j < 13; j++) {
    var y = getNumber("yInput" + j);
    if((y.length > 4)||(y > 10)||(y < -10)){
      setProperty("yInput" + j,"text-color","red");
      viability = 0;
    }
  }
  for (var q = 1; q < 13; q++) {
    var z = getNumber("zInput" + q);
    if((z.length > 4)||(z > 10)||(z < -10)){
      setProperty("zInput" + q,"text-color","red");
      viability = 0;
    }
  }
  for (var e = 1; e < 13; e++) {
    var n = getText("nameInput" + e);
    if(n.length > 19){
      setProperty("zInput" + q,"text-color","red");
      viability = 0;
    }
  }
}
function preview(){
    showElement("button13");
    for (var r = 1; r < 13; r++) {
      setFillColor(rgb(127.5-(getNumber("zInput" + r)*6.375),127.5-(getNumber("zInput" + r)*6.375),63.75-(getNumber("zInput" + r)*6.375)));
      circle((getNumber("xInput" + r)*16)+160,(getNumber("yInput" + r)*-16)+225,5);
      var name = getText("nameInput" + r);
      if(((getNumber("xInput" + r)*16)+138) < 0){
      setPosition("name"+r,0,(getNumber("yInput" + r)*-16)+203);
      } else if(((getNumber("xInput" + r)*16)+138) + (name.length*7.5) > 320){
      setPosition("name"+r,((getNumber("xInput" + r)*16)+138)-(((getNumber("xInput" + r)*16)+138) + (name.length*7.5) - 320),(getNumber("yInput" + r)*-16)+203);
      } else {
      setPosition("name"+r,(getNumber("xInput" + r)*16)+138,(getNumber("yInput" + r)*-16)+203);
      }
      setText("name"+r,getText("nameInput"+r));
    }
}
createList();
order();
onEvent("button1","click",function(){
  setScreen("gameScreen");
  setStyle("numline", "z-index: -10");
  showElement("button6");
  hide();
  penUp();
  moveTo(0,-3);
  penDown();
  penWidth(15);
  penColor("white");
  turnRight();
  nextQuestion();

});
onEvent("slider1","change",function(){
  moveForward(5);
  insertItem(ans,0,getNumber("slider1"));
  nextQuestion();

  
});
onEvent("slider2","change",function(){
  moveForward(5);
  insertItem(ans,1,getNumber("slider2"));
  nextQuestion();
  
});
onEvent("slider3","change",function(){
  moveForward(5);
  insertItem(ans,2,getNumber("slider3"));
  nextQuestion();
  
});
onEvent("slider4","change",function(){
  moveForward(5);
  insertItem(ans,3,getNumber("slider4"));
  nextQuestion();
  });
onEvent("slider5","change",function(){
  moveForward(5);
  insertItem(ans,4,getNumber("slider5"));
  nextQuestion();
  });
onEvent("slider6","change",function(){
  moveForward(5);
  insertItem(ans,5,getNumber("slider6"));
  nextQuestion();
  });
onEvent("slider7","change",function(){
  moveForward(5);
  insertItem(ans,6,getNumber("slider7"));
  nextQuestion();
  });
onEvent("slider8","change",function(){
  moveForward(5);
  insertItem(ans,7,getNumber("slider8"));
  nextQuestion();
  });
onEvent("slider9","change",function(){
  moveForward(5);
  insertItem(ans,8,getNumber("slider9"));
  nextQuestion();
  
});
onEvent("slider10","change",function(){
  moveForward(5);
  insertItem(ans,9,getNumber("slider10"));
  nextQuestion();
  
});
onEvent("slider11","change",function(){
  moveForward(5);
  insertItem(ans,10,getNumber("slider11"));
  nextQuestion();
  
});
onEvent("slider12","change",function(){
  moveForward(5);
  insertItem(ans,11,getNumber("slider12"));
  nextQuestion();
  
});
onEvent("slider13","change",function(){
  moveForward(5);
  insertItem(ans,12,getNumber("slider13"));
  nextQuestion();
  
});
onEvent("slider14","change",function(){
  moveForward(5);
  insertItem(ans,13,getNumber("slider14"));
  nextQuestion();
  
});
onEvent("slider15","change",function(){
  moveForward(5);
  insertItem(ans,14,getNumber("slider15"));
  nextQuestion();
  });
onEvent("slider16","change",function(){
  moveForward(5);
  insertItem(ans,15,getNumber("slider16"));
  nextQuestion();
  
});
onEvent("slider17","change",function(){
  moveForward(5);
  insertItem(ans,16,getNumber("slider17"));
  nextQuestion();
  
});
onEvent("slider18","change",function(){
  moveForward(5);
  insertItem(ans,17,getNumber("slider18"));
  nextQuestion();
  
});
onEvent("slider19","change",function(){
  moveForward(5);
  insertItem(ans,18,getNumber("slider19"));
  nextQuestion();
  
});
onEvent("slider20","change",function(){
  moveForward(5);
  insertItem(ans,19,getNumber("slider20"));
  nextQuestion();
  
});
onEvent("slider21","change",function(){
  moveForward(5);
  insertItem(ans,20,getNumber("slider21"));
  nextQuestion();
  
});
onEvent("slider22","change",function(){
  moveForward(5);
  insertItem(ans,21,getNumber("slider22"));
  nextQuestion();
  
});
onEvent("slider23","change",function(){
  moveForward(5);
  insertItem(ans,22,getNumber("slider23"));
  nextQuestion();
  
});
onEvent("slider24","change",function(){
  moveForward(5);
  insertItem(ans,23,getNumber("slider24"));
  nextQuestion();
  
});
onEvent("slider25","change",function(){
  moveForward(5);
  insertItem(ans,24,getNumber("slider25"));
  nextQuestion();
  
});
onEvent("slider26","change",function(){
  moveForward(5);
  insertItem(ans,25,getNumber("slider26"));
  nextQuestion();
  
});
onEvent("slider27","change",function(){
  moveForward(5);
  insertItem(ans,26,getNumber("slider27"));
  nextQuestion();
  
});
onEvent("slider28","change",function(){
  moveForward(5);
  insertItem(ans,27,getNumber("slider28"));
  nextQuestion();
  
});
onEvent("slider29","change",function(){
  moveForward(5);
  insertItem(ans,28,getNumber("slider29"));
  nextQuestion();
  
});
onEvent("slider30","change",function(){
  moveForward(5);
  insertItem(ans,29,getNumber("slider30"));
  nextQuestion();
  
});
onEvent("slider31","change",function(){
  moveForward(5);
  insertItem(ans,30,getNumber("slider31"));
  nextQuestion();
  
});
onEvent("slider32","change",function(){
  moveForward(5);
  insertItem(ans,31,getNumber("slider32"));
  nextQuestion();
  
});
onEvent("slider33","change",function(){
  moveForward(5);
  insertItem(ans,32,getNumber("slider33"));
  nextQuestion();
  
});
onEvent("slider34","change",function(){
  moveForward(5);
  insertItem(ans,33,getNumber("slider34"));
  nextQuestion();
  
});
onEvent("slider35","change",function(){
  moveForward(5);
  insertItem(ans,34,getNumber("slider35"));
  nextQuestion();
  
});
onEvent("slider36","change",function(){
  moveForward(5);
  insertItem(ans,35,getNumber("slider36"));
  nextQuestion();
  
});
onEvent("slider37","change",function(){
  moveForward(5);
  insertItem(ans,36,getNumber("slider37"));
  nextQuestion();
  
});
onEvent("slider38","change",function(){
  moveForward(5);
  insertItem(ans,37,getNumber("slider38"));
  nextQuestion();
  
});
onEvent("slider39","change",function(){
  moveForward(5);
  insertItem(ans,38,getNumber("slider39"));
  nextQuestion();
  
});
onEvent("slider40","change",function(){
  moveForward(5);
  insertItem(ans,39,getNumber("slider40"));
  nextQuestion();
  
});
onEvent("slider41","change",function(){
  moveForward(5);
  insertItem(ans,40,getNumber("slider41"));
  nextQuestion();
  
});
onEvent("slider42","change",function(){
  moveForward(5);
  insertItem(ans,41,getNumber("slider42"));
  nextQuestion();
  
});
onEvent("slider43","change",function(){
  moveForward(5);
  insertItem(ans,42,getNumber("slider43"));
  nextQuestion();
  
});
onEvent("slider44","change",function(){
  moveForward(5);
  insertItem(ans,43,getNumber("slider44"));
  nextQuestion();
  
});
onEvent("slider45","change",function(){
  moveForward(5);
  insertItem(ans,44,getNumber("slider45"));
  nextQuestion();
  
});
onEvent("slider46","change",function(){
  moveForward(5);
  insertItem(ans,45,getNumber("slider46"));
  nextQuestion();
  
});
onEvent("slider47","change",function(){
  moveForward(5);
  insertItem(ans,46,getNumber("slider47"));
  nextQuestion();
  
});
onEvent("slider48","change",function(){
  moveForward(5);
  insertItem(ans,47,getNumber("slider48"));
  nextQuestion();
  
});
onEvent("slider49","change",function(){
  moveForward(5);
  insertItem(ans,48,getNumber("slider49"));
  nextQuestion();
  
});
onEvent("slider50","change",function(){
  moveForward(5);
  insertItem(ans,49,getNumber("slider50"));
  nextQuestion();
  
});
onEvent("slider51","change",function(){
  moveForward(5);
  insertItem(ans,50,getNumber("slider51"));
  nextQuestion();
  
});
onEvent("slider52","change",function(){
  moveForward(5);
  insertItem(ans,51,getNumber("slider52"));
  nextQuestion();
  
});
onEvent("slider53","change",function(){
  moveForward(5);
  insertItem(ans,52,getNumber("slider53"));
  nextQuestion();
  
});
onEvent("slider54","change",function(){
  moveForward(5);
  insertItem(ans,53,getNumber("slider54"));
  nextQuestion();
  
});
onEvent("slider55","change",function(){
  moveForward(5);
  insertItem(ans,54,getNumber("slider55"));
  nextQuestion();
  
});
onEvent("slider56","change",function(){
  moveForward(5);
  insertItem(ans,55,getNumber("slider56"));
  nextQuestion();
  
});
onEvent("slider57","change",function(){
  moveForward(5);
  insertItem(ans,56,getNumber("slider57"));
  nextQuestion();
  
});
onEvent("slider58","change",function(){
  moveForward(5);
  insertItem(ans,57,getNumber("slider58"));
  nextQuestion();
  
});
onEvent("slider59","change",function(){
  moveForward(5);
  insertItem(ans,58,getNumber("slider59"));
  nextQuestion();
  
});
onEvent("slider60","change",function(){
  moveForward(5);
  insertItem(ans,59,getNumber("slider60"));
  nextQuestion();
  
});
onEvent("slider61","change",function(){
  moveForward(5);
  insertItem(ans,60,getNumber("slider61"));
  nextQuestion();
  
});
onEvent("slider62","change",function(){
  moveForward(5);
  insertItem(ans,61,getNumber("slider62"));
  nextQuestion();
  
});
onEvent("slider63","change",function(){
  moveForward(5);
  insertItem(ans,62,getNumber("slider63"));
  nextQuestion();
  
});
onEvent("slider64","change",function(){
  moveForward(5);
  insertItem(ans,63,getNumber("slider64"));
  showElement("button2");
  hideElement("slider64");
  });
onEvent("button2","click",function(){
  calculatePfpPlacement();
  hidePfps();
  setScreen("testResults");
  setStyle("dot", "z-index: 10");
  hide();
  endTest();
});
onEvent("button3", "click", function(){
  setScreen("creditsScreen");
});
onEvent("button4", "click", function(){
  setText("text_area65","Results also consider z coordinates. \n Usernames will take you to their page.");
  calculatePfpDistances();
  setScreen("testResults2");
  displayPfpMatches();
  distance;
  distances = [];
  maxDistance;
  maxIndex;
  sortedDistances = [];
  usernames = ["teen.politics.official","charlemagnes_corner","rightwingism","leftistbaby","progressive.politico","feldsteinphilosophy","southern_leftist","tread.not","teen.politics.official","social_liberals","max_stirner_fanpage","makeliberalismclassicalagain","deafpatriot","angryamericans","libertylover2","refoundingfather","anarchist.punk","broken.bones.and.civilizations","kiwimutualist","anpacball","individualist.libertarian","virginiaforbiden","right_wing_imperial","anarchistunity","texansocialdem","liberallibertarian","visionary.arabia","social.dem.official","palmetto_state_bluedog","hoppean_knight","lippie.liberty","massachusite","lib_confederalism","soc.leftist","2038_movement","american.edgelord.v2","american_leoism","soc.leftist","anarcho.garfieldism","anarchy.is.liberty","ancap_or_death","ancap_society","the.eco.socialist","biblicalamericanpolitics","campus_conservative_","cristero.mexico","cuban.progressive","demsocialistcolony","identityeurope","libertarian.unity","libertiansocialist.sf","major_tomrade","marxist_luxemburgist","mexicanlibertarian","mister.american","neoreactionism","not_a_domestic_terrorist","refoundingfather","sonofgotaland","the.geopolitical.forecaster","anarquistamexicano","toronto_socialist","trotskium","wokerevolution","realisticleftist","leftistcommentary","mass_liberty","american_nationalist.party","new.libertarianism","missourian_ancaps","art.n.politics","the.driptator","soviet.chronicles_"];
  pfpXCoord = 0;
  pfpYCoord = 0;
  pfpZCoord = 0;
  count = 0;
});
onEvent("button7", "click", function(){
  setText("text_area65","Results also consider z coordinates.");
  calculateCandidateDistances();
  setScreen("testResults2");
  displayCandidateMatches();
  sortedCanNames = [];
  canNames = ["Amy Klobuchar","Tulsi Gabbard","Mike Gravel","Joe Biden","Cory Brooker","Kamala Harris","Bernie Sanders","Andrew Yang","Pete Butigieg","Elizabeth Warren","Donald Trump"];
  canDistances = [];
  sortedCanDistances = [];
  candidateXCoord = 0;
  candidateYCoord = 0;
  candidateZCoord = 0;
  canDistance;
  maxCanDistance;
  maxCanIndex;
  count = 1;
});
onEvent("button5", "click", function(){
  setScreen("testResults");
  if(count == 0){
    sortedUsernames = [];
  }
});
onEvent("radio_button1","click",function(){
  showElement("symbols");
  hideElement("images");
  hideElement("labels");
  hideElement("slider65");
  hidePfps();
  hideElement("candidates");
});
onEvent("radio_button2","click",function(){
  showElement("images");
  hideElement("symbols");
  hideElement("labels");
  hideElement("slider65");
  hidePfps();
  hideElement("candidates");
});
onEvent("radio_button4","click",function(){
  hideElement("images");
  hideElement("symbols");
  showElement("labels");
  hideElement("slider65");
  hidePfps();
  hideElement("candidates");
});
onEvent("radio_button5","click",function(){
  hideElement("images");
  hideElement("symbols");
  hideElement("labels");
  showPfps();
  showElement("slider65");
  hideElement("candidates");
});
onEvent("radio_button3","click",function(){
  hideElement("images");
  hideElement("symbols");
  hideElement("labels");
  hideElement("slider65");
  hidePfps();
  showElement("candidates");
});
onEvent("username0","click",function(){
  if(count == 0){
    open("https://www.instagram.com/" + sortedUsernames[0] + "/");
  }
});
onEvent("username1","click",function(){
  if(count == 0){
    open("https://www.instagram.com/" + sortedUsernames[1] + "/");
  }
});
onEvent("username2","click",function(){
  if(count == 0){
    open("https://www.instagram.com/" + sortedUsernames[2] + "/");
  }
});
onEvent("username3","click",function(){
  if(count == 0){
    open("https://www.instagram.com/" + sortedUsernames[3] + "/");
  }
});
onEvent("username4","click",function(){
  if(count == 0){
    open("https://www.instagram.com/" + sortedUsernames[4] + "/");
  }
});
onEvent("username5","click",function(){
  if(count == 0){
    open("https://www.instagram.com/" + sortedUsernames[5] + "/");
  }
});
onEvent("username6","click",function(){
  if(count == 0){
    open("https://www.instagram.com/" + sortedUsernames[6] + "/");
  }
});
onEvent("username7","click",function(){
  if(count == 0){
    open("https://www.instagram.com/" + sortedUsernames[7] + "/");
  }
});
onEvent("username8","click",function(){
  if(count == 0){
    open("https://www.instagram.com/" + sortedUsernames[8] + "/");
  }
});
onEvent("username9","click",function(){
  if(count == 0){
    open("https://www.instagram.com/" + sortedUsernames[9] + "/");
  }
});
onEvent("pfp0","click",function(){
  setText("text_area67",usernames[0] + "'s results: (" + xCoords[0] + "," + yCoords[0] + "," + zCoords[0] + ")");
  setStyle("pfp0","z-index: " + depth);
  depth++;
});
onEvent("pfp1","click",function(){
  setText("text_area67",usernames[1] + "'s results: (" + xCoords[1] + "," + yCoords[1] + "," + zCoords[1] + ")");
  setStyle("pfp1","z-index: " + depth);
  depth++;
});
onEvent("pfp2","click",function(){
  setText("text_area67",usernames[2] + "'s results: (" + xCoords[2] + "," + yCoords[2] + "," + zCoords[2] + ")");
  setStyle("pfp2","z-index: " + depth);
  depth++;
});
onEvent("pfp3","click",function(){
  setText("text_area67",usernames[3] + "'s results: (" + xCoords[3] + "," + yCoords[3] + "," + zCoords[3] + ")");
  setStyle("pfp3","z-index: " + depth);
  depth++;
});
onEvent("pfp4","click",function(){
  setText("text_area67",usernames[4] + "'s results: (" + xCoords[4] + "," + yCoords[4] + "," + zCoords[4] + ")");
  setStyle("pfp4","z-index: " + depth);
  depth++;
});
onEvent("pfp5","click",function(){
  setText("text_area67",usernames[5] + "'s results: (" + xCoords[5] + "," + yCoords[5] + "," + zCoords[5] + ")");
  setStyle("pfp5","z-index: " + depth);
  depth++;
});
onEvent("pfp6","click",function(){
  setText("text_area67",usernames[6] + "'s results: (" + xCoords[6] + "," + yCoords[6] + "," + zCoords[6] + ")");
  setStyle("pfp6","z-index: " + depth);
  depth++;
});
onEvent("pfp7","click",function(){
  setText("text_area67",usernames[7] + "'s results: (" + xCoords[7] + "," + yCoords[7] + "," + zCoords[7] + ")");
  setStyle("pfp7","z-index: " + depth);
  depth++;
});
onEvent("pfp8","click",function(){
  setText("text_area67",usernames[8] + "'s results: (" + xCoords[8] + "," + yCoords[8] + "," + zCoords[8] + ")");
  setStyle("pfp8","z-index: " + depth);
  depth++;
});
onEvent("pfp9","click",function(){
  setText("text_area67",usernames[9] + "'s results: (" + xCoords[9] + "," + yCoords[9] + "," + zCoords[9] + ")");
  setStyle("pfp9","z-index: " + depth);
  depth++;
});
onEvent("pfp10","click",function(){
  setText("text_area67",usernames[10] + "'s results: (" + xCoords[10] + "," + yCoords[10] + "," + zCoords[10] + ")");
  setStyle("pfp10","z-index: " + depth);
  depth++;
});
onEvent("pfp11","click",function(){
  setText("text_area67",usernames[11] + "'s results: (" + xCoords[11] + "," + yCoords[11] + "," + zCoords[11] + ")");
  setStyle("pfp11","z-index: " + depth);
  depth++;
});
onEvent("pfp12","click",function(){
  setText("text_area67",usernames[12] + "'s results: (" + xCoords[12] + "," + yCoords[12] + "," + zCoords[12] + ")");
  setStyle("pfp12","z-index: " + depth);
  depth++;
});
onEvent("pfp13","click",function(){
  setText("text_area67",usernames[13] + "'s results: (" + xCoords[13] + "," + yCoords[13] + "," + zCoords[13] + ")");
  setStyle("pfp13","z-index: " + depth);
  depth++;
});
onEvent("pfp14","click",function(){
  setText("text_area67",usernames[14] + "'s results: (" + xCoords[14] + "," + yCoords[14] + "," + zCoords[14] + ")");
  setStyle("pfp14","z-index: " + depth);
  depth++;
});
onEvent("pfp15","click",function(){
  setText("text_area67",usernames[15] + "'s results: (" + xCoords[15] + "," + yCoords[15] + "," + zCoords[15] + ")");
  setStyle("pfp15","z-index: " + depth);
  depth++;
});
onEvent("pfp16","click",function(){
  setText("text_area67",usernames[16] + "'s results: (" + xCoords[16] + "," + yCoords[16] + "," + zCoords[16] + ")");
  setStyle("pfp16","z-index: " + depth);
  depth++;
});
onEvent("pfp17","click",function(){
  setText("text_area67",usernames[17] + "'s results: (" + xCoords[17] + "," + yCoords[17] + "," + zCoords[17] + ")");
  setStyle("pfp17","z-index: " + depth);
  depth++;
});
onEvent("pfp18","click",function(){
  setText("text_area67",usernames[18] + "'s results: (" + xCoords[18] + "," + yCoords[18] + "," + zCoords[18] + ")");
  setStyle("pfp18","z-index: " + depth);
  depth++;
});
onEvent("pfp19","click",function(){
  setText("text_area67",usernames[19] + "'s results: (" + xCoords[19] + "," + yCoords[19] + "," + zCoords[19] + ")");
  setStyle("pfp19","z-index: " + depth);
  depth++;
});
onEvent("pfp20","click",function(){
  setText("text_area67",usernames[20] + "'s results: (" + xCoords[20] + "," + yCoords[20] + "," + zCoords[20] + ")");
  setStyle("pfp20","z-index: " + depth);
  depth++;
});
onEvent("pfp21","click",function(){
  setText("text_area67",usernames[21] + "'s results: (" + xCoords[21] + "," + yCoords[21] + "," + zCoords[21] + ")");
  setStyle("pfp21","z-index: " + depth);
  depth++;
});
onEvent("pfp22","click",function(){
  setText("text_area67",usernames[22] + "'s results: (" + xCoords[22] + "," + yCoords[22] + "," + zCoords[22] + ")");
  setStyle("pfp22","z-index: " + depth);
  depth++;
});
onEvent("pfp23","click",function(){
  setText("text_area67",usernames[23] + "'s results: (" + xCoords[23] + "," + yCoords[23] + "," + zCoords[23] + ")");
  setStyle("pfp23","z-index: " + depth);
  depth++;
});
onEvent("pfp24","click",function(){
  setText("text_area67",usernames[24] + "'s results: (" + xCoords[24] + "," + yCoords[24] + "," + zCoords[24] + ")");
  setStyle("pfp24","z-index: " + depth);
  depth++;
});
onEvent("pfp25","click",function(){
  setText("text_area67",usernames[25] + "'s results: (" + xCoords[25] + "," + yCoords[25] + "," + zCoords[25] + ")");
  setStyle("pfp25","z-index: " + depth);
  depth++;
});
onEvent("pfp26","click",function(){
  setText("text_area67",usernames[26] + "'s results: (" + xCoords[26] + "," + yCoords[26] + "," + zCoords[26] + ")");
  setStyle("pfp26","z-index: " + depth);
  depth++;
});
onEvent("pfp27","click",function(){
  setText("text_area67",usernames[27] + "'s results: (" + xCoords[27] + "," + yCoords[27] + "," + zCoords[27] + ")");
  setStyle("pfp27","z-index: " + depth);
  depth++;
});
onEvent("pfp28","click",function(){
  setText("text_area67",usernames[28] + "'s results: (" + xCoords[28] + "," + yCoords[28] + "," + zCoords[28] + ")");
  setStyle("pfp28","z-index: " + depth);
  depth++;
});
onEvent("pfp29","click",function(){
  setText("text_area67",usernames[29] + "'s results: (" + xCoords[29] + "," + yCoords[29] + "," + zCoords[29] + ")");
  setStyle("pfp29","z-index: " + depth);
  depth++;
});
onEvent("pfp30","click",function(){
  setText("text_area67",usernames[30] + "'s results: (" + xCoords[30] + "," + yCoords[30] + "," + zCoords[30] + ")");
  setStyle("pfp30","z-index: " + depth);
  depth++;
});
onEvent("pfp31","click",function(){
  setText("text_area67",usernames[31] + "'s results: (" + xCoords[31] + "," + yCoords[31] + "," + zCoords[31] + ")");
  setStyle("pfp31","z-index: " + depth);
  depth++;
});
onEvent("pfp32","click",function(){
  setText("text_area67",usernames[32] + "'s results: (" + xCoords[32] + "," + yCoords[32] + "," + zCoords[32] + ")");
  setStyle("pfp32","z-index: " + depth);
  depth++;
});
onEvent("pfp33","click",function(){
  setText("text_area67",usernames[33] + "'s results: (" + xCoords[33] + "," + yCoords[33] + "," + zCoords[31] + ")");
  setStyle("pfp33","z-index: " + depth);
  depth++;
});
onEvent("pfp34","click",function(){
  setText("text_area67",usernames[34] + "'s results: (" + xCoords[34] + "," + yCoords[34] + "," + zCoords[34] + ")");
  setStyle("pfp34","z-index: " + depth);
  depth++;
});
onEvent("pfp35","click",function(){
  setText("text_area67",usernames[35] + "'s results: (" + xCoords[35] + "," + yCoords[35] + "," + zCoords[35] + ")");
  setStyle("pfp35","z-index: " + depth);
  depth++;
});
onEvent("pfp36","click",function(){
  setText("text_area67",usernames[36] + "'s results: (" + xCoords[36] + "," + yCoords[36] + "," + zCoords[36] + ")");
  setStyle("pfp36","z-index: " + depth);
  depth++;
});
onEvent("pfp37","click",function(){
  setText("text_area67",usernames[37] + "'s results: (" + xCoords[37] + "," + yCoords[37] + "," + zCoords[37] + ")");
  setStyle("pfp37","z-index: " + depth);
  depth++;
});
onEvent("pfp38","click",function(){
  setText("text_area67",usernames[38] + "'s results: (" + xCoords[38] + "," + yCoords[38] + "," + zCoords[38] + ")");
  setStyle("pfp38","z-index: " + depth);
  depth++;
});
onEvent("pfp39","click",function(){
  setText("text_area67",usernames[39] + "'s results: (" + xCoords[39] + "," + yCoords[39] + "," + zCoords[39] + ")");
  setStyle("pfp39","z-index: " + depth);
  depth++;
});
onEvent("pfp40","click",function(){
  setText("text_area67",usernames[40] + "'s results: (" + xCoords[40] + "," + yCoords[40] + "," + zCoords[40] + ")");
  setStyle("pfp40","z-index: " + depth);
  depth++;
});
onEvent("pfp41","click",function(){
  setText("text_area67",usernames[41] + "'s results: (" + xCoords[41] + "," + yCoords[41] + "," + zCoords[41] + ")");
  setStyle("pfp41","z-index: " + depth);
  depth++;
});
onEvent("pfp42","click",function(){
  setText("text_area67",usernames[42] + "'s results: (" + xCoords[42] + "," + yCoords[42] + "," + zCoords[42] + ")");
  setStyle("pfp42","z-index: " + depth);
  depth++;
});
onEvent("pfp43","click",function(){
  setText("text_area67",usernames[43] + "'s results: (" + xCoords[43] + "," + yCoords[43] + "," + zCoords[43] + ")");
  setStyle("pfp43","z-index: " + depth);
  depth++;
});
onEvent("pfp44","click",function(){
  setText("text_area67",usernames[44] + "'s results: (" + xCoords[44] + "," + yCoords[44] + "," + zCoords[44] + ")");
  setStyle("pfp44","z-index: " + depth);
  depth++;
});
onEvent("pfp45","click",function(){
  setText("text_area67",usernames[45] + "'s results: (" + xCoords[45] + "," + yCoords[45] + "," + zCoords[45] + ")");
  setStyle("pfp45","z-index: " + depth);
  depth++;
});
onEvent("pfp46","click",function(){
  setText("text_area67",usernames[46] + "'s results: (" + xCoords[46] + "," + yCoords[46] + "," + zCoords[46] + ")");
  setStyle("pfp46","z-index: " + depth);
  depth++;
});
onEvent("pfp47","click",function(){
  setText("text_area67",usernames[47] + "'s results: (" + xCoords[47] + "," + yCoords[47] + "," + zCoords[47] + ")");
  setStyle("pfp47","z-index: " + depth);
  depth++;
});
onEvent("pfp48","click",function(){
  setText("text_area67",usernames[48] + "'s results: (" + xCoords[48] + "," + yCoords[48] + "," + zCoords[48] + ")");
  setStyle("pfp48","z-index: " + depth);
  depth++;
});
onEvent("pfp49","click",function(){
  setText("text_area67",usernames[49] + "'s results: (" + xCoords[49] + "," + yCoords[49] + "," + zCoords[49] + ")");
  setStyle("pfp49","z-index: " + depth);
  depth++;
});
onEvent("pfp50","click",function(){
  setText("text_area67",usernames[50] + "'s results: (" + xCoords[50] + "," + yCoords[50] + "," + zCoords[50] + ")");
  setStyle("pfp50","z-index: " + depth);
  depth++;
});
onEvent("pfp51","click",function(){
  setText("text_area67",usernames[51] + "'s results: (" + xCoords[51] + "," + yCoords[51] + "," + zCoords[51] + ")");
  setStyle("pfp51","z-index: " + depth);
  depth++;
});
onEvent("pfp52","click",function(){
  setText("text_area67",usernames[52] + "'s results: (" + xCoords[52] + "," + yCoords[52] + "," + zCoords[52] + ")");
  setStyle("pfp52","z-index: " + depth);
  depth++;
});
onEvent("pfp53","click",function(){
  setText("text_area67",usernames[53] + "'s results: (" + xCoords[53] + "," + yCoords[53] + "," + zCoords[53] + ")");
  setStyle("pfp53","z-index: " + depth);
  depth++;
});

onEvent("pfp54","click",function(){
  setText("text_area67",usernames[54] + "'s results: (" + xCoords[54] + "," + yCoords[54] + "," + zCoords[54] + ")");
  setStyle("pfp54","z-index: " + depth);
  depth++;
});
onEvent("pfp55","click",function(){
  setText("text_area67",usernames[55] + "'s results: (" + xCoords[55] + "," + yCoords[55] + "," + zCoords[55] + ")");
  setStyle("pfp55","z-index: " + depth);
  depth++;
});
onEvent("pfp56","click",function(){
  setText("text_area67",usernames[56] + "'s results: (" + xCoords[56] + "," + yCoords[56] + "," + zCoords[56] + ")");
  setStyle("pfp56","z-index: " + depth);
  depth++;
});
onEvent("pfp57","click",function(){
  setText("text_area67",usernames[57] + "'s results: (" + xCoords[57] + "," + yCoords[57] + "," + zCoords[57] + ")");
  setStyle("pfp57","z-index: " + depth);
  depth++;
});
onEvent("pfp58","click",function(){
  setText("text_area67",usernames[58] + "'s results: (" + xCoords[58] + "," + yCoords[58] + "," + zCoords[58] + ")");
  setStyle("pfp58","z-index: " + depth);
  depth++;
});
onEvent("pfp59","click",function(){
  setText("text_area67",usernames[59] + "'s results: (" + xCoords[59] + "," + yCoords[59] + "," + zCoords[59] + ")");
  setStyle("pfp59","z-index: " + depth);
  depth++;
});
onEvent("pfp60","click",function(){
  setText("text_area67",usernames[60] + "'s results: (" + xCoords[60] + "," + yCoords[60] + "," + zCoords[60] + ")");
  setStyle("pfp60","z-index: " + depth);
  depth++;
});
onEvent("pfp61","click",function(){
  setText("text_area67",usernames[61] + "'s results: (" + xCoords[61] + "," + yCoords[61] + "," + zCoords[61] + ")");
  setStyle("pfp1","z-index: " + depth);
  depth++;
});
onEvent("pfp62","click",function(){
  setText("text_area67",usernames[62] + "'s results: (" + xCoords[62] + "," + yCoords[62] + "," + zCoords[62] + ")");
  setStyle("pfp62","z-index: " + depth);
  depth++;
});
onEvent("pfp63","click",function(){
  setText("text_area67",usernames[63] + "'s results: (" + xCoords[63] + "," + yCoords[63] + "," + zCoords[63] + ")");
  setStyle("pfp63","z-index: " + depth);
  depth++;
});
onEvent("pfp64","click",function(){
  setText("text_area67",usernames[64] + "'s results: (" + xCoords[64] + "," + yCoords[64] + "," + zCoords[64] + ")");
  setStyle("pfp64","z-index: " + depth);
  depth++;
});
onEvent("pfp65","click",function(){
  setText("text_area67",usernames[65] + "'s results: (" + xCoords[65] + "," + yCoords[65] + "," + zCoords[65] + ")");
  setStyle("pfp65","z-index: " + depth);
  depth++;
});
onEvent("pfp66","click",function(){
  setText("text_area67",usernames[66] + "'s results: (" + xCoords[66] + "," + yCoords[66] + "," + zCoords[66] + ")");
  setStyle("pfp66","z-index: " + depth);
  depth++;
});
onEvent("pfp67","click",function(){
  setText("text_area67",usernames[67] + "'s results: (" + xCoords[67] + "," + yCoords[67] + "," + zCoords[67] + ")");
  setStyle("pfp67","z-index: " + depth);
  depth++;
});
onEvent("pfp68","click",function(){
  setText("text_area67",usernames[68] + "'s results: (" + xCoords[68] + "," + yCoords[68] + "," + zCoords[68] + ")");
  setStyle("pfp68","z-index: " + depth);
  depth++;
});
onEvent("pfp69","click",function(){
  setText("text_area67",usernames[69] + "'s results: (" + xCoords[69] + "," + yCoords[69] + "," + zCoords[69] + ")");
  setStyle("pfp69","z-index: " + depth);
  depth++;
});
onEvent("pfp70","click",function(){
  setText("text_area67",usernames[70] + "'s results: (" + xCoords[70] + "," + yCoords[70] + "," + zCoords[70] + ")");
  setStyle("pfp70","z-index: " + depth);
  depth++;
});
onEvent("pfp71","click",function(){
  setText("text_area67",usernames[71] + "'s results: (" + xCoords[71] + "," + yCoords[71] + "," + zCoords[71] + ")");
  setStyle("pfp71","z-index: " + depth);
  depth++;
});
onEvent("pfp72","click",function(){
  setText("text_area67",usernames[72] + "'s results: (" + xCoords[72] + "," + yCoords[72] + "," + zCoords[72] + ")");
  setStyle("pfp72","z-index: " + depth);
  depth++;
});
onEvent("pfp73","click",function(){
  setText("text_area67",usernames[73] + "'s results: (" + xCoords[73] + "," + yCoords[73] + "," + zCoords[73] + ")");
  setStyle("pfp73","z-index: " + depth);
  depth++;
});
onEvent("pfp74","click",function(){
  setText("text_area67",usernames[74] + "'s results: (" + xCoords[74] + "," + yCoords[74] + "," + zCoords[74] + ")");
  setStyle("pfp74","z-index: " + depth);
  depth++;
});
onEvent("pfp75","click",function(){
  setText("text_area67",usernames[75] + "'s results: (" + xCoords[75] + "," + yCoords[75] + "," + zCoords[75] + ")");
  setStyle("pfp75","z-index: " + depth);
  depth++;
});
onEvent("button6","click",function(){
  previousQuestion();
  moveBackward(5);
});
onEvent("button8","click",function(){
  setScreen("buildScreen");
});
onEvent("slider65","input",function(){
  for(var e = 0; e < getProperty("slider65","value"); e++){
    /* appendItem(pfps,pfps[0]); */
    removeItem(pfps,0);
  }
  sort();
  pfps = [];
  createList();
});
onEvent("button12","click",function(){
  checkViability();
  if(viability == 1){
    setScreen("buildResults");
    createCanvas("canvas1");
    preview();
  }
});
onEvent("button13","click",function(){
  clearCanvas();
  setScreen("buildScreen");
});
onEvent("paypal","click",function(){
  open("https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=lippie.liberty@gmail.com&lc=US&no_note=0&item_name=Help+me+continue+to+make+the+Politigram+Compass+the+only+political+test+specific+to+Politigram+(and+buy+my+college+textbooks)!&cn=&curency_code=USD&bn=PP-DonationsBF:btn_donateCC_LG.gif:NonHosted");
});
onEvent("button9","click",function(){
  clearCanvas();
  setScreen("welcomeScreen");
});