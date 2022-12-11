function getRandomInt() {
  min = Math.ceil(0);
  max = Math.floor(10);
  return Math.floor(Math.random() * (max - min)) + min;
}

function generateRandomSixNumber(){
  let sum1=0;
  let sum2=0;
  ids=['first','second','third','fourth','fifth','sixth']
  for(i=0; i<6;i++) {
    rnd_number=getRandomInt()
    if (i < 3) {
      sum1 += rnd_number;
      document.getElementById(ids[i]).value=rnd_number.toString()

    } else {
      sum2 += rnd_number;
      document.getElementById(ids[i]).value=rnd_number.toString()
    }
  }
    if (sum1===sum2){
      document.getElementById('text').value="РЕЗУЛЬТАТ:ВЫ ПОБЕДИЛИ";
    }
    else{
      document.getElementById('text').value="РЕЗУЛЬТАТ:ВЫ ПРОИГРАЛИ"
    }

}

function gen(){
  ids=['first','second','third','fourth','fifth','sixth']
  for(i=0; i<6;i++) {
    rnd_number=getRandomInt()
    document.getElementById(ids[i]).value=rnd_number.toString()
    }
}
function revers() {
  ids=['first','second','third','fourth','fifth','sixth']
  number=[]
  for(i=0; i<6;i++) {
    number.push(document.getElementById(ids[i]).value)
  }
  number.reverse()
  for(i=0; i<6;i++) {
    document.getElementById(ids[i]).value=number[i].toString()
    }
}