'use strict';

describe('Service: Usersprovider', function () {

  // load the service's module
  beforeEach(module('angularjsTrainingApp'));

  // instantiate service
  var Usersprovider;
  beforeEach(inject(function (_Usersprovider_) {
    Usersprovider = _Usersprovider_;
  }));

  it('should do something', function () {
    expect(!!Usersprovider).toBe(true);
  });

});
