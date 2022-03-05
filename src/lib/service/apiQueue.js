export const ApiQueue = (ticksPerMinute = 30) => {
	const calculateDelayInMilliseconds = (ticksPerMinute) => (60 / ticksPerMinute) * 1000;
	const tasks = [];
	const DELAY_BETWEEN_MILLISECONDS = calculateDelayInMilliseconds(ticksPerMinute);
	let isRunning = false;

	const add = (task, hasPriority = false, repeat = false, ticksPerMinuteOverride) => {
		const taskToQueue = {
			task,
			hasPriority,
			repeat,
			ticksPerMinuteOverride
		};
		if (hasPriority) tasks.unshift(taskToQueue);
		else tasks.push(taskToQueue);
	};
	const run = async () => {
		let currentDelay = DELAY_BETWEEN_MILLISECONDS;
		if (isRunning) {
			if (tasks.length > 0) {
				const currentTask = tasks.shift();
				await currentTask.task();
				if (currentTask.repeat) tasks.push(currentTask);
				if (currentTask.ticksPerMinuteOverride) {
					currentDelay = calculateDelayInMilliseconds(currentTask.ticksPerMinuteOverride);
				}
			}
			setTimeout(run, currentDelay);
		}
	};
	const pause = () => {
		console.log('stopping');
		isRunning = false;
	};
	const start = () => {
		if (!isRunning) {
			console.log('starting');
			isRunning = true;
			run();
		}
	};
	return { add, pause, start };
};
