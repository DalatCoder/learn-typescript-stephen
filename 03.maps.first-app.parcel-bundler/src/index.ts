import { User } from './User';
import { Company } from './Company';
import { CustomMap } from './CustomMap';

const customMap = new CustomMap('map');
customMap.addNewUserMarker(new User());
customMap.addNewCompanyMarker(new Company());
