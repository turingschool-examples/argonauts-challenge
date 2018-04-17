var assert = require('chai').assert;
var Hero = require('./hero');
var Harpy = require('./harpy');

describe('Harpy', function () {

  it.skip('should have a name', function () {
    var harpy = new Harpy('Aello');
    assert.equal(harpy.name, 'Aello');
  });

  it.skip('should have an empty bag by default', function()  {
    var harpy = new Harpy('Ocypete');
    assert.deepEqual(harpy.bag, []);
  });

  it.skip('should be alive and hungry to start', function() {
    var harpy = new Harpy('Celæno');
    assert.equal(harpy.hungry, true);
    assert.equal(harpy.alive, true);
  });

  it.skip('should steal the first of the heroes\' food when hungry ', function() {
    var harpy = new Harpy('Aello');
    var hero = new Hero({name: 'Medea'});
    assert.equal(harpy.name, 'Aello');
    harpy.stealFood(hero);
    assert.equal(harpy.bag.length, 1);
    assert.equal(harpy.bag[0], 'turkey leg');
    assert.equal(hero.rations[0], 'sandwich');
  });

  it.skip('should only have room for three meals in its bag', function() {
    var harpy = new Harpy('Celæno');
    var hero = new Hero({name: 'Jason', trinkets: ['', 'pearl', 'emerald', 'topaz']});
    harpy.stealFood(hero);
    harpy.stealFood(hero);
    harpy.stealFood(hero);
    harpy.stealFood(hero);
    assert.equal(harpy.bag.length, 3);
  });

});
