/*!
 * jQuery FormHelp Plugin Test Suite
 * https://github.com/invetek/jquery-formhelp
 *
 * Copyright 2013 Loran Kloeze - Invetek
 * Released under the MIT license
 */
 
 (function($){
	/*
	 * 
	 * Helper functions
	 * 
	 */

	function create_input_fixture(type, classPrefix, inputId) {
		var $fixture = $('#qunit-fixture');    
		
		$fixture.append(
			$('<input/>').attr({
				'type': type,
				'id': (inputId || 'input-fixture')
			}));
			
		$fixture.append(
			$('<span/>').attr({
				'class': classPrefix ? classPrefix+'-helptext' : 'helptext',
				'data-for': '#'+(inputId || 'input-fixture') 
			}).html('Test <b>helptext</b>'));
			
		return $fixture;    
	}

	function create_select_fixture() {
		var $fixture = $('#qunit-fixture');    
		
		$fixture.append(
			$('<select/>').attr({
				'id': 'input-fixture'
			}).html('<option value="m">Male</option><option value="f">Female</option>'));
		
		$fixture.append(
			$('<span/>').attr({
				'class': 'helptext',
				'data-for': '#input-fixture'
			}).html('Test <b>helptext</b>')); 
			
		return $fixture;    
	}

	function create_textarea_fixture() {
		var $fixture = $('#qunit-fixture');    
		
		$fixture.append(
			$('<textarea/>').attr({
				'id': 'input-fixture'
			}));
		
		$fixture.append(
			$('<span/>').attr({
				'class': 'helptext',
				'data-for': '#input-fixture'
			}).html('Test <b>helptext</b>')); 
			
		return $fixture;    
	}

	function test_event_mouse(){
		expect(4); 
		equal($('.form-helpbox').length,1);
		equal($('.form-helpbox[data-for="#input-fixture"] .content').html(),'<div class="tools"><img class="pushpin" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAB9JREFUeNpi/P//PwMlgImBQjBqwKgBowYMFgMAAgwAY5oDHVti48YAAAAASUVORK5CYII="></div>Test <b>helptext</b>');
		$('#input-fixture').mouseover();
		
		equal($('.form-helpbox[data-for="#input-fixture"]').css('display'),'block');
		
		$('#input-fixture').mouseout();
		equal($('.form-helpbox[data-for="#input-fixture"]').css('display'), 'none');
	}

	function test_event_focus(){
		expect(4);     
		equal($('.form-helpbox').length,1);
		equal($('.form-helpbox[data-for="#input-fixture"] .content').html(),'<div class="tools"><img class="pushpin" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAB9JREFUeNpi/P//PwMlgImBQjBqwKgBowYMFgMAAgwAY5oDHVti48YAAAAASUVORK5CYII="></div>Test <b>helptext</b>');
		$('#input-fixture').focus();
		
		equal($('.form-helpbox[data-for="#input-fixture"]').css('display'),'block');
		
		$('#input-fixture').blur();
		equal($('.form-helpbox[data-for="#input-fixture"]').css('display'), 'none');
	}

	function test_input_onfocus(type) {
		create_input_fixture(type);           
		$.formHelp();
		test_event_focus();
	}

	function test_select_onfocus() {  
		create_select_fixture();
		$.formHelp();
		test_event_focus();
	}

	function test_textarea_onfocus() {  
		create_textarea_fixture();
		$.formHelp();
		test_event_focus();
	}


	function test_input_onmouseover(type) {       
		create_input_fixture(type);        
		$.formHelp(null, true);
		test_event_mouse();
		
	}


	/*
	 *  Initialize QUnit
	 * 
	 */
	QUnit.begin(function(){
		$.fx.off = true;
	});

	/*
	 *  Standard jQuery plugin tests
	 * 
	 */
	module("Standard jQuery plugin tests");
	test("return value", function(){
		expect(1);
	 
		ok($.formHelp() === undefined);  

	});

	/*
	 *  Test all HTML5 input elements
	 * 
	 */
	module("Test all HTML5 input elements");
	test("helpbox on input[type=button]", function(){    
		test_input_onmouseover('button');
	});

	test("helpbox on input[type=submit]", function(){    
		test_input_onmouseover('submit');
	});

	test("helpbox on input[type=reset]", function(){    
		test_input_onmouseover('reset');
	});

	test("helpbox on input[type=text]", function(){
		test_input_onfocus('text');    
	});

	test("helpbox on input[type=password]", function(){    
		test_input_onfocus('password');
	});

	test("helpbox on input[type=url]", function(){
		test_input_onfocus('url');    
	});

	test("helpbox on input[type=date]", function(){    
		test_input_onfocus('date');
	});

	test("helpbox on input[type=time]", function(){    
		test_input_onfocus('date');
	});

	test("helpbox on input[type=week]", function(){    
		test_input_onfocus('week');
	});

	test("helpbox on input[type=month]", function(){    
		test_input_onfocus('month');
	});

	test("helpbox on input[type=datetime]", function(){    
		test_input_onfocus('datetime');
	});

	test("helpbox on input[type=datetime-local]", function(){    
		test_input_onfocus('datetime-local');
	});

	test("helpbox on input[type=email]", function(){    
		test_input_onfocus('email');
	});

	test("helpbox on input[type=number]", function(){    
		test_input_onfocus('number');
	});

	test("helpbox on input[type=tel]", function(){    
		test_input_onfocus('tel');
	});

	test("helpbox on input[type=search]", function(){    
		test_input_onfocus('search');
	});

	test("helpbox on input[type=color]", function(){    
		test_input_onmouseover('color');
	});

	test("helpbox on input[type=range]", function(){    
		test_input_onmouseover('range');
	});

	test("helpbox on input[type=radio]", function(){    
		test_input_onmouseover('radio');
	});

	test("helpbox on input[type=checkbox]", function(){    
		test_input_onmouseover('checkbox');
	});

	test("helpbox on input[type=file]", function(){    
		test_input_onmouseover('file');
	});

	test("helpbox on input[type=image]", function(){    
		test_input_onmouseover('image');
	});

	test("helpbox on select", function(){    
		test_select_onfocus();
	});

	test("helpbox on textarea", function(){    
		test_textarea_onfocus();
	});

	/*
	 * 
	 * Test correct add/remove actions on elements
	 * 
	 */
	module("Test correct add/remove actions on elements");
	test("remove span.helptext element", function(){
		expect(1);
		create_input_fixture('text');           
		$.formHelp();   
		equal($('span.helptext').length, 0);
	});

	test("add div.form-helpbox element", function(){
		expect(1);
		create_input_fixture('text');           
		$.formHelp();   
		equal($('div.form-helpbox').length, 1);
	});

	test("add div.form-helpbox .content element", function(){
		expect(1);
		create_input_fixture('text');           
		$.formHelp();   
		equal($('div.form-helpbox .content').length, 1);
	});

	/*
	 * 
	 * Test options
	 * 
	 */
	module("Test correct implementation of options");
	test("add class prefix", function(){
		expect(2);
		create_input_fixture('text', 'myprefix');    
		
		equal($('span.myprefix-helptext').length, 1);
		
		$.formHelp({
			classPrefix: 'myprefix'
		});   
		
		equal($('div.myprefix-form-helpbox .content').length, 1);
	});
        
        test("enable pushpin", function(){
		expect(2);
		create_input_fixture('text');           
		$.formHelp({
                    pushpinEnabled: false
                });
                
		$('#input-fixture').focus();
		
		equal($('.form-helpbox[data-for="#input-fixture"]').css('display'),'block');
		$('.form-helpbox[data-for="#input-fixture"] .pushpin').mousedown();
		
		$('#input-fixture').blur();
		equal($('.form-helpbox[data-for="#input-fixture"]').css('display'), 'block');
	});
 
	/*
	 * 
	 * Test helpbox functionality
	 * 
	 */
	module("Test additional helpbox functionality");
	test("enabling pushpin button prevents closing helpbox for focus elements", function(){
		expect(2);
		create_input_fixture('text');           
		$.formHelp({
                    pushpinEnabled: false
                });
		$('#input-fixture').focus();
		
		equal($('.form-helpbox[data-for="#input-fixture"]').css('display'),'block');
		$('.form-helpbox[data-for="#input-fixture"] .pushpin').mousedown();
		
		$('#input-fixture').blur();
		equal($('.form-helpbox[data-for="#input-fixture"]').css('display'), 'block');
	
	});
        
        test("enabling pushpin button prevents closing helpbox for hover elements", function(){
                expect(2);
		create_input_fixture('button');           
		$.formHelp({
                    pushpinEnabled: false
                }, true);
		$('#input-fixture').mouseover();
                
		equal($('.form-helpbox[data-for="#input-fixture"]').css('display'),'block');
		$('.form-helpbox[data-for="#input-fixture"] .pushpin').mousedown();
		
		$('#input-fixture').mouseout();
		equal($('.form-helpbox[data-for="#input-fixture"]').css('display'), 'block');
        });
    
        test("disabling pushpin button closes helpbox for focus elements", function(){
		expect(2);
		create_input_fixture('text');           
		$.formHelp({
                    pushpinEnabled: false
                });
		$('#input-fixture').focus();
		
		equal($('.form-helpbox[data-for="#input-fixture"]').css('display'),'block');
		$('.form-helpbox[data-for="#input-fixture"] .pushpin').mousedown();
                $('.form-helpbox[data-for="#input-fixture"] .pushpin').mouseup();
                $('.form-helpbox[data-for="#input-fixture"] .pushpin').mousedown();
                $('.form-helpbox[data-for="#input-fixture"] .pushpin').mouseup();
                equal($('.form-helpbox[data-for="#input-fixture"]').css('display'), 'none');
	
	});    
    
        test("hovering hover elements should not render pushpinnend helpboxes invisible", function(){
                expect(1);
                create_input_fixture('text', null, 'textInput');
                create_input_fixture('button', null, 'buttonInput');
                $.formHelp({
                    pushpinEnabled: false
                });
                $('#textInput').focus();
                
                $('.form-helpbox[data-for="#textInput"] .pushpin').mousedown();
                $('.form-helpbox[data-for="#textInput"] .pushpin').mouseup();
                
                $('#buttonInput').mouseover();
                equal($('.form-helpbox[data-for="#textInput"]').css('display'),'block');
                
	});
        
        test("pushpin should be visible if enabled", function(){
                expect(1);
                create_input_fixture('text', null, 'textInput');
                $.formHelp({
                    pushpinEnabled: true
                });
                $('#textInput').focus();
                
                equal($('.form-helpbox[data-for="#textInput"] .tools').css('display'),'block');
                
	});
        
        test("pushpin should be invisible if disabled", function(){
                expect(1);
                create_input_fixture('text', null, 'textInput');
                $.formHelp();
                $('#textInput').focus();
                
                equal($('.form-helpbox[data-for="#textInput"] .tools').css('display'),'none');
                
	});
        
    
 })(jQuery);
 
 



