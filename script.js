var salmonCookies = {
  location: 'pioneer square',
  minCustomer: 17,
  maxCustomer: 80,
  avgCookieSale: 5.2,
  hours: [10, 11, 12, 1, 2, 3, 4, 5, 6],
  random: function(){
  document.getElementById("0").innerHTML = "Pioneer Square:" + " " + Math.floor(Math.random()*(salmonCookies.maxCustomer-salmonCookies.minCustomer+1) + salmonCookies.minCustomer);
  document.getElementById("1").innerHTML = "Pioneer Square:" + " " + Math.floor(Math.random()*(salmonCookies.maxCustomer-salmonCookies.minCustomer+1) + salmonCookies.minCustomer);
  document.getElementById("2").innerHTML = "Pioneer Square:" + " " + Math.floor(Math.random()*(salmonCookies.maxCustomer-salmonCookies.minCustomer+1) + salmonCookies.minCustomer);
  document.getElementById("3").innerHTML = "Pioneer Square:" + " " + Math.floor(Math.random()*(salmonCookies.maxCustomer-salmonCookies.minCustomer+1) + salmonCookies.minCustomer);
  document.getElementById("4").innerHTML = "Pioneer Square:" + " " + Math.floor(Math.random()*(salmonCookies.maxCustomer-salmonCookies.minCustomer+1) + salmonCookies.minCustomer);
  document.getElementById("5").innerHTML = "Pioneer Square:" + " " + Math.floor(Math.random()*(salmonCookies.maxCustomer-salmonCookies.minCustomer+1) + salmonCookies.minCustomer);
  document.getElementById("6").innerHTML = "Pioneer Square:" + " " + Math.floor(Math.random()*(salmonCookies.maxCustomer-salmonCookies.minCustomer+1) + salmonCookies.minCustomer);
  document.getElementById("7").innerHTML = "Pioneer Square:" + " " + Math.floor(Math.random()*(salmonCookies.maxCustomer-salmonCookies.minCustomer+1) + salmonCookies.minCustomer);

 }
}

var salmonCookies1 = {
  location: 'portland airport',
  minCustomer: 6,
  maxCustomer: 24,
  avgCookieSale: 1.2,
  random: function(){
    document.getElementById("sc1").innerHTML = "Portland Airport:" + " " + Math.floor(Math.random()*(salmonCookies1.maxCustomer - salmonCookies1.minCustomer + 1) + salmonCookies1.minCustomer);
  }
}

var salmonCookies2 = {
  location: 'washington square',
  minCustomer: 11,
  maxCustomer: 38,
  avgCookieSale: 1.9,
  random: function(){
    document.getElementById('sc2').innerHTML = "Washington Square:" + " " + Math.floor(Math.random()*(salmonCookies2.maxCustomer - salmonCookies2.minCustomer + 1) + salmonCookies2.minCustomer);
  }
}

var salmonCookies3 = {
  location: 'sellwood',
  minCustomer: 20,
  maxCustomer: 48,
  avgCookieSale: 3.3,
  random: function(){
    document.getElementById("sc3").innerHTML = "Sellwood:" + " " + Math.floor(Math.random() * (salmonCookies3.maxCustomer - salmonCookies3.minCustomer + 1) + salmonCookies3.minCustomer);
  }
}

var salmonCookies4 = {
  location: 'pearl district',
  minCustomer: 3,
  maxCustomer: 24,
  avgCookieSale: 2.6,
  random: function(){
    var cusPerHour = document.getElementById("sc4").innerHTML = "Pearl District:" + " " + Math.floor(Math.random() * (salmonCookies4.maxCustomer - salmonCookies4.minCustomer + 1) + salmonCookies4.minCustomer);
    var calculate = cusPerHour / salmonCookies4.avgCookieSale;
  }
}

function clicked(){
  salmonCookies.random();
  salmonCookies1.random();
  salmonCookies2.random();
  salmonCookies3.random();
  salmonCookies4.random();
}
