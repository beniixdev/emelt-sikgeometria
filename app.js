const decision=[
["Derékszög van?","Pitagorasz / sin-cos-tg","Két oldalból a harmadik: Pitagorasz. Szög és oldal kapcsolata: sin, cos vagy tg."],
["Két oldal + közbezárt szög?","Koszinusztétel","A harmadik oldalhoz koszinusztétel. Három oldalból szöget is ezzel kapsz."],
["Van oldal–szög párod?","Szinusztétel","Ha ismersz egy oldalt és a vele szemközti szöget, ez gyakran a gyors út."],
["Hasonló alakzatok?","Arányok","Hosszarány k, területarány k², térfogatarány k³."],
["Kör / húrnégyszög?","180° és Thalész","Húrnégyszög szemközti szögei 180°. Átmérő fölötti kerületi szög 90°."],
["Bonyolult terület?","Bontsd fel","Háromszögre, trapézra, téglalapra vagy körcikkre bontsd."]
];
const formulas=[
["Pitagorasz","a² + b² = c²","Csak derékszögű háromszögben."],
["Koszinusztétel","c² = a² + b² − 2ab·cosγ","γ az a és b közbezárt szöge."],
["Szinusztétel","a/sinα = b/sinβ = c/sinγ","Oldal mindig a szemközti szöggel pár."],
["Háromszög terület","T = a·mₐ/2","vagy T = a·b·sinγ/2"],
["Trapéz","T = (a+c)·m/2","a és c a párhuzamos oldalak."],
["Körív","i = α/360° · 2πr","A teljes kör megfelelő része."],
["Körcikk","T = α/360° · πr²","Középponti szöggel."],
["Derékszögű trigonometria","sin = szemközti/átfogó","cos = mellette/átfogó; tg = szemközti/mellette."],
["Szabályos háromszög","m = a√3/2","T = a²√3/4"]
];
const tasks=[
[1,"Trapéz, átlók, területarány","Hasonlóság","Az átlók metszéspontjánál keletkező háromszögek hasonlók. 1:2 hosszarányból 1:4 területarány. Figyeld a közös alapú és azonos magasságú háromszögeket."],
[2,"Szabályos háromszög, belső párhuzamosok","30°-os trigonometria","A belső szabályos háromszög oldalát x-szel fejezd ki. A megoldókulcs 30°-os derékszögű háromszöget és ctg30°-ot használ. A b) már maximumkeresés."],
[3,"Hajó, repülő, depressziós szög","Koszinusztétel + tg","Előbb síkbeli távolság koszinusztétellel, utána a magasság és vízszintes távolság alapján tangens. A depressziós szög váltószögként jelenik meg."],
[4,"Mosógép hajtószíja","Érintők + körív","A szíj két érintőszakasz és két körív. Pitagorasz az érintőszakaszhoz, cos a szöghöz, majd körívhossz."],
[5,"Négyzet a négyzetben","Pitagorasz","A külső oldal részei x és 1−x. A belső négyzet oldala átfogó, ezért Pitagorasz. Az a) végén 3:4 arány jön ki."],
[6,"Fa árnyéka lejtőn","tg + szinusztétel","A turistából tanα=1/2. A lejtő 15°-át is számítsd bele a szögekbe, majd szinusztétel."],
[7,"Szabályos hatszög","Szabályos háromszögek","A hatszög 6 szabályos háromszögből áll. Rövidebb átló = a√3, utána T=6·a²√3/4. A b) sorozat."],
[8,"720 kis téglalap","Másodfokú egyenlet","Oldalak x és x+1, így 720x(x+1)=2025. A negatív gyök geometriailag nem jó."],
[9,"PQR háromszög szabályos háromszögben","Hasonlóság + terület","Kisebb hasonló háromszögek, szabályos háromszög magassága, majd terület."],
[10,"16:9 TV","Pitagorasz + hasonlóság","Oldalak 16x és 9x. Az átló Pitagoraszból. Területarányból hosszarány: k=√(területarány)."],
[11,"Négyszög – állítás és megfordítás","Bizonyítás / ellenpélda","A megfordítás nem automatikusan igaz. Hamis állításhoz elég egy konkrét ellenpélda."],
[12,"A-papírméretek","√2 arány","A hosszabb/rövidebb oldal aránya √2. Félbevágás után ugyanennek kell kijönnie. A0-nál x·x√2=1 m²."],
[13,"Kör derékszögű háromszögben","Pitagorasz + terület","a) algebra és Pitagorasz, b) ugyanazt a háromszögterületet kétféleképpen írd fel, c) koordinátageometria."],
[14,"Húrnégyszög összetett feladat","Húrnégyszög + Thalész","Szemközti szögek 180°, átmérőből 90°, oldalhoz koszinusztétel, további szögekhez szinusztétel."],
[15,"Csokiszelet térfogatnövekedése","Hasonló testek","20% térfogatnövekedésnél k=∛1,2. A hossz nem 20%-kal nő, hanem a köbgyök szerint."],
[16,"Négy pohár kör alakú tálcán","Négyzet + Pitagorasz","A négy kör középpontjai négyzetet alkotnak. Az átló és a sugarak kapcsolata a kulcs."],
[17,"Szabályos háromszög, körközéppontok","Szimmetria + szinusztétel","Közös középpontból egyenlő szárú részháromszögek. b)-nél szinusztétel és forgásszimmetria."],
[18,"7–9–11 és 3:4:5","Koszinusz + Pitagorasz","A legnagyobb szöget a 11-es oldallal szemben vizsgáld. Számtani sorozatos oldalak: a−d, a, a+d."],
[19,"Lánchíd és parabola","Koordinátageometria + analízis","Parabolaegyenlet, majd terület integrállal. Ez már nem tisztán klasszikus síkgeometria."],
[20,"Szabályos 12-szög","30° + Thalész","Középponti szög 30°. Bontsd 12 háromszögre. Derékszögű háromszögeknél az átfogó a kör átmérője."],
[21,"Igaz–hamis trigonometrikus állítások","Logika + szinusz","sinx=siny nem csak x=y esetén igaz. A megfordításnál ezt külön ellenőrizd."],
[22,"Egész oldalú derékszögű háromszögek","Tényezőkre bontás","15²+b²=c² → (c−b)(c+b)=225, majd a 225 osztópárjai."],
[23,"Doboz kartonból","Térgeometria / maximum","Főleg térgeometria, függvényes maximum és kombinatorika. Síkgeometriából kevésbé központi."],
[24,"Egyenlő szárú háromszög szórással","Másodfokú + ellenőrzés","Oldalak x,x,30−2x. A kapott megoldásoknál háromszög-egyenlőtlenséget is ellenőrizz."],
[25,"Szinusztétel és maximális téglalap","Trigonometria + maximum","Használd sin2α=2sinαcosα. A téglalap területe másodfokú függvény lesz."],
[26,"Húrnégyszög – oldal és terület","Koszinusz + szinusz","Koszinusztétel, majd szemközti szög 180°, szinusztétel, végül két háromszög területe."],
[27,"Háztető","cos + Pitagorasz","Válassz jó síkmetszetet. Egyenlő szárú háromszögből cos, majd Pitagorasz és területek."],
[28,"XYZ háromszög szabályos háromszögben","Forgásszimmetria","Három egybevágó sarokrész. Számolj ki egyet, majd TXYZ=TABC−3t."],
[29,"Konvex négyszög területe","Átló + két háromszög","Első háromszög: T=ab·sinγ/2 és koszinusztétel. Másodikban szinusztétel, majd terület. Végül összeadás."],
[30,"Konferenciaterület és kerítés","Terület + koszinusztétel","Az egyenlő szárú nagy háromszögből szög, a megadott területből BD, majd koszinusztétel CD-re."],
[31,"Ókori egyiptomi területbecslés","Pitagorasz + egyenlőtlenség","Szár b, valódi magasság √(b²−9²). A közelítő és valódi területből 25%-os hibafeltétel."],
[32,"Öntöző a téglalap felében","Körcikk + háromszög","tg-ből szög, körcikk és háromszög területe, majd kivonás. A jó ábra itt kulcsfontosságú."],
[33,"Majdnem szabályos háromszög","Tangens + kerekítés","A felezőpontból derékszögű háromszög: tgα=71/41. Ne kerekíts túl korán."],
[34,"Legelő valódi területe","Koszinusz + Pitagorasz","Bontsd két háromszögre. Első: terület és koszinusztétel az átlóra. Második derékszögű: Pitagorasz."],
[35,"Trapéz kert","Pitagorasz + hasonlóság","a) két Pitagorasz és trapézterület. c) két hasonló háromszögből két aránypár."],
[36,"Doboz hálója és hulladék","Terület + százalék","Teljes téglalap területe mínusz háló területe, majd százalék. A c) függvényes minimum."],
[37,"Ház tetőfelülete és lakóterület","cos + tg","cos42° a ferde tetőszélességhez, tg42° az 1,9 m belmagasság határához."],
[38,"Ötszög és húrtrapéz","Szögek + terület","Merőleges segédvonal, egyenlő szárú háromszög és húrtrapéz. Terület = háromszög + trapéz."],
[39,"Négyzet átlóján P és Q","Területarány + koszinusz","Közös magasságú háromszögek területaránya = alaparány. b) koszinusztétel 45°-kal, c) hasonlóság."],
[40,"Oldalak: a, a+4, a+8","Koszinusz + másodfokú","A 120° a legnagyobb szög, ezért az a+8 oldallal szemben van. Koszinusztételből másodfokú."],
[41,"Háromszögből kivágott körcikk","Körcikk + körív","Szürke terület = háromszög − körcikk. Kerülethez koszinusztétel, két egyenes szakasz és körív."],
[42,"Sorozatból négyszög, majd oldalhosszak","Szinusz + koszinusz","b)-nél előbb szinusztétellel szerezz szöget, majd koszinusztétellel BC és CD."],
[43,"„Kalap” síkidom","Deltoid + szabályos háromszög","A kalap 8 egybevágó deltoidból áll. Egy deltoidot két fél szabályos háromszögre bontasz; területből oldal, majd kerület."]
];
const practice=[
["3.","Szöveges ábra + kétlépcsős trigonometria","Koszinusztétel + tg"],
["6.","Lejtő miatt szögfelismerés","tg + szinusztétel"],
["14.","Sok klasszikus tétel egyben","Húrnégyszög + Thalész"],
["18.","Hegyesszögűség és 3:4:5","Koszinusz + Pitagorasz"],
["26.","Komplett húrnégyszög","Koszinusz + szinusz + terület"],
["29.","Tipikus négyszögterület","Átló + két háromszög"],
["34.","Jól darabolható összetett feladat","Terület + koszinusz + Pitagorasz"],
["35.","Hasonlóság felismerése","Pitagorasz + hasonlóság"],
["39.","Területarány és hasonlóság","Arányok + koszinusz"],
["40.","Koszinusztételből egyenlet","Koszinusztétel"],
["41.","Körív és körcikk","Terület + körív"]
];
const mistakes=[
["DEG helyett RAD","A számológép fokmódban legyen trigonometrikus feladatoknál."],
["Rossz szög a koszinusztételben","γ az a és b oldal közbezárt szöge."],
["Rossz párosítás szinusztételnél","Mindig oldal ↔ szemközti szög."],
["Túl korai kerekítés","Tarts legalább 4–5 tizedest a végéig, ha a feladat érzékeny rá."],
["Negatív hossz","Másodfokú egyenlet negatív gyöke geometriai hosszként kiesik."],
["Háromszög-egyenlőtlenség kihagyása","Egyenletből kapott oldalakat ellenőrizni kell."]
];
document.querySelector("#decision").innerHTML=decision.map(x=>`<div class="card"><div class="eyebrow">${x[0]}</div><h3>${x[1]}</h3><p>${x[2]}</p></div>`).join("");
document.querySelector("#formulas").innerHTML=formulas.map(x=>`<div class="card"><h3>${x[0]}</h3><span class="formula">${x[1]}</span><p class="meta">${x[2]}</p></div>`).join("");
const tasksEl=document.querySelector("#tasks");
function renderTasks(q=""){q=q.toLowerCase();tasksEl.innerHTML=tasks.filter(t=>(t.join(" ")).toLowerCase().includes(q)).map(t=>`<details><summary>${t[0]}. ${t[1]}</summary><div class="detail"><div class="eyebrow">${t[2]}</div><p><b>Kulcs:</b> ${t[3]}</p></div></details>`).join("")}
renderTasks();document.querySelector("#search").addEventListener("input",e=>renderTasks(e.target.value.trim()));
document.querySelector("#practice").innerHTML=practice.map(x=>`<tr><td>${x[0]}</td><td>${x[1]}</td><td>${x[2]}</td></tr>`).join("");
document.querySelector("#mistakes").innerHTML=mistakes.map(x=>`<div class="card"><h3>${x[0]}</h3><p>${x[1]}</p></div>`).join("");