import { CollabSearchPage } from './collab-search/collab-search';
import { RentalSearchPage } from './rental-search/rental-search';
import { TutorSearchPage } from './tutor-search/tutor-search';

import { TabsPage } from './tabs/tabs';
import { EditSoftwarePage } from './edit-software/edit-software';


// The page the user lands on after opening the app and without a session
export const FirstRunPage = EditSoftwarePage;

// The main page the user will see as they use the app over a long period of time.
// Change this if not using tabs
export const MainPage = TabsPage;

// The initial root pages for our tabs (remove if not using tabs)
export const Tab1Root = TutorSearchPage;
export const Tab2Root = RentalSearchPage;
export const Tab3Root = CollabSearchPage;
