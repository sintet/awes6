/*jshint esnext: true */

export default function YoService($http){
  this.$http=$http;
}

YoService.prototype.getData = function(){
  return this.$http({method: 'GET', url: './api' });

};


YoService.$inject = ['$http'];
