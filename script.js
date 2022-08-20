var i=1;
var j=0;
var row=1;
var words=[];
import { ob,WORDS } from "./words.js";
// for(let i=0;i<WORDS.length;i++)
// console.log(WORDS[i]);
var word=WORDS[Math.floor(Math.random() * WORDS.length)];
console.log(word);
var dct={}
window.addEventListener("keydown", function (event) {
    if (event.key !== undefined) {
        if(event.keyCode>=65 && event.keyCode<=97)
        {
            console.log("ok");
            change(event.key);
        }
        else if(event.which==8){
            back();
        }
        else if(event.which==13){
           enter();
        }
        
    } 
  });
  var lst=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T",'U',"V","W","X","Y","Z"]
  for(let i=0;i<26;i++)
  {
    document.getElementById(lst[i]).addEventListener("click", function() {
        change(lst[i]);
      });
  }
  document.getElementById('x').addEventListener("click", function() {
       back();
  });
  document.getElementById('Enter').addEventListener("click", function() {
    enter();
});
  function back()
  {
      if(j>0)
      {
      var p1=row.toString();
      var p2=j.toString();
      var idd=p1+p2;
      var div = document.getElementById(idd);
      div.innerHTML='';
      j--;
      words.pop();
      }
  }
  function change(p) 
  {
      if(j<5)
     {
      var p1=row.toString();
      j++;
      console.log(j);
      var p2=j.toString();
      var idd=p1+p2;
      var div = document.getElementById(idd);
      div.innerHTML=p.toUpperCase();
      words.push(p);
     }
     
  }
  function win(words)
  {
      let cnt=0;
       for(let i=0;i<5;i++)
       {
           if(words[i]==word[i])
           {
               cnt++;
           }
       }

        if(cnt==5)
        return 1;
        else 
        return 0;
  }
  function enter()
  {
    for(let i=0;i<5;i++)
    {
        dct[word[i]]=1;
    }
    if(j==5)
    {
    //  console.log("Fdfd");
        var st="";
        for(let i=0;i<5;i++)
        {
            st+=words[i];
        }
         console.log(st);
        if(st in ob)
        {
            for(let i=0;i<5;i++)
            {
                if(words[i]==word[i])
                {
                    var p1=row.toString();
                    var k=i+1;
                    console.log("here");
                    var p2=k.toString();
                    var idd=p1+p2;
                    var div = document.getElementById(idd);
                   
                    
                    var di = document.getElementById(words[i].toUpperCase());
                    div.style.backgroundColor='green';
                    di.style.backgroundColor='green';
                    dct[words[i]]--;
                }
            }
            for(let i=0;i<5;i++)
            {
                 if(words[i] in dct && dct[words[i]]>=1)
                {
                    var p1=row.toString();
                    var k=i+1;
                  //  console.log(j);
                    var p2=k.toString();
                    var idd=p1+p2;
                    dct[words[i]]--;
                    var div = document.getElementById(idd);
                    var di = document.getElementById(words[i].toUpperCase());
                    div.style.backgroundColor='yellow';
                    di.style.backgroundColor='yellow';
                }
                else if(words[i]!=word[i]){
                    var p1=row.toString();
                    var k=i+1;
                  //  console.log(j);
                    var p2=k.toString();
                    var idd=p1+p2;
                    var di = document.getElementById(words[i].toUpperCase());
                    var div = document.getElementById(idd);
                    div.style.backgroundColor='grey';
                    di.style.backgroundColor='grey';
                }
            }

           if(win(words))
           {  
            setTimeout(function(){ 
                alert("WIN WIN WIN");
            }, 1000);   
           }
           row++;
           j=0;
           words=[]
        }
        else{
            alert("Not in word list");
        }
    }
  }