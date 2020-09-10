/* Kod som tar fram numret för dagen på året 
    (https://stackoverflow.com/questions/13754065/javascript-switch-statement-with-months) */
var now = new Date();
var start = new Date(now.getFullYear(), 0, 0);
var diff = (now - start) + ((start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000);
var oneDay = 1000 * 60 * 60 * 24;
var dayOfYear = Math.floor(diff / oneDay);
console.log('Day of year: ' + dayOfYear);
//Koden för att ta fram dagen slutar här. 

var datumet = "har det blivit något fel eller så har";
var namnen = "ingen";
switch (dayOfYear) {
    case 1: datumet ='1 januari är Nyårsdagen,'; namnen='ingen'; break;
    case 2: datumet ='2 januari har'; namnen='Svea'; break;
    case 3: datumet ='3 januari har'; namnen='Alfred och Alfrida'; break;
    case 4: datumet ='4 januari har'; namnen='Rut'; break;
    case 5: datumet ='5 januari har'; namnen='Hanna och Hannele'; break;
    case 6: datumet ='6 januari har'; namnen='Kasper, Melker och Baltsar'; break;
    case 7: datumet ='7 januari har'; namnen='August och Augusta'; break;
    case 8: datumet ='8 januari har'; namnen='Erland'; break;
    case 9: datumet ='9 januari har'; namnen='Gunnar och Gunder'; break;
    case 10: datumet ='10 januari har'; namnen='Sigurd och Sigbritt'; break;
    case 11: datumet ='11 januari har'; namnen='Jan och Jannike'; break;
    case 12: datumet ='12 januari har'; namnen='Frideborg och Fridolf'; break;
    case 13: datumet ='13 januari har'; namnen='Knut'; break;
    case 14: datumet ='14 januari har'; namnen='Felix och Felicia'; break;
    case 15: datumet ='15 januari har'; namnen='Laura och Lorentz'; break;
    case 16: datumet ='16 januari har'; namnen='Hjalmar och Helmer'; break;
    case 17: datumet ='17 januari har'; namnen='Anton och Tony'; break;
    case 18: datumet ='18 januari har'; namnen='Hilda och Hildur'; break;
    case 19: datumet ='19 januari har'; namnen='Henrik'; break;
    case 20: datumet ='20 januari har'; namnen='Fabian och Sebastian'; break;
    case 21: datumet ='21 januari har'; namnen='Agnes och Agneta'; break;
    case 22: datumet ='22 januari har'; namnen='Vincent och Viktor'; break;
    case 23: datumet ='23 januari har'; namnen='Frej och Freja'; break;
    case 24: datumet ='24 januari har'; namnen='Erika'; break;
    case 25: datumet ='25 januari har'; namnen='Paul och Pål'; break;
    case 26: datumet ='26 januari har'; namnen='Bodil och Boel'; break;
    case 27: datumet ='27 januari har'; namnen='Göte och Göta'; break;
    case 28: datumet ='28 januari har'; namnen='Karl och Karla'; break;
    case 29: datumet ='29 januari har'; namnen='Diana'; break;
    case 30: datumet ='30 januari har'; namnen='Gunilla och Gunhild'; break;
    case 31: datumet ='31 januari har'; namnen='Ivar och Joar'; break;
    case 32: datumet ='1 februari har'; namnen='Max och Maximilian'; break;
    case 33: datumet ='2 februari är Kyndelsmässodagen,'; namnen='ingen'; break;
    case 34: datumet ='3 februari har'; namnen='Disa och Hjördis'; break;
    case 35: datumet ='4 februari har'; namnen='Ansgar och Anselm'; break;
    case 36: datumet ='5 februari har'; namnen='Agata och Agda'; break;
    case 37: datumet ='6 februari har'; namnen='Dorotea och Doris'; break;
    case 38: datumet ='7 februari har'; namnen='Rikard och Dick'; break;
    case 39: datumet ='8 februari har'; namnen='Berta och Bert'; break;
    case 40: datumet ='9 februari har'; namnen='Fanny och Franciska'; break;
    case 41: datumet ='10 februari har'; namnen='Iris'; break;
    case 42: datumet ='11 februari har'; namnen='Yngve och Inge'; break;
    case 43: datumet ='12 februari har'; namnen='Evelina och Evy'; break;
    case 44: datumet ='13 februari har'; namnen='Agne och Ove'; break;
    case 45: datumet ='14 februari är Alla hjärtans dag, och då har'; namnen='Valentin'; break;
    case 46: datumet ='15 februari har'; namnen='Sigfrid'; break;
    case 47: datumet ='16 februari har'; namnen='Julia och Julius'; break;
    case 48: datumet ='17 februari har'; namnen='Alexandra och Sandra'; break;
    case 49: datumet ='18 februari har'; namnen='Frida och Fritiof'; break;
    case 50: datumet ='19 februari har'; namnen='Gabriella och Ella'; break;
    case 51: datumet ='20 februari har'; namnen='Vivianne'; break;
    case 52: datumet ='21 februari har'; namnen='Hilding'; break;
    case 53: datumet ='22 februari har'; namnen='Pia'; break;
    case 54: datumet ='23 februari har'; namnen='Torsten och Torun'; break;
    case 55: datumet ='24 februari har'; namnen='Mattias och Mats'; break;
    case 56: datumet ='25 februari har'; namnen='Sigvard och Sivert'; break;
    case 57: datumet ='26 februari har'; namnen='Torgny och Torkel'; break;
    case 58: datumet ='27 februari har'; namnen='Lage'; break;
    case 59: datumet ='28 februari har'; namnen='Maria'; break;
    case 60: datumet ='29 februari är Skottdagen,'; namnen='ingen'; break;
    case 61: datumet ='1 mars har'; namnen='Albin och Elvira'; break;
    case 62: datumet ='2 mars har'; namnen='Ernst och Erna'; break;
    case 63: datumet ='3 mars har'; namnen='Gunborg och Gunvor'; break;
    case 64: datumet ='4 mars har'; namnen='Adrian och Adriana'; break;
    case 65: datumet ='5 mars har'; namnen='Tora och Tove'; break;
    case 66: datumet ='6 mars har'; namnen='Ebba och Ebbe'; break;
    case 67: datumet ='7 mars har'; namnen='Camilla'; break;
    case 68: datumet ='8 mars har'; namnen='Siv och Saga'; break;
    case 69: datumet ='9 mars har'; namnen='Torbjörn och Torleif'; break;
    case 70: datumet ='10 mars har'; namnen='Edla och Ada'; break;
    case 71: datumet ='11 mars har'; namnen='Edvin och Egon'; break;
    case 72: datumet ='12 mars har'; namnen='Viktoria'; break;
    case 73: datumet ='13 mars har'; namnen='Greger'; break;
    case 74: datumet ='14 mars har'; namnen='Matilda och Maud'; break;
    case 75: datumet ='15 mars har'; namnen='Kristoffer och Christel'; break;
    case 76: datumet ='16 mars har'; namnen='Herbert och Gilbert'; break;
    case 77: datumet ='17 mars har'; namnen='Gertrud'; break;
    case 78: datumet ='18 mars har'; namnen='Edvard och Edmund'; break;
    case 79: datumet ='19 mars har'; namnen='Josef och Josefina'; break;
    case 80: datumet ='20 mars har'; namnen='Joakim och Kim'; break;
    case 81: datumet ='21 mars har'; namnen='Bengt'; break;
    case 82: datumet ='22 mars har'; namnen='Kennet och Kent'; break;
    case 83: datumet ='23 mars har'; namnen='Gerda och Gerd'; break;
    case 84: datumet ='24 mars har'; namnen='Gabriel och Rafael'; break;
    case 85: datumet ='25 mars är Marie bebådelsedag,'; namnen='ingen'; break;
    case 86: datumet ='26 mars har'; namnen='Emanuel'; break;
    case 87: datumet ='27 mars har'; namnen='Rudolf och Ralf'; break;
    case 88: datumet ='28 mars har'; namnen='Malkolm och Morgan'; break;
    case 89: datumet ='29 mars har'; namnen='Jonas och Jens'; break;
    case 90: datumet ='30 mars har'; namnen='Holger och Holmfrid'; break;
    case 91: datumet ='31 mars har'; namnen='Ester'; break;
    case 92: datumet ='1 april har'; namnen='Harald och Hervor'; break;
    case 93: datumet ='2 april har'; namnen='Gudmund och Ingemund'; break;
    case 94: datumet ='3 april har'; namnen='Ferdinand och Nanna'; break;
    case 95: datumet ='4 april har'; namnen='Marianne och Marlene'; break;
    case 96: datumet ='5 april har'; namnen='Irene och Irja'; break;
    case 97: datumet ='6 april har'; namnen='Vilhelm och William'; break;
    case 98: datumet ='7 april har'; namnen='Irma och Irmelin'; break;
    case 99: datumet ='8 april har'; namnen='Nadja och Tanja'; break;
    case 100: datumet ='9 april har'; namnen='Otto och Ottilia'; break;
    case 101: datumet ='10 april har'; namnen='Ingvar och Ingvor'; break;
    case 102: datumet ='11 april har'; namnen='Ulf och Ylva'; break;
    case 103: datumet ='12 april har'; namnen='Liv'; break;
    case 104: datumet ='13 april har'; namnen='Artur och Douglas'; break;
    case 105: datumet ='14 april har'; namnen='Tiburtius'; break;
    case 106: datumet ='15 april har'; namnen='Olivia och Oliver'; break;
    case 107: datumet ='16 april har'; namnen='Patrik och Patricia'; break;
    case 108: datumet ='17 april har'; namnen='Elias och Elis'; break;
    case 109: datumet ='18 april har'; namnen='Valdemar och Volmar'; break;
    case 110: datumet ='19 april har'; namnen='Olaus och Ola'; break;
    case 111: datumet ='20 april har'; namnen='Amalia och Amelie'; break;
    case 112: datumet ='21 april har'; namnen='Anneli och Annika'; break;
    case 113: datumet ='22 april har'; namnen='Allan och Glenn'; break;
    case 114: datumet ='23 april har'; namnen='Georg och Göran'; break;
    case 115: datumet ='24 april har'; namnen='Vega'; break;
    case 116: datumet ='25 april har'; namnen='Markus'; break;
    case 117: datumet ='26 april har'; namnen='Teresia och Terese'; break;
    case 118: datumet ='27 april har'; namnen='Engelbrekt'; break;
    case 119: datumet ='28 april har'; namnen='Ture och Tyra'; break;
    case 120: datumet ='29 april har'; namnen='Tyko'; break;
    case 121: datumet ='30 april är Valborgsmässoafton, och då har'; namnen='Mariana'; break;
    case 122: datumet ='1 maj har'; namnen='Valborg'; break;
    case 123: datumet ='2 maj har'; namnen='Filip och Filippa'; break;
    case 124: datumet ='3 maj har'; namnen='John och Jane'; break;
    case 125: datumet ='4 maj har'; namnen='Monika och Mona'; break;
    case 126: datumet ='5 maj har'; namnen='Gotthard och Erhard'; break;
    case 127: datumet ='6 maj har'; namnen='Marit och Rita'; break;
    case 128: datumet ='7 maj har'; namnen='Carina och Carita'; break;
    case 129: datumet ='8 maj har'; namnen='Åke'; break;
    case 130: datumet ='9 maj har'; namnen='Reidar och Reidun'; break;
    case 131: datumet ='10 maj har'; namnen='Esbjörn och Styrbjörn'; break;
    case 132: datumet ='11 maj har'; namnen='Märta och Märit'; break;
    case 133: datumet ='12 maj har'; namnen='Charlotta och Lotta'; break;
    case 134: datumet ='13 maj har'; namnen='Linnea och Linn'; break;
    case 135: datumet ='14 maj har'; namnen='Halvard och Halvar'; break;
    case 136: datumet ='15 maj har'; namnen='Sofia och Sonja'; break;
    case 137: datumet ='16 maj har'; namnen='Ronald och Ronny'; break;
    case 138: datumet ='17 maj har'; namnen='Rebecka och Ruben'; break;
    case 139: datumet ='18 maj har'; namnen='Erik'; break;
    case 140: datumet ='19 maj har'; namnen='Maj och Majken'; break;
    case 141: datumet ='20 maj har'; namnen='Karolina och Carola'; break;
    case 142: datumet ='21 maj har'; namnen='Konstantin och Conny'; break;
    case 143: datumet ='22 maj har'; namnen='Hemming och Henning'; break;
    case 144: datumet ='23 maj har'; namnen='Desideria och Desirée'; break;
    case 145: datumet ='24 maj har'; namnen='Ivan och Vanja'; break;
    case 146: datumet ='25 maj har'; namnen='Urban'; break;
    case 147: datumet ='26 maj har'; namnen='Vilhelmina och Vilma'; break;
    case 148: datumet ='27 maj har'; namnen='Beda och Blenda'; break;
    case 149: datumet ='28 maj har'; namnen='Ingeborg och Borghild'; break;
    case 150: datumet ='29 maj har'; namnen='Yvonne och Jeanette'; break;
    case 151: datumet ='30 maj har'; namnen='Vera och Veronika'; break;
    case 152: datumet ='31 maj har'; namnen='Petronella och Pernilla'; break;
    case 153: datumet ='1 juni har'; namnen='Gun och Gunnel'; break;
    case 154: datumet ='2 juni har'; namnen='Rutger och Roger'; break;
    case 155: datumet ='3 juni har'; namnen='Ingemar och Gudmar'; break;
    case 156: datumet ='4 juni har'; namnen='Solbritt och Solveig'; break;
    case 157: datumet ='5 juni har'; namnen='Bo'; break;
    case 158: datumet ='6 juni har'; namnen='Gustav och Gösta'; break;
    case 159: datumet ='7 juni har'; namnen='Robert och Robin'; break;
    case 160: datumet ='8 juni har'; namnen='Eivor och Majvor'; break;
    case 161: datumet ='9 juni har'; namnen='Börje och Birger'; break;
    case 162: datumet ='10 juni har'; namnen='Svante och Boris'; break;
    case 163: datumet ='11 juni har'; namnen='Bertil och Berthold'; break;
    case 164: datumet ='12 juni har'; namnen='Eskil'; break;
    case 165: datumet ='13 juni har'; namnen='Aina och Aino'; break;
    case 166: datumet ='14 juni har'; namnen='Håkan och Hakon'; break;
    case 167: datumet ='15 juni har'; namnen='Margit och Margot'; break;
    case 168: datumet ='16 juni har'; namnen='Axel och Axelina'; break;
    case 169: datumet ='17 juni har'; namnen='Torborg och Torvald'; break;
    case 170: datumet ='18 juni har'; namnen='Björn och Bjarne'; break;
    case 171: datumet ='19 juni har'; namnen='Germund och Görel'; break;
    case 172: datumet ='20 juni har'; namnen='Linda'; break;
    case 173: datumet ='21 juni har'; namnen='Alf och Alvar'; break;
    case 174: datumet ='22 juni har'; namnen='Paulina och Paula'; break;
    case 175: datumet ='23 juni har'; namnen='Adolf och Alice'; break;
    case 176: datumet ='24 juni är Johannes Döparens dag,'; namnen='ingen'; break;
    case 177: datumet ='25 juni har'; namnen='David och Salomon'; break;
    case 178: datumet ='26 juni har'; namnen='Rakel och Lea'; break;
    case 179: datumet ='27 juni har'; namnen='Selma och Fingal'; break;
    case 180: datumet ='28 juni har'; namnen='Leo'; break;
    case 181: datumet ='29 juni har'; namnen='Peter och Petra'; break;
    case 182: datumet ='30 juni har'; namnen='Elof och Leif'; break;
    case 183: datumet ='1 juli har'; namnen='Aron och Mirjam'; break;
    case 184: datumet ='2 juli har'; namnen='Rosa och Rosita'; break;
    case 185: datumet ='3 juli har'; namnen='Aurora'; break;
    case 186: datumet ='4 juli har'; namnen='Ulrika och Ulla'; break;
    case 187: datumet ='5 juli har'; namnen='Laila och Ritva'; break;
    case 188: datumet ='6 juli har'; namnen='Esaias och Jessika'; break;
    case 189: datumet ='7 juli har'; namnen='Klas'; break;
    case 190: datumet ='8 juli har'; namnen='Kjell'; break;
    case 191: datumet ='9 juli har'; namnen='Jörgen och Örjan'; break;
    case 192: datumet ='10 juli har'; namnen='André och Andrea'; break;
    case 193: datumet ='11 juli har'; namnen='Eleonora och Ellinor'; break;
    case 194: datumet ='12 juli har'; namnen='Herman och Hermine'; break;
    case 195: datumet ='13 juli har'; namnen='Joel och Judit'; break;
    case 196: datumet ='14 juli har'; namnen='Folke'; break;
    case 197: datumet ='15 juli har'; namnen='Ragnhild och Ragnvald'; break;
    case 198: datumet ='16 juli har'; namnen='Reinhold och Reine'; break;
    case 199: datumet ='17 juli har'; namnen='Bruno'; break;
    case 200: datumet ='18 juli har'; namnen='Fredrik och Fritz'; break;
    case 201: datumet ='19 juli har'; namnen='Sara'; break;
    case 202: datumet ='20 juli har'; namnen='Margareta och Greta'; break;
    case 203: datumet ='21 juli har'; namnen='Johanna'; break;
    case 204: datumet ='22 juli har'; namnen='Magdalena och Madeleine'; break;
    case 205: datumet ='23 juli har'; namnen='Emma och Emmy'; break;
    case 206: datumet ='24 juli har'; namnen='Kristina och Kerstin'; break;
    case 207: datumet ='25 juli har'; namnen='Jakob'; break;
    case 208: datumet ='26 juli har'; namnen='Jesper och Jasmine'; break;
    case 209: datumet ='27 juli har'; namnen='Marta'; break;
    case 210: datumet ='28 juli har'; namnen='Botvid och Seved'; break;
    case 211: datumet ='29 juli har'; namnen='Olof'; break;
    case 212: datumet ='30 juli har'; namnen='Algot'; break;
    case 213: datumet ='31 juli har'; namnen='Helena och Elin'; break;
    case 214: datumet ='1 augusti har'; namnen='Per'; break;
    case 215: datumet ='2 augusti har'; namnen='Karin och Kajsa'; break;
    case 216: datumet ='3 augusti har'; namnen='Tage'; break;
    case 217: datumet ='4 augusti har'; namnen='Arne och Arnold'; break;
    case 218: datumet ='5 augusti har'; namnen='Ulrik och Alrik'; break;
    case 219: datumet ='6 augusti har'; namnen='Alfons och Inez'; break;
    case 220: datumet ='7 augusti har'; namnen='Dennis och Denise'; break;
    case 221: datumet ='8 augusti har'; namnen='Silvia och Sylvia'; break;
    case 222: datumet ='9 augusti har'; namnen='Roland'; break;
    case 223: datumet ='10 augusti har'; namnen='Lars'; break;
    case 224: datumet ='11 augusti har'; namnen='Susanna'; break;
    case 225: datumet ='12 augusti har'; namnen='Klara'; break;
    case 226: datumet ='13 augusti har'; namnen='Kaj'; break;
    case 227: datumet ='14 augusti har'; namnen='Uno'; break;
    case 228: datumet ='15 augusti har'; namnen='Stella och Estelle'; break;
    case 229: datumet ='16 augusti har'; namnen='Brynolf'; break;
    case 230: datumet ='17 augusti har'; namnen='Verner och Valter'; break;
    case 231: datumet ='18 augusti har'; namnen='Ellen och Lena'; break;
    case 232: datumet ='19 augusti har'; namnen='Magnus och Måns'; break;
    case 233: datumet ='20 augusti har'; namnen='Bernhard och Bernt'; break;
    case 234: datumet ='21 augusti har'; namnen='Jon och Jonna'; break;
    case 235: datumet ='22 augusti har'; namnen='Henrietta och Henrika'; break;
    case 236: datumet ='23 augusti har'; namnen='Signe och Signhild'; break;
    case 237: datumet ='24 augusti har'; namnen='Bartolomeus'; break;
    case 238: datumet ='25 augusti har'; namnen='Lovisa och Louise'; break;
    case 239: datumet ='26 augusti har'; namnen='Östen'; break;
    case 240: datumet ='27 augusti har'; namnen='Rolf och Raoul'; break;
    case 241: datumet ='28 augusti har'; namnen='Fatima och Leila'; break;
    case 242: datumet ='29 augusti har'; namnen='Hans och Hampus'; break;
    case 243: datumet ='30 augusti har'; namnen='Albert och Albertina'; break;
    case 244: datumet ='31 augusti har'; namnen='Arvid och Vidar'; break;
    case 245: datumet ='1 september har'; namnen='Samuel och Sam'; break;
    case 246: datumet ='2 september har'; namnen='Justus och Justina'; break;
    case 247: datumet ='3 september har'; namnen='Alfhild och Alva'; break;
    case 248: datumet ='4 september har'; namnen='Gisela'; break;
    case 249: datumet ='5 september har'; namnen='Adela och Heidi'; break;
    case 250: datumet ='6 september har'; namnen='Lilian och Lilly'; break;
    case 251: datumet ='7 september har'; namnen='Kevin och Roy'; break;
    case 252: datumet ='8 september har'; namnen='Alma och Hulda'; break;
    case 253: datumet ='9 september har'; namnen='Anita och Annette'; break;
    case 254: datumet ='10 september har'; namnen='Tord och Turid'; break;
    case 255: datumet ='11 september har'; namnen='Dagny och Helny'; break;
    case 256: datumet ='12 september har'; namnen='Åsa och Åslög'; break;
    case 257: datumet ='13 september har'; namnen='Sture'; break;
    case 258: datumet ='14 september har'; namnen='Ida och Ronja'; break;
    case 259: datumet ='15 september har'; namnen='Sigrid och Siri'; break;
    case 260: datumet ='16 september har'; namnen='Dag och Daga'; break;
    case 261: datumet ='17 september har'; namnen='Hildegard och Magnhild'; break;
    case 262: datumet ='18 september har'; namnen='Orvar'; break;
    case 263: datumet ='19 september har'; namnen='Fredrika'; break;
    case 264: datumet ='20 september har'; namnen='Elise och Lisa'; break;
    case 265: datumet ='21 september har'; namnen='Matteus'; break;
    case 266: datumet ='22 september har'; namnen='Maurits och Moritz'; break;
    case 267: datumet ='23 september har'; namnen='Tekla och Tea'; break;
    case 268: datumet ='24 september har'; namnen='Gerhard och Gert'; break;
    case 269: datumet ='25 september har'; namnen='Tryggve'; break;
    case 270: datumet ='26 september har'; namnen='Enar och Einar'; break;
    case 271: datumet ='27 september har'; namnen='Dagmar och Rigmor'; break;
    case 272: datumet ='28 september har'; namnen='Lennart och Leonard'; break;
    case 273: datumet ='29 september har'; namnen='Mikael och Mikaela'; break;
    case 274: datumet ='30 september har'; namnen='Helge'; break;
    case 275: datumet ='1 oktober har'; namnen='Ragnar och Ragna'; break;
    case 276: datumet ='2 oktober har'; namnen='Ludvig och Love'; break;
    case 277: datumet ='3 oktober har'; namnen='Evald och Osvald'; break;
    case 278: datumet ='4 oktober har'; namnen='Frans och Frank'; break;
    case 279: datumet ='5 oktober har'; namnen='Bror'; break;
    case 280: datumet ='6 oktober har'; namnen='Jenny och Jennifer'; break;
    case 281: datumet ='7 oktober har'; namnen='Birgitta och Britta'; break;
    case 282: datumet ='8 oktober har'; namnen='Nils'; break;
    case 283: datumet ='9 oktober har'; namnen='Ingrid och Inger'; break;
    case 284: datumet ='10 oktober har'; namnen='Harry och Harriet'; break;
    case 285: datumet ='11 oktober har'; namnen='Erling och Jarl'; break;
    case 286: datumet ='12 oktober har'; namnen='Valfrid och Manfred'; break;
    case 287: datumet ='13 oktober har'; namnen='Berit och Birgit'; break;
    case 288: datumet ='14 oktober har'; namnen='Stellan'; break;
    case 289: datumet ='15 oktober har'; namnen='Hedvig och Hillevi'; break;
    case 290: datumet ='16 oktober har'; namnen='Finn'; break;
    case 291: datumet ='17 oktober har'; namnen='Antonia och Toini'; break;
    case 292: datumet ='18 oktober har'; namnen='Lukas'; break;
    case 293: datumet ='19 oktober har'; namnen='Tore och Tor'; break;
    case 294: datumet ='20 oktober har'; namnen='Sibylla'; break;
    case 295: datumet ='21 oktober har'; namnen='Ursula och Yrsa'; break;
    case 296: datumet ='22 oktober har'; namnen='Marika och Marita'; break;
    case 297: datumet ='23 oktober har'; namnen='Severin och Sören'; break;
    case 298: datumet ='24 oktober har'; namnen='Evert och Eilert'; break;
    case 299: datumet ='25 oktober har'; namnen='Inga och Ingalill'; break;
    case 300: datumet ='26 oktober har'; namnen='Amanda och Rasmus'; break;
    case 301: datumet ='27 oktober har'; namnen='Sabina'; break;
    case 302: datumet ='28 oktober har'; namnen='Simon och Simone'; break;
    case 303: datumet ='29 oktober har'; namnen='Viola'; break;
    case 304: datumet ='30 oktober har'; namnen='Elsa och Isabella'; break;
    case 305: datumet ='31 oktober har'; namnen='Edit och Edgar'; break;
    case 306: datumet ='1 november är Allhelgonadagen,'; namnen='ingen'; break;
    case 307: datumet ='2 november har'; namnen='Tobias'; break;
    case 308: datumet ='3 november har'; namnen='Hubert och Hugo'; break;
    case 309: datumet ='4 november har'; namnen='Sverker'; break;
    case 310: datumet ='5 november har'; namnen='Eugen och Eugenia'; break;
    case 311: datumet ='6 november har'; namnen='Gustav Adolf'; break;
    case 312: datumet ='7 november har'; namnen='Ingegerd och Ingela'; break;
    case 313: datumet ='8 november har'; namnen='Vendela'; break;
    case 314: datumet ='9 november har'; namnen='Teodor och Teodora'; break;
    case 315: datumet ='10 november har'; namnen='Martin och Martina'; break;
    case 316: datumet ='11 november har'; namnen='Mårten'; break;
    case 317: datumet ='12 november har'; namnen='Konrad och Kurt'; break;
    case 318: datumet ='13 november har'; namnen='Kristian och Krister'; break;
    case 319: datumet ='14 november har'; namnen='Emil och Emilia'; break;
    case 320: datumet ='15 november har'; namnen='Leopold'; break;
    case 321: datumet ='16 november har'; namnen='Vibeke och Viveka'; break;
    case 322: datumet ='17 november har'; namnen='Naemi och Naima'; break;
    case 323: datumet ='18 november har'; namnen='Lillemor och Moa'; break;
    case 324: datumet ='19 november har'; namnen='Elisabet och Lisbet'; break;
    case 325: datumet ='20 november har'; namnen='Pontus och Marina'; break;
    case 326: datumet ='21 november har'; namnen='Helga och Olga'; break;
    case 327: datumet ='22 november har'; namnen='Cecilia och Sissela'; break;
    case 328: datumet ='23 november har'; namnen='Klemens'; break;
    case 329: datumet ='24 november har'; namnen='Gudrun och Rune'; break;
    case 330: datumet ='25 november har'; namnen='Katarina och Katja'; break;
    case 331: datumet ='26 november har'; namnen='Linus'; break;
    case 332: datumet ='27 november har'; namnen='Astrid och Asta'; break;
    case 333: datumet ='28 november har'; namnen='Malte'; break;
    case 334: datumet ='29 november har'; namnen='Sune'; break;
    case 335: datumet ='30 november har'; namnen='Andreas och Anders'; break;
    case 336: datumet ='1 december har'; namnen='Oskar och Ossian'; break;
    case 337: datumet ='2 december har'; namnen='Beata och Beatrice'; break;
    case 338: datumet ='3 december har'; namnen='Lydia'; break;
    case 339: datumet ='4 december har'; namnen='Barbara och Barbro'; break;
    case 340: datumet ='5 december har'; namnen='Sven'; break;
    case 341: datumet ='6 december har'; namnen='Nikolaus och Niklas'; break;
    case 342: datumet ='7 december har'; namnen='Angela och Angelika'; break;
    case 343: datumet ='8 december har'; namnen='Virginia'; break;
    case 344: datumet ='9 december har'; namnen='Anna'; break;
    case 345: datumet ='10 december har'; namnen='Malin och Malena'; break;
    case 346: datumet ='11 december har'; namnen='Daniel och Daniela'; break;
    case 347: datumet ='12 december har'; namnen='Alexander och Alexis'; break;
    case 348: datumet ='13 december har'; namnen='Lucia'; break;
    case 349: datumet ='14 december har'; namnen='Sten och Sixten'; break;
    case 350: datumet ='15 december har'; namnen='Gottfrid'; break;
    case 351: datumet ='16 december har'; namnen='Assar'; break;
    case 352: datumet ='17 december har'; namnen='Stig'; break;
    case 353: datumet ='18 december har'; namnen='Abraham'; break;
    case 354: datumet ='19 december har'; namnen='Isak'; break;
    case 355: datumet ='20 december har'; namnen='Israel och Moses'; break;
    case 356: datumet ='21 december har'; namnen='Tomas'; break;
    case 357: datumet ='22 december har'; namnen='Natanael och Jonatan'; break;
    case 358: datumet ='23 december har'; namnen='Adam'; break;
    case 359: datumet ='24 december är Julafton 🎅, och då har'; namnen='Eva'; break;
    case 360: datumet ='25 december är Juldagen,'; namnen='ingen'; break;
    case 361: datumet ='26 december är Annandag jul, och då har'; namnen='Stefan och Staffan'; break;
    case 362: datumet ='27 december har'; namnen='Johannes och Johan'; break;
    case 363: datumet ='28 december har'; namnen='Benjamin'; break;
    case 364: datumet ='29 december har'; namnen='Natalia och Natalie'; break;
    case 365: datumet ='30 december har'; namnen='Abel och Set'; break;
    case 366: datumet ='31 december är Nyårsafton 🎇, och då har'; namnen='Sylvester'; break;
}
// Namnsdagarna är hämtat: 2020-09-09, Källa: https://sv.wikipedia.org/wiki/Lista_%C3%B6ver_namnsdagar_i_Sverige_i_datumordning


// Skriver ut det case som blev ovan som dagens namnsdag i index-filens DOM. 
document.getElementById("dagensDatum").innerHTML = datumet;
document.getElementById("dagensNamnsdagar").innerHTML = namnen;

//Kollar om elementet med ID "dagPåÅret finns, skriver annars ut i konsollen att det inte finns. "
try{
    document.getElementById("dagPaAret").innerHTML = dayOfYear;
} catch(error) {
    console.log("IDt för dag på året finns inte. ")
    console.log(error.name + ' ' + error.message);
}