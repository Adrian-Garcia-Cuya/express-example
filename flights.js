let flightsOffer = [];
const insertFlightsOffer = (id, img, name, price, date, tag, country) => {
  let offer = {
    id: id,
    img: img,
    name: name,
    price: price,
    date: date,
    tag: tag,
    country: country,
  };

  flightsOffer.push(offer);
};

let mainFlights = [];
const insertFlights = (id, img, name, price, date, tag, country) => {
  let flight = {
    id: id,
    img: img,
    name: name,
    price: price,
    date: date,
    tag: tag,
    country: country,
  };

  mainFlights.push(flight);
};

//Ofertas
insertFlightsOffer(
  1,
  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fa.travel-assets.com%2Ffindyours-php%2Fviewfinder%2Fimages%2Fres70%2F66000%2F66708-Plaza-Mayor.jpg%3Fimpolicy%3Dfcrop%26w%3D1040%26h%3D580%26q%3DmediumHigh&f=1&nofb=1&ipt=b161f3dd137762e3e4109d7773a46cd3dd696e367fe49cdce3f564a7a8ab9ffd&ipo=images",
  "Lima",
  "1800",
  "02-04-2022",
  "Ida y Vuelta",
  "Perú"
);

insertFlightsOffer(
  2,
  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.bestday.com%2F_lib%2Fimages%2Feditorial%2FTips-Para-Pasar-Aduana-Cancun%2FTips-Para-Pasar-Aduana-Cancun.jpg&f=1&nofb=1&ipt=726b57ce094d73f78aacd678ff1e81fbc0f17efdab678e4f7eabcf7afbe9f6f1&ipo=images",
  "Cancún",
  "1350",
  "05-04-2022",
  "Solo ida",
  "México"
);

insertFlightsOffer(
  3,
  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2F474x%2Fd7%2F9e%2Fc2%2Fd79ec200057cf9ad98f281edea11391e.jpg&f=1&nofb=1&ipt=6d4a680c6ac40c0840384b5634247fc0cf589cb35405ffcf73d49a55b2a2e7b2&ipo=images",
  "Tokio",
  "1012",
  "20-04-2022",
  "Ida y Vuelta",
  "Japón"
);

insertFlightsOffer(
  4,
  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F3.bp.blogspot.com%2F-KMKLvea_I1g%2FT4d9NwZ-nGI%2FAAAAAAAA0-Y%2F-wrXgIK8yuc%2Fs1600%2Fsydney-landscape-1920x1200-wallpaper-ciudades.jpg&f=1&nofb=1&ipt=1194d96cfc978326175a6f755328eee7b23ab44bdb42e6ae31bdfd519aa88854&ipo=images",
  "Sidney",
  "4500",
  "30-05-2022",
  "Solo ida",
  "Australia"
);

//Vuelos--------------------------------------------------------------
insertFlights(
  1,
  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia-cdn.tripadvisor.com%2Fmedia%2Fphoto-s%2F02%2F5c%2F5c%2F8a%2Fa-voir-absolument.jpg&f=1&nofb=1&ipt=db71ada458e52b06aa8225982d1c69fe8162f91878d0e89ddf57f958e35b4309&ipo=images",
  "Machu Picchu",
  "2000",
  "30-03-2022",
  "Solo ida",
  "Perú"
);

insertFlights(
  2,
  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fportal.andina.pe%2FEDPfotografia3%2FThumbnail%2F2018%2F01%2F03%2F000471616W.jpg&f=1&nofb=1&ipt=b24ab7a99500ab89489fb6ea98eedbe48e19013e501e246a7bb8cf0f426c7d88&ipo=images",
  "Cajamarca",
  "1500",
  "01-04-2022",
  "Ida y Vuelta",
  "Perú"
);

insertFlights(
  3,
  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.budgetyourtrip.com%2Fimages%2Fphotos%2Fheaderphotos%2Flarge%2Fcolombia_bogota.jpg&f=1&nofb=1&ipt=6711b62ebc6cd7748642f39b9328c2bdb69d26c83c2d84a93fd2bb93135b0409&ipo=images",
  "Bogota",
  "1000",
  "15-04-2022",
  "Solo ida",
  "Colombia"
);

insertFlights(
  4,
  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.rolcruise.co.uk%2Fmedia%2Fresponsive%2Fpanel-770%2Fupload%2F55%2Fd2%2F55d2936f7fcd0ddb1acafd9f8ce42a79a2ed070c.jpeg&f=1&nofb=1&ipt=81af8d10bbc95d4615949f13f7ca5e61bd2b3d2d1ea40ec903abaf10ada83c00&ipo=images",
  "Nueva York",
  "5000",
  "20-05-2022",
  "Ida y Vuelta",
  "Estados Unidos"
);

insertFlights(
  5,
  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fseeninthecity.co.uk%2Fwp-content%2Fuploads%2F2017%2F02%2Fmadrid-overview-sunsetovermadrid-xlarge.jpg&f=1&nofb=1&ipt=f4e8ae28f71c6524e8b40fdaf215ab1c0dd73b618830a881ac6f09fed8cb00ec&ipo=images",
  "Madrid",
  "3000",
  "10-06-2022",
  "Solo ida",
  "España"
);

insertFlights(
  6,
  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Festaticos-cdn.elperiodico.com%2Fclip%2F80ccbd4a-9d52-4b2a-b2b3-e9c254b3447c_alta-libre-aspect-ratio_default_0.jpg&f=1&nofb=1&ipt=4c2d7859d5bf2269438ac2307ea731c0c5765775f181f2781526b4dcdc2afeb6&ipo=images",
  "Buenos Aires",
  "2500",
  "25-06-2022",
  "Ida y Vuelta",
  "Argentina"
);

insertFlights(
  7,
  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvacationidea.com%2Fpix%2Fimg25Hy8R%2Ftips%2Ft-t1_getting_to_paris%2C_france_6249_mobi.jpg&f=1&nofb=1&ipt=66e850cd0e6d24db117da782c7c40f7c0f374f7c0c25b9f26175861b52dd3969&ipo=images",
  "Paris",
  "4000",
  "05-07-2022",
  "Solo ida",
  "Francia"
);

export { flightsOffer, mainFlights };
