import { Component, ViewChild } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { NavController, ModalController, ViewController, IonicPage } from 'ionic-angular';
import { Camera } from '@ionic-native/camera';

@Component({
  selector: 'page-user-profile',
  templateUrl: 'user-profile.html',
  providers: [],
})
export class UserProfilePage {
  @ViewChild('fileInput') fileInput;

  isReadyToSave: boolean;

  item: any;



  form: FormGroup;

  constructor(public navCtrl: NavController, public viewCtrl: ViewController, formBuilder: FormBuilder, public camera: Camera, public modalCtrl: ModalController) {
    this.form = formBuilder.group({
      profilePic: [''],
      name: ['', Validators.required],
      about: [''],
      Location: [''],

      equipment: [''],
    });


    // Watch the form for changes, and
    this.form.valueChanges.subscribe((v) => {
      this.isReadyToSave = this.form.valid;
    });
  }




  getPicture() {
    if (Camera['installed']()) {
      this.camera.getPicture({
        destinationType: this.camera.DestinationType.DATA_URL,
        targetWidth: 96,
        targetHeight: 96
      }).then((data) => {
        this.form.patchValue({ 'profilePic': 'data:image/jpg;base64,' + data });
      }, (err) => {
        alert('Unable to take photo');
      })
    } else {
      this.fileInput.nativeElement.click();
    }
  }

  processWebImage(event) {
    let reader = new FileReader();
    reader.onload = (readerEvent) => {

      let imageData = (readerEvent.target as any).result;
      this.form.patchValue({ 'profilePic': imageData });
    };

    reader.readAsDataURL(event.target.files[0]);
  }

  getProfileImageStyle() {
    return 'url(' + this.form.controls['profilePic'].value + ')'
  }

  /**
   * The user cancelled, so we dismiss without sending data back.
   */
  cancel() {
    this.viewCtrl.dismiss();
  }

  /**
   * The user is done and wants to create the item, so return it
   * back to the presenter.
   */


  addGenre() {
    /*
    let addModal = this.modalCtrl.create('EditGenrePage');
    addModal.onDidDismiss(genre => {
      if (genre) {
        this.genres.add(genre);
      }
    })
    addModal.present();
    */
  }

  addLocation() {

  }
}
