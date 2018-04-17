import { Component, ViewChild } from '@angular/core';
import { Platform, Nav, Config } from 'ionic-angular';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AddContactPage } from '../pages/add-contact/add-contact';
import { AddHourlyRatePage } from '../pages/add-hourly-rate-modal/add-hourly-rate-modal';
import { AddMixerPage } from '../pages/add-mixer-modal/add-mixer-modal';
import { AddProductionSoftwarePage } from '../pages/add-production-software-modal/add-production-software-modal';
import { BeforeYouJoinPage } from '../pages/before-you-join/before-you-join';
import { BookingRequestPage } from '../pages/booking-request/booking-request';
import { CalendarPage } from '../pages/calendar/calendar';
import { CalendarModalPage } from '../pages/calendar-modal/calendar-modal';
import { CancellationPolicyPage } from '../pages/cancellation-policy/cancellation-policy';
import { CardsPage } from '../pages/cards/cards';
import { ConfirmBookingPage } from '../pages/confirm-booking/confirm-booking';
import { ConfirmCodePage } from '../pages/confirm-code/confirm-code';
import { ConfirmPhonePage } from '../pages/confirm-phone/confirm-phone';
import { EditLocationPage } from '../pages/edit-location/edit-location';
import { EditGenrePage } from '../pages/edit-genre/edit-genre';
import { EditEquipmentPage } from '../pages/edit-equipment/edit-equipment';
import { EditSoftwarePage } from '../pages/edit-software/edit-software';
import { EditConnectionsPage } from '../pages/edit-connections/edit-connections';
import { ItemCreatePage } from '../pages/item-create/item-create';
import { ItemDetailPage } from '../pages/item-detail/item-detail';
import { RateDetailsPage } from '../pages/rate-details/rate-details';
import { IWantToPage } from '../pages/i-want-to/i-want-to';
import { ListMasterPage } from '../pages/list-master/list-master';
import { LoginPage } from '../pages/login/login';
import { MapPage } from '../pages/map/map';
import { MenuPage } from '../pages/menu/menu';
import { MyProfilePage } from '../pages/my-profile/my-profile';
import { ProfileCreatePage } from '../pages/profile-create/profile-create';
import { ProfilePromptPage } from '../pages/profile-prompt/profile-prompt';
import { SearchPage } from '../pages/search/search';
import { SearchFiltersPage } from '../pages/search-filters/search-filters';
import { SearchResultsPage } from '../pages/search-results/search-results';
import { SelectPaymentMethodPage } from '../pages/select-payment-method/select-payment-method';
import { SendMessageRequestPage } from '../pages/send-message-request/send-message-request';
import { SettingsPage } from '../pages/settings/settings';
import { SignupPage } from '../pages/signup/signup';
import { TabsPage } from '../pages/tabs/tabs';
import { TermsAndServicesPage } from '../pages/terms-and-services/terms-and-services';
import { ThanksForJoiningPage } from '../pages/thanks-for-joining/thanks-for-joining';
import { TurnOnNotificationsPage } from '../pages/turn-on-notifications/turn-on-notifications';
import { UserProfilePage } from '../pages/user-profile/user-profile';
import { WelcomePage } from '../pages/welcome/welcome';

import { CollabSearchPage } from '../pages/collab-search/collab-search';
import { RentalSearchPage } from '../pages/rental-search/rental-search';
import { TutorSearchPage } from '../pages/tutor-search/tutor-search';
import { FirstRunPage } from '../pages/pages';

import { Settings } from '../providers/providers';

import { TranslateService } from '@ngx-translate/core'

@Component({
  template: `<ion-menu [content]="content">
    <ion-header>
      <ion-toolbar>
        <ion-title>Pages</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <ion-list>
        <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">
          {{p.title}}
        </button>
      </ion-list>
    </ion-content>

  </ion-menu>
  <ion-nav #content [root]="rootPage"></ion-nav>`
})
export class MyApp {
  rootPage = FirstRunPage;

  @ViewChild(Nav) nav: Nav;

  pages: any[] = [
    { title: 'AddContact', component: AddContactPage },
    { title: 'AddHourlyrate', component: AddHourlyRatePage },
    { title: 'AddMixer', component: AddMixerPage },
    { title: 'AddProductionSoftwarePage', component: AddProductionSoftwarePage },
    { title: 'BeforeYouJoin', component: BeforeYouJoinPage },
    { title: 'BookingRequest', component: BookingRequestPage },
    { title: 'Calendar', component: CalendarPage },
    { title: 'CalendarModal', component: CalendarModalPage },
    { title: 'CancellationPolicy', component: CancellationPolicyPage },
    { title: 'Cards', component: CardsPage },
    { title: 'ConfirmBooking', component: ConfirmBookingPage },
    { title: 'ConfirmCode', component: ConfirmCodePage },
    { title: 'ConfirmPhone', component: ConfirmPhonePage },
    { title: 'EditLocation', component: EditLocationPage },

    { title: 'EditGenre', component: EditGenrePage },
    { title: 'EditEquipment', component: EditEquipmentPage },
    { title: 'RateDetails', component: RateDetailsPage },
    { title: 'EditSoftware', component: EditSoftwarePage },
    { title: 'EditConnections', component: EditConnectionsPage },
    { title: 'ItemCreate', component: ItemCreatePage },
    { title: 'ItemDetail', component: ItemDetailPage },
    { title: 'IWantTo', component: IWantToPage },
    { title: 'Master Detail', component: ListMasterPage },
    { title: 'Map', component: MapPage },
    { title: 'Menu', component: MenuPage },
    { title: 'Login', component: LoginPage },
    { title: 'MyProfile', component: MyProfilePage },
    { title: 'ProfileCreate', component: ProfileCreatePage },
    { title: 'ProfilePrompt', component: ProfilePromptPage },
    { title: 'Search', component: SearchPage },
    { title: 'SearchFilters', component: SearchFiltersPage },
    { title: 'SearchResults', component: SearchResultsPage },
    { title: 'SelectPaymentMethod', component: SelectPaymentMethodPage },
    { title: 'SendMessageRequest', component: SendMessageRequestPage },
    { title: 'Settings', component: SettingsPage },
    { title: 'Signup', component: SignupPage },
    { title: 'Search', component: SearchPage },
    { title: 'TermsAndServices', component: TermsAndServicesPage },
    { title: 'ThanksForJoining', component: ThanksForJoiningPage },
    { title: 'TurnOnNotifications', component: TurnOnNotificationsPage },
    { title: 'UserProfile', component: UserProfilePage },
    { title: 'Welcome', component: WelcomePage },
    { title: 'CollabSearch', component: CollabSearchPage },
    { title: 'RentalSearch', component: RentalSearchPage },
    { title: 'TutorSearch', component: TutorSearchPage },

  ]

  constructor(private translate: TranslateService, private platform: Platform, settings: Settings, private config: Config, private statusBar: StatusBar, private splashScreen: SplashScreen) {
    this.initTranslate();
  }

  ionViewDidLoad() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  initTranslate() {
    // Set the default language for translation strings, and the current language.
    this.translate.setDefaultLang('en');

    if (this.translate.getBrowserLang() !== undefined) {
      this.translate.use(this.translate.getBrowserLang());
    } else {
      this.translate.use('en'); // Set your language here
    }

    this.translate.get(['BACK_BUTTON_TEXT']).subscribe(values => {
      this.config.set('ios', 'backButtonText', values.BACK_BUTTON_TEXT);
    });
  }

  openPage(page) {
    // Reset the Code nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
