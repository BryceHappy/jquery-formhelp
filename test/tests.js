/*!
 * jQuery FormHelp Plugin Test Suite
 * https://github.com/invetek/jquery-formhelp
 *
 * Copyright 2013 Loran Kloeze - Invetek
 * Released under the MIT license
 */

test("is chainable", function(){
    expect(1);
    var $fixture = $('qunit-fixture');
 
    ok($fixture.formHelp() instanceof jQuery);  

});