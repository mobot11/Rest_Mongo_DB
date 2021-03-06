var chai = require('chai');
var expect = require('chai').expect;
var chaiHttp = require('chai-http');
var app = require('../server.js');

chai.use(chaiHttp);

describe('/player/:id', function () {
	it('should respond to a get request', function(done) {
		chai.request('localhost:8080')
		.get('/player/:Dwight_Howard')
		.end(function (err, res) {
			expect(err).to.be.null;
			expect(res).to.have.status(200);
			expect(res).to.be.json;
			done();
		});
	});
});

describe('/player', function() {
	it('should respond to a post request', function (done) {
		chai.request('localhost:8080')
		.post('/player')
		.send( { name: 'Dwight Howard',
			height: '6\', 5\"',
			weight: 205,
			team: 'Los Angeles Lakers',
			position: 'guard'
		})
		.end(function (err,res) {
			expect(err).to.be.null;
			expect(res).to.have.status(200);
      expect(res.body).to.eql({ msg: 'sucessfully saved' });
      done();
		});
	});
});

describe('/player/edit/:id', function() {
	it('should respond to a patch request', function(done) {
		chai.request('localhost:8080')
		.patch('/player/edit/:Kobe_Bryant')
		.send( {height: "6', 7\""})
		.end(function (err, res) {
			expect(err).to.be.null;
			expect(res).to.have.status(200);
			expect(res.body).to.eql({ msg: 'player has been edited'});
			done();
		});
	});
});

describe('/player/delete/:id', function () {
	it('should respond to a delete request', function (done) {
		chai.request('localhost:8080')
		.delete('/player/delete/:Kobe_Bryant')
		.send( {name: 'Kobe Bryant'})
		.end(function (err, res) {
			expect(err).to.be.null;
			expect(res).to.have.status(200);
			expect(res.body).to.eql({ msg: 'player has been deleted'});
			done();
		});
	});
});










