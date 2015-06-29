'use strict';

describe('Service: Cardsprovider', function () {

  // load the service's module
  beforeEach(module('angularjsTrainingApp'));

  // instantiate service
  var Cardsprovider;
  beforeEach(inject(function (_Cardsprovider_) {
    Cardsprovider = _Cardsprovider_;
  }));

  it('should do something', function () {
    expect(!!Cardsprovider).toBe(true);
  });

});
