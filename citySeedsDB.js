const mongoose = require("mongoose");
const db = require("./models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/surveyDB");


const citySeed = [
  { name: "aarhus" },
  { name: "adelaide" },
  { name: "albuquerque" },
  { name: "almaty" },
  { name: "amsterdam" },
  { name: "anchorage" },
  { name: "andorra" },
  { name: "ankara" },
  { name: "asheville" },
  { name: "asuncion" },
  { name: "athens" },
  { name: "atlanta" },
  { name: "auckland" },
  { name: "austin" },
  { name: "baku" },
  { name: "bali" },
  { name: "bangkok" },
  { name: "barcelona" },
  { name: "beijing" },
  { name: "beirut" },
  { name: "belfast" },
  { name: "belgrade" },
  { name: "belize-city" },
  { name: "bengaluru" },
  { name: "bergen" },
  { name: "berlin" },
  { name: "bern" },
  { name: "birmingham" },
  { name: "birmingham-al" },
  { name: "bogota" },
  { name: "boise" },
  { name: "bologna" },
  { name: "bordeaux" },
  { name: "boston" },
  { name: "boulder" },
  { name: "bozeman" },
  { name: "bratislava" },
  { name: "brighton" },
  { name: "brisbane" },
  { name: "bristol" },
  { name: "brno" },
  { name: "brussels" },
  { name: "bucharest" },
  { name: "budapest" },
  { name: "buenos-aires" },
  { name: "buffalo" },
  { name: "cairo" },
  { name: "calgary" },
  { name: "cambridge" },
  { name: "cape-town" },
  { name: "caracas" },
  { name: "cardiff" },
  { name: "casablanca" },
  { name: "charleston" },
  { name: "charlotte" },
  { name: "chattanooga" },
  { name: "chennai" },
  { name: "chiang-mai" },
  { name: "chicago" },
  { name: "chisinau" },
  { name: "christchurch" },
  { name: "cincinnati" },
  { name: "cleveland" },
  { name: "cluj-napoca" },
  { name: "cologne" },
  { name: "colorado-springs" },
  { name: "columbus" },
  { name: "copenhagen" },
  { name: "cork" },
  { name: "curitiba" },
  { name: "dallas" },
  { name: "dar-es-salaam" },
  { name: "delhi" },
  { name: "denver" },
  { name: "des-moines" },
  { name: "detroit" },
  { name: "doha" },
  { name: "dresden" },
  { name: "dubai" },
  { name: "dublin" },
  { name: "dusseldorf" },
  { name: "edinburgh" },
  { name: "edmonton" },
  { name: "eindhoven" },
  { name: "eugene" },
  { name: "florence" },
  { name: "florianopolis" },
  { name: "fort-collins" },
  { name: "frankfurt" },
  { name: "fukuoka" },
  { name: "gaillimh" },
  { name: "gdansk" },
  { name: "geneva" },
  { name: "gibraltar" },
  { name: "glasgow" },
  { name: "gothenburg" },
  { name: "grenoble" },
  { name: "guadalajara" },
  { name: "guatemala-city" },
  { name: "halifax" },
  { name: "hamburg" },
  { name: "hannover" },
  { name: "havana" },
  { name: "helsinki" },
  { name: "ho-chi-minh-city" },
  { name: "hong-kong" },
  { name: "honolulu" },
  { name: "houston" },
  { name: "hyderabad" },
  { name: "indianapolis" },
  { name: "innsbruck" },
  { name: "istanbul" },
  { name: "jacksonville" },
  { name: "jakarta" },
  { name: "johannesburg" },
  { name: "kansas-city" },
  { name: "karlsruhe" },
  { name: "kathmandu" },
  { name: "kiev" },
  { name: "kingston" },
  { name: "knoxville" },
  { name: "krakow" },
  { name: "kuala-lumpur" },
  { name: "kyoto" },
  { name: "lagos" },
  { name: "la-paz" },
  { name: "las-palmas-de-gran-canaria" },
  { name: "las-vegas" },
  { name: "lausanne" },
  { name: "leeds" },
  { name: "leipzig" },
  { name: "lille" },
  { name: "lima" },
  { name: "lisbon" },
  { name: "liverpool" },
  { name: "ljubljana" },
  { name: "london" },
  { name: "los-angeles" },
  { name: "louisville" },
  { name: "luxembourg" },
  { name: "lviv" },
  { name: "lyon" },
  { name: "madison" },
  { name: "madrid" },
  { name: "malaga" },
  { name: "malmo" },
  { name: "managua" },
  { name: "manchester" },
  { name: "manila" },
  { name: "marseille" },
  { name: "medellin" },
  { name: "melbourne" },
  { name: "memphis" },
  { name: "mexico-city" },
  { name: "miami" },
  { name: "milan" },
  { name: "milwaukee" },
  { name: "minneapolis-saint-paul" },
  { name: "minsk" },
  { name: "montevideo" },
  { name: "montreal" },
  { name: "moscow" },
  { name: "mumbai" },
  { name: "munich" },
  { name: "nairobi" },
  { name: "nantes" },
  { name: "naples" },
  { name: "nashville" },
  { name: "new-orleans" },
  { name: "new-york" },
  { name: "nice" },
  { name: "nicosia" },
  { name: "oklahoma-city" },
  { name: "omaha" },
  { name: "orlando" },
  { name: "osaka" },
  { name: "oslo" },
  { name: "ottawa" },
  { name: "oulu" },
  { name: "oxford" },
  { name: "palo-alto" },
  { name: "panama" },
  { name: "paris" },
  { name: "perth" },
  { name: "philadelphia" },
  { name: "phnom-penh" },
  { name: "phoenix" },
  { name: "phuket" },
  { name: "pittsburgh" },
  { name: "portland-me" },
  { name: "portland-or" },
  { name: "porto" },
  { name: "porto-alegre" },
  { name: "prague" },
  { name: "providence" },
  { name: "quebec" },
  { name: "quito" },
  { name: "raleigh" },
  { name: "reykjavik" },
  { name: "richmond" },
  { name: "riga" },
  { name: "rio-de-janeiro" },
  { name: "riyadh" },
  { name: "rochester" },
  { name: "rome" },
  { name: "rotterdam" },
  { name: "saint-petersburg" },
  { name: "salt-lake-city" },
  { name: "san-antonio" },
  { name: "san-diego" },
  { name: "san-francisco-bay-area" },
  { name: "san-jose" },
  { name: "san-juan" },
  { name: "san-luis-obispo" },
  { name: "san-salvador" },
  { name: "santiago" },
  { name: "santo-domingo" },
  { name: "sao-paulo" },
  { name: "sarajevo" },
  { name: "saskatoon" },
  { name: "seattle" },
  { name: "seoul" },
  { name: "seville" },
  { name: "shanghai" },
  { name: "singapore" },
  { name: "skopje" },
  { name: "sofia" },
  { name: "st-louis" },
  { name: "stockholm" },
  { name: "stuttgart" },
  { name: "sydney" },
  { name: "taipei" },
  { name: "tallinn" },
  { name: "tampa-bay-area" },
  { name: "tampere" },
  { name: "tartu" },
  { name: "tashkent" },
  { name: "tbilisi" },
  { name: "tehran" },
  { name: "tel-aviv" },
  { name: "the-hague" },
  { name: "thessaloniki" },
  { name: "tokyo" },
  { name: "toronto" },
  { name: "toulouse" },
  { name: "tunis" },
  { name: "turin" },
  { name: "turku" },
  { name: "uppsala" },
  { name: "utrecht" },
  { name: "valencia" },
  { name: "valletta" },
  { name: "vancouver" },
  { name: "victoria" },
  { name: "vienna" },
  { name: "vilnius" },
  { name: "warsaw" },
  { name: "washington-dc" },
  { name: "wellington" },
  { name: "winnipeg" },
  { name: "wroclaw" },
  { name: "yerevan" },
  { name: "zagreb" },
  { name: "zurich" }
];
db.City.remove({})
  .then(() => db.City.collection.insertMany(citySeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
//    process.exit(0);
  })
  .catch(err => {
    console.error(err);
//    process.exit(1);
  });
