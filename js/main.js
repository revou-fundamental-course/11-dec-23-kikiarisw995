function replaceName() {
    let name = prompt("Please enter your name", "");
    document.getElementById("name").innerText = name
}

document.getElementById('changeName').addEventListener("click", function () {
    replaceName();
})

function validateForm() {
    var name = document.getElementById('name').value;
    var tanggal_lahir = document.getElementById('tanggal_lahir').value;
    var jenis_kelamin = document.getElementById('jenis_kelamin').value;
    var message = document.getElementById('message').value;
    var message_h = document.getElementById('message_h');


    if (name === '' || tanggal_lahir === '' || tanggal_lahir === '' || jenis_kelamin === '' || message === '') {
        alert('Please fill in all fields');
        return;
    }
    message_h.value = 'Nama :' + name + ' tgl Lahir: ' + tanggal_lahir + 'jenis_kelamin:' + jenis_kelamin + 'message:' + message;

    alert('Form submitted successfully');

}