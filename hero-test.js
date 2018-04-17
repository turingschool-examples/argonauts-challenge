var assert = require('chai').assert;
var Hero = require('./hero');
var Harpy = require('.harpy');

describe('hero', function () {

  it.skip('should have a name', function () {
    var hero = new Hero({name: 'Jason'});
    assert.equal(hero.name, 'Jason');
  });

  it.skip('should possess three rations of food by default', function()  {
    var hero = new Hero({name: 'Medea'});
    assert.deepEqual(hero.rations, ['turkey leg', 'sandwich', 'ambrosia']);
  });

  it.skip('should not have the golden fleece', function() {
    var hero = new Hero({name: 'Jason'});
    assert.equal(hero.fleece, false)
  });

  it.skip('should be able to slay a harpy if the opportunity arises', function() {
    var hero = new Hero({name: 'Jason'});
    var harpy = new Harpy('Ocypete');
    assert.equal(harpy.alive, true);
    hero.slay(harpy)
    assert.equal(harpy.alive, false);
  })

  it.skip('should charm a snake to capture the golden fleece', function() {
    var hero = new Hero({name: 'Medea'});
    hero.charm();
    assert.equal(hero.fleece, true)
  });
  
  it.skip('should sort rations in alphabetical order', function() {
    var hero = new Hero({name: 'Jason', rations: ['legumes', 'figs', 'vegetables', 'mutton']});
    assert.deepEqual(hero.organize(), ['figs', 'legumes', 'mutton', 'vegetables'])
  });
  
  it.skip('should clean out any rations that are not strings', function() {
    var hero = new Hero({name: 'Jason', rations: ['escargot', 3, 'funnel cake', true]});
    assert.deepEqual(hero.discardRations(), ['escargot', 'funnel cake']);
  });

  it.skip('should express a love of rations through song', function() {
    var hero = new Hero({name: 'Medea', rations: ['legumes', 'figs', 'vegetables', 'mutton']});
    assert.equal(hero.buildSong(),'I love legumes,I love figs,I love vegetables,I love mutton')
  });

});

