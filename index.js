let isim = "Ali";
let sifre = 1234;
let bakiye = 100000;


$("#buton").click(function(){
    var girilenisim = document.querySelector("#isim").value;
    var girilensifre =document.querySelector("#sifre").value;

    if ( girilenisim == isim && girilensifre == sifre){
        alert("Hoşgeldin "+ isim);
        alert("Lütfen yapmak istediğiniz işlemi seçiniz : 1- Para Yatır, 2- Para Çek, 3- Kredi Kullan");
        var islem = Number(prompt("Lütfen tuşlama yapınız: "));
        if ( islem == 1){
            alert("Para yatırma işleminiz başladı...");
            var yatir = Number(prompt("Lütfen yatırmak istediğiniz tutarı giriniz: "));
            alert("Para başarıyla yatırıldı.Güncel bakiyeniz: "+(bakiye+yatir));

        }
        else if ( islem == 2){
            alert("Para çekme işleminiz başladı...");
            var cek = Number(prompt("Lütfen çekmek istediğiniz tutarı giriniz: "));
            if (cek <= bakiye){
                alert("Lütfen paranızı alınız...");
            }
            else {
                alert("Bakiyeniz yetersiz!...Tekrar giriş yapınız...");
            }

        }
        else if ( islem == 3){
            alert("Kredi çekme işleminiz başladı...");
            var kredi = Number(prompt ("12ay vadeli kullanmak istediğiniz kredi miktarını giriniz: "))
            if (kredi <= bakiye){
                alert("Aylık ödemeniz gereken tutar: " + kredi*0.18/12);
            }
            else{
                alert("Kredi miktarı bakiyeniz kadar olmalıdır!.. Lütfen yeni bir tutar giriniz...");
            }
        }
        else{
            alert("Geçerli bir değer girmelisiniz!");
        }
        }

    else{
        alert("HATALI giriş yaptınız!..");
    }
});




