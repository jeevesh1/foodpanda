function fillitem(){

	selectedlocation.innerHTML=place.value;
    removeOption()
	switch(place.selectedIndex)
	{
		case 2:
		      var northindiafood=["-items-","amritsari chole bhature","dilli ki chat","rajasthani dal bati"]
		      var foodprice=[0,120,40,150]
		      addOption(northindiafood,foodprice)

              break;
        case 4:
              var westindiafood=["-items-","ghewar","bhelpuri"]
			  var foodprice=[0,200,30]
			  addOption(westindiafood,foodprice)
              break;

        case 1:
			  var southindiafood=["-items-","dosa","idli"]
			  var foodprice=[0,100,40]
			  addOption(southindiafood,foodprice)
              break;
        case 3:
			  var eastindiafood=["-items-","momos","thukpa"]
			  var foodprice=[0,50,60]
			  addOption(eastindiafood,foodprice)
              break;

        case 5:

              var centralindiafood=["-items-","samosa","sev","peda"]
			  var foodprice=[0,20,100,150]
			  addOption(centralindiafood,foodprice)
              break;

    }
}
function addOption(sf,price)
{
for(i=0;i<sf.length;i++)
{var opt=document.createElement("option")
opt.text=sf[i]
opt.value=price[i]
item.add(opt)
}
}

function removeOption()
{
  for(i=item.options.length-1;i>=0;i--)
  {
   item.remove(i);
  }

}
function displayitem()
{

	SELECTEDITEM.innerHTML=item.options[item.selectedIndex].text
    ITEMPRICE.innerHTML=item.options[item.selectedIndex].value
    simg.src=item.options[item.selectedIndex].text+".jpg"
}
