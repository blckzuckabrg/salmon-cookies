var salmonCookies = {
  location: 'pioneer square',
  minCustomer: 17,
  maxCustomer: 80,
  avgCookieSale: 5.2,
  random: function(){
  document.getElementById("ps").innerHTML = Math.floor(Math.random()*(salmonCookies.maxCustomer-salmonCookies.minCustomer+1) + salmonCookies.minCustomer);
 }
}

var salmonCookies1 = {
  location: 'portland airport',
  minCustomer: 6,
  maxCustomer: 24,
  avgCookieSale: 1.2,
  random: function(){
    document.getElementById("pa").innerHTML=Math.floor(Math.random()*(salmonCookies1.maxCustomer - salmonCookies1.minCustomer + 1) + salmonCookies1.minCustomer);
  }
}

function clicked(){
  salmonCookies.random();
  salmonCookies1.random();
}
