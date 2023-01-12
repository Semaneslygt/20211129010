import { Sonuc } from './../../models/Sonuc';
import { Urun } from './../../models/Urun';
import { MytoastService } from './../../services/mytoast.service';
import * as bootstrap from 'bootstrap';
import { FormGroup, FormControl } from '@angular/forms';
import { FbservisService } from './../../services/fbservis.service';
import { Component, OnInit } from '@angular/core';
import { Modal } from 'bootstrap';
import { HomeComponent } from '../home/home.component';
@Component({
  selector: 'app-urun',
  templateUrl: './urun.component.html',
  styleUrls: ['./urun.component.scss']
})
export class UrunComponent implements OnInit {
  urunler!: Urun[];
  modal!: Modal;
  modalBaslik: string = "";
  secPro!: Urun;
  sonuc: Sonuc = new Sonuc();
  frm: FormGroup = new FormGroup({
    id: new FormControl(),
    urunAdi: new FormControl(),
    gorsel: new FormControl(),
    stok: new FormControl(),
    fiyat: new FormControl(),
    ozellik: new FormControl(),
    kaytarih: new FormControl(),
    duztarih: new FormControl(),
  });
urunListe: any;
  constructor(
    public fbservis: FbservisService,
    public toast: MytoastService
  ) { }

  ngOnInit() {
    this.UrunListele();
  }
  Ekle(el: HTMLElement) {
    this.frm.reset();
    this.modal = new bootstrap.Modal(el);
    this.modalBaslik = "Ürün Ekle";
    this.modal.show();
  }
  Duzenle(pro: Urun, el: HTMLElement) {
    this.frm.patchValue(pro);
    this.modalBaslik = "Ürün Düzenle";
    this.modal = new bootstrap.Modal(el);
    this.modal.show();
  }
  Sil(pro: Urun, el: HTMLElement) {
    this.secPro = pro;
    this.modalBaslik = "Ürün Sil";
    this.modal = new bootstrap.Modal(el);
    this.modal.show();
  }
  

  

  UrunListele() {
    this.fbservis.UrunListele().subscribe(d => {
      this.urunler = d;
    });
  }

  UrunEkleDuzenle() {
    var pro: Urun = this.frm.value
    this.fbservis.UrunEkle(this.frm.value).then(() => {
      var s: Sonuc = new Sonuc();
      s.islem = true;
      s.mesaj = "Ürün Eklendi";
      this.toast.ToastUygula(s);
    });
  }
  UrunSil() {
    this.fbservis.UrunSil(this.secPro.id).subscribe((_d: any) => {
      this.sonuc.islem = true;
      this.sonuc.mesaj = "Ürün Silindi";
      this.toast.ToastUygula(this.sonuc);
      this.UrunListele();
      this.modal.toggle();
    });
  }



}
