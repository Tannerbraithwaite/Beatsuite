import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, Http } from '@angular/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { Storage, IonicStorageModule } from '@ionic/storage';
import { CalendarModalPageModule } from '../pages/calendar-modal/calendar-modal.module';

import { MyApp } from './app.component';

import { Api } from '../providers/api';
import { Items } from '../mocks/providers/items';
import { Settings } from '../providers/settings';
import { UserService } from '../providers/user-service';
import { JwtService } from '../providers/jwt-service';

import { AddContactPage } from '../pages/add-contact/add-contact';
import { AddHourlyRatePage } from '../pages/add-hourly-rate-modal/add-hourly-rate-modal';
import { AddMixerPage } from '../pages/add-mixer-modal/add-mixer-modal';
import { AddProductionSoftwarePage } from '../pages/add-production-software-modal/add-production-software-modal';
import { BeforeYouJoinPage } from '../pages/before-you-join/before-you-join';
import { BookingRequestPage } from '../pages/booking-request/booking-request';
import { CalendarPage } from '../pages/calendar/calendar';
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
import { RateDetailsPage } from '../pages/rate-details/rate-details'
import { ItemCreatePage } from '../pages/item-create/item-create';
import { ItemDetailPage } from '../pages/item-detail/item-detail';

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

import { Camera } from '@ionic-native/camera';
import { GoogleMaps } from '@ionic-native/google-maps';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { NgCalendarModule  } from 'ionic2-calendar';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';


// The translate loader needs to know where to load i18n files
// in Ionic's static asset pipeline.
export function HttpLoaderFactory(http: Http) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

export function provideSettings(storage: Storage) {
  /**
   * The Settings provider takes a set of default settings for your app.
   *
   * You can add new settings options at any time. Once the settings are saved,
   * these values will not overwrite the saved values (this can be done manually if desired).
   */
  return new Settings(storage, {
    option1: true,
    option2: 'Ionitron J. Framework',
    option3: '3',
    option4: 'Hello'
  });
}

@NgModule({
  declarations: [
    MyApp,
    AddContactPage,
    AddHourlyRatePage,
    AddMixerPage,
    AddProductionSoftwarePage,
    BeforeYouJoinPage,
    BookingRequestPage,
    CalendarPage,
    CancellationPolicyPage,
    CardsPage,
    CollabSearchPage,
    ConfirmBookingPage,
    ConfirmCodePage,
    ConfirmPhonePage,
    EditLocationPage,
    EditGenrePage,
    RateDetailsPage,
    EditEquipmentPage,
    EditSoftwarePage,
    EditConnectionsPage,
    ItemCreatePage,
    ItemDetailPage,
    IWantToPage,
    ListMasterPage,
    LoginPage,
    MapPage,
    MenuPage,
    MyProfilePage,
    ProfileCreatePage,
    ProfilePromptPage,
    RentalSearchPage,
    SearchPage,
    SearchFiltersPage,
    SearchResultsPage,
    SelectPaymentMethodPage,
    SendMessageRequestPage,
    SettingsPage,
    SignupPage,
    TabsPage,
    TermsAndServicesPage,
    ThanksForJoiningPage,
    TurnOnNotificationsPage,
    TutorSearchPage,
    UserProfilePage,
    WelcomePage,
  ],
  imports: [
    NgCalendarModule,
    BrowserModule,
    HttpModule,
    CalendarModalPageModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [Http]
      }
    }),
    IonicModule.forRoot(MyApp, {tabsPlacement: 'top'}),
    IonicStorageModule.forRoot(),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AddContactPage,
    AddHourlyRatePage,
    AddMixerPage,
    AddProductionSoftwarePage,
    BeforeYouJoinPage,
    BookingRequestPage,
    CalendarPage,
    CancellationPolicyPage,
    CardsPage,
    CollabSearchPage,
    ConfirmBookingPage,
    ConfirmCodePage,
    ConfirmPhonePage,
    EditLocationPage,
    EditGenrePage,
    EditEquipmentPage,
    EditSoftwarePage,
    RateDetailsPage,
    EditConnectionsPage,
    ItemCreatePage,
    ItemDetailPage,
    IWantToPage,
    ListMasterPage,
    LoginPage,
    MapPage,
    MenuPage,
    MyProfilePage,
    ProfileCreatePage,
    ProfilePromptPage,
    RentalSearchPage,
    SearchPage,
    SearchFiltersPage,
    SearchResultsPage,
    SelectPaymentMethodPage,
    SendMessageRequestPage,
    SettingsPage,
    SignupPage,
    TabsPage,
    TermsAndServicesPage,
    ThanksForJoiningPage,
    TurnOnNotificationsPage,
    TutorSearchPage,
    UserProfilePage,
    WelcomePage,
  ],
  providers: [
    Api,
    Items,
    UserService,
    Camera,
    GoogleMaps,
    SplashScreen,
    JwtService,
    StatusBar,
    { provide: Settings, useFactory: provideSettings, deps: [Storage] },
    // Keep this to enable Ionic's runtime error handling during development
    { provide: ErrorHandler, useClass: IonicErrorHandler },
  ]
})
export class AppModule { }
