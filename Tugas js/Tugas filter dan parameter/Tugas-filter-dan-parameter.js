let arrLama= [{negara: 'Indonesia', benua: 'Asia'},
{negara: 'Jerman', benua: 'Eropa'},
{negara: 'Spanyol', benua: 'Eropa'},
{negara: 'Korea', benua: 'Asia'},
{negara: 'Portugal', benua: 'Eropa'},
{negara: 'Amerika Serikat', benua: 'Amerika'}];

  let Eropa = arrLama.filter(arrLama => {
    return arrLama.benua === "Eropa";
  });
 console.log(Eropa);
