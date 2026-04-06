let data = [];

function inputdata() {
    let nama = document.getElementById("nama");
    let umur = document.getElementById("umur");
    let keluhan = document.getElementById("keluhan");
    let poli = document.getElementById("poli");
    let jadwal = document.getElementById("jadwal"); 

    if (nama.value == "" || umur.value == "" || keluhan.value == "" || poli.value == "" || jadwal.value == "") {
        alert("Semua data harus diisi!");
    } else {
        data.push({
            nama: nama.value,
            umur: umur.value,
            keluhan: keluhan.value,
            poli : poli.value,
            jadwal : jadwal.value
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
            </tr>
        `;
    });
}

function hapusdata(index) {
    data.splice(index, 1);
    renderdata();
}   

function editdata(index) {
    let nama = prompt("Masukkan nama baru:", data[index].nama);
    let umur = prompt("Masukkan umur baru:", data[index].umur);
    let poli = prompt("Masukkan poli baru:", data[index].poli);
    let keluhan = prompt("Masukkan keluhan baru:", data[index].keluhan);
    let jadwal = prompt("Masukkan jadwal baru:", data[index].jadwal);

    if (nama != null && umur != null && keluhan != null && poli != null && jadwal != null) {
        data[index] = {
            nama: nama,
            umur: umur,
            poli: poli,
            keluhan: keluhan,
            jadwal: jadwal
        };
        renderdata();
    }
}
