
import {Location} from './location';
import {RateDetail} from './rate-detail';
/**
 * A generic model defining the qualities that a user should/can have
 */
export class User {
  id: number;
  userName: string;
  password: string;
  email: string;
  listOfGenres: string[] = [];
  location: Location;
  services: string[] = [];
  about: string;
  iWantTo: string[] =[];
  rateDetails: RateDetail;
  cancellationPolicy: string;
  token: string;
}
