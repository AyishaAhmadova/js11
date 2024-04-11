function formuIsle(event) {

  event.preventDefault();
  const veriler = [
    document.getElementById("bir").value,
    document.getElementById("iki").value,
    document.getElementById("uc").value,
    document.getElementById("dord").value,
  ];
  yeniSatirEkle("dinamikcedvel", veriler);
  document.getElementById("form").reset(); 
}

function yeniSatirEkle(cedvelId, data) {
  const cedvel = document.getElementById(cedvelId);
  const yeniSatir = cedvel.insertRow(-1);
  data.forEach((deger) => {
    let hücre = yeniSatir.insertCell();
    hücre.textContent = deger;
  });

  let xana = yeniSatir.insertCell();
  let btn = document.createElement("button");
  btn.textContent = "Sil"; 
  btn.addEventListener("click", function () {
    cedvel.deleteRow(yeniSatir.rowIndex); 
  });
  xana.appendChild(btn);
}

document.getElementById("form").addEventListener("submit", formuIsle);

document.addEventListener("DOMContentLoaded", function () {
  tabloOlustur();
});

function tabloOlustur() {
  const cedvel = document.createElement("table");
  cedvel.setAttribute("id", "dinamikcedvel");
  cedvel.style.width = "100%";
  cedvel.border = "1";

  const basliklar = ["#", "Ad", "Soyad", "Yaş", "Əməliyyatlar"];
  const thead = cedvel.createTHead();
  const row = thead.insertRow();

  basliklar.forEach((baslik) => {
    const th = document.createElement("th");
    th.textContent = baslik;
    row.append(th);
  });

  document.getElementById("cedvel").appendChild(cedvel);
}
