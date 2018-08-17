import { Device } from './device';

module.exports = app => {
	const devices = {};

	app.post('/:id/init', (req, res) => {
		// let device = (devices[req.params.id] = new Device());
		let device = (devices[req.params.id] = new Device());
		device
			.init(req.params.id)
			.then(() => {
				res.json({
					message: 'success',
				});
			})
			.catch(e => {
				res.json({
					message: 'Something went wrong. Try again',
					error: e,
				});
			});
	});

	app.post('/:id/status', (req, res) => {
		let device = devices[req.params.id];
		device
			.getStatus(req.params.id)
			.then(() => {
				res.json({
					status: device.status,
					message: 'Device is online',
				});
			})
			.catch(e => {
				res.json({
					status: device.status,
					message: 'Device is offline. Did you initialize?',
					error: e,
				});
			});
	});

	app.get('/:id/status', (req, res) => {
		let device = devices[req.params.id];
		device
			.getStatus(req.params.id)
			.then(() => {
				res.sendFile(__dirname + '/status/' + req.params.id + '.png');
			})
			.catch(e => {
				res.json({
					message: 'Device currently offline. Did you initialize?',
					online: device.status,
					error: e,
				});
			});
	});
};
