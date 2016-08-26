/**
* Created by test.
*/
class testController {
/*@ngInject*/
  constructor($filter, $scope ,pouchDB,Restangular, $translate,$translatePartialLoader) {
     this.test = Restangular.all('test');
	 this.db = pouchDB('test'); 
  }
}
export default testController;

// I made this change
