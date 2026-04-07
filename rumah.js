let data = [];

function inputdata() {
    let nama = document.getElementById("nama");
    let umur = document.getElementById("umur");
    let keluhan = document.getElementById("keluhan");
    let poli = document.getElementById("poli");
    let jadwal = document.getElementById("jadwal"); 
    let unik = document.getElementById("randomNumber").innerHTML = Math.floor(Math.random() * 100);
    let tanggal = new Date().toLocaleDateString();
    

    if (nama.value == "" || umur.value == "" || keluhan.value == "" || poli.value == "" || jadwal.value == "" || unik == "" || tanggal == "") {
        alert("Semua data harus diisi!");
    } else {
        data.push({
            nama: nama.value,
            umur: umur.value,
            keluhan: keluhan.value,
            poli : poli.value,
            jadwal : jadwal.value,
            unik : unik,
            tanggal : tanggal
        });
        renderdata();
    }
}

function renderdata() {
    let list = document.getElementById("data");
    list.innerHTML = "";
    data.forEach((item, index) => {
        list.innerHTML += `
            <tr>
                <td>${item.nama}</td>
                <td>${item.umur}</td>
                <td>${item.poli}</td>
                <td>${item.keluhan}</td>
                <td>${item.jadwal}</td>
                <td><button id="perubahan" onclick="hapusdata(${index})">Hapus</button><br><button id="perubahan" onclick="editdata(${index})">Edit</button></td>
                <td>${item.unik}</td>
                <td>${item.tanggal}</td>
            </tr>
        `;
    });
}

function hapusdata(index) {
    alert("Anda menghapus data ini!!"); 
    data.splice(index, 1);
    renderdata();
}   

function editdata(index) {
    let nama = prompt("Masukkan nama baru:", data[index].nama);
    let umur = prompt("Masukkan umur baru:", data[index].umur);
    let poli = prompt("Masukkan poli baru:", data[index].poli);
    let keluhan = prompt("Masukkan keluhan baru:", data[index].keluhan);
    let jadwal = prompt("Masukkan jadwal baru:", data[index].jadwal);
    let unik = data[index].unik;
    let tanggal = data[index].tanggal;

    if (nama != null && umur != null && keluhan != null && poli != null && jadwal != null && unik != null && tanggal != null) {
        data[index] = {
            nama: nama,
            umur: umur,
            poli: poli,
            keluhan: keluhan,
            jadwal: jadwal,
            unik: unik,
            tanggal: tanggal
        };
        renderdata();
    }
}