var meanings = [
{
	eng : "Cat",
	mm : "ကြောင်"
},
{
	eng : "Dog",
	mm : "ခွေး"
},
{
	eng : "Refrigerator",
	mm : "ရေခဲသေတ္တာ"
},
{
	eng : "What the hell (wth)",
	mm : "ဘာကြီးတုန်းဟ"
},
{
	eng : "Oh my god (omg)",
	mm : "ဘုရားရေ"
},
{
	eng : "Oh shit",
	mm : "အို့ ချီးပဲ"
},
{
	eng : "By the way (btw)",
	mm : "စကားမစပ်"
},
{
	eng : "If and only if",
	mm : "အပြန်အလှန်အားဖြင့်"
},
{
	eng : "Shaking my head (smh)",
	mm : "ခေါင်းကိုမူးသွားတာပဲ"
},
{
	eng : "I love you so much (ilysm)",
	mm : "ငါနင့်ကိုသိပ်ချစ်တာပဲ"
},
{
	eng : "What the fuck (wtf)",
	mm : "လီးဘာကြီးတုန်း"
},
{
	eng : "What the fuck is going on ?",
	mm : "လီးတွေဖြစ်နေတာလား"
},
{
	eng : "Back to keyboard (btk/b2k)",
	mm : "လိုင်းပေါ်ပြန်ရောက်ပီ"
},
{
	eng : "Do it yourself (diy)",
	mm : "ကိုယ်တိုင်လုပ်ပါ (ကိုယ်တိုင်ဖန်တီးမှု)"
},
{
	eng : "Frequently asked Questions (FAQ)",
	mm : "မေးလေ့မေးထရှိသော မေးခွန်းများ"
},
{
	eng : "I don't know (idk)",
	mm : "ငါမသိဘူးလေ"
},
{
	eng : "Laughing out loud (LOL)",
	mm : "စောက်ရမ်းရယ်ရတယ်"
},
{
	eng : "Not available (N/A)",
	mm : "မရရှိနိုင်ပါ"
},
{
	eng : "On the other hand (OTOH)",
	mm : "ဆိုလိုတာကတော့"
},
{
	eng : "Away from keyboard (AFK)",
	mm : "လိုင်းဆင်းသွားပီ"
},
{
	eng : "Too fast for you (2F4U)",
	mm : "မင်းအတွက်မမြန်လွန်းဘူးလား"
},
{
	eng : "Back to topic (BTT)",
	mm : "စကားပြန်စပ်ရရင်တော့"
},
{
	eng : "Because (BC)",
	mm : "ဘာလို့လဲဆိုတော့"
},
{
	eng : "To be honest (TBH)",
	mm : "အရိုးသားဆုံးပြောရရင်တော့"
},
{
	eng : "noob/n00b/nub",
	mm : "စောက်အုံးနှောက်မရှိတဲ့ကောင်၊ ကျွမ်းကျင်မှုမရှိတဲ့ကောင်",
},
{
	eng : "Original Poster , Original Post (OP)",
	mm : "မူရင်းပို့စ်ပိုင်ရှင်၊ မူရင်းပို့စ်"
},
{
	eng : "Have fun (HF)",
	mm : "ပျော်ပျော်သာနေကြ"
},
{
	eng : "Full Acknowledge (FACK)",
	mm : "အပြည့်အဝလက်ခံတယ်"
},
{
	eng : "Point of View (POV)",
	mm : "ရှုထောင့်ကနေကြည့်မယ်ဆိုရင်"
},
{
	eng : "None of your business (NOYB)",
	mm : "မင်းကိစ္စလား ၊ မင်းနဲ့ဘာဆိုင်လဲ"
},
{
	eng : "I don't care (idc)",
	mm : "ငါဂရုမစိုက်ဘူး"
},
{
	eng : "Tomorrow (2moro)",
	mm : "မနက်ဖြန်"
},
{
	eng : "Best Friends , Forever (BFF)",
	mm : "ထာဝရသူငယ်ချင်းတွေပဲ"
},
{
	eng : "Tonight (2nte)",
	mm : "ခနေ့ည"
},
{
	eng : "Face to Face (F2F)",
	mm : "မျက်နှာချင်းဆိုင်ရှင်းမယ်"
},
{
	eng : " Age/Sex/Location (ASL)",
	mm : "အသက်/လိင်အမျိုးအစား/တည်နေရာ"
},
{
	eng : "Great (GR8)",
	mm : "ကောင်းသားပဲ"
},
{
	eng : "On my way (OMW)",
	mm : "မင်းပြောတာငါလုပ်နေပီ"
},
{
	eng : "No problem (NP)",
	mm : "ပြဿနာမရှိပါဘူး"
},
{
	eng : "In real life (IRL)",
	mm : "တကယ့်လက်တွေ့ဘဝမှာတော့"
},
{
	eng : "Excuse me ? (EM?)",
	mm : "ခွင့်ပြုပါအုံးဗျာ"
},
{
	eng : "As soon as possible (ASAP)",
	mm : "ဖြစ်နိုင်သမျှကတော့"
},
{
	eng : "See you soon (CUS)",
	mm : "မကြာခင်တွေ့မယ်နော်"
},
{
	eng : "See you tomorrow (CYT)",
	mm : "မနက်ဖြန်တွေ့မယ်နော်"
},
{
	eng : "Be right back (BRB)",
	mm : "ပြန်လာမှာ"
}
];



const dict_words = document.getElementsByClassName("dict_words")[0];
const dict_search = document.getElementsByClassName("dict_search")[0];
const result = document.getElementsByClassName("result")[0];
// meanings.map((user,i)=>{
// 	dict_words.innerHTML += `
// 	<div class='words'>
// 		${meanings[i].eng}
// 	</div>
// 	`;
// })
var sync;
const meaning_input = () =>{
	var filterDict = meanings.filter((words)=>{
		return words.eng.toLowerCase().includes(dict_search.value.toLowerCase());
	});
	sync = filterDict;
	dict_words.innerHTML = "";
	if(dict_search.value === ""){
		dict_words.innerHTML = "";
	}//if
		else{
	filterDict.map((user,i)=>{
	dict_words.innerHTML += `
	<div class='words' onclick='wordclick(${i})'>
		${filterDict[i].eng}
	</div>
	`;
	
})
}//else
}
const english = document.getElementsByClassName("english")[0];
const myanmar = document.getElementsByClassName("myanmar")[0];
const wordclick = (index) =>{
	result.classList.add("resultappear");
	dict_words.classList.add("words_disappear");
	english.textContent = sync[index].eng;
	myanmar.textContent = sync[index].mm;
}
const exitclick = () =>{
	result.classList.remove("resultappear");
	dict_words.classList.remove("words_disappear");
}
const search_clear_click = () =>{
	dict_search.value = "";
	dict_words.innerHTML = "";
}
