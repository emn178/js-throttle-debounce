var count;
function counter() {
  ++count;
}

function test(method, duration, callback) {
  count = 0;
  var timer = setInterval(method, 10);
  setTimeout(function() {
    clearInterval(timer);
    callback();
  }, duration);
}

var delay = 100;

describe('throttle', function() {
  describe('not ignore last', function() {
    it('should be 3', function(done) {
      var throttle = counter.throttle(delay);
      test(throttle, delay * 1.8, function() {
        expect(count).to.be(2);
        setTimeout(function() {
          expect(count).to.be(3);
          done();
        }, delay);
      });
    });
  });

  describe('ignore last', function() {
    it('should be 2', function(done) {
      var throttle = counter.throttle(delay, true);
      test(throttle, delay * 1.8, function() {
        expect(count).to.be(2);
        setTimeout(function() {
          expect(count).to.be(2);
          done();
        }, delay);
      });
    });
  });

  describe('default delay', function() {
    it('should be 3', function(done) {
      var throttle = counter.throttle();
      test(throttle, delay * 1.8, function() {
        expect(count).to.be(2);
        setTimeout(function() {
          expect(count).to.be(3);
          done();
        }, delay);
      });
    });
  });
});

describe('debounce', function() {
  describe('specify delay', function() {
    it('should be 1', function(done) {
      var debounce = counter.debounce(delay);
      test(debounce, delay * 1.8, function() {
        expect(count).to.be(0);
        setTimeout(function() {
          expect(count).to.be(1);
          done();
        }, delay);
      });
    });
  });

  describe('default delay', function() {
    it('should be 1', function(done) {
      var debounce = counter.debounce();
      test(debounce, 80, function() {
        expect(count).to.be(0);
        setTimeout(function() {
          expect(count).to.be(1);
          done();
        }, delay);
      });
    });
  });
});
